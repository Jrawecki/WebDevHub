# site-design-guardrails

Use this skill when redesigning or restyling the website in this repo.

## Intent
- Build a calm editorial site for service-business buyers.
- The site should feel clear, premium, and direct, not decorative or over-produced.

## Required rules
- Keep the square-grid background visible as a subtle site-wide texture.
- Make major sections feel full-screen and edge-to-edge across desktop and mobile while keeping text measures readable.
- Do not revert to nested card stacks or panel-inside-panel layouts as the default pattern.
- The site should feel guided and complete, not sparse.
- Reduce oversized typography before adding more layout chrome.
- Prefer shorter copy, shorter intros, and fewer sections.
- Prefer centered stacked layouts when the content is short, explanatory, or trust-building.
- Use stronger chapter changes while scrolling so sections are easy to distinguish.
- Avoid long runs of visually identical sections.
- Center framing content, but left-align detailed content, lists, steps, and proof modules by default.
- Avoid repeated centered note-grid patterns on detail-heavy pages like `Services`, `Work`, and `Process`.
- Keep each page focused on one job.
- Keep `Home` free of case-study content.
- Keep `Contact` email-only, short, and centered on a quick-brief mailto flow.
- Do not show visible numbered contact intake steps unless explicitly requested.
- Do not leave low-contrast text or outline controls sitting directly on the patterned background.
- Do not create desktop-only side columns unless both columns have enough content to justify the width.
- Avoid isolated labels, notes, or CTAs taking up a whole desktop column by themselves.
- Boxed note content should only be centered when it is short and callout-like.
- Blank space is only acceptable when it creates emphasis, not when it comes from weak hierarchy or underfilled layouts.

## Copy style
- Use plain English.
- Write for buyers, not designers or developers.
- Cut duplicate reassurance.
- Avoid decorative chips and labels that do not materially improve scanning.
- Avoid "version 1" framing unless it changes a real user expectation.
- If a sentence can lose 30 percent of its words without losing meaning, cut it.

## Layout style
- Favor spacing, rules, rails, and simple alignment.
- Watch for blank space created by mismatched column heights.
- On large screens, do not let decorative side rails create empty vertical deserts.
- Avoid left-heavy compositions that strand the main content away from the center of the page.
- On mobile, preserve hierarchy without turning sections into long stacks of repeated labels and notes.

## Validation
- Run `npm run lint`, `npm run build`, and `npm run test:e2e`.
- Review Playwright screenshots for awkward wraps, blank space, and oversized hero text.
