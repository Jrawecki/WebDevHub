import Link from "next/link";

import { TrackedContactLink } from "@/components/analytics/tracked-contact-link";
import { contactContent } from "@/content/contact";
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

const homeProcessSteps = [
  {
    title: "Tell me what you need",
    summary:
      "We talk through your business, what the site needs to do, and what a good result looks like.",
  },
  {
    title: "Agree on the plan",
    summary:
      "I lay out the pages, features, price, and timeline so we both know what we're building.",
  },
  {
    title: "I design and build it",
    summary:
      "I handle the design and development, keep you involved at the right points, and get everything ready to launch.",
  },
] as const;

const homeServiceCopy = {
  "website-projects": {
    title: "Custom Websites",
    summary:
      "A clean, custom site that explains what you do, builds trust, and makes it easy for people to take the next step.",
  },
  "web-apps-tools": {
    title: "Interactive Websites & Web Apps",
    summary:
      "Need more than a standard website? I build tools, portals, calculators, forms, and custom apps around the way your business works.",
  },
  "ongoing-support": {
    title: "Hosting & Ongoing Support",
    summary:
      "I can host your site, handle updates, and help with changes after launch, so you're not left figuring it out alone.",
  },
} as const;

export function HomePageContent() {
  return (
    <div className="flex flex-col gap-0">
      <section className="editorial-hero">
        <div className="editorial-hero__grid">
          <div className="section-stack section-stack--center gap-5">
            <div className="section-stack section-stack--center gap-4">
              <div className="section-label-spacer" aria-hidden="true" />
              <h1 className="display-title max-w-4xl">
                Custom websites and web apps, built directly with you and for
                you.
              </h1>
              <p className="lede copy-block">
                I plan, design, and build the whole thing with you. I take
                ownership of the work from start to finish, and when we&apos;re
                done, you own the site.
              </p>
            </div>

            <div className="section-actions-center">
              <TrackedContactLink
                className="cta-link"
                contactLocation="home_hero"
                ctaLabel="Tell me what you need"
              >
                Tell me what you need
              </TrackedContactLink>
              <Link href="/services" className="secondary-link">
                See what I offer
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section
        className="home-services-overview home-services-overview--surface"
        aria-labelledby="home-services-title"
      >
        <div className="home-services-overview__grid">
          <div className="home-services-overview__intro">
            <p className="section-label">Services</p>
            <h2 id="home-services-title" className="section-title">
              Here&apos;s what I offer.
            </h2>
            <p className="lede">
              I build simple business sites, interactive websites, and full web
              apps. I can also host them and help with changes after launch.
            </p>

            <aside className="home-build-approach">
              <p className="home-build-approach__label">Working with me</p>
              <p>
                You work directly with me from the first conversation through
                launch.
              </p>
              <p>
                I handle the planning, design, and development, so the whole
                project stays connected.
              </p>
            </aside>
          </div>

          <ol className="home-service-index">
            {services.map((service, index) => {
              const serviceCopy = homeServiceCopy[service.slug];
              const isFeatured = service.slug === "website-projects";

              return (
                <li
                  key={service.slug}
                  className={
                    isFeatured ? "home-service-index__item--featured" : undefined
                  }
                >
                  <Link
                    href={`/services#${service.slug}`}
                    className="home-service-index__link"
                    aria-label={`View ${serviceCopy.title} service details`}
                  >
                    <span
                      className="home-service-index__number"
                      aria-hidden="true"
                    >
                      0{index + 1}
                    </span>
                    <div className="home-service-index__body">
                      <div className="home-service-index__heading">
                        <h3>{serviceCopy.title}</h3>
                        {isFeatured ? (
                          <p className="home-service-price">
                            <span>A simple place to start</span>
                            <strong>{service.priceFrom}</strong>
                          </p>
                        ) : null}
                      </div>
                      <p className="home-service-index__copy">
                        {serviceCopy.summary}
                      </p>
                      <span className="home-service-index__action">
                        See details
                        <span aria-hidden="true">&rarr;</span>
                      </span>
                    </div>
                  </Link>
                </li>
              );
            })}
          </ol>
        </div>
      </section>

      <section className="editorial-section editorial-section--band home-process-section">
        <div className="editorial-section__grid">
          <SectionLead
            label="Process"
            title="How we'll work together."
            intro="We keep it simple: talk through the idea, agree on what we're building, then I get to work."
          />

          <div className="editorial-list home-process-list">
            {homeProcessSteps.map((step, index) => (
              <article key={step.title} className="editorial-item">
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
                <TrackedContactLink
                  className="cta-link"
                  contactLocation="home_contact_band"
                  ctaLabel="Start your inquiry"
                >
                  Start your inquiry
                </TrackedContactLink>
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
