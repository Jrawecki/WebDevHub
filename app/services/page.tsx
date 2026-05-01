import type { Metadata } from "next";

import { ServicesPageContent } from "@/components/pages/services/services-page";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Custom websites, landing pages, web apps, workflow tools, and ongoing support for Delaware businesses.",
};

export default function ServicesPage() {
  return (
    <main className="page-frame">
      <ServicesPageContent />
    </main>
  );
}
