# Site Guardrails

This repo is a calm editorial marketing site for a solo web studio.

## Design rules
- Keep the square-grid page background.
- Major sections should feel full-screen and edge-to-edge on any viewport, with readable inner content widths.
- Do not let the site fall back into a narrow centered sheet floating inside the browser.
- The site should feel guided and full, not sparse or underfilled.
- Prefer open sections, rules, rails, and spacing over stacked cards.
- Keep typography restrained. If a headline feels oversized, reduce it.
- Avoid layouts that create obvious blank columns or long dead zones.
- Use stronger chapter changes while scrolling. Consecutive sections should not all look like the same centered block.
- Prefer centered stacked layouts when the content is brief or explanatory.
- Center framing content, but left-align detailed content, lists, steps, and proof modules by default.
- Avoid repeated centered note-grid patterns on `Services`, `Work`, `Process`, and similar detail-heavy pages.
- Do not create a desktop split layout unless both sides have enough content to justify the width.
- If a section looks left-heavy or leaves a large open field on desktop, recenter it or rebalance it.
- Avoid isolated labels, notes, or CTAs occupying their own desktop column.
- Use one accent surface only when it helps conversion or contrast.
- On patterned or exposed backgrounds, raise contrast with stronger text, borders, or opaque light surfaces. Do not rely on low-opacity outline controls.
- Boxed note content should be centered only when the copy is short and callout-like.
- Blank space is acceptable only when it creates emphasis. It should not come from weak hierarchy or underfilled layout patterns.

## Copy rules
- Do not overexplain.
- Use plain buyer language, not developer language.
- Keep headings short and concrete.
- Keep intros short. One clear paragraph beats three reassuring ones.
- Remove repeated explanation across pages.
- Do not use decorative chips or labels unless they help a buyer scan the page faster.

## Page responsibility
- `Home` routes and reassures. Do not put case studies on the homepage.
- `Work` owns proof and case-study detail.
- `Contact` stays short, email-first, and low friction.
- Do not show visible numbered contact intake steps unless explicitly requested.
- `Services`, `Process`, and `About` should each do one job and avoid repeating the whole site narrative.

## Workflow
- Use the local design skill at `.agents/skills/site-design-guardrails/SKILL.md` for future redesign work.
- Run `npm run lint`, `npm run build`, and `npm run test:e2e` after major layout or copy changes.
