import { profile } from "@/config/portfolio"
import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: `${profile.siteUrl}/sitemap.xml`,
  }
}