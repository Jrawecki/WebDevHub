import Link from "next/link";

import { caseStudies } from "@/content/work";

import {
  RelatedServiceLinks,
  WorkStatusBadge,
} from "./work-primitives";

export function WorkIndexPage() {
  return (
    <main className="page-frame">
      <div className="flex flex-col gap-0">
        <section className="page-intro projects-intro">
          <h1 className="display-title">My Projects</h1>
        </section>

        <section
          className="editorial-section projects-section"
          aria-label="My projects"
        >
          <div className="layout-measure">
            <div className="project-list">
              {caseStudies.map((entry, index) => (
                <article key={entry.slug} className="project-row proof-row">
                  <div className="project-row__number">0{index + 1}</div>
                  <div className="project-row__body">
                    <div className="project-row__header">
                      <div className="project-row__meta">
                        <WorkStatusBadge status={entry.status} />
                        <span>{entry.projectType}</span>
                      </div>
                      <h3>{entry.title}</h3>
                      <p>{entry.summary}</p>
                    </div>

                    <div className="project-row__details">
                      <div>
                        <p className="project-row__label">Current state</p>
                        <p>{entry.resultOrCurrentState}</p>
                      </div>
                      <div>
                        <p className="project-row__label">Services</p>
                        <RelatedServiceLinks relatedServices={entry.relatedServices} />
                      </div>
                    </div>

                    <div className="project-row__actions">
                      <Link href={`/work/${entry.slug}`} className="cta-link">
                        View project
                      </Link>
                      {entry.liveUrl ? (
                        <a
                          href={entry.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="secondary-link"
                        >
                          Website
                        </a>
                      ) : null}
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
