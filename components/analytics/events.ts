type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;
type GtagEventParams = Record<string, string | number | boolean | (() => void) | undefined>;
type GtagFunction = (
  command: "event",
  eventName: string,
  params?: GtagEventParams,
) => void;

declare global {
  interface Window {
    gtag?: GtagFunction;
  }
}

type TrackOptions = {
  onComplete?: () => void;
  timeoutMs?: number;
};

type ContactClickDetails = {
  contactLocation: string;
  ctaLabel: string;
  destination?: string;
};

type LeadDetails = {
  contactMethod: "gmail" | "mailto";
  contactLocation?: string;
  ctaLabel: string;
  leadSource?: string;
};

function cleanParams(params: AnalyticsEventParams) {
  return Object.fromEntries(
    Object.entries(params).filter(([, value]) => value !== undefined),
  ) as Record<string, string | number | boolean>;
}

export function trackGaEvent(
  eventName: string,
  params: AnalyticsEventParams,
  { onComplete, timeoutMs = 1200 }: TrackOptions = {},
) {
  if (typeof window === "undefined") {
    return;
  }

  if (!window.gtag) {
    onComplete?.();
    return;
  }

  let didComplete = false;
  const complete = () => {
    if (didComplete) {
      return;
    }

    didComplete = true;
    onComplete?.();
  };

  if (onComplete) {
    window.setTimeout(complete, timeoutMs);
  }

  window.gtag("event", eventName, {
    ...cleanParams(params),
    ...(onComplete
      ? {
          event_callback: complete,
          event_timeout: timeoutMs,
        }
      : null),
  });
}

export function trackContactClick({
  contactLocation,
  ctaLabel,
  destination = "/contact",
}: ContactClickDetails) {
  trackGaEvent("contact_click", {
    contact_method: "site_cta",
    contact_location: contactLocation,
    lead_source: "site_cta",
    cta_label: ctaLabel,
    link_url: destination,
  });
}

export function trackGenerateLead(
  {
    contactMethod,
    contactLocation = "contact_form",
    ctaLabel,
    leadSource = "project_inquiry",
  }: LeadDetails,
  options?: TrackOptions,
) {
  trackGaEvent(
    "generate_lead",
    {
      contact_method: contactMethod,
      contact_location: contactLocation,
      lead_source: leadSource,
      cta_label: ctaLabel,
      form_name: "project_inquiry",
    },
    options,
  );
}
