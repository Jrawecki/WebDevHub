export type BrandMode = "hybrid";

export type StudioStatus = "placeholder";

export type ContactMode = "email-only";

export type ProjectStatus = "live" | "beta" | "in-progress" | "concept-build";

export type ServiceSlug =
  | "website-projects"
  | "web-apps-tools"
  | "ongoing-support";

export type ProcessSlug =
  | "discovery"
  | "scope"
  | "build"
  | "launch"
  | "support";

export type WorkSlug = "magdas-melons" | "bizcribe" | "realm-reptiles";

export type ContactProjectType =
  | "website"
  | "portal-or-tool"
  | "support"
  | "paid-discovery"
  | "not-sure";

export type NavItem = {
  label: string;
  href: string;
};

export type SiteConfig = {
  studioName: string;
  founderName: string;
  regionLabel: string;
  contactEmail: string;
  contactPhone: string;
  contactPhoneHref: string;
  brandMode: BrandMode;
  studioStatus: StudioStatus;
  contactMode: ContactMode;
  siteTitle: string;
  siteDescription: string;
  brandSummary: string;
  primaryCta: {
    label: string;
    href: string;
  };
  primaryNavigation: readonly NavItem[];
  footerNavigation: readonly NavItem[];
};

export type ServiceEntry = {
  slug: ServiceSlug;
  title: string;
  summary: string;
  audienceFit: string;
  primaryOutcome: string;
  deliverables: readonly string[];
  startingPoint: string;
  nextStep: string;
};

export type ProcessStep = {
  slug: ProcessSlug;
  title: string;
  summary: string;
  whatHappens: readonly string[];
  clientResponsibilities: readonly string[];
  outputs: readonly string[];
};

export type AboutPrinciple = {
  title: string;
  description: string;
};

export type AboutContent = {
  eyebrow: string;
  title: string;
  summary: string;
  intro: string;
  story: readonly string[];
  principles: readonly AboutPrinciple[];
  credibilityPoints: readonly string[];
};

export type ContactMethod = {
  label: string;
  value: string;
  href: string;
  note: string;
};

export type ContactProjectTypeOption = {
  value: ContactProjectType;
  label: string;
  description: string;
};

export type ContactContent = {
  eyebrow: string;
  title: string;
  intro: string;
  email: string;
  phone: string;
  phoneHref: string;
  responseExpectation: string;
  primaryCtaLabel: string;
  briefPrompts: readonly string[];
  scopeNote: string;
  availabilityNote: string;
  methods: readonly ContactMethod[];
  projectTypes: readonly ContactProjectTypeOption[];
};

export type PricingSection = {
  title: string;
  body: string;
  bullets: readonly string[];
};

export type PricingContent = {
  eyebrow: string;
  title: string;
  intro: string;
  websiteProjects: PricingSection;
  webAppsTools: PricingSection;
  directCollaboration: PricingSection;
  purchaseIncludes: PricingSection;
  supportOptions: PricingSection;
  closingNote: string;
  primaryCtaLabel: string;
  secondaryCtaLabel: string;
};

export type WorkIndexEntry = {
  slug: WorkSlug;
  title: string;
  status: ProjectStatus;
  clientType: string;
  projectType: string;
  summary: string;
  statusNote: string;
  featured: boolean;
};

export type CaseStudyEntry = WorkIndexEntry & {
  clientName: string;
  role: string;
  problem: string;
  constraints: readonly string[];
  approach: readonly string[];
  deliverables: readonly string[];
  visualProof: string;
  resultOrCurrentState: string;
  stack: readonly string[];
  relatedServices: readonly ServiceSlug[];
  liveUrl?: string;
};
