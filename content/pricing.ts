import { contactContent } from "@/content/contact";
import type { PricingContent } from "@/lib/content-types";

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Clear prices for a simpler website.",
  intro:
    "Start with a fixed website package. If your business needs a tool or app, we map the workflow first and price only the features that belong in the first release.",
  websitePackages: [
    {
      title: "Landing Page",
      price: "$199",
      summary: "One focused scrolling page for a service, offer, or campaign.",
      includes: [
        "Up to five standard sections",
        "A direct contact path",
        "Domain connection and mobile layout",
        "One consolidated edit pass",
      ],
    },
    {
      title: "Core Website",
      price: "$599",
      summary:
        "Up to three essential pages for a clear home page, service or about information, and contact.",
      includes: [
        "Mobile-friendly build",
        "Standard contact form",
        "Basic page titles and descriptions",
        "One consolidated edit pass",
      ],
    },
    {
      title: "Expanded Website",
      price: "$799",
      summary:
        "Up to five standard pages for more services, proof, FAQs, gallery, or location details.",
      includes: [
        "Everything in Core Website",
        "Two additional standard pages",
        "Standard booking or contact path",
        "Basic launch setup",
      ],
    },
  ],
  quickTool: {
    title: "Quick Tool",
    price: "From $500",
    summary:
      "A narrow calculator, quote helper, intake flow, data display, or single automation.",
    includes: [
      "One focused workflow",
      "One owner or admin",
      "A clear first-release boundary",
    ],
  },
  workflowApp: {
    title: "Workflow Apps",
    price: "From $1,500",
    summary:
      "For a portal, dashboard, intake system, or internal tool that needs more planning than a normal website.",
    includes: [
      "Paid discovery before the full build",
      "A mapped workflow and first-release scope",
      "A written feature-based build estimate",
    ],
    discoveryNote:
      "Every business runs differently. Discovery clarifies who uses the tool, what data it handles, and which workflow matters first, so the project is priced around real work instead of a guess.",
    addOns: [
      {
        title: "User accounts",
        description: "Logins and basic account access",
        price: "+$300",
      },
      {
        title: "Saved data",
        description: "A form, table, or record workspace",
        price: "+$300",
      },
      {
        title: "Admin dashboard",
        description: "A simple owner or staff dashboard",
        price: "+$300",
      },
      {
        title: "Integration",
        description: "One documented API, automation, or email workflow",
        price: "+$250",
      },
      {
        title: "Payments or booking",
        description: "A standard Stripe, Square, or booking setup",
        price: "+$300",
      },
      {
        title: "Another workflow",
        description: "A distinct screen or operational flow",
        price: "From +$200",
      },
    ],
  },
  launchSupport: {
    title: "45 days of launch support after handoff",
    body:
      "Every project includes 45 days of launch support for small corrections and bug fixes. New pages, new features, integrations, and major content work are quoted separately.",
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
  scopeNotes: [
    "Client supplies ready-to-use text, logo, images, and business details.",
    "Each package includes one consolidated edit pass; further grouped revisions cost $50.",
    "Extra standard pages start at $100. Ecommerce, custom copywriting, memberships, dashboards, payments, and complex integrations are quoted separately.",
    "Hosting, domains, and paid third-party services are separate unless named in the package.",
  ],
  closingNote:
    "Send the goal, the content you have, and your timing. I will tell you whether it fits a package or needs discovery first.",
  primaryCtaLabel: contactContent.primaryCtaLabel,
  secondaryCtaLabel: "Contact details",
} satisfies PricingContent;
