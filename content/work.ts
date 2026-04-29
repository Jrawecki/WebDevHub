import type { CaseStudyEntry, WorkIndexEntry } from "@/lib/content-types";

export const caseStudies: readonly CaseStudyEntry[] = [
  {
    slug: "watermelonbaskets-com",
    title: "watermelonbaskets.com",
    clientName: "watermelonbaskets.com",
    clientType: "Informal sales idea",
    projectType: "Ordering website",
    summary:
      "A live ordering site for a watermelon-basket idea that had already sold through word of mouth, Facebook, and direct messages.",
    featured: true,
    liveUrl: "https://watermelonbaskets.com/",
    screenshots: [
      {
        src: "/work/watermelonbaskets-com/desktop.png",
        alt: "Desktop screenshot of the watermelonbaskets.com homepage.",
        label: "Homepage",
        viewport: "desktop",
      },
      {
        src: "/work/watermelonbaskets-com/mobile.png",
        alt: "Mobile screenshot of the watermelonbaskets.com homepage.",
        label: "Mobile",
        viewport: "mobile",
      },
    ],
    role: "Business-idea framing, content structure, ordering flow, visual direction, and front-end build.",
    problem:
      "The watermelon-basket idea needed a complete public ordering presence, not just a contact link. The site had to explain what the baskets are, show real examples, make package pricing clear, handle pickup or delivery context, and turn word-of-mouth interest into a structured order request.",
    constraints: [
      "The site has to make a handmade local product easy to understand and order.",
      "Package pricing, pickup or delivery details, and occasion-specific options need to stay clear on mobile.",
      "The ordering path has to stay simple enough to support a small, message-led sales process.",
    ],
    approach: [
      "The homepage turns scattered interest into a clear product story, then moves visitors into package selection and order requests.",
      "Package cards expose live pricing and occasion fit before the buyer reaches the form.",
      "Gallery and local service details give the idea enough proof to sell beyond Facebook posts and one-off messages.",
    ],
    deliverables: [
      "Responsive ordering website",
      "Package and pricing presentation",
      "Gallery and occasion proof sections",
      "Local pickup/delivery order flow",
    ],
    visualProof:
      "The live site shows package pricing, product examples, pickup or delivery details, and a direct order path for the watermelon-basket idea.",
    resultOrCurrentState:
      "watermelonbaskets.com gives an already-tested informal sales idea a public ordering experience with package details, real examples, and a direct request flow.",
    stack: ["Next.js", "TypeScript", "Tailwind CSS"],
    relatedServices: ["website-projects", "ongoing-support"],
  },
  {
    slug: "realm-reptiles",
    title: "Realm Reptiles",
    clientName: "Realm Reptiles",
    clientType: "Business idea app",
    projectType: "Full-stack quoting app",
    summary:
      "A full-stack tool for a custom reptile-enclosure business idea, with 3D configuration, assembly planning, draft carts, and live pricing.",
    featured: false,
    liveUrl: "https://realmreptiles.com/",
    screenshots: [
      {
        src: "/work/realm-reptiles/order-enclosure.png",
        alt: "Desktop screenshot of the Realm Reptiles order enclosure builder with 3D visualizer and final price.",
        label: "3D enclosure + pricing",
        viewport: "desktop",
      },
      {
        src: "/work/realm-reptiles/Assemby-screenshot.png",
        alt: "Desktop screenshot of the Realm Reptiles assembly builder with modules, guided placement, and a 3D assembly preview.",
        label: "Assembly builder",
        viewport: "desktop",
        width: 1532,
        height: 704,
      },
    ],
    role: "Business-idea partner, product design, full-stack application build, pricing workflow, and 3D builder implementation.",
    problem:
      "The enclosure idea needed the full buying and quoting workflow in one app. A visitor had to be able to choose species presets or custom dimensions, configure vents and cutouts, see the enclosure in 3D, understand live pricing, combine builds into assemblies, and save a draft that could be reviewed before fabrication.",
    constraints: [
      "Custom enclosure dimensions, species presets, cutouts, vents, materials, and add-ons all affect pricing.",
      "The assembly builder has to represent stacked or wall-style builds without turning the customer flow into CAD software.",
      "Pricing needs to be live enough to guide buyers while still leaving room for manual review when a build needs workshop verification.",
    ],
    approach: [
      "The enclosure builder combines species presets, custom dimensions, feature cutouts, and WebGL visualization so buyers can see what they are designing.",
      "The pricing engine updates the enclosure price and assembly totals from the selected build data instead of using static package copy.",
      "Draft cart and assembly flows let a customer move from one enclosure to a larger stacked setup before final review.",
    ],
    deliverables: [
      "3D enclosure configurator",
      "Assembly builder for stacked and wall layouts",
      "Live pricing and review logic",
      "Draft cart and quote-ready ordering path",
    ],
    visualProof:
      "The screenshots show the live 3D enclosure visualizer, final price panel, assembly modules, guided placement, and the 3D wall-layout builder.",
    resultOrCurrentState:
      "Realm Reptiles has a working app foundation for testing the enclosure idea: buyers can configure, visualize, price, and save build drafts before direct review.",
    stack: ["React", "TypeScript", "FastAPI", "Three.js", "Tailwind CSS"],
    relatedServices: ["web-apps-tools", "website-projects"],
  },
  {
    slug: "bizcribe",
    title: "Bizcribe",
    clientName: "Bizcribe",
    clientType: "Local discovery idea",
    projectType: "Map-based web app",
    summary:
      "A map-based product idea for local business discovery, with filters, business registration, and location-based browsing.",
    featured: true,
    liveUrl: "https://bizcribe.net/",
    screenshots: [
      {
        src: "/work/bizcribe/desktop.png",
        alt: "Desktop screenshot of the Bizcribe homepage.",
        label: "Homepage",
        viewport: "desktop",
      },
      {
        src: "/work/bizcribe/mobile.png",
        alt: "Mobile screenshot of the Bizcribe homepage.",
        label: "Mobile",
        viewport: "mobile",
      },
    ],
    role: "Product concept, interface design, map experience, registration flow, and full-stack build direction.",
    problem:
      "The local discovery idea needed a complete first product surface: map-based browsing for visitors, filters and radius controls for narrowing results, location context for nearby listings, and a registration path so business owners could add themselves instead of relying on a manually maintained directory.",
    constraints: [
      "The map has to stay readable while still giving people useful nearby-business context.",
      "The business registration path has to be obvious without overwhelming the browsing experience.",
      "Location search, filters, and empty states need to make sense even when a region has few listings.",
    ],
    approach: [
      "The first build centers the map and nearby-business list so discovery starts with location instead of a static directory.",
      "Filters and radius controls help users narrow results while preserving the broader map context.",
      "The Add Business path gives the idea a way to grow listings from owners, not just visitors.",
    ],
    deliverables: [
      "Map-based discovery interface",
      "Business registration entry point",
      "Filtering and location browsing UI",
      "Empty-state and local listing patterns",
    ],
    visualProof:
      "The live app shows a location-led directory experience with map browsing, filters, and an owner-facing registration path.",
    resultOrCurrentState:
      "Bizcribe has a working product surface for testing local discovery and business onboarding, with room to grow as listings are added.",
    stack: ["React", "TypeScript", "FastAPI", "Tailwind CSS"],
    relatedServices: ["web-apps-tools"],
  },
];

export const workIndex: readonly WorkIndexEntry[] = caseStudies.map(
  ({
    slug,
    title,
    clientType,
    projectType,
    summary,
    featured,
    liveUrl,
    screenshots,
  }) => ({
    slug,
    title,
    clientType,
    projectType,
    summary,
    featured,
    liveUrl,
    screenshots,
  }),
);
