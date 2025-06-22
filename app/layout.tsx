import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

import { siteConfig } from "@/config/site"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  keywords: [
    "Portfolio",
    "Developer",
    "Data Science",
    "Web Development",
    "Python",
    "JavaScript",
    "Sudip Parajuli",
    "sudipnext",
    "Dev in Nepal",
    "Nepal Developer",
    "Full Stack Developer",
    "React",
    "Next.js",
    "SEO",
    "Open Source",
    "Tech Blog",
    "Personal Website"
  ],
  authors: [
    {
      name: siteConfig.name,
      url: "https://parajulisudip.com.np",
    },
  ],
  creator: siteConfig.name
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          <Navbar />
          <main className="pt-16">{children}</main>
          <footer className="border-t py-6 md:py-0">
            <div className="container flex flex-col items-center justify-between gap-4 md:h-16 md:flex-row">
              <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
                © {new Date().getFullYear()} {siteConfig.name}. All rights reserved.
              </p>
              <div className="flex items-center gap-4">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <social.icon className="h-5 w-5" />
                    <span className="sr-only">{social.name}</span>
                  </a>
                ))}
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  )
}
