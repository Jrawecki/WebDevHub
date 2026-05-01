import type { Metadata } from "next";

import { ProcessPageContent } from "@/components/pages/process/process-page";

export const metadata: Metadata = {
  title: "Process",
  description:
    "A clear project process for discovery, scope, build, launch, and support on website and web app work.",
};

export default function ProcessPage() {
  return (
    <main className="page-frame">
      <ProcessPageContent />
    </main>
  );
}
