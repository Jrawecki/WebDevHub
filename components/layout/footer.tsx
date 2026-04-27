import Link from "next/link";

import {
  primaryNavigation,
  SiteBrand,
  siteIdentity,
} from "@/components/shared/site-brand";

const serviceLinks = [
  "Website projects",
  "Landing pages",
  "Web apps and tools",
  "Support subscriptions",
] as const;

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="page-shell site-footer__stack">
        <div className="footer-grid">
          <div className="footer-grid__brand">
            <p className="prose-copy">
              Websites, landing pages, web apps, workflow tools, and steady
              support for businesses that need clearer digital systems.
            </p>
            <SiteBrand size="footer" />
          </div>

          <div>
            <p className="footer-heading">Pages</p>
            <ul className="footer-list footer-list--columns">
              {primaryNavigation.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">What you can hire for</p>
            <ul className="footer-list">
              {serviceLinks.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <p className="footer-heading">Contact</p>
            <ul className="footer-list footer-list--contact">
              <li>{siteIdentity.regionLabel}</li>
              <li>
                <a href={`mailto:${siteIdentity.contactEmail}`}>
                  {siteIdentity.contactEmail}
                </a>
              </li>
              <li>
                <a href={siteIdentity.contactPhoneHref}>
                  {siteIdentity.contactPhone}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="site-footer__meta">
          <p>
            {"\u00A9"} {new Date().getFullYear()} {siteIdentity.brandName}. Built
            directly with the person you hire.
          </p>
        </div>
      </div>
    </footer>
  );
}
