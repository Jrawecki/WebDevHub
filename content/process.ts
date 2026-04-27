import type { ProcessStep } from "@/lib/content-types";

export const processSteps = [
  {
    slug: "discovery",
    title: "Discovery",
    summary:
      "I start by understanding the business, the buyer, and what the website, app, or tool needs to help people do.",
    whatHappens: [
      "Review the business context, offer, and project goals.",
      "Clarify what the visitor needs to understand or do.",
      "Decide whether the work is ready for a build scope or needs paid discovery first.",
    ],
    clientResponsibilities: [
      "Share context, goals, constraints, and any existing materials.",
      "Be honest about unknowns, dependencies, and timeline pressure.",
    ],
    outputs: [
      "Project direction",
      "Fit check on scope and budget shape",
      "Recommended next step",
    ],
  },
  {
    slug: "scope",
    title: "Scope",
    summary:
      "I turn the right-sized solution into a concrete plan with deliverables, boundaries, and communication expectations.",
    whatHappens: [
      "Define the pages, screens, or workflows that belong in the project.",
      "Separate essential work from later-phase ideas.",
      "Set review points, client dependencies, and change-order rules.",
    ],
    clientResponsibilities: [
      "Confirm priorities and provide timely approvals.",
      "Flag missing assets, approvals, or stakeholder risks early.",
    ],
    outputs: [
      "Working scope",
      "Delivery phases or milestones",
      "Clear out-of-scope boundaries",
    ],
  },
  {
    slug: "build",
    title: "Build",
    summary:
      "Design and development move together so the project stays coherent from messaging through launch.",
    whatHappens: [
      "Create the page or interface system around the approved scope.",
      "Build responsively with mobile quality and performance in mind.",
      "Share progress at agreed checkpoints instead of endless partial review churn.",
    ],
    clientResponsibilities: [
      "Review against the agreed goals, not against moving targets.",
      "Provide consolidated feedback within the agreed windows.",
    ],
    outputs: [
      "Working pages or product flows",
      "Responsive implementation",
      "Review-ready progress checkpoints",
    ],
  },
  {
    slug: "launch",
    title: "Launch",
    summary:
      "I finish the release cleanly with QA, content checks, and handoff clarity instead of treating launch like cleanup.",
    whatHappens: [
      "Run final QA across layout, content, and key interactions.",
      "Confirm launch requirements, redirects, metadata, and contact details.",
      "Prepare the handoff or deployment sequence.",
    ],
    clientResponsibilities: [
      "Supply final approvals, logins, and launch-day dependencies.",
      "Confirm that business-critical details are accurate before release.",
    ],
    outputs: [
      "Launch-ready build",
      "Final review pass",
      "Deployment or handoff notes",
    ],
  },
  {
    slug: "support",
    title: "Support",
    summary:
      "After launch, support stays structured so edits, fixes, and new requests do not collapse back into vague project sprawl.",
    whatHappens: [
      "Handle post-launch fixes and agreed support tasks.",
      "Separate small improvements from new scoped work.",
      "Keep the client informed about what is handled now versus later.",
    ],
    clientResponsibilities: [
      "Report issues clearly and group requests when possible.",
      "Treat larger additions as a new phase when they exceed support scope.",
    ],
    outputs: [
      "Stable post-launch support path",
      "Clear distinction between support and new project work",
      "Practical roadmap for future improvements",
    ],
  },
] satisfies readonly ProcessStep[];
