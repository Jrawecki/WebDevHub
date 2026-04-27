import { processSteps } from "@/content/process";

export function ProcessPageContent() {
  return (
    <div className="flex flex-col gap-0">
      <section className="page-intro">
        <h1 className="display-title">Process</h1>
        <p className="lede copy-block">
          Five phases. Clear scope. Clean handoff.
        </p>
      </section>

      <section className="editorial-section">
        <div className="layout-measure">
          <div className="structured-rows">
            {processSteps.map((step, index) => (
              <article key={step.slug} className="structured-row process-phase">
                <div className="layout-balanced">
                  <div className="structured-row__head">
                    <div className="structured-row__meta">
                      <span className="structured-row__index">
                        0{index + 1}
                      </span>
                    </div>
                    <h3 className="structured-row__title">{step.title}</h3>
                    <p className="structured-row__summary">{step.summary}</p>
                    <p className="structured-row__copy">
                      {step.clientResponsibilities[0]}
                    </p>
                  </div>

                  <div className="structured-row__body">
                    <div className="structured-row__block">
                      <p className="structured-row__label">Key actions</p>
                      <ul className="structured-row__list">
                        {step.whatHappens.slice(0, 2).map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="structured-row__block">
                      <p className="structured-row__label">Outputs</p>
                      <ul className="structured-row__list">
                        {step.outputs.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-section--band">
        <div className="layout-measure">
          <div className="section-stack gap-3 pb-4">
            <h2 className="section-title max-w-4xl">
              A few boundaries keep the project useful.
            </h2>
          </div>

          <div className="structured-rows">
            {[
              {
                title: "Feedback stays grouped",
                body:
                  "Reviews work best when comments are consolidated and tied to agreed checkpoints.",
              },
              {
                title: "New requests become new scope",
                body:
                  "If the ask changes materially, it gets treated as new work instead of vanishing into the timeline.",
              },
              {
                title: "Support is not endless build mode",
                body:
                  "Post-launch help covers edits, fixes, and practical improvements. Bigger additions become a new phase.",
              },
            ].map((item) => (
              <article key={item.title} className="structured-row">
                <div className="layout-balanced">
                  <div className="structured-row__head">
                    <h3 className="structured-row__title">{item.title}</h3>
                  </div>
                  <div className="structured-row__block">
                    <p className="structured-row__copy">{item.body}</p>
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
