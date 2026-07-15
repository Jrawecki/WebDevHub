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
      "Small corrections and bug fixes are included for 45 days after handoff. Simple website hosting stays included; backend apps use App Hosting & Care.",
  },
  carePlans: [
    {
      title: "Simple Website Hosting",
      price: "Included",
      summary:
        "Hosting and SSL are included for simple websites. Custom domains are billed at registrar cost, usually $10–$15/year for a standard .com.",
    },
    {
      title: "Extended Launch Care",
      price: "$29/mo",
      summary:
        "Priority help with uptime, deployments, and small technical fixes after the included 45 days.",
    },
    {
      title: "Monthly Updates",
      price: "$79/mo",
      summary:
        "Extended Launch Care plus content updates. I work with you on updates as your site changes.",
    },
    {
      title: "App Hosting & Care",
      price: "From $149/mo",
      summary:
        "Standard backend hosting and monitoring, plus more updates. High storage or traffic may cost more.",
    },
  ],
  scopeNote:
    "Website prices assume ready-to-use content and one consolidated edit pass. Interactive websites include one scoped feature. Full-stack builds start at $4,000 after paid discovery. Custom domains are billed at registrar cost. App Hosting & Care includes standard backend usage; high storage, traffic, email, or other paid services may add cost.",
  closingNote:
    "Send your goal, content, and timing. I will tell you which package fits or whether discovery comes first.",
  primaryCtaLabel: contactContent.primaryCtaLabel,
  secondaryCtaLabel: "Contact details",
} satisfies PricingContent;
