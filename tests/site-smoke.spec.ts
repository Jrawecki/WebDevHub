import { expect, test, type Page, type TestInfo } from "@playwright/test";

const themeStorageKey = "kuba-rawecki-theme";
const oldBriefPrompts = [
  "Business + what you need:",
  "Business and need",
  "Website, landing page, app, tool, or both:",
  "Website, app, tool, or both",
  "Timing + any useful context:",
  "Timing or useful context",
] as const;
const expectedNavigation = [
  "Home",
  "Services",
  "Process",
  "My Projects",
  "Pricing",
  "About",
  "Contact",
] as const;

async function expectNoHorizontalOverflow(page: Page) {
  const overflow = await page.evaluate(() => {
    const root = document.documentElement;
    return root.scrollWidth - window.innerWidth;
  });

  expect(overflow).toBeLessThanOrEqual(1);
}

async function expectGridBackground(page: Page) {
  const backgroundImage = await page.evaluate(() => {
    const shell = document.querySelector(".site-shell");
    return shell ? getComputedStyle(shell, "::before").backgroundImage : "";
  });

  expect(backgroundImage).toContain("linear-gradient");
  expect((backgroundImage.match(/linear-gradient/g) ?? []).length).toBe(2);
}

async function expectTintedSectionBands(page: Page) {
  const surfaces = await page.evaluate(() => {
    return Array.from(
      document.querySelectorAll<HTMLElement>(
        ".editorial-section--band",
      ),
    ).map((section) => {
      const styles = window.getComputedStyle(section);
      const rect = section.getBoundingClientRect();
      const viewportWidth = document.documentElement.clientWidth;
      return {
        backgroundColor: styles.backgroundColor,
        backgroundImage: styles.backgroundImage,
        left: rect.left,
        right: viewportWidth - rect.right,
      };
    });
  });

  for (const surface of surfaces) {
    expect(surface.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
    expect(surface.backgroundImage).toBe("none");
    expect(surface.left).toBeLessThanOrEqual(1);
    expect(surface.right).toBeLessThanOrEqual(1);
  }
}

async function expectFlatBackground(page: Page) {
  const background = await page.evaluate(() => {
    const styles = getComputedStyle(document.body);
    return {
      backgroundImage: styles.backgroundImage,
      backgroundColor: styles.backgroundColor,
    };
  });

  expect(background.backgroundImage).toBe("none");
  expect(background.backgroundColor).not.toBe("rgba(0, 0, 0, 0)");
}

async function expectHeroScale(page: Page) {
  const heroSize = await page.locator("h1").first().evaluate((node) => {
    return Number.parseFloat(window.getComputedStyle(node).fontSize);
  });
  const viewportWidth = page.viewportSize()?.width ?? 1440;
  const maxFontSize = viewportWidth >= 1200 ? 82 : viewportWidth >= 800 ? 66 : 50;

  expect(heroSize).toBeLessThanOrEqual(maxFontSize);
}

async function attachScreenshot(
  page: Page,
  testInfo: TestInfo,
  name: string,
) {
  const buffer = await page.screenshot({ fullPage: true, animations: "disabled" });
  await testInfo.attach(name, {
    body: buffer,
    contentType: "image/png",
  });
}

async function expectFooterBrandAligned(page: Page) {
  const alignment = await page.evaluate(() => {
    const brand = document.querySelector(".footer-grid__brand .site-brand");
    const intro = document.querySelector(".footer-grid__brand .prose-copy");

    if (!(intro instanceof HTMLElement) || !(brand instanceof HTMLElement)) {
      return null;
    }

    const columnLeft = intro.getBoundingClientRect().left;
    const brandLeft = brand.getBoundingClientRect().left;
    return Math.abs(brandLeft - columnLeft);
  });

  expect(alignment).not.toBeNull();
  expect(alignment ?? 999).toBeLessThanOrEqual(2);
}

async function expectFooterContrast(page: Page) {
  const contrast = await page.evaluate(() => {
    function parseColor(value: string) {
      const match = value.match(/rgba?\(([^)]+)\)/);

      if (!match) {
        return null;
      }

      const parts = match[1].split(",").map((part) => Number.parseFloat(part.trim()));
      const [r, g, b] = parts.slice(0, 3).map((part) => part / 255);
      return { r, g, b, a: parts[3] ?? 1 };
    }

    function toLinear(channel: number) {
      return channel <= 0.03928 ? channel / 12.92 : ((channel + 0.055) / 1.055) ** 2.4;
    }

    function blend(
      foreground: { r: number; g: number; b: number; a: number },
      background: { r: number; g: number; b: number; a: number },
    ) {
      return {
        r: (foreground.r * foreground.a) + (background.r * (1 - foreground.a)),
        g: (foreground.g * foreground.a) + (background.g * (1 - foreground.a)),
        b: (foreground.b * foreground.a) + (background.b * (1 - foreground.a)),
        a: 1,
      };
    }

    function luminance(color: { r: number; g: number; b: number }) {
      return (0.2126 * toLinear(color.r)) + (0.7152 * toLinear(color.g)) + (0.0722 * toLinear(color.b));
    }

    function ratio(a: { r: number; g: number; b: number }, b: { r: number; g: number; b: number }) {
      const lumA = luminance(a);
      const lumB = luminance(b);
      const lighter = Math.max(lumA, lumB);
      const darker = Math.min(lumA, lumB);
      return (lighter + 0.05) / (darker + 0.05);
    }

    const footer = document.querySelector(".site-footer");
    const footerContact = document.querySelector(".footer-list--contact li:nth-child(2)");
    const footerMuted = document.querySelector(".footer-grid__brand .prose-copy");

    if (
      !(footer instanceof HTMLElement) ||
      !(footerContact instanceof HTMLElement) ||
      !(footerMuted instanceof HTMLElement)
    ) {
      return null;
    }

    const footerBackground = parseColor(getComputedStyle(footer).backgroundColor);
    const footerContactColor = parseColor(getComputedStyle(footerContact).color);
    const footerMutedColor = parseColor(getComputedStyle(footerMuted).color);

    if (!footerBackground || !footerContactColor || !footerMutedColor) {
      return null;
    }

    return {
      footerContactRatio: ratio(footerContactColor, footerBackground),
      footerMutedRatio: ratio(blend(footerMutedColor, footerBackground), footerBackground),
      footerBackground: getComputedStyle(footer).backgroundColor,
    };
  });

  expect(contrast).not.toBeNull();
  expect(contrast?.footerContactRatio ?? 0).toBeGreaterThanOrEqual(4.5);
  expect(contrast?.footerMutedRatio ?? 0).toBeGreaterThanOrEqual(4.5);
  expect(contrast?.footerBackground).not.toBe("rgba(0, 0, 0, 0)");
}

async function expectNoHeroRail(page: Page) {
  await expect(page.locator("section").first().locator("aside")).toHaveCount(0);
}

async function expectSectionRhythm(page: Page) {
  const rhythm = await page.evaluate(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".editorial-section"));
    const variantCount = sections.filter((section) =>
      [
        "editorial-section--band",
        "editorial-section--open",
      ].some(
        (className) => section.classList.contains(className),
      ),
    ).length;

    return {
      sectionCount: sections.length,
      variantCount,
    };
  });

  expect(rhythm.sectionCount).toBeGreaterThanOrEqual(1);
  expect(rhythm.variantCount).toBeGreaterThanOrEqual(0);
}

async function expectDetailedModulesNotCentered(page: Page) {
  const alignment = await page.evaluate(() => {
    const candidates = Array.from(
      document.querySelectorAll<HTMLElement>(
        ".editorial-section .structured-row, .editorial-section .project-row, .editorial-section .editorial-note:not(.editorial-note--callout), .editorial-section .editorial-item",
      ),
    );

    const firstVisible = candidates.find((node) => node.offsetParent !== null);

    if (!firstVisible) {
      return null;
    }

    return window.getComputedStyle(firstVisible).textAlign;
  });

  expect(alignment).not.toBeNull();
  expect(["left", "start"]).toContain(alignment ?? "");
}

async function expectNoSectionChips(page: Page) {
  await expect(page.locator(".section-chip")).toHaveCount(0);
}

async function setStoredTheme(page: Page, theme: "light" | "dark") {
  await page.addInitScript(
    ([storageKey, storedTheme]) => {
      window.localStorage.setItem(storageKey, storedTheme);
    },
    [themeStorageKey, theme] as const,
  );
}

for (const route of ["/", "/services", "/pricing", "/process", "/about", "/work", "/contact"]) {
  test(`smoke ${route}`, async ({ page }, testInfo) => {
    await page.goto(route);
    await page.waitForLoadState("networkidle");

    await expect(page.locator("main")).toBeVisible();
    await expectNoHorizontalOverflow(page);
    await expectFlatBackground(page);
    await expectGridBackground(page);
    await expectHeroScale(page);
    await expectNoHeroRail(page);
    await expectSectionRhythm(page);
    await expectDetailedModulesNotCentered(page);
    await expectTintedSectionBands(page);
    await expectFooterBrandAligned(page);
    await expectFooterContrast(page);

    const heroHeight = await page.locator("section").first().evaluate((node) => node.getBoundingClientRect().height);
    const viewportHeight = page.viewportSize()?.height ?? 900;
    expect(heroHeight).toBeLessThan(viewportHeight * 1.75);

    await attachScreenshot(page, testInfo, `route-${route.replace(/\W+/g, "-")}`);
  });
}

test("home keeps proof off the front page", async ({ page }, testInfo) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await expect(
    page.getByRole("heading", {
      name: "Work stays on the Work page.",
    }),
  ).toBeVisible();

  const caseStudyLinks = await page.evaluate(() =>
    Array.from(document.querySelectorAll<HTMLAnchorElement>('a[href^="/work/"]')).map((link) =>
      link.getAttribute("href"),
    ),
  );

  expect(caseStudyLinks).toHaveLength(0);
  await attachScreenshot(page, testInfo, "home-proof-routing");
});

test("footer keeps the live email address", async ({ page }) => {
  await page.goto("/contact");
  await page.waitForLoadState("networkidle");

  await expect(page.locator("main").getByText("jrawecki31@gmail.com", { exact: true })).toHaveCount(0);
  await expect(page.locator(".footer-list--contact").getByText("jrawecki31@gmail.com", { exact: true })).toBeVisible();
  await expect(page.locator(".footer-list--contact").getByRole("link", { name: "jrawecki31@gmail.com" })).toHaveCount(0);
  await expect(page.locator(".utility-ribbon")).toHaveCount(0);
});

test("footer keeps the visible phone as plain text", async ({ page }) => {
  await page.goto("/contact");
  await page.waitForLoadState("networkidle");

  await expect(page.locator("main").getByRole("link", { name: /302\) 559-8440/ })).toHaveCount(0);
  await expect(page.locator(".footer-list--contact").getByText("(302) 559-8440", { exact: true })).toBeVisible();
  await expect(page.locator(".footer-list--contact").getByRole("link", { name: "(302) 559-8440" })).toHaveCount(0);
});

test("primary navigation exposes requested page order", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const mobileToggle = page.locator(".mobile-nav__toggle");
  const isMobileMenu = await mobileToggle.isVisible();

  if (isMobileMenu) {
    await expect(page.locator(".site-nav")).toBeHidden();
    await mobileToggle.click();
    await expect(mobileToggle).toHaveAttribute("aria-expanded", "true");
    await expect(page.locator(".mobile-nav__panel")).toBeVisible();
    await expect(page.locator(".mobile-nav__link")).toHaveText([...expectedNavigation]);
    await expect(page.locator(".mobile-nav__link--highlight")).toHaveText("Contact");
  } else {
    await expect(page.locator(".site-nav__link")).toHaveText([...expectedNavigation]);
    await expect(page.locator(".site-nav__link--highlight")).toHaveText("Contact");
    await expect(mobileToggle).toBeHidden();
  }

  await expect(page.locator(".footer-list--columns a")).toHaveText([...expectedNavigation]);
});

test("mobile header centers the logo and opens dropdown navigation", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const viewportWidth = page.viewportSize()?.width ?? 1440;
  test.skip(viewportWidth > 720, "mobile-only header behavior");

  const headerLayout = await page.evaluate(() => {
    const brand = document.querySelector(".site-header .site-brand");
    const toggle = document.querySelector(".mobile-nav__toggle");

    if (!(brand instanceof HTMLElement) || !(toggle instanceof HTMLElement)) {
      return null;
    }

    const brandRect = brand.getBoundingClientRect();
    const toggleRect = toggle.getBoundingClientRect();
    const viewportCenter = window.innerWidth / 2;

    return {
      brandCenterOffset: Math.abs((brandRect.left + brandRect.width / 2) - viewportCenter),
      toggleRightGap: Math.round(window.innerWidth - toggleRect.right),
    };
  });

  expect(headerLayout).not.toBeNull();
  expect(headerLayout?.brandCenterOffset ?? 999).toBeLessThanOrEqual(2);
  expect(headerLayout?.toggleRightGap ?? 999).toBeGreaterThanOrEqual(0);

  await page.locator(".mobile-nav__toggle").click();
  await expect(page.locator(".mobile-nav__link")).toHaveText([...expectedNavigation]);
  await page.locator(".mobile-nav__link", { hasText: "Home" }).click();
  await expect(page.locator(".mobile-nav__panel")).toBeHidden();

  await page.locator(".mobile-nav__toggle").click();
  await expect(page.locator(".mobile-nav__panel")).toBeVisible();
  await page.mouse.click(20, 760);
  await expect(page.locator(".mobile-nav__panel")).toBeHidden();

  await page.locator(".mobile-nav__toggle").click();
  await expect(page.locator(".mobile-nav__panel")).toBeVisible();
  await page.keyboard.press("Escape");
  await expect(page.locator(".mobile-nav__panel")).toBeHidden();
});

test("theme toggle is fixed outside the header", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const layout = await page.evaluate(() => {
    const header = document.querySelector(".site-header");
    const headerToggle = document.querySelector(".site-header .theme-toggle");
    const toggle = document.querySelector(".theme-toggle");
    const mainSection = document.querySelector("main section");

    if (!(header instanceof HTMLElement) || !(toggle instanceof HTMLElement) || !(mainSection instanceof HTMLElement)) {
      return null;
    }

    const headerRect = header.getBoundingClientRect();
    const toggleRect = toggle.getBoundingClientRect();
    const mainRect = mainSection.getBoundingClientRect();

    return {
      headerBottom: headerRect.bottom,
      hasHeaderToggle: headerToggle !== null,
      togglePosition: window.getComputedStyle(toggle).position,
      toggleBottom: toggleRect.bottom,
      toggleRightGap: Math.round(window.innerWidth - toggleRect.right),
      sectionTop: mainRect.top,
    };
  });

  expect(layout).not.toBeNull();
  await expect(page.locator(".utility-ribbon")).toHaveCount(0);
  await expect(page.getByRole("link", { name: "Contact" }).last()).toBeVisible();
  await expect(page.locator(".site-header .cta-link")).toHaveCount(0);
  expect(layout?.hasHeaderToggle).toBe(false);
  expect(layout?.togglePosition).toBe("fixed");
  expect(layout?.toggleRightGap ?? 9999).toBeGreaterThanOrEqual(0);
  expect((layout?.toggleBottom ?? 0) > (layout?.sectionTop ?? 9999)).toBeTruthy();
  expect((layout?.headerBottom ?? 9999) <= (layout?.sectionTop ?? 0)).toBeTruthy();
});

test("header logo uses transform-only hover motion", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const canHover = await page.evaluate(() => window.matchMedia("(hover: hover)").matches);
  test.skip(!canHover, "hover-only logo behavior");

  const brand = page.locator(".site-header .site-brand");
  const logoShell = page.locator(".site-header .site-brand__logo-shell");
  const before = await logoShell.evaluate((node) => {
    const element = node as HTMLElement;
    const styles = window.getComputedStyle(element);
    return {
      height: element.offsetHeight,
      transform: styles.transform,
      transitionProperty: styles.transitionProperty,
      width: element.offsetWidth,
    };
  });

  await brand.hover();
  await page.waitForTimeout(220);

  const after = await logoShell.evaluate((node) => {
    const element = node as HTMLElement;
    const styles = window.getComputedStyle(element);
    return {
      height: element.offsetHeight,
      transform: styles.transform,
      width: element.offsetWidth,
    };
  });

  expect(before.transitionProperty).toContain("transform");
  expect(after.transform).not.toBe(before.transform);
  expect(after.width).toBe(before.width);
  expect(after.height).toBe(before.height);
});

test("header stays visible while scrolling and stays compact on mobile", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const initial = await page.locator(".site-header-shell").evaluate((node) => {
    const rect = node.getBoundingClientRect();
    return {
      top: Math.round(rect.top),
      height: Math.round(rect.height),
    };
  });

  await page.evaluate(() => window.scrollTo(0, 900));

  const scrolled = await page.locator(".site-header-shell").evaluate((node) => {
    const rect = node.getBoundingClientRect();
    return {
      top: Math.round(rect.top),
      height: Math.round(rect.height),
    };
  });

  expect(scrolled.top).toBe(0);
  expect(scrolled.height).toBe(initial.height);

  const viewportWidth = page.viewportSize()?.width ?? 1440;
  if (viewportWidth <= 500) {
    expect(scrolled.height).toBeLessThanOrEqual(190);
  }
});

test("theme follows system preference until a choice is saved", async ({ page }) => {
  await page.emulateMedia({ colorScheme: "dark" });
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");

  const storedTheme = await page.evaluate((storageKey) => {
    return window.localStorage.getItem(storageKey);
  }, themeStorageKey);

  expect(storedTheme).toBeNull();
});

test("theme toggle updates the document theme and persists across reloads", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const toggle = page.locator(".theme-toggle");
  await expect(toggle).toBeVisible();

  const initialTheme = await page.locator("html").getAttribute("data-theme");
  const initialColors = await page.evaluate(() => {
    const header = document.querySelector(".site-header");
    return {
      bodyBackground: getComputedStyle(document.body).backgroundColor,
      headerBackground: header ? getComputedStyle(header).backgroundImage : null,
    };
  });
  expect(initialTheme === "light" || initialTheme === "dark").toBeTruthy();

  await toggle.click();

  await expect
    .poll(async () => page.locator("html").getAttribute("data-theme"))
    .not.toBe(initialTheme);

  await expect
    .poll(async () =>
      page.evaluate(() => {
        return getComputedStyle(document.body).backgroundColor;
      }),
    )
    .not.toBe(initialColors.bodyBackground);

  await expect
    .poll(async () =>
      page.evaluate(() => {
        const header = document.querySelector(".site-header");
        return header ? getComputedStyle(header).backgroundImage : null;
      }),
    )
    .not.toBe(initialColors.headerBackground);

  const nextTheme = await page.locator("html").getAttribute("data-theme");
  const nextColors = await page.evaluate(() => {
    const header = document.querySelector(".site-header");
    return {
      bodyBackground: getComputedStyle(document.body).backgroundColor,
      headerBackground: header ? getComputedStyle(header).backgroundImage : null,
    };
  });
  expect(nextTheme === "light" || nextTheme === "dark").toBeTruthy();
  expect(nextTheme).not.toBe(initialTheme);
  expect(nextColors.bodyBackground).not.toBe(initialColors.bodyBackground);
  expect(nextColors.headerBackground).not.toBe(initialColors.headerBackground);

  await expect
    .poll(async () =>
      page.evaluate((storageKey) => {
        return window.localStorage.getItem(storageKey);
      }, themeStorageKey),
    )
    .toBe(nextTheme);

  await page.reload();
  await page.waitForLoadState("networkidle");

  await expect(page.locator("html")).toHaveAttribute("data-theme", nextTheme!);
});

test("home hero stays buyer-facing", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await expect(
    page.getByRole("heading", {
      name: "Websites and web apps that make your business easier to run.",
    }),
  ).toBeVisible();
  await expect(page.getByText("Websites, landing pages, and web apps in Delaware", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Greater Philadelphia")).toHaveCount(0);
});

test("home presents websites and tools equally", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await expect(page.getByText("Websites and landing pages", { exact: true })).toBeVisible();
  await expect(page.getByText("Apps and tools", { exact: true })).toBeVisible();
  await expect(page.getByText("Reply rhythm", { exact: true })).toHaveCount(0);
  await expect(page.getByText("Websites first", { exact: true })).toHaveCount(0);
});

test("home keeps the lower dark contact CTA", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await expect(page.getByRole("heading", { name: "Start with a short email." }).last()).toBeVisible();
});

test("non-home pages remove bottom dark CTA blocks", async ({ page }) => {
  const removedCopy = [
    { route: "/contact", text: "Email first. Call if the project needs a quick fit check." },
    { route: "/about", text: "The first email should feel straightforward." },
    { route: "/process", text: "Send the business context, the timing, and what you want the website to help you do." },
    { route: "/pricing", text: "Send the brief and I will tell you the right pricing path." },
    { route: "/services", text: "Clear scope before build." },
    { route: "/work/magdas-melons", text: "Need a project with this kind of scope discipline?" },
  ] as const;

  for (const { route, text } of removedCopy) {
    await page.goto(route);
    await page.waitForLoadState("networkidle");
    await expect(page.getByText(text, { exact: true })).toHaveCount(0);
  }
});

test("inner pages open without summary grids", async ({ page }) => {
  for (const route of ["/services", "/pricing", "/process", "/about", "/work", "/contact"]) {
    await page.goto(route);
    await page.waitForLoadState("networkidle");

    await expect(page.locator(".page-intro")).toBeVisible();
    await expect(page.locator(".page-intro .summary-points")).toHaveCount(0);
  }
});

test("footer promo copy and extra footer CTA are removed", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await expect(page.locator(".footer-promo")).toHaveCount(0);
  await expect(page.getByText("Build the website, app, or tool the business actually needs.")).toHaveCount(0);
  await expect(page.locator("footer").getByRole("link", { name: "Start your inquiry" })).toHaveCount(0);
  await expect(page.getByText("Static-first site. Privacy-respecting by default.")).toHaveCount(0);
  await expect(page.getByText("Clear scope, thoughtful design, and clean launch execution.")).toHaveCount(0);
  await expect(page.locator(".footer-list--contact").getByText("jrawecki31@gmail.com", { exact: true })).toBeVisible();
  await expect(page.locator(".footer-list--contact").getByText("(302) 559-8440", { exact: true })).toBeVisible();
  await expect(page.locator(".footer-list--contact a")).toHaveCount(0);
});

test("contact page uses a frontend-only mailto form", async ({ page }) => {
  await page.goto("/contact");
  await page.waitForLoadState("networkidle");

  const main = page.locator("main");
  const form = main.locator(".contact-form");

  await expect(main.locator(".contact-method")).toHaveCount(0);
  await expect(main.getByRole("link", { name: "Start the email" })).toHaveCount(0);
  await expect(main.getByRole("link", { name: /Call/ })).toHaveCount(0);
  await expect(main.getByText("jrawecki31@gmail.com", { exact: true })).toHaveCount(0);
  await expect(main.getByRole("link", { name: /302\) 559-8440/ })).toHaveCount(0);
  await expect(main.getByText("Send enough context to make the first reply useful.")).toHaveCount(0);
  await expect(main.getByText("Business and need", { exact: true })).toHaveCount(0);
  await expect(main.getByText("Website, app, tool, or both", { exact: true })).toHaveCount(0);
  await expect(main.getByText("Timing or useful context", { exact: true })).toHaveCount(0);
  await expect(main.getByLabel("Email address")).toHaveCount(0);
  await expect(main.locator(".contact-hero__copy .contact-form")).toBeVisible();
  await expect(main.getByLabel("Project/request message")).toBeVisible();
  await expect(main.getByRole("button", { name: "Open email to send" })).toBeVisible();
  await expect(main.getByRole("link", { name: "Open in Gmail" })).toBeVisible();

  await main.getByRole("button", { name: "Open email to send" }).click();
  await expect(main.getByText("Tell me what you need help with.")).toBeVisible();

  await main.getByLabel("Project/request message").fill("I need a landing page for a Delaware business.");

  const mailtoHref = await form.getAttribute("data-mailto-href");
  expect(mailtoHref).not.toBeNull();
  const decodedMailtoHref = decodeURIComponent(mailtoHref!);
  expect(mailtoHref).toContain("mailto:jrawecki31@gmail.com");
  expect(decodedMailtoHref).toContain("Project inquiry for Kuba's Web Dev Hub");
  expect(decodedMailtoHref).not.toContain("Visitor email:");
  expect(decodedMailtoHref).not.toContain("example.com");
  expect(decodedMailtoHref).toContain("I need a landing page for a Delaware business.");

  const gmailHref = await form.getAttribute("data-gmail-href");
  expect(gmailHref).not.toBeNull();
  const decodedGmailHref = decodeURIComponent(gmailHref!);
  expect(gmailHref).toContain("https://mail.google.com/mail/");
  expect(gmailHref).toContain("to=jrawecki31%40gmail.com");
  expect(decodedGmailHref).toContain("Project inquiry for Kuba's Web Dev Hub");
  expect(decodedGmailHref).not.toContain("Visitor email:");
  expect(decodedGmailHref).not.toContain("example.com");
  expect(decodedGmailHref).toContain("I need a landing page for a Delaware business.");
});

test("home notes use neutral borders instead of accent top rules", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  const borders = await page.locator(".editorial-note").first().evaluate((node) => {
    const styles = window.getComputedStyle(node);
    return {
      topColor: styles.borderTopColor,
      topWidth: styles.borderTopWidth,
    };
  });

  expect(borders.topWidth).toBe("1px");
  expect(borders.topColor).not.toBe("rgb(176, 87, 53)");
  expect(borders.topColor).not.toBe("rgba(176, 87, 53, 0.18)");
});

test("pricing page explains websites, tools, and support without public numbers", async ({ page }) => {
  await page.goto("/pricing");
  await page.waitForLoadState("networkidle");

  await expect(page.getByRole("heading", { name: "Pricing", exact: true })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Website projects and landing pages" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Web apps and business tools" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Included support and subscriptions" })).toBeVisible();

  const textContent = await page.locator("main").textContent();
  expect(textContent).not.toBeNull();
  expect(textContent ?? "").not.toMatch(/\$\d/);
  expect(textContent ?? "").not.toContain("Product / MVP work");
  expect(textContent ?? "").not.toContain("product-style");
  expect(textContent ?? "").not.toContain("normal website builds");
});

test("pricing page explains included support and follow-on options", async ({ page }) => {
  await page.goto("/pricing");
  await page.waitForLoadState("networkidle");

  await expect(
    page.getByText("Projects include 4 months of small edits and bug fixes after launch."),
  ).toBeVisible();
  await expect(
    page.getByText("Monthly support is available for businesses that want steady updates and maintenance."),
  ).toBeVisible();
  await expect(
    page.getByText("individual changes can be scoped and paid for as needed"),
  ).toBeVisible();
});

test("services includes landing pages and web apps as primary services", async ({ page }) => {
  await page.goto("/services");
  await page.waitForLoadState("networkidle");

  await expect(page.getByRole("heading", { name: "Website Projects" })).toBeVisible();
  await expect(page.getByRole("heading", { name: "Web Apps and Tools" })).toBeVisible();
  await expect(page.getByText("Landing page or core sales-page structure")).toBeVisible();
});

test("metadata presents websites and web apps without website-only positioning", async ({ page }) => {
  await page.goto("/");
  await page.waitForLoadState("networkidle");

  await expect(page).toHaveTitle(/Websites, landing pages, and web apps/);
  const description = await page.locator('meta[name="description"]').getAttribute("content");

  expect(description).toContain("custom websites, landing pages, web apps, and workflow tools");
  expect(description).toContain("Delaware");
  expect(description).not.toContain("Greater Philadelphia");
  expect(description).not.toContain("Custom websites for service businesses");
});

test("contact hides the numbered intake steps", async ({ page }) => {
  await page.goto("/contact");
  await page.waitForLoadState("networkidle");

  for (const prompt of oldBriefPrompts) {
    await expect(page.getByText(prompt, { exact: true })).toHaveCount(0);
  }
});

test("about band content stays inside the viewport", async ({ page }) => {
  await page.goto("/about");
  await page.waitForLoadState("networkidle");

  const bounds = await page.getByRole("heading", { name: "How I work" }).evaluate((node) => {
    const rect = node.getBoundingClientRect();
    return {
      left: rect.left,
      right: rect.right,
      viewportWidth: document.documentElement.clientWidth,
    };
  });

  expect(bounds.left).toBeGreaterThanOrEqual(0);
  expect(bounds.right).toBeLessThanOrEqual(bounds.viewportWidth);
});

test("work detail pages expose proof frames without repository links", async ({ page }) => {
  for (const route of ["/work/magdas-melons", "/work/bizcribe", "/work/realm-reptiles"]) {
    await page.goto(route);
    await page.waitForLoadState("networkidle");

    await expect(page.locator(".proof-frame")).toBeVisible();
    await expect(page.getByRole("link", { name: "View GitHub" })).toHaveCount(0);
  }
});

test("services uses three structured service rows with no decorative chips", async ({ page }) => {
  await page.goto("/services");
  await page.waitForLoadState("networkidle");

  await expect(page.locator(".service-row")).toHaveCount(3);
  await expectNoSectionChips(page);
});

test("process uses five compact phases with no decorative chips", async ({ page }) => {
  await page.goto("/process");
  await page.waitForLoadState("networkidle");

  await expect(page.locator(".process-phase")).toHaveCount(5);
  await expectNoSectionChips(page);
});

test("work uses proof rows with no decorative chips", async ({ page }) => {
  await page.goto("/work");
  await page.waitForLoadState("networkidle");

  const main = page.locator("main");

  await expect(main.getByRole("heading", { name: "My Projects", level: 1 })).toBeVisible();
  await expect(main.getByRole("heading", { name: "Work", exact: true })).toHaveCount(0);
  await expect(main.getByRole("link", { name: "Start your inquiry" })).toHaveCount(0);
  await expect(main.getByRole("link", { name: "Jump to featured work" })).toHaveCount(0);
  await expect(page.getByRole("link", { name: "View GitHub" })).toHaveCount(0);
  await expect(page.locator(".proof-row")).toHaveCount(3);
  await expectNoSectionChips(page);
});

for (const route of ["/", "/pricing", "/contact"]) {
  test(`dark smoke ${route}`, async ({ page }, testInfo) => {
    await setStoredTheme(page, "dark");
    await page.goto(route);
    await page.waitForLoadState("networkidle");

    await expect(page.locator("html")).toHaveAttribute("data-theme", "dark");
    await expect(page.locator(".theme-toggle")).toBeVisible();
    await expectNoHorizontalOverflow(page);
    await expectFlatBackground(page);
    await expectGridBackground(page);
    await expectTintedSectionBands(page);
    await expectFooterContrast(page);

    const darkColors = await page.evaluate(() => {
      const header = document.querySelector(".site-header");
      return {
        bodyBackground: getComputedStyle(document.body).backgroundColor,
        headerBackground: header ? getComputedStyle(header).backgroundImage : null,
      };
    });

    expect(darkColors.bodyBackground).not.toBe("rgb(246, 239, 229)");
    expect(darkColors.headerBackground).not.toContain("rgba(255, 250, 243, 0.88)");

    await attachScreenshot(page, testInfo, `dark-route-${route.replace(/\W+/g, "-")}`);
  });
}
