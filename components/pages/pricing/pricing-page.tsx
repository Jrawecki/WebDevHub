import Link from "next/link";

import { TrackedContactLink } from "@/components/analytics/tracked-contact-link";
import { pricingContent } from "@/content/pricing";

function PriceText({ value }: { value: string }) {
  return value.split(/(\$)/g).map((part, index) =>
    part === "$" ? (
      <span className="pricing-price__currency" key={`currency-${index}`}>
        {part}
      </span>
    ) : (
      part
    ),
  );
}

export function PricingPageContent() {
  const {
    eyebrow,
    title,
    intro,
    primaryOffers,
    launchSupport,
    carePlans,
    scopeNote,
    closingNote,
    primaryCtaLabel,
    secondaryCtaLabel,
  } = pricingContent;

  return (
    <div className="pricing-page">
      <section className="page-intro pricing-intro">
        <p className="section-label">{eyebrow}</p>
        <div className="pricing-intro__row">
          <div className="pricing-intro__copy">
            <h1 className="display-title">{title}</h1>
            <p className="lede">{intro}</p>
          </div>
          <TrackedContactLink
            className="cta-link"
            contactLocation="pricing_intro"
            ctaLabel={primaryCtaLabel}
          >
            {primaryCtaLabel}
          </TrackedContactLink>
        </div>
      </section>

      <div className="layout-measure pricing-overview">
        <section className="pricing-block pricing-block--offers">
          <div className="pricing-block__heading">
            <p className="section-label">Project options</p>
            <h2 className="section-title">Choose the right starting point.</h2>
          </div>

          <div className="pricing-plan-grid">
            {primaryOffers.map((packageItem) => (
              <article
                className={`pricing-plan${packageItem.featuredLabel ? " pricing-plan--featured" : ""}`}
                key={packageItem.title}
              >
                {packageItem.featuredLabel ? (
                  <p className="pricing-plan__flag">{packageItem.featuredLabel}</p>
                ) : null}
                <div className="pricing-plan__topline">
                  <h3>{packageItem.title}</h3>
                  <p>
                    <PriceText value={packageItem.price} />
                  </p>
                </div>
                <p className="pricing-plan__summary">{packageItem.summary}</p>
                <ul>
                  {packageItem.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="pricing-block pricing-block--care">
          <div className="pricing-care-intro">
            <div className="pricing-block__heading">
              <p className="section-label">Support</p>
              <h2 className="section-title">{launchSupport.title}</h2>
            </div>
            <p>{launchSupport.body}</p>
          </div>

          <div className="pricing-care-grid">
            {carePlans.map((plan) => (
              <article className="pricing-care" key={plan.title}>
                <div className="pricing-care__topline">
                  <h3>{plan.title}</h3>
                  <p>
                    <PriceText value={plan.price} />
                  </p>
                </div>
                <p>{plan.summary}</p>
              </article>
            ))}
          </div>
        </section>

        <footer className="pricing-footer">
          <p className="pricing-footer__scope">{scopeNote}</p>
          <div className="pricing-footer__action">
            <p>{closingNote}</p>
            <div className="page-intro__actions">
              <TrackedContactLink
                className="cta-link"
                contactLocation="pricing_closing"
                ctaLabel={primaryCtaLabel}
              >
                {primaryCtaLabel}
              </TrackedContactLink>
              <Link href="/contact#details" className="secondary-link">
                {secondaryCtaLabel}
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
}
