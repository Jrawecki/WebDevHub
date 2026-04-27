import Link from "next/link";

import { services } from "@/content/services";
import type {
  CaseStudyEntry,
  ProjectStatus,
  ServiceSlug,
} from "@/lib/content-types";

const statusMeta: Record<
  ProjectStatus,
  {
    label: string;
    summary: string;
    textColor: string;
    borderColor: string;
    background: string;
    dotColor: string;
  }
> = {
  live: {
    label: "Live",
    summary: "Shipped and publicly in use.",
    textColor: "var(--status-live-text)",
    borderColor: "var(--status-live-border)",
    background: "var(--status-live-background)",
    dotColor: "var(--status-live-dot)",
  },
  beta: {
    label: "Beta",
    summary: "Usable direction with scope still being refined.",
    textColor: "var(--status-beta-text)",
    borderColor: "var(--status-beta-border)",
    background: "var(--status-beta-background)",
    dotColor: "var(--status-beta-dot)",
  },
  "in-progress": {
    label: "In Progress",
    summary: "Active build with launch details still being finished.",
    textColor: "var(--accent-deep)",
    borderColor: "var(--status-progress-border)",
    background: "var(--status-progress-background)",
    dotColor: "var(--accent)",
  },
  "concept-build": {
    label: "Concept Build",
    summary: "Honest directional proof rather than a live launch claim.",
    textColor: "var(--status-concept-text)",
    borderColor: "var(--status-concept-border)",
    background: "var(--status-concept-background)",
    dotColor: "var(--status-concept-dot)",
  },
};

const serviceTitleBySlug = new Map<ServiceSlug, string>(
  services.map((service) => [service.slug, service.title]),
);

export function getStatusMeta(status: ProjectStatus) {
  return statusMeta[status];
}

export function getServiceTitle(slug: ServiceSlug) {
  return serviceTitleBySlug.get(slug) ?? slug;
}

export function WorkStatusBadge({
  status,
  className,
}: {
  status: ProjectStatus;
  className?: string;
}) {
  const meta = getStatusMeta(status);

  return (
    <span
      className={`work-status-badge inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-[0.72rem] font-semibold uppercase tracking-[0.18em] ${className ?? ""}`}
      style={{
        color: meta.textColor,
        borderColor: meta.borderColor,
        background: meta.background,
      }}
    >
      <span
        aria-hidden="true"
        className="h-2 w-2 rounded-full"
        style={{ backgroundColor: meta.dotColor }}
      />
      {meta.label}
    </span>
  );
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
