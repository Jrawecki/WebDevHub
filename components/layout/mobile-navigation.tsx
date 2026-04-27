"use client";

import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useId, useRef, useState } from "react";

type NavigationItem = {
  href: string;
  label: string;
};

type MobileNavigationProps = {
  items: readonly NavigationItem[];
};

function getMobileNavLinkClassName(href: string) {
  return [
    "mobile-nav__link",
    href === "/contact" ? "mobile-nav__link--highlight" : null,
  ]
    .filter(Boolean)
    .join(" ");
}

export function MobileNavigation({ items }: MobileNavigationProps) {
  const [isOpen, setIsOpen] = useState(false);
  const menuId = useId();
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      const target = event.target;

      if (!(target instanceof Node)) {
        return;
      }

      if (!containerRef.current?.contains(target)) {
        setIsOpen(false);
      }
    }

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div className="mobile-nav" ref={containerRef}>
      <button
        type="button"
        className="mobile-nav__toggle"
        aria-controls={menuId}
        aria-expanded={isOpen}
        aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
        onClick={() => setIsOpen((current) => !current)}
      >
        {isOpen ? (
          <X aria-hidden="true" focusable="false" strokeWidth={2} />
        ) : (
          <Menu aria-hidden="true" focusable="false" strokeWidth={2} />
        )}
      </button>
      <nav
        id={menuId}
        aria-label="Mobile primary"
        className="mobile-nav__panel"
        data-open={isOpen ? "true" : "false"}
        hidden={!isOpen}
      >
        <ul className="mobile-nav__list">
          {items.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className={getMobileNavLinkClassName(item.href)}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
