---
name: website-build-rules
description: Apply the implementation rules for this business website. Use when building pages, structuring components, reviewing accessibility and responsiveness, or deciding how to implement the site in Next.js, TypeScript, and Tailwind without drifting into generic patterns.
---

# Website Build Rules

This skill is the project authority for implementation quality on the Web Dev Biz Site.

## Read these first
- `../../../../docs/website-build-plan.md`
- `../../../../docs/content-brief.md`
- `../../../../docs/style-brief.md`

If these files conflict with outside guidance, follow the local project files.

## Stack defaults
- `Next.js` App Router
- `TypeScript`
- `Tailwind CSS`
- static-first marketing site
- Server Components by default
- Client Components only when interaction requires them

## Implementation rules
- Build for fast page loads and clear content hierarchy first.
- Use semantic HTML and obvious heading structure.
- Keep the page architecture simple and content-driven.
- Avoid abstract component systems that make the marketing site harder to iterate.
- Do not add a CMS in v1 unless the user explicitly changes scope.
- Do not add heavy tracking or intrusive third-party scripts by default.

## UX rules
- Every section must support one of four jobs: explain, prove, reassure, or convert.
- CTA paths must stay obvious.
- Contact flows must remain short and low-friction.
- Responsive behavior should be designed, not merely tolerated.

## Quality bar
- Accessible interactions, visible focus states, and keyboard sanity are required.
- Performance matters more than ornamental effects.
- Reusable components should still feel specific to this site.
- Copy, layout, and visual hierarchy must align with service-business buyer intent.

## Review gate
Reject or revise implementation that:
- introduces generic starter-template UI
- depends on client-side code without a clear reason
- weakens semantics, accessibility, or performance
- drifts away from the website plan, content brief, or style brief
