import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  metadataBase: new URL("https://parajulisudip.com.np"),
  title: {
    default: "Sudip Parajuli",
    template: "%s · Sudip Parajuli",
  },
  description:
    "Sudip Parajuli is a software engineer from Nepal building open-source AI tools, backend systems, and useful web products.",
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
    description: "Engineer, open-source builder, and teacher.",
    url: "/",
    siteName: "Sudip Parajuli",
    type: "website",
    images: [{ url: "/head.jpg", width: 640, height: 640, alt: "Sudip Parajuli" }],
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
