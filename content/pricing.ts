import { contactContent } from "@/content/contact";
import type { PricingContent } from "@/lib/content-types";

export const pricingContent = {
  eyebrow: "Pricing",
  title: "Scope first. Clear pricing after that.",
  intro:
    "I price websites, landing pages, web apps, and tools after I understand the scope, the launch needs, and the support path.",
  websiteProjects: {
    title: "Website projects and landing pages",
    body:
      "For website and landing-page work, I review the goals, page scope, content needs, and launch requirements. Then I send a scoped quote.",
    bullets: [
      "Useful for new sites, redesigns, service pages, and focused landing pages.",
      "Pricing depends on pages, content complexity, integrations, and launch requirements.",
      "Clear requests usually move from brief review to scoped quote quickly.",
    ],
  },
  webAppsTools: {
    title: "Web apps and business tools",
    body:
      "For apps and tools, I scope the workflow, screens, users, data needs, and the first useful release before pricing the build.",
    bullets: [
      "Useful for portals, dashboards, intake systems, internal tools, and lightweight business apps.",
      "Pricing depends on workflow complexity, integrations, states, permissions, and review needs.",
      "If the request is still fuzzy, I may recommend paid discovery before quoting the build.",
    ],
  },
  directCollaboration: {
    title: "Working directly with me",
    body:
      "You work directly with the person planning, designing, and building the project, so decisions stay connected from scope through launch.",
    bullets: [
      "Scope, review windows, and responsibilities are named before the build starts.",
      "You get clear checkpoints instead of open-ended review churn.",
      "If a request grows, it becomes a new scope or change order instead of hidden drift.",
    ],
  },
  purchaseIncludes: {
    title: "What is included when you purchase",
    body:
      "The exact deliverables depend on the project, but the purchase always includes a clear build scope and launch-ready execution.",
    bullets: [
      "Planning for pages, screens, workflows, or landing pages.",
      "Responsive implementation with QA across key layouts and interactions.",
      "Launch or handoff notes, metadata basics, and a clear support path.",
    ],
  },
  supportOptions: {
    title: "Included support and subscriptions",
    body:
      "Projects include 4 months of small edits and bug fixes after launch. After that, support can continue as a monthly subscription or individual paid changes.",
    bullets: [
      "The included support window covers small edits and bug fixes, not new features or major new pages.",
      "Monthly support is available for businesses that want steady updates and maintenance.",
      "If you do not want a subscription, individual changes can be scoped and paid for as needed.",
    ],
  },
  closingNote:
    "If you want the clearest answer, send the brief. I will tell you whether it is ready for a quote or whether it needs discovery first.",
  primaryCtaLabel: contactContent.primaryCtaLabel,
  secondaryCtaLabel: "Contact details",
} satisfies PricingContent;
