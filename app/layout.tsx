import type { Metadata } from "next"
import { StructuredData } from "@/components/structured-data"
import { profile } from "@/config/portfolio"
import { identitySchema, pageMetadata, siteDescription } from "@/lib/seo"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  ...pageMetadata("Sudip Parajuli (sudipnext) | Software Engineer", siteDescription, "/"),
  authors: [{ name: profile.name, url: profile.siteUrl }],
  creator: profile.name,
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StructuredData data={identitySchema} />
        {children}
      </body>
    </html>
  )
}
