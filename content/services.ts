import type { ServiceEntry } from "@/lib/content-types";

export const services = [
  {
    slug: "website-projects",
    title: "Website Projects",
    priceFrom: "Simple sites from $199",
    summary:
      "Custom websites, redesigns, landing pages, and core sales pages for businesses that need a clearer public presence.",
    audienceFit:
      "Best for businesses that need a new site, a stronger replacement site, or focused landing pages tied to a clear offer.",
    primaryOutcome:
      "A website or landing page system that explains the offer clearly, builds trust, and gives visitors an easy next step.",
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
    title: "Web Apps and Tools",
    priceFrom: "Tools $1,500+ · Apps $4,000+",
    summary:
      "Interactive website features and full-stack business apps, from category filters and calculators to inventory trackers and internal dashboards.",
    audienceFit:
      "Best for businesses that need more than static pages: either one useful customer-facing tool or a focused workflow backed by accounts and data.",
    primaryOutcome:
      "A focused tool or first-release app that makes a customer action or business workflow easier to complete, track, and manage.",
    deliverables: [
      "Workflow and user-path mapping",
      "Defined scope for the website tool or web app",
      "Interface, state, and data-flow planning",
      "Tested first release and handoff",
    ],
    startingPoint:
      "Website tools start from $1,500. Full-stack apps start from $4,000 after paid discovery and a feature-based estimate.",
    nextStep:
      "Email me the workflow, who uses it, what it needs to handle, and where the current process is slowing the business down.",
  },
  {
    slug: "ongoing-support",
    title: "Ongoing Support",
    priceFrom: "Care from $29/mo",
    summary:
      "Post-launch help for small edits, bug fixes, practical improvements, and ongoing maintenance after the build is live.",
    audienceFit:
      "Best for businesses that want a reliable support path after launch instead of figuring out every small change alone.",
    primaryOutcome:
      "A website, app, or tool that stays current, maintained, and easier to manage as the business changes.",
    deliverables: [
      "45 days of included launch support after handoff",
      "Extended Launch Care from $29/mo after the included period",
      "Monthly Updates for planned content or layout changes",
      "Tool Care for small apps and tools that need monitoring or fixes",
    ],
    startingPoint:
      "Starts with 45 days of included launch support after handoff, with optional care plans after that.",
    nextStep:
      "Email me the current setup and the kind of ongoing help you expect. Larger additions are scoped separately.",
  },
] satisfies readonly ServiceEntry[];
