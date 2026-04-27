import type { CaseStudyEntry, WorkIndexEntry } from "@/lib/content-types";

export const caseStudies: readonly CaseStudyEntry[] = [
  {
    slug: "magdas-melons",
    title: "Magda's Melons",
    clientName: "Magda's Melons",
    status: "in-progress",
    clientType: "Seasonal produce business",
    projectType: "Marketing website",
    summary:
      "A marketing website for a local produce brand built to show availability clearly and make inquiry simple.",
    statusNote:
      "Information architecture and launch messaging are in active build.",
    featured: true,
    role: "Positioning, content structure, visual direction, and front-end build.",
    problem:
      "The business needed a site that felt more credible than a social profile and made it easier for local buyers to understand what is offered, when it is available, and how to get in touch.",
    constraints: [
      "Seasonal inventory shifts quickly, so the structure has to stay flexible.",
      "Photography and final copy are still being assembled.",
      "The site needs to stay lightweight and easy to maintain.",
    ],
    approach: [
      "Built the page structure around freshness, availability, and buyer trust instead of generic local-business filler.",
      "Created clear paths for casual visitors, repeat buyers, and wholesale-style inquiries.",
      "Kept the visual direction clean and product-forward rather than leaning on rustic cliches.",
    ],
    deliverables: [
      "Responsive marketing site structure",
      "Homepage and core sales-page content framework",
      "Offer segmentation for browsing versus inquiry",
      "Email-led contact plan",
    ],
    visualProof:
      "Hero, produce spotlight, and inquiry sections are designed; the final photography pass is still pending.",
    resultOrCurrentState:
      "Core structure, hierarchy, and mobile layout are in place. Final copy polish, imagery, and launch QA are still underway.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    relatedServices: ["website-projects", "ongoing-support"],
  },
  {
    slug: "bizcribe",
    title: "Bizcribe",
    clientName: "Bizcribe",
    status: "beta",
    clientType: "Small-business workflow product",
    projectType: "Client portal / internal tool",
    summary:
      "A beta workflow product shaped around a smaller, clearer first release for requests, updates, and account context.",
    statusNote:
      "Beta UI and scope direction are defined, but public launch claims are intentionally withheld.",
    featured: true,
    role: "Workflow framing, product scope narrowing, interface planning, and build-ready front-end direction.",
    problem:
      "The product needed a clearer first-release surface for capturing requests, organizing account context, and reducing operational back-and-forth.",
    constraints: [
      "Product direction is still being validated through beta use.",
      "The interface has to stay simple for non-technical users.",
      "Scope needs room for discovery instead of pretending every workflow is already known.",
    ],
    approach: [
      "Narrowed the beta around a small number of useful workflows instead of a broad feature list.",
      "Structured the interface around intake, status visibility, and quick updates.",
      "Designed reusable states and patterns that can evolve as feedback sharpens the roadmap.",
    ],
    deliverables: [
      "Beta product positioning",
      "Core dashboard and record-view planning",
      "Interaction and empty-state system",
      "Build-ready UI patterns for the first release",
    ],
    visualProof:
      "Dashboard, detail view, and workflow-state screens exist in beta form and are ready for deeper product iteration.",
    resultOrCurrentState:
      "The project has a coherent beta scope and a cleaner interface foundation. Public outcome metrics are not being claimed at this stage.",
    stack: ["React", "TypeScript", "FastAPI", "Tailwind CSS"],
    relatedServices: ["web-apps-tools"],
  },
  {
    slug: "realm-reptiles",
    title: "Realm Reptiles",
    clientName: "Realm Reptiles",
    status: "concept-build",
    clientType: "Specialty animal business",
    projectType: "Marketing website / catalog concept",
    summary:
      "A concept marketing and catalog site built to combine trust, browsing clarity, and a more intentional inquiry path.",
    statusNote:
      "Concept build used as honest proof of direction rather than a live client launch.",
    featured: false,
    role: "Concept framing, niche catalog UX, and front-end presentation system.",
    problem:
      "The business needed a cleaner way to present available animals, care standards, and serious-buyer inquiries without drifting into a cluttered marketplace feel.",
    constraints: [
      "This is a concept build, not a live launch.",
      "The experience has to balance visual appeal with care and trust messaging.",
      "Availability content may change often, so catalog presentation must stay flexible.",
    ],
    approach: [
      "Structured the concept around trust, husbandry clarity, and simple browsing.",
      "Designed category and detail patterns that can support changing availability without becoming chaotic.",
      "Kept the inquiry path intentional so interested buyers can ask better questions without turning the site into a generic storefront.",
    ],
    deliverables: [
      "Concept homepage and catalog structure",
      "Availability and detail-page layout system",
      "Trust and care-content framing",
      "Email-led inquiry experience",
    ],
    visualProof:
      "Homepage, category views, and specimen-detail concepts are established as portfolio-ready layouts.",
    resultOrCurrentState:
      "The concept demonstrates a viable direction for layout, trust framing, and mobile browsing. It is being used as portfolio proof rather than a public launch claim.",
    stack: ["React", "TypeScript", "FastAPI", "Tailwind CSS"],
    relatedServices: ["website-projects"],
  },
];

export const workIndex: readonly WorkIndexEntry[] = caseStudies.map(
  ({
    slug,
    title,
    status,
    clientType,
    projectType,
    summary,
    statusNote,
    featured,
  }) => ({
    slug,
    title,
    status,
    clientType,
    projectType,
    summary,
    statusNote,
    featured,
  }),
);
