import type { MetadataRoute } from "next";
import { PROJECTS } from "@/lib/projects";
import { POSTS } from "@/lib/posts";
import { SITE } from "@/lib/site";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = [
    "", "/forge", "/platforms", "/platforms/civic", "/platforms/operations",
    "/work", "/services", "/writing", "/about", "/contact", "/india",
  ].map((p) => ({
    url: `${SITE.url}${p}/`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: p === "" ? 1 : 0.8,
  }));

  const work = PROJECTS.map((p) => ({
    url: `${SITE.url}/work/${p.slug}/`,
    lastModified: new Date(),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  const posts = POSTS.map((p) => ({
    url: `${SITE.url}/writing/${p.slug}/`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...staticPages, ...work, ...posts];
}
