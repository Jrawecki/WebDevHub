import type { Metadata } from "next";

import { PricingPageContent } from "@/components/pages/pricing/pricing-page";

export const metadata: Metadata = {
  title: "Pricing",
  description:
    "Straightforward pricing for landing pages, websites, focused tools, workflow apps, and ongoing launch care.",
};

export default function PricingPage() {
  return (
    <main className="page-frame">
      <PricingPageContent />
    </main>
  );
}
