import type { Metadata } from "next";

import { WorkIndexPage } from "@/components/work/work-index-page";

export const metadata: Metadata = {
  title: "My Projects",
  description:
    "Projects by Kuba's Web Dev Hub, including websites, landing pages, web apps, and workflow tools.",
};

export default function WorkPage() {
  return <WorkIndexPage />;
}
