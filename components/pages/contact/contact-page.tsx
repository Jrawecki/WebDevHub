import { siteIdentity } from "@/components/shared/site-brand";
import { contactContent } from "@/content/contact";
import { ContactForm } from "./contact-form";

export function ContactPageView() {
  return (
    <main className="page-frame">
      <div className="flex flex-col gap-0">
        <section className="contact-hero page-intro" aria-labelledby="contact-title">
          <div className="contact-hero__copy">
            <h1 id="contact-title" className="display-title">
              {contactContent.title}
            </h1>
            <p className="lede copy-block">{contactContent.intro}</p>

            <div className="contact-panel">
              <p className="text-sm leading-7 text-[color:var(--foreground-soft)]">
                {contactContent.responseExpectation}
              </p>
              <ContactForm
                brandName={siteIdentity.brandName}
                toEmail={contactContent.email}
              />
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--band contact-fit-section">
          <div className="layout-measure">
            <div className="section-stack gap-3 pb-4 contact-fit-heading">
              <h2 className="section-title max-w-4xl">
                Most projects fit one of these paths.
              </h2>
              <p className="prose-copy copy-block">
                If the request is not clear yet, that is fine. I will tell you
                whether it is ready for a quote or needs discovery first.
              </p>
            </div>

            <div className="structured-rows">
              {contactContent.projectTypes.slice(0, 4).map((projectType) => (
                <article key={projectType.value} className="structured-row">
                  <div className="layout-balanced">
                    <div className="structured-row__head">
                      <h3 className="structured-row__title">{projectType.label}</h3>
                    </div>
                    <div className="structured-row__block">
                      <p className="structured-row__copy">
                        {projectType.description}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
