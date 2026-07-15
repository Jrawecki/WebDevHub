import { contactContent } from "@/content/contact";
import type { PricingContent } from "@/lib/content-types";

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Straightforward prices. Clear scope.",
  intro:
    "For most small businesses, the $199 Simple Website is the right place to start. Choose more pages, an interactive experience, or a full-stack app when the project needs more.",
  primaryOffers: [
    {
      title: "Simple Website / Landing Page",
      price: "$199",
      summary:
        "The best fit for most small businesses: a polished one-page site that explains what you offer and how to get in touch.",
      includes: [
        "Multiple customizable sections",
        "Flexible design, colors, and content",
        "Mobile layout, contact path, and domain setup",
      ],
      featuredLabel: "Most popular",
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
      title: "Interactive Website",
      price: "From $1,500",
      summary:
        "A website that helps visitors find, calculate, choose, or submit what they need.",
      includes: [
        "One useful interactive feature matched to your goal",
        "Filters, calculators, quote helpers, selectors, or guided intake",
        "Designed into the site for a smooth, branded experience",
      ],
    },
    {
      title: "Full-Stack Web App",
      price: "From $4,000",
      summary:
        "A purpose-built application for managing inventory, customers, records, or internal operations with secure access and connected data.",
      includes: [
        "Inventory, order, customer, or record management",
        "Secure accounts, database, dashboards, and admin controls",
        "Paid discovery followed by a feature-based estimate",
      ],
    },
  ],
  launchSupport: {
    title: "45 days of launch support included",
    body:
      "Small corrections and bug fixes are included for 45 days after handoff. After that, choose annual website hosting or a monthly care plan; monthly plans include standard hosting.",
  },
  carePlans: [
    {
      title: "Annual Website Hosting",
      price: "$120/yr",
      summary:
        "Includes SSL, domain connection, deployments, and uptime monitoring for a standard website. Content changes are separate.",
    },
    {
      title: "Extended Launch Care",
      price: "$29/mo",
      summary:
        "Standard website hosting, uptime checks, deployment help, and small technical fixes after the included 45 days.",
    },
    {
      title: "Monthly Updates",
      price: "$79/mo",
      summary:
        "Extended Launch Care plus one grouped content or layout update of up to 30 minutes each month. Unused time does not roll over.",
    },
    {
      title: "App Care",
      price: "From $149/mo",
      summary:
        "Monitoring for an agreed interactive feature or app plus up to one hour of planned fixes or updates. Infrastructure is separate.",
    },
  ],
  scopeNote:
    "Website prices assume ready-to-use content and one consolidated edit pass. Interactive websites include one scoped feature. Full-stack builds start at $4,000 after paid discovery. Domains, databases, storage, email services, and usage-based app infrastructure are billed separately.",
  closingNote:
    "Send your goal, content, and timing. I will tell you which package fits or whether discovery comes first.",
  primaryCtaLabel: contactContent.primaryCtaLabel,
  secondaryCtaLabel: "Contact details",
} satisfies PricingContent;
