import Image from "next/image"
import { ExternalLink, Github } from "lucide-react"

import { siteConfig } from "@/config/site"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import TitleImage from "@/components/ui/title-image"

export const metadata = {
  title: "Projects",
  description: "Check out my latest projects and work",
}

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      <h1 className="text-4xl font-bold mb-8">My Projects</h1>
      <p className="text-xl text-muted-foreground mb-12 max-w-3xl">
        Here are some of the projects I've worked on. Each project represents my skills and passion for building
        innovative solutions. You can find other projects on my GitHub.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {siteConfig.projects.map((project) => (
          <div
            key={project.title}
            className="group flex flex-col overflow-hidden rounded-lg border bg-card transition-all hover:shadow-md"
          >
            <div className="aspect-video w-full overflow-hidden">
              {project.image ? (
                <Image
                  src={project.image}
                  alt={project.title}
                  width={500}
                  height={300}
                  className="h-full w-full object-cover transition-transform group-hover:scale-105"
                />
              ) : (
                <TitleImage title={project.title} className="group-hover:opacity-90 transition-opacity" />
              )}
            </div>
            <div className="flex flex-1 flex-col p-6">
              <h3 className="font-semibold text-xl mb-2 group-hover:text-primary transition-colors">{project.title}</h3>
              <p className="text-muted-foreground mb-4 flex-1">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tags.map((tag) => (
                  <Badge key={tag} variant="secondary" className="px-2 py-0.5">
                    {tag}
                  </Badge>
                ))}
              </div>
              <div className="flex gap-3 mt-auto">
                {project.github && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-2 h-4 w-4" />
                      Code
                    </a>
                  </Button>
                )}
                {project.link && (
                  <Button size="sm" asChild>
                    <a href={project.link} target="_blank" rel="noopener noreferrer">
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Demo
                    </a>
                  </Button>
                )}
                {project.paper && (
                  <Button size="sm" variant="outline" asChild>
                    <a href={project.paper} target="_blank" rel="noopener noreferrer">
                      <span className="mr-2">Paper</span>
                    </a>
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
