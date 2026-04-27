import type { Metadata } from "next";

import { ContactPageView } from "@/components/pages/contact/contact-page";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Email-first contact for website, landing page, web app, tool, and support work.",
};

export default function ContactPage() {
  return <ContactPageView />;
}
