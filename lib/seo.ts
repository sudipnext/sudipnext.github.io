import type { Metadata } from "next"
import { links, profile, projects } from "@/config/portfolio"

export const siteDescription =
  "Sudip Parajuli (sudipnext), Software Engineer & Open Source Lead at Presenton in Kathmandu, Nepal. Explore my projects, experience, and technical writing."

export function pageMetadata(title: string, description: string, path: string): Metadata {
  return {
    title: { absolute: title },
    description,
    alternates: { canonical: `${profile.siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${profile.siteUrl}${path}`,
      siteName: `${profile.name} (${profile.nickname})`,
      locale: "en_US",
      type: "website",
    },
    twitter: { card: "summary", title, description, creator: "@sudipnext" },
  }
}

const personId = `${profile.siteUrl}/#person`
const websiteId = `${profile.siteUrl}/#website`

export const identitySchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      "@id": personId,
      name: profile.name,
      alternateName: profile.nickname,
      url: `${profile.siteUrl}/`,
      jobTitle: profile.jobTitle,
      email: profile.email,
      address: { "@type": "PostalAddress", addressLocality: "Kathmandu", addressCountry: "NP" },
      worksFor: { "@type": "Organization", name: "Presenton", url: links.presenton },
      sameAs: [links.github, links.linkedin, links.scholar, links.youtube, links.blog, links.medium],
    },
    {
      "@type": "WebSite",
      "@id": websiteId,
      url: `${profile.siteUrl}/`,
      name: profile.name,
      alternateName: profile.nickname,
      description: siteDescription,
      inLanguage: "en",
      publisher: { "@id": personId },
    },
  ],
}

export function profilePageSchema(path: string, name: string) {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    "@id": `${profile.siteUrl}${path}#webpage`,
    url: `${profile.siteUrl}${path}`,
    name,
    inLanguage: "en",
    isPartOf: { "@id": websiteId },
    mainEntity: { "@id": personId },
  }
}

export const projectsSchema = {
  "@context": "https://schema.org",
  "@type": "CollectionPage",
  "@id": `${profile.siteUrl}/projects/#webpage`,
  url: `${profile.siteUrl}/projects/`,
  name: `Projects by ${profile.name} (${profile.nickname})`,
  inLanguage: "en",
  isPartOf: { "@id": websiteId },
  about: { "@id": personId },
  mainEntity: {
    "@type": "ItemList",
    itemListElement: projects.map((project, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: project.name,
      url: project.url,
    })),
  },
}
