import type { SiteConfig } from "@/lib/content-types";

export const siteConfig = {
  studioName: "Kuba's Web Dev Hub",
  founderName: "Kuba Rawecki",
  regionLabel: "Delaware",
  contactEmail: "jrawecki31@gmail.com",
  contactPhone: "(302) 559-8440",
  contactPhoneHref: "tel:+13025598440",
  brandMode: "hybrid",
  studioStatus: "placeholder",
  contactMode: "email-only",
  siteTitle: "Kuba's Web Dev Hub | Websites, landing pages, and web apps",
  siteDescription:
    "Kuba's Web Dev Hub builds custom websites, landing pages, web apps, and workflow tools for businesses in Delaware.",
  brandSummary:
    "Kuba's Web Dev Hub designs and builds websites, landing pages, web apps, and workflow tools for businesses in Delaware.",
  primaryCta: {
    label: "Start your project",
    href: "mailto:jrawecki31@gmail.com",
  },
  primaryNavigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "My Projects", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  footerNavigation: [
    { label: "Home", href: "/" },
    { label: "Services", href: "/services" },
    { label: "Process", href: "/process" },
    { label: "My Projects", href: "/work" },
    { label: "Pricing", href: "/pricing" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
} satisfies SiteConfig;
