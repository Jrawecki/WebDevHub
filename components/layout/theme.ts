export const THEME_STORAGE_KEY = "kuba-rawecki-theme";
export const THEME_ATTRIBUTE = "data-theme";
export const SYSTEM_THEME_QUERY = "(prefers-color-scheme: dark)";

export type Theme = "light" | "dark";

export const themeInitScript = `
(() => {
  if (window.__kubaThemeReady) {
    return;
  }

  window.__kubaThemeReady = true;

  const storageKey = "${THEME_STORAGE_KEY}";
  const attribute = "${THEME_ATTRIBUTE}";
  const root = document.documentElement;
  const readyAttribute = "data-theme-ready";
  const labels = {
    light: {
      action: "Switch to dark mode",
    },
    dark: {
      action: "Switch to light mode",
    },
  };

  const systemThemeQuery =
    typeof window.matchMedia === "function"
      ? window.matchMedia("${SYSTEM_THEME_QUERY}")
      : null;

  function readStoredTheme() {
    try {
      const storedTheme = window.localStorage.getItem(storageKey);
      return storedTheme === "light" || storedTheme === "dark" ? storedTheme : null;
    } catch {
      return null;
    }
  }

  function getSystemTheme() {
    return systemThemeQuery && systemThemeQuery.matches ? "dark" : "light";
  }

  function getTheme() {
    const currentTheme = root.getAttribute(attribute);
    return currentTheme === "light" || currentTheme === "dark"
      ? currentTheme
      : readStoredTheme() ?? getSystemTheme();
  }

  function syncToggle(theme) {
    const label = labels[theme];
    document.querySelectorAll("[data-theme-toggle]").forEach((toggle) => {
      toggle.setAttribute("aria-pressed", String(theme === "dark"));
      toggle.setAttribute("aria-label", label.action);
      toggle.setAttribute("title", label.action);
    });
  }

  function applyTheme(theme) {
    root.setAttribute(attribute, theme);
    root.style.colorScheme = theme;
    syncToggle(theme);
  }

  function syncVisibleTheme() {
    syncToggle(getTheme());
    root.setAttribute(readyAttribute, "true");
  }

  function resolveTheme() {
    const savedTheme = readStoredTheme();
    return savedTheme === "light" || savedTheme === "dark"
      ? savedTheme
      : getSystemTheme();
  }

  function handleToggleClick(event) {
    const toggle = event.target instanceof Element
      ? event.target.closest("[data-theme-toggle]")
      : null;

    if (!toggle) {
      return;
    }

    const nextTheme = getTheme() === "dark"
      ? "light"
      : "dark";

    try {
      window.localStorage.setItem(storageKey, nextTheme);
    } catch {
      // Ignore storage failures and still update the current document.
    }

    applyTheme(nextTheme);
  }

  const theme = resolveTheme();
  applyTheme(theme);

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", syncVisibleTheme, {
      once: true,
    });
  } else {
    syncVisibleTheme();
  }

  document.addEventListener("click", handleToggleClick);

  if (systemThemeQuery) {
    systemThemeQuery.addEventListener("change", (event) => {
      if (readStoredTheme() !== null) {
        return;
      }

      applyTheme(event.matches
        ? "dark"
        : "light");
    });
  }
})();
`;
