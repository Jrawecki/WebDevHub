import Link from "next/link";

import { services } from "@/content/services";

export function ServicesPageContent() {
  return (
    <div className="flex flex-col gap-0">
      <section className="page-intro">
        <h1 className="display-title">Services</h1>
        <p className="lede copy-block">
          Websites, landing pages, web apps, tools, and support are scoped
          around what the business needs to explain, sell, or operate better.
        </p>
        <div className="page-intro__actions">
          <Link href="/contact" className="cta-link">
            Start your inquiry
          </Link>
          <Link href="/pricing" className="secondary-link">
            See pricing
          </Link>
        </div>
      </section>

      <section className="editorial-section">
        <div className="layout-measure">
          <div className="structured-rows">
            {services.map((service, index) => (
              <article key={service.slug} className="structured-row service-row">
                <div className="layout-balanced">
                  <div className="structured-row__head">
                    <div className="structured-row__meta">
                      <span className="structured-row__index">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="structured-row__title">{service.title}</h3>
                    <p className="structured-row__summary">{service.summary}</p>
                    <p className="structured-row__copy">{service.primaryOutcome}</p>
                  </div>

                  <div className="section-stack gap-5">
                    <div className="structured-row__block">
                      <p className="structured-row__label">Best fit</p>
                      <p className="structured-row__copy">{service.audienceFit}</p>
                    </div>

                    <div className="structured-row__block">
                      <p className="structured-row__label">Deliverables</p>
                      <ul className="structured-row__list">
                        {service.deliverables.map((deliverable) => (
                          <li key={deliverable}>{deliverable}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="structured-row__block">
                      <p className="structured-row__label">Next step</p>
                      <p className="structured-row__copy">{service.nextStep}</p>
                    </div>
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
