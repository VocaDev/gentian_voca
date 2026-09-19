import type { MetadataRoute } from "next";
import { site } from "@/content/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-09-20");
  return [
    { url: site.url, lastModified, changeFrequency: "monthly", priority: 1 },
    { url: `${site.url}/work/kontinuum`, lastModified, changeFrequency: "yearly", priority: 0.9 },
    { url: `${site.url}/work/lokalweb`, lastModified, changeFrequency: "yearly", priority: 0.7 },
  ];
}
