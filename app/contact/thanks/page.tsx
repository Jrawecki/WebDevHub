import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Request Sent",
  description: "Confirmation that your project inquiry was sent.",
  robots: {
    index: false,
    follow: false,
  },
};

export default function ContactThanksPage() {
  return (
    <main className="page-frame">
      <section className="page-intro" aria-labelledby="contact-thanks-title">
        <div className="layout-measure section-stack">
          <p className="section-label">Contact</p>
          <h1 id="contact-thanks-title" className="display-title">
            Request sent.
          </h1>
          <p className="lede copy-block">
            Thanks for reaching out. I will review the details and reply by
            email as soon as I can.
          </p>
          <div className="page-intro__actions">
            <Link href="/" className="cta-link">
              Back to home
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
