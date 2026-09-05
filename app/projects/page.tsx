import { StructuredData } from "@/components/structured-data"
import { pageMetadata, projectsSchema } from "@/lib/seo"
import { WorkDetails } from "@/components/work-details"
import { links, projects } from "@/config/portfolio"

export const metadata = pageMetadata(
  "Projects | Sudip Parajuli (sudipnext)",
  "Projects by Sudip Parajuli (sudipnext): Presenton, Exploreden, llmai, graph-based movie recommendations, and ROS 2 robotics, with code and video demos.",
  "/projects/",
)

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <StructuredData data={projectsSchema} />
      <header className="site-header">
        <a href="/" className="site-name">Sudip Parajuli</a>
        <nav aria-label="Primary navigation">
          <a href="/">home</a>
          <a href="/cv/">cv</a>
        </nav>
      </header>

      <div className="subpage-intro">
        <p className="eyebrow">Selected work</p>
        <h1>Projects & contributions.</h1>
        <p className="lead-small">
          Some of the products and projects I’ve worked on, including open-source
          software, travel booking, recommendation systems, and robotics.
        </p>
        <p>
          Smaller projects and experiments remain available on{" "}
          <a className="text-link" href={links.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          .
        </p>
      </div>

      <section className="project-group" aria-labelledby="selected-projects">
        <div className="section-label">
          <h2 id="selected-projects">Selected projects</h2>
        </div>
        <div className="section-content project-catalog">
          {projects.map((project) => (
            <article key={project.name}>
              <h3>
                <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                  {project.name} ↗
                </a>
                {project.secondaryLink ? (
                  <> · <a className="text-link" href={project.secondaryLink.url} target="_blank" rel="noreferrer">
                    {project.secondaryLink.label} ↗
                  </a></>
                ) : null}
              </h3>
              <p>{project.description}</p>
              <p className="tags">{project.meta}</p>
              <WorkDetails name={project.name} items={project.details} />
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p><a className="text-link" href="/">← home</a></p>
        <p>More projects and experiments on GitHub</p>
      </footer>
    </main>
  )
}
