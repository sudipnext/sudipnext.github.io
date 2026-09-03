import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://parajulisudip.com.np"),
  title: {
    default: "Sudip Parajuli",
    template: "%s · Sudip Parajuli",
  },
  description:
    "Sudip Parajuli is a software engineer from Nepal building open-source AI products, backend systems, machine-learning applications, and robotics projects.",
  keywords: [
    "Sudip Parajuli",
    "sudipnext",
    "software engineer Nepal",
    "Presenton",
    "open source",
    "Python",
    "Django",
    "AI",
  ],
  authors: [{ name: "Sudip Parajuli", url: "https://parajulisudip.com.np" }],
  alternates: { canonical: "/" },
  openGraph: {
    title: "Sudip Parajuli",
    description: "Software engineer building open-source AI products and dependable systems.",
    url: "/",
    siteName: "Sudip Parajuli",
    type: "website",
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
