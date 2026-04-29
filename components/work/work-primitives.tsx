import Image from "next/image";
import Link from "next/link";

import { services } from "@/content/services";
import type {
  CaseStudyEntry,
  ServiceSlug,
  WorkScreenshot,
} from "@/lib/content-types";

const serviceTitleBySlug = new Map<ServiceSlug, string>(
  services.map((service) => [service.slug, service.title]),
);

export function getServiceTitle(slug: ServiceSlug) {
  return serviceTitleBySlug.get(slug) ?? slug;
}

export function WorkActionRow({
  entry,
  primaryLabel = "Read case study",
  detailHref,
}: {
  entry: CaseStudyEntry;
  primaryLabel?: string;
  detailHref?: string;
}) {
  const href = detailHref ?? `/work/${entry.slug}`;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link href={href} className="cta-link">
        {primaryLabel}
      </Link>
      <a
        href={entry.liveUrl}
        target="_blank"
        rel="noreferrer"
        className="secondary-link"
      >
        Open live site
      </a>
    </div>
  );
}

export function WorkScreenshotGallery({
  screenshots,
  variant = "compact",
}: {
  screenshots: readonly WorkScreenshot[];
  variant?: "compact" | "feature";
}) {
  const isPairedDesktop = screenshots.every(
    (screenshot) => screenshot.viewport === "desktop",
  );
  const className = [
    "work-screenshot-gallery",
    `work-screenshot-gallery--${variant}`,
    isPairedDesktop ? "work-screenshot-gallery--paired" : null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={className}
      aria-label="Project screenshots"
    >
      {screenshots.map((screenshot) => {
        const isDesktop = screenshot.viewport === "desktop";
        const defaultDimensions = isDesktop
          ? { width: 1440, height: 1000 }
          : { width: 390, height: 844 };
        const dimensions = {
          width: screenshot.width ?? defaultDimensions.width,
          height: screenshot.height ?? defaultDimensions.height,
        };

        return (
          <figure
            key={screenshot.src}
            className={`work-shot work-shot--${screenshot.viewport}`}
          >
            <div className="work-shot__chrome" aria-hidden="true">
              <span />
              <span />
              <span />
            </div>
            <div className="work-shot__image">
              <Image
                src={screenshot.src}
                alt={screenshot.alt}
                width={dimensions.width}
                height={dimensions.height}
                sizes={
                  isPairedDesktop
                    ? "(min-width: 1080px) 36vw, (min-width: 720px) 44vw, 92vw"
                    : isDesktop
                      ? "(min-width: 900px) 52vw, 92vw"
                      : "(min-width: 900px) 18vw, 42vw"
                }
                loading="eager"
                className="work-shot__media"
              />
            </div>
            <figcaption className="work-shot__caption">
              {screenshot.label}
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
}

export function RelatedServiceLinks({
  relatedServices,
}: {
  relatedServices: readonly ServiceSlug[];
}) {
  return (
    <div className="flex flex-wrap gap-2.5">
      {relatedServices.map((service) => (
        <Link
          key={service}
          href="/services"
          className="inline-flex items-center rounded-full border px-3 py-2 text-sm font-medium transition-transform duration-200 hover:-translate-y-0.5"
          style={{
            color: "var(--foreground-soft)",
            borderColor: "var(--border)",
            background: "var(--surface-soft)",
          }}
        >
          {getServiceTitle(service)}
        </Link>
      ))}
    </div>
  );
}
