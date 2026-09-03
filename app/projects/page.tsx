import Link from "next/link"

import { projects } from "@/config/portfolio"

export const metadata = {
  title: "Projects",
  description: "Selected projects by Sudip Parajuli.",
}

const moreProjects = [
  {
    name: "Navigation of Mobile Robot with Nav2 and SLAM Using LiDAR",
    url: "https://ieeexplore.ieee.org/document/10933029",
    description:
      "A custom differential-drive robot for autonomous mapping and navigation, developed with ROS 2, Nav2, SLAM Toolbox, LiDAR, and Arduino.",
    meta: "Robotics · ROS 2 · IEEE",
  },
  {
    name: "Height Comparison",
    url: "https://www.heightcomparison.com/",
    description:
      "Backend and data pipeline for comparing the heights of celebrities and fictional characters, built from a dataset of roughly 50,000 records.",
    meta: "Django · scraping · data",
  },
  {
    name: "Lenovo Energy Management for Linux",
    url: "https://github.com/sudipnext/lenovo_energy_management",
    description:
      "An unofficial Linux utility for controlling Lenovo battery and energy settings that were otherwise unavailable on the platform.",
    meta: "Python · Linux · utility",
  },
  {
    name: "CS50x Nepal Smart Attendance",
    url: "https://github.com/CS50xNepalOfficial/AttendenceSystem",
    description:
      "A QR-based attendance system created for CS50x Nepal classes and events.",
    meta: "Django · JavaScript · education",
  },
]

export default function ProjectsPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <Link href="/" className="site-name">Sudip Parajuli</Link>
        <nav aria-label="Primary navigation">
          <Link href="/">home</Link>
          <Link href="/cv">cv</Link>
        </nav>
      </header>

      <div className="subpage-intro">
        <h1>Projects</h1>
        <p>
          A short list of open-source software, product work, experiments, and
          research. More small projects live on my{" "}
          <a className="text-link" href="https://github.com/sudipnext" target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          .
        </p>
      </div>

      <section className="project-catalog" aria-label="Project list">
        {[...projects, ...moreProjects].map((project) => (
          <article key={project.name}>
            <h2>
              <a className="text-link" href={project.url} target="_blank" rel="noreferrer">
                {project.name} ↗
              </a>
            </h2>
            <p>{project.description}</p>
            <p className="tags">{project.meta}</p>
          </article>
        ))}
      </section>

      <footer className="footer">
        <p><Link className="text-link" href="/">← home</Link></p>
        <p>Selected work, not an exhaustive archive.</p>
      </footer>
    </main>
  )
}
