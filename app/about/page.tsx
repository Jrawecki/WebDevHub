import type { Metadata } from "next";

import { AboutPageContent } from "@/components/pages/about/about-page";

export const metadata: Metadata = {
  title: "About",
  description:
    "About Kuba Rawecki and Kuba's Web Dev Hub, a Delaware web studio for websites, landing pages, apps, and tools.",
};

export default function AboutPage() {
  return (
    <main className="page-frame">
      <AboutPageContent />
    </main>
  );
}
