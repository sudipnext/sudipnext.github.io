import type { MetadataRoute } from "next"
import { profile } from "@/config/portfolio"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  // Omit lastModified rather than mark unchanged pages as new on every build.
  return ["/", "/projects/", "/cv/"].map((path) => ({ url: `${profile.siteUrl}${path}` }))
}
