import { contactContent } from "@/content/contact";
import type { PricingContent } from "@/lib/content-types";

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Straightforward prices. Clear scope.",
  intro:
    "Choose a fixed website package, or start with a focused tool. Larger workflow apps begin with discovery so the estimate fits the business.",
  websitePackages: [
    {
      title: "Landing Page",
      price: "$199",
      summary: "One focused scrolling page for a service, offer, or campaign.",
      includes: [
        "Up to five standard sections",
        "Mobile layout and contact path",
        "Domain connection and launch setup",
      ],
    },
    {
      title: "Core Website",
      price: "$599",
      summary:
        "A compact business site with room for the offer, credibility, and contact.",
      includes: [
        "Up to three essential pages",
        "Mobile layout and standard contact form",
        "Page titles, descriptions, and launch setup",
      ],
    },
    {
      title: "Expanded Website",
      price: "$799",
      summary:
        "More room for services, proof, FAQs, a gallery, or location details.",
      includes: [
        "Up to five standard pages",
        "Everything in Core Website",
        "Space for services, proof, FAQs, or a gallery",
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
      "Workflow apps vary widely between businesses. Paid discovery maps the users, data, and first useful workflow before the full build is priced.",
  },
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
    "Website prices assume ready-to-use text and images and include one consolidated edit pass. Extra pages, custom features, paid services, and further revisions are quoted separately.",
  closingNote:
    "Send your goal, content, and timing. I will tell you which package fits or whether discovery comes first.",
  primaryCtaLabel: contactContent.primaryCtaLabel,
  secondaryCtaLabel: "Contact details",
} satisfies PricingContent;
