import type { MetadataRoute } from "next";
import { motorhomes } from "@/data/motorhomes";
import { listingPath } from "@/lib/seo";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return [
    {
      url: `${site.url}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${site.url}/inventory/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${site.url}/about/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.5,
    },
    {
      url: `${site.url}/contact/`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.6,
    },
    ...motorhomes.map((van) => ({
      url: `${site.url}${listingPath(van.slug)}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
