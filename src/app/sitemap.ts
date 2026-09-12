import type { MetadataRoute } from "next";
import { SITE } from "@/lib/constants";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/subjects/",
    "/about/",
    "/pricing/",
    "/contact/",
    "/resources/",
    "/privacy/",
    "/terms/",
  ].map((path) => ({
    url: `${SITE.url}${path}`,
    lastModified: new Date("2026-09-12"),
    changeFrequency: "monthly" as const,
    priority: path === "" ? 1 : 0.7,
  }));

  return staticRoutes;
}
