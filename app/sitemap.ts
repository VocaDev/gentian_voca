import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const rebuilt = new Date("2026-09-20");
  const reworked = new Date("2026-11-06");
  return [
    { url: site.url, lastModified: reworked, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/work`, lastModified: reworked, changeFrequency: "monthly", priority: 0.9 },
    { url: `${site.url}/background`, lastModified: reworked, changeFrequency: "monthly", priority: 0.8 },
    { url: `${site.url}/work/kontinuum`, lastModified: rebuilt, changeFrequency: "yearly", priority: 0.9 },
    { url: `${site.url}/work/lokalweb`, lastModified: rebuilt, changeFrequency: "yearly", priority: 0.7 },
  ];
}
