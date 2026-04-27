import { caseStudies, workIndex } from "@/content/work";
import type { CaseStudyEntry, WorkSlug } from "@/lib/content-types";

const caseStudyMap = new Map<WorkSlug, CaseStudyEntry>(
  caseStudies.map((entry) => [entry.slug, entry]),
);

export const featuredWork = workIndex.filter((entry) => entry.featured);

export function isWorkSlug(slug: string): slug is WorkSlug {
  return caseStudyMap.has(slug as WorkSlug);
}

export function getCaseStudyBySlug(slug: string): CaseStudyEntry | undefined {
  return caseStudyMap.get(slug as WorkSlug);
}
