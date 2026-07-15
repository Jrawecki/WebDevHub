import { aboutContent } from "@/content/about";

export function AboutPageContent() {
  return (
    <div className="flex flex-col gap-0">
      <section className="page-intro">
        <h1 className="display-title">About</h1>
        <p className="lede copy-block">
          You work directly with me while I plan, design, and build the
          project from start to finish.
        </p>
      </section>

      <section className="editorial-section">
        <div className="layout-balanced">
          <div className="section-stack gap-6">
            <div className="section-stack gap-3">
              <h2 className="section-title max-w-4xl">{aboutContent.title}</h2>
              <p className="prose-copy copy-block">{aboutContent.intro}</p>
            </div>

            <div className="editorial-list">
              {aboutContent.story.map((entry) => (
                <article key={entry} className="editorial-item">
                  <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                    {entry}
                  </p>
                </article>
              ))}
            </div>
          </div>

          <div className="editorial-darkband">
            <div className="section-stack section-stack--center gap-4">
              <h2 className="section-title">
                The thinking, design, and build stay connected, and I stay
                responsible for the finished work.
              </h2>
              <div className="editorial-dark-list">
                {aboutContent.credibilityPoints.map((point) => (
                  <p key={point} className="text-sm leading-7 text-white/82">
                    {point}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="editorial-section editorial-section--band">
        <div className="layout-measure section-stack gap-6">
          <div className="section-stack gap-3">
            <h2 className="section-title max-w-4xl">How I work</h2>
            <p className="prose-copy copy-block">
              I keep the work practical, direct, and tied to what the business
              actually needs.
            </p>
          </div>

          <div className="note-grid note-grid--3">
            {aboutContent.principles.map((principle) => (
              <article key={principle.title} className="editorial-note">
                <h3 className="text-xl font-semibold tracking-[-0.03em] text-[color:var(--foreground)]">
                  {principle.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                  {principle.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="editorial-section">
        <div className="editorial-section__grid">
          <div className="section-stack gap-4">
            <h2 className="section-title max-w-4xl">
              Why working directly helps
            </h2>
          </div>

          <div className="editorial-list">
            {[
              {
                title: "The thinking stays connected to the build",
                body:
                  "I shape what the page needs to say, how it should work, and how it gets built.",
              },
              {
                title: "The scope matches the job",
                body:
                  "We choose a website, landing page, app, or tool based on what the business actually needs.",
              },
              {
                title: "Your idea keeps its direction",
                body:
                  "You work with me through the key decisions, so the project stays true to the original goal.",
              },
            ].map((item) => (
              <article key={item.title} className="editorial-item">
                <h3 className="text-lg font-semibold tracking-[-0.03em] text-[color:var(--foreground)]">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-[color:var(--foreground-soft)]">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
