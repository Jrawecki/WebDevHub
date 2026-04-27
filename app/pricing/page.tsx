import type { Metadata } from "next";

import { PricingPageContent } from "@/components/pages/pricing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "A short explanation of how websites, landing pages, web apps, tools, and support are scoped and priced without public price numbers.",
};

export default function PricingPage() {
  return (
    <main className="page-frame">
      <PricingPageContent />
    </main>
  );
}
