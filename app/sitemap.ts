import { MetadataRoute } from "next"

export const dynamic = "force-static"

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://parajulisudip.com.np"

  return [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/projects/`, lastModified: new Date() },
    { url: `${baseUrl}/cv/`, lastModified: new Date() },
  ]
}
