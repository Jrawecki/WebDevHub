import { contactContent } from "@/content/contact";
import type { PricingContent } from "@/lib/content-types";

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Straightforward prices. Clear scope.",
  intro:
    "Choose a fixed website package, add focused interactive tools, or begin a full-stack app with paid discovery and a defined first release.",
  primaryOffers: [
    {
      title: "Simple Website / Landing Page",
      price: "$199",
      summary: "A focused one-page site for a business, service, offer, or campaign.",
      includes: [
        "Multiple sections",
        "Customizable layout and content",
        "Mobile layout, contact path, and domain setup",
      ],
    },
    {
      title: "Expanded Website",
      price: "$599",
      summary:
        "A multi-page business site with more room for services, credibility, and contact.",
      includes: [
        "Up to four standard pages",
        "Custom design across every page",
        "Contact form, metadata, and launch setup",
      ],
    },
    {
      title: "Website + Custom Tool",
      price: "From $1,500",
      summary: "A business website with one focused public-facing tool.",
      includes: [
        "One focused feature",
        "Category filters, calculators, selectors, or intake",
        "No accounts or shared business database",
      ],
    },
    {
      title: "Full-Stack Web App",
      price: "From $4,000",
      summary: "A lean custom app for one core workflow, scoped after paid discovery.",
      includes: [
        "One inventory, request, or record workflow",
        "Accounts, database, and basic admin access",
        "Feature-based estimate after discovery",
      ],
    },
  ],
  launchSupport: {
    title: "45 days of launch support after handoff",
    body:
      "This covers small corrections and bug fixes. New pages, features, integrations, and major content work are quoted separately.",
  },
  carePlans: [
    {
      title: "Extended Launch Care",
      price: "$29/mo",
      summary:
        "Continue hosting, SSL, uptime checks, and deployment help after the included 45-day launch-support period.",
    },
    {
      title: "Monthly Updates",
      price: "$79/mo",
      summary:
        "Extended Launch Care plus one grouped update request of up to 30 minutes each month. Unused time does not roll over.",
    },
    {
      title: "Tool Care",
      price: "$149/mo",
      summary:
        "Monitoring for an agreed small tool plus up to one hour of planned fixes or updates each month.",
    },
  ],
  scopeNote:
    "Website prices assume ready-to-use content and one consolidated edit pass. Website tools cover one scoped public feature. Full-stack builds start at $4,000 after paid discovery; added roles, workflows, integrations, and revisions are quoted separately.",
  closingNote:
    "Send your goal, content, and timing. I will tell you which package fits or whether discovery comes first.",
  primaryCtaLabel: contactContent.primaryCtaLabel,
  secondaryCtaLabel: "Contact details",
} satisfies PricingContent;
