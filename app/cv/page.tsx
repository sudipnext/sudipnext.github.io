import { Download } from "lucide-react"
import { siteConfig } from "@/config/site"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export const metadata = {
  title: "CV",
  description: "My professional resume and experience",
}

export default function CVPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:py-24">
      {/* Header and Download button - existing code */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8 gap-4">
        <div>
          <h1 className="text-4xl font-bold">Curriculum Vitae</h1>
          <p className="text-muted-foreground mt-2">My professional experience and skills</p>
        </div>
        <Button asChild>
          <a href="/Sudip Parajuli.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download CV
          </a>
        </Button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left column - Personal info and skills */}
        <div className="space-y-8">
          {/* Personal Info - existing code with additions */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
            <div className="space-y-3">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Name</h3>
                <p>{siteConfig.cv.personalInfo.name}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Location</h3>
                <p>{siteConfig.cv.personalInfo.location}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Phone</h3>
                <p>{siteConfig.cv.personalInfo.phone}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Email</h3>
                <p>{siteConfig.cv.personalInfo.email}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Website</h3>
                <p>{siteConfig.cv.personalInfo.website}</p>
              </div>
              <div>
                <h3 className="text-sm font-medium text-muted-foreground">Status</h3>
                <Badge className="mt-1 bg-green-100 text-green-800 hover:bg-green-200 dark:bg-green-900 dark:text-green-100 dark:hover:bg-green-800">
                  {siteConfig.cv.personalInfo.status}
                </Badge>
              </div>
            </div>
          </div>

          {/* Skills - existing code */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.languages.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.frameworks.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Data Science</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.datascience.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Web Scraping</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.skills.scraping.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Detailed Skills - new section */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Detailed Skills</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Programming Languages</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.cv.detailedSkills.programmingLanguages.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Tools & Frameworks</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.cv.detailedSkills.toolsAndFrameworks.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">DevOps & Cloud</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.cv.detailedSkills.devopsAndCloud.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Web Scraping & Automation</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.cv.detailedSkills.webScrapingAndAutomation.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-2">Other Tools</h3>
                <div className="flex flex-wrap gap-2">
                  {siteConfig.cv.detailedSkills.otherTools.map((skill) => (
                    <Badge key={skill} variant="outline">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Interests - new section */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-4">Interests</h2>
            <p className="text-sm">{siteConfig.cv.interests}</p>
          </div>
        </div>

        {/* Right column - Experience, Education, Publications, and Major Projects */}
        <div className="lg:col-span-2 space-y-8">
          {/* Experience - existing code */}
          {siteConfig.cv.experience.map((org, index) => (
            <div key={index} className="rounded-lg border bg-card p-6">
              <h2 className="text-xl font-semibold mb-6">{org.organization}</h2>

              <div className="space-y-8">
                {org.positions.map((position, posIndex) => (
                  <div key={posIndex} className="relative pl-8 pb-8 border-l border-muted last:border-0 last:pb-0">
                    <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
                    <div className="space-y-2">
                      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                        <h3 className="font-medium">{position.title}</h3>
                        <Badge variant="outline" className="w-fit">
                          {position.period}
                        </Badge>
                      </div>
                      <p className="text-muted-foreground text-sm">{position.company}</p>
                      <p className="text-sm">{position.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}

          {/* Education - existing code */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-6">Education</h2>

            <div className="space-y-8">
              {siteConfig.cv.education.map((edu, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l border-muted last:border-0 last:pb-0">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <h3 className="font-medium">{edu.degree}</h3>
                      <Badge variant="outline" className="w-fit">
                        {edu.period}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{edu.institution}</p>
                    <p className="text-sm">{edu.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Publications - new section */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-6">Publications</h2>

            <div className="space-y-8">
              {siteConfig.cv.publications.map((pub, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l border-muted last:border-0 last:pb-0">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-1">
                      <h3 className="font-medium">{pub.title}</h3>
                      <Badge variant="outline" className="w-fit">
                        {pub.year}
                      </Badge>
                    </div>
                    <p className="text-muted-foreground text-sm">{pub.conference}</p>
                    <p className="text-sm">Status: {pub.status}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Major Projects - new section */}
          <div className="rounded-lg border bg-card p-6">
            <h2 className="text-xl font-semibold mb-6">Major Projects</h2>

            <div className="space-y-8">
              {siteConfig.cv.majorProjects.map((project, index) => (
                <div key={index} className="relative pl-8 pb-8 border-l border-muted last:border-0 last:pb-0">
                  <div className="absolute left-0 top-0 -translate-x-1/2 h-4 w-4 rounded-full bg-primary"></div>
                  <div className="space-y-2">
                    <h3 className="font-medium">{project.title}</h3>
                    <p className="text-sm">{project.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
