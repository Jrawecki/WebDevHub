import Link from "next/link";

import { TrackedContactLink } from "@/components/analytics/tracked-contact-link";
import { pricingContent } from "@/content/pricing";

export function PricingPageContent() {
  const {
    eyebrow,
    title,
    intro,
    websitePackages,
    quickTool,
    workflowApp,
    launchSupport,
    carePlans,
    scopeNotes,
    closingNote,
    primaryCtaLabel,
    secondaryCtaLabel,
  } = pricingContent;

  return (
    <div className="flex flex-col gap-0">
      <section className="page-intro pricing-intro">
        <p className="section-label">{eyebrow}</p>
        <h1 className="display-title max-w-4xl">{title}</h1>
        <p className="lede copy-block">{intro}</p>
        <div className="page-intro__actions">
          <TrackedContactLink
            className="cta-link"
            contactLocation="pricing_intro"
            ctaLabel={primaryCtaLabel}
          >
            {primaryCtaLabel}
          </TrackedContactLink>
          <Link href="/services" className="secondary-link">
            Review services
          </Link>
        </div>
      </section>

      <section className="editorial-section pricing-section">
        <div className="layout-measure">
          <div className="pricing-section-heading">
            <p className="section-label">Website packages</p>
            <h2 className="section-title max-w-2xl">
              A clear site, with a clear starting point.
            </h2>
          </div>

          <div className="pricing-ledger">
            {websitePackages.map((packageItem, index) => (
              <article className="pricing-package" key={packageItem.title}>
                <div className="pricing-package__meta">
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <p>{packageItem.price}</p>
                </div>
                <div className="pricing-package__content">
                  <h3>{packageItem.title}</h3>
                  <p>{packageItem.summary}</p>
                  <ul>
                    {packageItem.includes.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-section--band pricing-tools">
        <div className="layout-measure">
          <div className="pricing-section-heading">
            <p className="section-label">Tools and apps</p>
            <h2 className="section-title max-w-2xl">
              Start narrow. Price the real work.
            </h2>
          </div>

          <div className="pricing-tool-layout">
            <article className="pricing-tool">
              <div className="pricing-tool__meta">
                <p>{quickTool.price}</p>
              </div>
              <div className="pricing-tool__content">
                <h3>{quickTool.title}</h3>
                <p>{quickTool.summary}</p>
                <ul>
                  {quickTool.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </article>

            <article className="pricing-tool pricing-tool--workflow">
              <div className="pricing-tool__meta">
                <p>{workflowApp.price}</p>
              </div>
              <div className="pricing-tool__content">
                <h3>{workflowApp.title}</h3>
                <p>{workflowApp.summary}</p>
                <ul>
                  {workflowApp.includes.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p className="pricing-tool__note">{workflowApp.discoveryNote}</p>
              </div>
            </article>
          </div>

          <div className="pricing-addons">
            <div>
              <p className="section-label">Common feature additions</p>
              <p className="pricing-addons__intro">
                These examples show how a workflow-app estimate grows after discovery.
              </p>
            </div>
            <div className="pricing-addons__list">
              {workflowApp.addOns.map((addOn) => (
                <div className="pricing-addon" key={addOn.title}>
                  <div>
                    <h3>{addOn.title}</h3>
                    <p>{addOn.description}</p>
                  </div>
                  <p>{addOn.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section pricing-section pricing-support">
        <div className="layout-measure">
          <div className="pricing-launch-support">
            <div>
              <p className="section-label">Included after handoff</p>
              <h2 className="section-title max-w-xl">{launchSupport.title}</h2>
            </div>
            <p>{launchSupport.body}</p>
          </div>

          <div className="pricing-care-list">
            {carePlans.map((plan) => (
              <article className="pricing-care-row" key={plan.title}>
                <div>
                  <h3>{plan.title}</h3>
                  <p>{plan.summary}</p>
                </div>
                <p>{plan.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section pricing-scope">
        <div className="layout-measure">
          <div className="pricing-section-heading">
            <p className="section-label">Scope notes</p>
            <h2 className="section-title max-w-2xl">
              What keeps package pricing fair.
            </h2>
          </div>
          <ol className="pricing-scope-list">
            {scopeNotes.map((note, index) => (
              <li key={note}>
                <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <p>{note}</p>
              </li>
            ))}
          </ol>

          <div className="pricing-closing">
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
        </div>
      </section>
    </div>
  );
}
