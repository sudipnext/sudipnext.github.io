import { links, projects } from "@/config/portfolio"

export const metadata = {
  title: "Projects",
  description:
    "Selected open-source AI, developer tooling, machine-learning, and robotics work by Sudip Parajuli.",
}

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a href="/" className="site-name">Sudip Parajuli</a>
        <nav aria-label="Primary navigation">
          <a href="/">home</a>
          <a href="/cv/">cv</a>
        </nav>
      </header>

      <div className="subpage-intro">
        <p className="eyebrow">Selected work</p>
        <h1>Four projects that define my work.</h1>
        <p className="lead-small">
          A focused selection spanning open-source AI, developer tools, graph-based
          recommendation systems, and autonomous robotics.
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
          <span>01</span>
          <h2 id="selected-projects">Flagship projects</h2>
        </div>
        <div className="section-content project-catalog">
          {projects.map((project) => (
            <article key={project.name}>
              <h3>
                <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                  {project.name} ↗
                </a>
              </h3>
              <p>{project.description}</p>
              <p className="tags">{project.meta}</p>
            </article>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p><a className="text-link" href="/">← home</a></p>
        <p>4 selected projects · more on GitHub</p>
      </footer>
    </main>
  )
}
