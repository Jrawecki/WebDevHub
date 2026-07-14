import { contactContent } from "@/content/contact";
import type { PricingContent } from "@/lib/content-types";

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Straightforward prices. Clear scope.",
  intro:
    "Choose a fixed website package, or start with a focused tool. Larger workflow apps begin with discovery so the estimate fits the business.",
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
      title: "Tools & Apps",
      price: "From $500",
      summary:
        "A focused calculator, intake flow, automation, portal, dashboard, or internal tool.",
      includes: [
        "Quick tools from $500",
        "Workflow apps from $1,500",
        "Paid discovery before larger builds",
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
    "Website prices assume ready-to-use text and images and include one consolidated edit pass. Extra pages, custom features, paid services, and further revisions are quoted separately.",
  closingNote:
    "Send your goal, content, and timing. I will tell you which package fits or whether discovery comes first.",
  primaryCtaLabel: contactContent.primaryCtaLabel,
  secondaryCtaLabel: "Contact details",
} satisfies PricingContent;
