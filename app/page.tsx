import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Terminal } from "@/components/terminal"

// Import icons from react-icons
import { SiPython, SiJavascript, SiTypescript, SiCplusplus, SiDjango, SiReact, SiNextdotjs, SiTailwindcss, SiDocker, SiAmazonwebservices, SiPostgresql, SiMongodb, SiRedis, SiPytorch, SiFastapi, SiGithubactions, SiNuxtdotjs, SiHuggingface } from "react-icons/si"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="container mx-auto pt-32 pb-20 px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          {/* Text Content */}
          <div className="space-y-6 order-2 md:order-1">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight animate-fade-in">
              Hi, I&apos;m {siteConfig.nickname} 👋
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed animate-fade-in animation-delay-200">
              {siteConfig.description}
            </p>
            <div className="flex items-center gap-2">
              <div className="flex h-6 w-6 items-center justify-center">
                <span className="relative flex h-3 w-3">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex h-3 w-3 rounded-full bg-emerald-500"></span>
                </span>
              </div>
                {siteConfig.status}
      
              <div className="flex gap-3">
                {siteConfig.socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors"
                    aria-label={social.name}
                  >
                    <social.icon size={20} />
                  </a>
                ))}
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-4 animate-fade-in animation-delay-400">
              <Button asChild>
                <Link href="/projects">
                  View Projects <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/cv">My Resume</Link>
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[400px] w-full order-1 md:order-2 animate-fade-in">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-primary/5 rounded-lg -rotate-1"></div>
            <div className="absolute inset-0 border border-primary/20 rounded-lg rotate-2"></div>
            <div className="absolute inset-0 flex items-center justify-center">
              <Image
                src={siteConfig.profileImage || "/placeholder.svg"}
                alt={siteConfig.name}
                width={400}
                height={400}
                className="rounded-lg shadow-xl"
                priority
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-background border border-border p-3 rounded-md shadow-lg font-mono text-sm">
              <span className="text-primary">const</span> <span className="text-yellow-500">developer</span> ={" "}
              <span className="text-green-500">&quot;passionate&quot;</span>;
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="container mx-auto px-4 py-16 animate-fade-in animation-delay-500">
        <h2 className="text-3xl font-bold text-center mb-12">About Me</h2>
        <div className="max-w-3xl mx-auto text-muted-foreground leading-relaxed mb-12">
          <p>
            A skilled Person specializing in Python, Data Science, SQL, and JavaScript. I bring a unique blend of technical expertise and creative problem-solving abilities to every project. I love teaching and sharing my knowledge with others, and I am always looking for new opportunities to learn and grow.
          </p>
        </div>

        {/* Tech Stack Section */}
        <div>
          <h3 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="flex flex-col items-center">
              <SiPython size={36} className="text-blue-500" />
              <span className="text-xs mt-1">Python</span>
            </div>
            <div className="flex flex-col items-center">
              <SiJavascript size={36} className="text-yellow-400" />
              <span className="text-xs mt-1">JavaScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTypescript size={36} className="text-blue-600" />
              <span className="text-xs mt-1">TypeScript</span>
            </div>
            <div className="flex flex-col items-center">
              <SiCplusplus size={36} className="text-blue-700" />
              <span className="text-xs mt-1">C++</span>
            </div>
            <div className="flex flex-col items-center">
              <SiDjango size={36} className="text-green-700" />
              <span className="text-xs mt-1">Django</span>
            </div>
            <div className="flex flex-col items-center">
              <SiReact size={36} className="text-cyan-400" />
              <span className="text-xs mt-1">React</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNextdotjs size={36} className="text-black dark:text-white" />
              <span className="text-xs mt-1">Next.js</span>
            </div>
            <div className="flex flex-col items-center">
              <SiTailwindcss size={36} className="text-sky-400" />
              <span className="text-xs mt-1">TailwindCSS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiDocker size={36} className="text-blue-400" />
              <span className="text-xs mt-1">Docker</span>
            </div>
            <div className="flex flex-col items-center">
              <SiAmazonwebservices size={36} className="text-orange-400" />
              <span className="text-xs mt-1">AWS</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPostgresql size={36} className="text-blue-800" />
              <span className="text-xs mt-1">PostgreSQL</span>
            </div>
            <div className="flex flex-col items-center">
              <SiMongodb size={36} className="text-green-600" />
              <span className="text-xs mt-1">MongoDB</span>
            </div>
            <div className="flex flex-col items-center">
              <SiRedis size={36} className="text-red-500" />
              <span className="text-xs mt-1">Redis</span>
            </div>
            <div className="flex flex-col items-center">
              <SiPytorch size={36} className="text-orange-500" />
              <span className="text-xs mt-1">PyTorch</span>
            </div>
            <div className="flex flex-col items-center">
              <SiHuggingface size={36} className="text-purple-500" />
              <span className="text-xs mt-1">Hugging Face</span>
            </div>
            <div className="flex flex-col items-center">
              <SiFastapi size={36} className="text-green-500" />
              <span className="text-xs mt-1">FastAPI</span>
            </div>
            <div className="flex flex-col items-center">
              <SiGithubactions size={36} className="text-blue-500" />
              <span className="text-xs mt-1">GitHub Actions</span>
            </div>
            <div className="flex flex-col items-center">
              <SiNuxtdotjs size={36} className="text-green-700" />
              <span className="text-xs mt-1">Nuxt3</span>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Blog Posts */}
      <section className="container mx-auto px-4 py-16 border-t">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-2xl font-bold">Recent Blog Posts</h2>
          <Button variant="ghost" asChild>
            <Link href="https://medium.com/@sudipnext">
              View all <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {siteConfig.blogPosts.slice(0, 3).map((post) => (
            <Link
              key={post.slug}
              href={post.slug}
              className="group block overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
            >
              <div className="aspect-video w-full overflow-hidden">
                <Image
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  width={400}
                  height={200}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="p-4">
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                  <time dateTime={post.date}>{post.date}</time>
                  <span>•</span>
                  <span>{post.tags[0]}</span>
                </div>
                <h3 className="font-medium group-hover:text-primary transition-colors line-clamp-2">{post.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground line-clamp-2">{post.description}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Terminal */}
      <Terminal />
    </div>
  )
}
