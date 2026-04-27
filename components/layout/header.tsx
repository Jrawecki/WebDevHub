import Link from "next/link";

import { MobileNavigation } from "@/components/layout/mobile-navigation";
import {
  primaryNavigation,
  SiteBrand,
} from "@/components/shared/site-brand";

function getNavLinkClassName(href: string) {
  return [
    "site-nav__link",
    href === "/contact" ? "site-nav__link--highlight" : null,
  ]
    .filter(Boolean)
    .join(" ");
}

export function Header() {
  return (
    <header className="site-header-shell">
      <div className="site-header">
        <div className="page-shell">
          <div className="site-header__frame">
            <SiteBrand size="header" />
            <nav aria-label="Primary" className="site-nav">
              <ul className="site-nav__list">
                {primaryNavigation.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={getNavLinkClassName(item.href)}
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <MobileNavigation items={primaryNavigation} />
          </div>
        </div>
      </div>
    </header>
  );
}
