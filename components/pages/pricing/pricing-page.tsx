import Link from "next/link";

import { pricingContent } from "@/content/pricing";

const pricingSections = [
  pricingContent.websiteProjects,
  pricingContent.webAppsTools,
  pricingContent.directCollaboration,
  pricingContent.purchaseIncludes,
  pricingContent.supportOptions,
];

export function PricingPageContent() {
  return (
    <div className="flex flex-col gap-0">
      <section className="page-intro">
        <h1 className="display-title">Pricing</h1>
        <p className="lede copy-block">
          I quote the work after I understand the scope. Websites, landing
          pages, apps, tools, and support are priced around what needs to be
          built and maintained.
        </p>
        <div className="page-intro__actions">
          <Link href="/contact" className="cta-link">
            Start your inquiry
          </Link>
          <Link href="/services" className="secondary-link">
            Review services
          </Link>
        </div>
      </section>

      <section className="editorial-section">
        <div className="layout-measure">
          <div className="structured-rows">
            {pricingSections.map((section) => (
              <article key={section.title} className="structured-row">
                <div className="layout-balanced">
                  <div className="structured-row__head">
                    <h2 className="structured-row__title">{section.title}</h2>
                    <p className="structured-row__summary">{section.body}</p>
                  </div>
                  <div className="structured-row__block">
                    <ul className="structured-row__list">
                      {section.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
