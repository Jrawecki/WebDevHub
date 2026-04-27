# Website Plan for the Solo Web Studio

## Summary
Build a lean, custom-coded sales site that targets service businesses in your state or region, sells websites first, and positions client portals and internal tools as the next-step offer. The site should feel high-trust and visibly well-designed, but not flashy for its own sake. Version 1 is a static-first marketing site with hybrid personal-plus-studio placeholder branding and email-only contact.

Use a hybrid founder-plus-studio placeholder brand by default. Do not let final studio naming block launch; if a stronger studio name emerges later, it can replace the placeholder layer after the site is live.

## Key Changes
### Positioning and content
- Lead message: you build conversion-focused websites for service businesses, with client portals and internal tools as expansion work.
- Keep the offer stack to three site-visible services: `Website Projects`, `Client Portals / Internal Tools`, and `Ongoing Support`.
- Launch with hybrid personal-plus-studio placeholder branding: the founder identity carries trust, while the studio naming stays flexible in v1.
- Do not publish detailed pricing or public price numbers in v1. Use the pricing page to explain the process without locking yourself into packages too early.
- Lean the trust strategy toward your expertise, process, and clarity of scope rather than heavy outcome claims or testimonials.
- Publish available proof honestly: case studies can be marked `In Progress`, `Beta`, or `Concept Build`, but every entry must clearly state current status.

### Site structure
- Build these primary routes: `/`, `/services`, `/pricing`, `/work`, `/process`, `/about`, `/contact`.
- Home page structure: strong hero, offer summary, selected work, process snapshot, personal credibility section, final CTA.
- Services page: define what each offer solves, who it fits, typical deliverables, and what happens before a quote.
- Pricing page: explain how website and product work are scoped and priced without publishing public numbers.
- Work page: 2-4 detailed case studies with status badges and story-based writeups, not a screenshot gallery.
- Process page: discovery, scope, build, launch, support, plus change-order and communication expectations in client-friendly language.
- About page: headshot, short bio, why you focus on this work, and why clients should trust a solo operator.
- Contact page: visible email, expected response time, and a note that vague requests may start with paid discovery. No contact form in v1.

### Design and build
- Use a custom-coded modern stack: `Next.js + TypeScript + Tailwind CSS`, static-first, deployed on `Vercel`.
- Use a light-first visual system: off-white or warm neutral background, dark ink or navy text, one bold accent color, strong typography, restrained motion, sharp spacing, and clean visual hierarchy.
- Make the design feel premium and contemporary through typography, layout rhythm, and art direction, not through heavy animation or gimmicks.
- Store v1 content in code or MDX rather than adding a CMS. This keeps launch fast and suits the small initial content set.
- Add privacy-friendly analytics in v1 and a simple privacy page or footer notice. Avoid unnecessary tracking or data collection.

## Public Interfaces / Types
- Navigation interface: `Home`, `Services`, `Work`, `Process`, `About`, `Contact`.
- Contact interface for v1:
  - `contactMode` = `email-only`
  - `contactEmail`
  - `responseExpectation`
  - `starterQuestions`
  - `projectTypes`
- Service content model:
  - `title`, `audienceFit`, `primaryOutcome`, `deliverables`, `startingPoint`, `nextStep`
- Case study content model:
  - `title`, `status`, `clientType`, `problem`, `constraints`, `approach`, `visualProof`, `resultOrCurrentState`, `techNotesOptional`
- SEO and local interface:
  - sitewide metadata, OG image, sitemap, robots, region-aware copy tokens, and structured contact details in the footer and contact page

## Test Plan
- Verify all seven pages render cleanly on mobile, tablet, and desktop with no broken layout or CTA priority issues.
- Test keyboard navigation, visible focus states, semantic headings, alt text, color contrast, and basic screen-reader clarity.
- Confirm every mailto CTA opens correctly and that the visible email address is consistent anywhere it appears.
- Check Lighthouse and performance targets on Home and Contact, especially image optimization, font loading, and JS weight.
- Confirm metadata, sitemap, OG previews, and region-specific copy are correct before launch.
- Review every case study for truthful status labeling and absence of unsupported claims.
- Test that email and contact-response promises on the page match your actual workflow.

## Assumptions and Defaults
- Launch branding defaults to a hybrid founder-plus-studio placeholder setup so naming does not block shipping.
- The site targets your state or region rather than one city; exact region wording gets filled in once you provide it.
- A professional headshot and short founder bio will be available before design lock.
- v1 excludes a blog, detailed public price numbers, testimonials page, newsletter, client login, and contact form.
- If a lead's project is unclear or app-heavy, the site and contact flow should route that engagement toward paid discovery rather than a direct build quote.

## Design Reference Notes
- `https://kevinkahn.com/`
  - Borrow: direct local positioning, faster entry into the offer, simpler page starts, clearer solo-operator framing.
  - Do not copy: package-heavy pricing and the denser long-page accumulation of modules.
- `https://lets.webalize.me/`
  - Borrow: stronger section rhythm, more disciplined visual system, clearer chapter changes while scrolling.
  - Do not copy: product-agency framing, heavier process language, and overbuilt volume for this buyer.
- Target position for this site:
  - calmer and more premium than Kevin Kahn
  - more restrained and more buyer-focused than Webalize
  - direct solo-studio clarity with stronger typography and cleaner visual art direction
