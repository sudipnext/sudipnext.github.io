import { projects, type Project } from "@/config/portfolio"

export const metadata = {
  title: "Projects",
  description:
    "Open-source AI tools, backend platforms, machine-learning systems, robotics, and web products by Sudip Parajuli.",
}

const categories: Project["category"][] = [
  "AI & developer tools",
  "Machine learning & robotics",
  "Web products",
  "Community & utilities",
]

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
        <p className="eyebrow">Work archive</p>
        <h1>Projects across software, AI, and robotics.</h1>
        <p className="lead-small">
          Product work, open-source tools, university research, client platforms,
          and utilities built to solve problems I encountered firsthand.
        </p>
        <p>
          Source code and smaller experiments are available on{" "}
          <a className="text-link" href="https://github.com/sudipnext" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          .
        </p>
      </div>

      {categories.map((category, categoryIndex) => (
        <section className="project-group" key={category} aria-labelledby={`category-${categoryIndex}`}>
          <div className="section-label">
            <span>{String(categoryIndex + 1).padStart(2, "0")}</span>
            <h2 id={`category-${categoryIndex}`}>{category}</h2>
          </div>
          <div className="section-content project-catalog">
            {projects.filter((project) => project.category === category).map((project) => (
              <article key={project.name}>
                <h3>
                  {project.url ? (
                    <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                      {project.name} ↗
                    </a>
                  ) : project.name}
                </h3>
                <p>{project.description}</p>
                <p className="tags">{project.meta}</p>
              </article>
            ))}
          </div>
        </section>
      ))}

      <footer className="footer">
        <p><a className="text-link" href="/">← home</a></p>
        <p>{projects.length} documented projects · more on GitHub</p>
      </footer>
    </main>
  )
}
