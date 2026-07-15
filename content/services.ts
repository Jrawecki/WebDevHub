import type { ServiceEntry } from "@/lib/content-types";

export const services = [
  {
    slug: "website-projects",
    title: "Website Projects",
    priceFrom: "Simple sites from $349",
    summary:
      "Custom websites, redesigns, landing pages, and core sales pages for businesses that need a clearer public presence.",
    audienceFit:
      "Best for businesses that need a new site, a stronger replacement site, or focused landing pages tied to a clear offer.",
    primaryOutcome:
      "For most small businesses, a focused one-page site is the right start: a clear offer, stronger trust, and an easy next step.",
    deliverables: [
      "Messaging and page-structure planning",
      "Landing page or core sales-page structure",
      "Custom responsive design and front-end build",
      "Launch-ready QA, metadata, and handoff notes",
    ],
    startingPoint:
      "Can start as a new business website, a redesign, a focused landing page, or a cleaner sales-page system.",
    nextStep:
      "Email me what the business offers, what the site or page needs to help people do, and your rough timing.",
  },
  {
    slug: "web-apps-tools",
    title: "Interactive Sites and Web Apps",
    priceFrom: "Interactive sites $1,500+ · Apps $4,000+",
    summary:
      "Websites that help visitors search, compare, calculate, or submit, plus full-stack apps for inventory, customers, and internal operations.",
    audienceFit:
      "Best for businesses that need more than static pages: either one useful visitor-facing feature or a business system backed by accounts and data.",
    primaryOutcome:
      "An interactive website or first-release app that makes a customer action or business workflow easier to complete, track, and manage.",
    deliverables: [
      "Workflow and user-path mapping",
      "Defined scope for the interactive site or web app",
      "Interface, state, and data-flow planning",
      "Tested first release and handoff",
    ],
    startingPoint:
      "Interactive websites start from $1,500. Full-stack apps start from $4,000 after paid discovery and a feature-based estimate.",
    nextStep:
      "Email me the workflow, who uses it, what it needs to handle, and where the current process is slowing the business down.",
  },
  {
    slug: "ongoing-support",
    title: "Ongoing Support",
    priceFrom: "Simple hosting included · App care $149+/mo",
    summary:
      "Included simple-site hosting, optional monthly website care, and app hosting subscriptions for systems with a back end.",
    audienceFit:
      "Best for businesses that want a reliable support path after launch instead of figuring out every small change alone.",
    primaryOutcome:
      "A website or app that stays online, monitored, and easier to maintain as the business changes.",
    deliverables: [
      "45 days of included launch support after handoff",
      "Simple website hosting and SSL included",
      "Custom domains billed at registrar cost",
      "Extended Launch Care from $29/mo after the included period",
      "App Hosting & Care from $149/mo, including standard backend usage",
    ],
    startingPoint:
      "Simple website hosting stays included. Choose monthly website care for ongoing help or App Hosting & Care for backend systems.",
    nextStep:
      "Email me the current setup and the kind of ongoing help you expect. Larger additions are scoped separately.",
  },
] satisfies readonly ServiceEntry[];
