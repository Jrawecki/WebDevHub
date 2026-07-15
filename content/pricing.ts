import { contactContent } from "@/content/contact";
import type { PricingContent } from "@/lib/content-types";

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Straightforward prices. Clear scope.",
  intro:
    "For most small businesses, the $349 Simple Website is the right place to start. Choose more pages, an interactive experience, or a full-stack app when the project needs more.",
  primaryOffers: [
    {
      title: "Simple Website / Landing Page",
      price: "$349",
      summary:
        "The best fit for most small businesses: a polished one-page site that explains what you offer and how to get in touch.",
      includes: [
        "Showcase your business with photos and a polished one-page layout",
        "Say exactly what you want with text tailored to your message",
        "Make contact easy with a mobile-friendly form and domain setup",
        "Build a stronger search foundation with essential on-page SEO",
      ],
      featuredLabel: "Most popular",
    },
    {
      title: "Expanded Website",
      price: "$799",
      summary:
        "A multi-page business site with more room for services, credibility, and contact.",
      includes: [
        "Get everything included with the Simple Website, plus more room to grow",
        "Give key services and topics their own space across up to five custom pages",
        "Present your offerings clearly with a focused catalog or menu",
        "Support discovery across the site with page-by-page SEO setup",
      ],
    },
    {
      title: "Interactive Website",
      price: "From $1,500",
      summary:
        "A website that helps visitors find, calculate, choose, or submit what they need.",
      includes: [
        "Help visitors complete one important task with a focused interactive feature",
        "Make decisions easier with a filter, calculator, quote helper, selector, or guided intake",
        "Deliver a smooth, mobile-friendly experience that fits your brand",
      ],
    },
    {
      title: "Full-Stack Web App",
      price: "From $4,000",
      summary:
        "A purpose-built application for an original idea or clearly defined digital project, from customer-facing products to internal business tools.",
      includes: [
        "Turn a customer-facing product, internal tool, portal, marketplace, or original idea into a custom app",
        "Equip it with accounts, connected data, dashboards, integrations, and admin tools as needed",
        "Define the right features, timeline, and budget through paid discovery",
      ],
    },
  ],
  launchSupport: {
    title: "45 days of launch support included",
    body:
      "Small corrections, bug fixes, and minor content or layout edits are included for 45 days after handoff. After that, choose a care plan or request a one-time paid update whenever needed. Simple Website hosting stays included; backend apps use App Hosting & Care.",
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
        "Best for Expanded and Interactive Websites: deployment support, uptime monitoring, minor fixes, and occasional small edits.",
    },
    {
      title: "Monthly Updates",
      price: "$79/mo",
      summary:
        "Best for Expanded and Interactive Websites that change regularly: Extended Launch Care plus ongoing content and layout updates.",
    },
    {
      title: "App Hosting & Care",
      price: "From $149/mo",
      summary:
        "Built for Full-Stack Web Apps: backend hosting, monitoring, maintenance, and ongoing updates. High storage or traffic may cost more.",
    },
  ],
  scopeNote:
    "Website prices assume ready-to-use content and one consolidated edit pass. Interactive websites include one scoped feature. Full-stack builds start at $4,000 after paid discovery. Custom domains are billed at registrar cost. App Hosting & Care includes standard backend usage; high storage, traffic, email, or other paid services may add cost.",
  closingNote:
    "Send your goal, content, and timing. I will tell you which package fits or whether discovery comes first.",
  primaryCtaLabel: contactContent.primaryCtaLabel,
  secondaryCtaLabel: "Contact details",
} satisfies PricingContent;
