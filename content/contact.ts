import { siteConfig } from "@/content/site-config";
import type { ContactContent } from "@/lib/content-types";

export const contactContent = {
  eyebrow: "Contact",
  title: "Start with a short email.",
  intro:
    "Tell me about the business, what you need, and whether this is a website, landing page, app, tool, or a mix. I will reply with the clearest next step.",
  email: siteConfig.contactEmail,
  phone: siteConfig.contactPhone,
  phoneHref: siteConfig.contactPhoneHref,
  responseExpectation: "Replies within 1 business day, Monday through Friday.",
  primaryCtaLabel: "Start the email",
  briefPrompts: [
    "Business + what you need:",
    "Website, landing page, app, tool, or both:",
    "Timing + any useful context:",
  ],
  scopeNote:
    "If the request is still too open-ended to quote properly, I may recommend paid discovery before the build.",
  availabilityNote:
    "Website projects, landing pages, apps, tools, and support all fit when the scope is clear enough to plan.",
  methods: [
    {
      label: "Email",
      value: siteConfig.contactEmail,
      href: `mailto:${siteConfig.contactEmail}`,
      note: "Include the business, what you need, and the timing.",
    },
    {
      label: "Phone",
      value: siteConfig.contactPhone,
      href: siteConfig.contactPhoneHref,
      note: "Best for a quick fit check before a project email.",
    },
  ],
  projectTypes: [
    {
      value: "website",
      label: "Website project",
      description: "A custom website, redesign, or landing page that needs clearer trust, content, and conversion paths.",
    },
    {
      value: "portal-or-tool",
      label: "App or tool",
      description: "A portal, dashboard, intake system, internal workflow, or lightweight business app.",
    },
    {
      value: "support",
      label: "Ongoing support",
      description: "Post-launch edits, fixes, and practical help once the site is live.",
    },
    {
      value: "paid-discovery",
      label: "Paid discovery",
      description: "For larger or unclear requests that need scope before I price the build.",
    },
    {
      value: "not-sure",
      label: "Not sure yet",
      description: "For businesses that know what they need help with but want help choosing the right project.",
    },
  ],
} satisfies ContactContent;
