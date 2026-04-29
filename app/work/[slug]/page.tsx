import type { Metadata } from "next";
import { notFound, permanentRedirect } from "next/navigation";

import { WorkDetailPageContent } from "@/components/work/work-detail-page";
import { caseStudies, workIndex } from "@/content/work";
import { getCaseStudyBySlug } from "@/lib/content-work";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return workIndex.map((entry) => ({ slug: entry.slug }));
}

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    return {
      title: "Work",
    };
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
  };
}

export default async function WorkDetailPage({
  params,
}: WorkDetailPageProps) {
  const { slug } = await params;

  if (slug === "magdas-melons") {
    permanentRedirect("/work/watermelonbaskets-com");
  }

  const caseStudy = getCaseStudyBySlug(slug);

  if (!caseStudy) {
    notFound();
  }

  const moreCaseStudies = caseStudies.filter((entry) => entry.slug !== slug).slice(0, 2);

  return (
    <WorkDetailPageContent
      caseStudy={caseStudy}
      moreCaseStudies={moreCaseStudies}
    />
  );
}
