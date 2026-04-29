import Link from "next/link";

import { aboutContent } from "@/content/about";
import { contactContent } from "@/content/contact";
import { processSteps } from "@/content/process";
import { services } from "@/content/services";

function SectionLead({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro: string;
}) {
  return (
    <div className="section-stack section-stack--center">
      <p className="section-label">{label}</p>
      <h2 className="section-title max-w-4xl">{title}</h2>
      <p className="lede copy-block">{intro}</p>
    </div>
  );
}

export function HomePageContent() {
  return (
    <div className="flex flex-col gap-0">
      <section className="editorial-hero">
        <div className="editorial-hero__grid">
          <div className="section-stack section-stack--center gap-5">
            <div className="section-stack section-stack--center gap-4">
              <div className="section-label-spacer" aria-hidden="true" />
              <h1 className="display-title max-w-4xl">
                Websites and web apps that make your business easier to run.
              </h1>
              <p className="lede copy-block">
                I design and build custom websites, landing pages, web apps,
                and workflow tools for businesses that need clearer digital
                systems.
              </p>
            </div>

            <div className="section-actions-center">
              <Link href="/contact" className="cta-link">
                Start your inquiry
              </Link>
              <Link href="/services" className="secondary-link">
                See services
              </Link>
            </div>

            <div className="note-grid note-grid--3 w-full">
              <article className="editorial-note editorial-note--callout">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground-muted)]">
                  From idea to launch
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                  I work with you to turn an idea into a real website, page,
                  app, or tool people can use, trust, and act on.
                </p>
              </article>
              <article className="editorial-note editorial-note--callout">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground-muted)]">
                  Websites and landing pages
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                  Custom sites, redesigns, and focused landing pages help
                  people understand the offer and take the next step.
                </p>
              </article>
              <article className="editorial-note editorial-note--callout">
                <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground-muted)]">
                  Apps and tools
                </p>
                <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                  Portals, dashboards, intake flows, and internal tools fit
                  when the business needs a workflow people can actually use.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-section__grid">
          <SectionLead
            label="Services"
            title="Choose the right build."
            intro="Websites, landing pages, apps, tools, and support are scoped around what the business actually needs."
          />

          <div className="section-stack gap-6">
            <article className="editorial-note">
              <p className="text-[0.72rem] font-semibold uppercase tracking-[0.16em] text-[color:var(--foreground-muted)]">
                Build approach
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                {aboutContent.credibilityPoints[0]}
              </p>
              <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                {aboutContent.credibilityPoints[2]}
              </p>
            </article>

            <div className="editorial-list">
              {services.map((service, index) => (
                <article key={service.slug} className="editorial-item">
                  <div className="section-stack gap-3">
                    <div className="flex flex-wrap items-center gap-3">
                      <div className="flex h-11 w-11 items-center justify-center rounded-full border border-[color:var(--border-strong)] font-[var(--font-display)] text-xl text-[color:var(--accent-deep)]">
                        0{index + 1}
                      </div>
                      <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--foreground)]">
                        {service.title}
                      </h3>
                    </div>
                    <p className="max-w-3xl text-sm leading-7 text-[color:var(--foreground-soft)]">
                      {service.primaryOutcome}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-section--band home-process-section">
        <div className="editorial-section__grid">
          <SectionLead
            label="Process"
            title="A clear process keeps the build moving."
            intro="Clear phases, clear reviews, and a clean launch matter more than extra ceremony."
          />

          <div className="editorial-list home-process-list">
            {processSteps.slice(0, 3).map((step, index) => (
                <article key={step.slug} className="editorial-item">
                <div className="section-stack gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full border border-[color:var(--border-strong)] text-sm font-semibold text-[color:var(--accent-deep)]">
                    0{index + 1}
                  </div>
                  <h3 className="text-lg font-semibold tracking-[-0.02em] text-[color:var(--foreground)]">
                    {step.title}
                  </h3>
                  <p className="max-w-3xl text-sm leading-7 text-[color:var(--foreground-soft)]">
                    {step.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="layout-balanced">
          <div className="section-stack gap-5">
            <SectionLead
              label="Work"
              title="Work stays on the Work page."
              intro="That is where I keep the case studies, live links, and delivery notes."
            />
            <div className="section-actions-center">
              <Link href="/work" className="cta-link">
                Browse work
              </Link>
              <Link href="/about" className="secondary-link">
                Why hire direct
              </Link>
            </div>
          </div>

          <div className="editorial-darkband">
            <div className="section-stack section-stack--center gap-4">
              <p className="section-label">Contact</p>
              <h2 className="section-title">
                Start with a short email.
              </h2>
              <p className="lede">{contactContent.intro}</p>
              <p className="text-sm leading-7 text-white/82">
                {contactContent.responseExpectation}
              </p>
              <div className="section-actions-center pt-1">
                <Link href="/contact" className="cta-link">
                  Start your inquiry
                </Link>
                <Link href="/pricing" className="secondary-link secondary-link--inverse">
                  How pricing works
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
