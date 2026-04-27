import type { MetadataRoute } from "next";

import { workIndex } from "@/content/work";

const baseUrl = "https://webhubde.com";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/services", "/pricing", "/work", "/process", "/about", "/contact"];
  const staticEntries: MetadataRoute.Sitemap = staticRoutes.map((route) => ({
    url: `${baseUrl}${route}`,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : 0.7,
  }));

  const workEntries: MetadataRoute.Sitemap = workIndex.map((entry) => ({
    url: `${baseUrl}/work/${entry.slug}`,
    changeFrequency: "monthly",
    priority: 0.75,
  }));

  return [...staticEntries, ...workEntries];
}
