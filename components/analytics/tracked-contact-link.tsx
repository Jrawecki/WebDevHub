"use client";

import Link from "next/link";
import type { ComponentProps, MouseEvent } from "react";

import { trackContactClick } from "@/components/analytics/events";

type LinkProps = ComponentProps<typeof Link>;

type TrackedContactLinkProps = Omit<LinkProps, "href" | "onClick"> & {
  href?: LinkProps["href"];
  contactLocation: string;
  ctaLabel: string;
  onClick?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

function getDestination(href: LinkProps["href"]) {
  if (typeof href === "string") {
    return href;
  }

  return href.pathname ?? "/contact";
}

export function TrackedContactLink({
  href = "/contact",
  contactLocation,
  ctaLabel,
  onClick,
  children,
  ...props
}: TrackedContactLinkProps) {
  function handleClick(event: MouseEvent<HTMLAnchorElement>) {
    trackContactClick({
      contactLocation,
      ctaLabel,
      destination: getDestination(href),
    });
    onClick?.(event);
  }

  return (
    <Link href={href} onClick={handleClick} {...props}>
      {children}
    </Link>
  );
}
