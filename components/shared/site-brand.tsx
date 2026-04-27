import Image from "next/image";
import Link from "next/link";

import { siteConfig } from "@/content/site-config";

type SiteBrandProps = {
  href?: string;
  className?: string;
  useBadgeSurface?: boolean;
  size?: "header" | "footer";
};

const PLACEHOLDER_PATTERN = /^[A-Z0-9_]+$/;

function resolveValue(value: string, fallback: string) {
  const trimmedValue = value.trim();

  if (!trimmedValue || PLACEHOLDER_PATTERN.test(trimmedValue)) {
    return fallback;
  }

  return trimmedValue;
}

const founderName = resolveValue(siteConfig.founderName, "Your Name");

export const siteIdentity = {
  brandName: resolveValue(siteConfig.studioName, founderName),
  founderName,
  regionLabel: resolveValue(siteConfig.regionLabel, "Delaware"),
  contactEmail: resolveValue(siteConfig.contactEmail, "jrawecki31@gmail.com"),
  contactPhone: resolveValue(siteConfig.contactPhone, "(302) 559-8440"),
  contactPhoneHref: resolveValue(siteConfig.contactPhoneHref, "tel:+13025598440"),
};

export const primaryNavigation = siteConfig.primaryNavigation;

export function SiteBrand({
  href = "/",
  className,
  useBadgeSurface = false,
  size = "header",
}: SiteBrandProps) {
  const brandClassName = [
    "site-brand",
    useBadgeSurface ? "site-brand--badge" : null,
    size === "footer" ? "site-brand--footer" : "site-brand--header",
    className ?? null,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <Link
      href={href}
      className={brandClassName}
      aria-label={`${siteIdentity.brandName} home`}
    >
      <span className="site-brand__logo-shell" aria-hidden="true">
        <Image
          className="site-brand__logo"
          src="/brand/Logo.svg?v=20260427-code"
          alt=""
          width={2048}
          height={682}
          unoptimized
        />
      </span>
      <span className="site-brand__sr-only">
        {siteIdentity.brandName}
      </span>
    </Link>
  );
}
