import Link from "next/link";

import type { CaseStudyEntry } from "@/lib/content-types";

import {
  RelatedServiceLinks,
  WorkActionRow,
  WorkScreenshotGallery,
} from "./work-primitives";

type WorkDetailPageContentProps = {
  caseStudy: CaseStudyEntry;
  moreCaseStudies: readonly CaseStudyEntry[];
};

export function WorkDetailPageContent({
  caseStudy,
  moreCaseStudies,
}: WorkDetailPageContentProps) {
  return (
    <main className="page-frame">
      <div className="flex flex-col gap-0">
        <section className="page-intro">
          <div className="page-intro__meta">
            <Link href="/work" className="transition-colors hover:text-[var(--foreground)]">
              Work
            </Link>
            <span aria-hidden="true">/</span>
            <span>{caseStudy.title}</span>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <span className="rounded-full border border-[color:var(--border)] px-3 py-2 text-sm text-[var(--foreground-soft)]">
              {caseStudy.projectType}
            </span>
            <span className="rounded-full border border-[color:var(--border)] px-3 py-2 text-sm text-[var(--foreground-soft)]">
              {caseStudy.clientType}
            </span>
          </div>
          <h1 className="display-title">{caseStudy.title}</h1>
          <p className="lede copy-block">{caseStudy.summary}</p>
          <div className="page-intro__actions">
            <WorkActionRow
              entry={caseStudy}
              primaryLabel="Discuss similar work"
              detailHref="/contact"
            />
          </div>
        </section>

        <section className="editorial-section">
          <div className="layout-balanced">
            <div className="section-stack gap-4">
              <h2 className="section-title max-w-4xl">
                What needed solving
              </h2>
              <p className="prose-copy copy-block">{caseStudy.problem}</p>

              <div className="structured-row__block">
                <p className="structured-row__label">Constraints</p>
                <ul className="structured-row__list">
                  {caseStudy.constraints.map((constraint) => (
                    <li key={constraint}>{constraint}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="section-stack gap-4">
              <div className="structured-row__block">
                <p className="structured-row__label">Current proof</p>
                <p className="structured-row__copy">
                  {caseStudy.resultOrCurrentState}
                </p>
              </div>
              <div className="structured-row__block">
                <p className="structured-row__label">Visible proof</p>
                <p className="structured-row__copy">{caseStudy.visualProof}</p>
              </div>
              <div className="structured-row__block">
                <p className="structured-row__label">Related services</p>
                <RelatedServiceLinks relatedServices={caseStudy.relatedServices} />
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--band">
          <div className="layout-balanced work-proof-layout">
            <div className="section-stack gap-4">
              <h2 className="section-title max-w-4xl">
                Screenshots from the live site
              </h2>
              <p className="prose-copy copy-block">{caseStudy.visualProof}</p>
              <p className="text-sm leading-7 text-[color:var(--section-band-foreground-soft)]">
                These screenshots are captured from live public views so the
                portfolio proof matches what visitors can open and use today.
              </p>
            </div>

            <WorkScreenshotGallery
              screenshots={caseStudy.screenshots}
              variant="feature"
            />
          </div>
        </section>

        <section className="editorial-section editorial-section--band">
          <div className="layout-measure">
            <div className="section-stack gap-3 pb-4">
              <h2 className="section-title max-w-4xl">
                What the build proves
              </h2>
            </div>

            <div className="build-proof-grid">
              {caseStudy.approach.map((step, index) => (
                <article key={step} className="build-proof-item">
                  <p className="build-proof-item__label">
                    Proof 0{index + 1}
                  </p>
                  <p>{step}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="editorial-section">
          <div className="layout-balanced">
            <div className="section-stack gap-4">
              <h2 className="section-title max-w-4xl">
                What the project includes
              </h2>

              <div className="structured-row__block">
                <p className="structured-row__label">Deliverables</p>
                <ul className="structured-row__list">
                  {caseStudy.deliverables.map((deliverable) => (
                    <li key={deliverable}>{deliverable}</li>
                  ))}
                </ul>
              </div>

              <div className="structured-row__block">
                <p className="structured-row__label">Stack</p>
                <div className="flex flex-wrap gap-2.5">
                  {caseStudy.stack.map((item) => (
                    <span
                      key={item}
                      className="rounded-full border border-[color:var(--border)] px-3 py-2 text-sm font-medium text-[var(--foreground-soft)]"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="structured-row__actions">
                <WorkActionRow
                  entry={caseStudy}
                  primaryLabel="Start your inquiry"
                  detailHref="/contact"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="editorial-section editorial-section--band">
          <div className="layout-measure">
            <div className="section-stack gap-3 pb-4">
              <h2 className="section-title max-w-4xl">
                More work
              </h2>
            </div>

            <div className="structured-rows">
              {moreCaseStudies.map((entry) => (
                <Link key={entry.slug} href={`/work/${entry.slug}`} className="structured-row proof-row">
                  <div className="layout-balanced">
                    <div className="structured-row__head">
                      <div className="structured-row__meta">
                        <span className="text-sm text-[var(--foreground-muted)]">
                          {entry.projectType}
                        </span>
                        <span className="text-sm text-[var(--foreground-muted)]">
                          {entry.clientType}
                        </span>
                      </div>
                      <h3 className="structured-row__title">{entry.title}</h3>
                      <p className="structured-row__summary">{entry.summary}</p>
                    </div>
                    <div className="structured-row__actions">
                      <span className="secondary-link">Open case study</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
