import { experience, links } from "@/config/portfolio"

export const metadata = {
  title: "CV",
  description: "Experience, education, and technical background of Sudip Parajuli.",
}

const skills = [
  ["Backend", "Python, Django, Django REST Framework, FastAPI, Celery, Node.js"],
  ["Frontend", "TypeScript, React, Next.js, Remix, Tailwind CSS"],
  ["AI & data", "PyTorch, PyTorch Geometric, pandas, NumPy, Milvus, recommendation systems"],
  ["Infrastructure", "PostgreSQL, Redis, Docker, AWS, GitHub Actions, Nginx"],
  ["Other", "ROS 2, Nav2, SLAM, web scraping, document processing"],
]

export default function CVPage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a href="/" className="site-name">Sudip Parajuli</a>
        <nav aria-label="Primary navigation">
          <a href="/">home</a>
          <a href="/projects/">projects</a>
        </nav>
      </header>

      <div className="subpage-intro">
        <h1>Curriculum vitae</h1>
        <p>
          Software engineer working across backend systems, product engineering,
          open-source AI tools, and applied machine learning.
        </p>
        <p className="cv-actions">
          <a className="text-link" href={links.resume} download>download PDF ↓</a>
          <span aria-hidden="true"> · </span>
          <a className="text-link" href={links.email}>email</a>
          <span aria-hidden="true"> · </span>
          <a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </p>
      </div>

      <section className="section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">experience</h2>
        <div className="timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.organization}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="organization">{item.organization}</p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
          <article className="timeline-item">
            <time>2021 — 2025</time>
            <div>
              <h3>Data fellow</h3>
              <p className="organization">Code for Nepal</p>
              <p>
                Studied and applied Python, SQL, data analysis, visualization,
                machine learning, version control, and cloud fundamentals.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="education-heading">
        <h2 id="education-heading">education</h2>
        <div className="timeline">
          <article className="timeline-item">
            <time>2021 — 2025</time>
            <div>
              <h3>B.E. in Electronics, Communication and Information Engineering</h3>
              <p className="organization">Tribhuvan University · IOE, Purwanchal Campus</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="publication-heading">
        <h2 id="publication-heading">publication</h2>
        <div className="timeline">
          <article className="timeline-item">
            <time>2025</time>
            <div>
              <h3>
                <a className="text-link" href="https://ieeexplore.ieee.org/document/10933029" target="_blank" rel="noreferrer">
                  Navigation of Mobile Robot with Nav2 and SLAM Using LiDAR ↗
                </a>
              </h3>
              <p className="organization">4th ICSADL · IEEE · DOI 10.1109/ICSADL65848.2025.10933029</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <h2 id="skills-heading">selected tools</h2>
        <div className="timeline">
          {skills.map(([group, list]) => (
            <div className="timeline-item" key={group}>
              <h3>{group}</h3>
              <p>{list}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="footer">
        <p><a className="text-link" href="/">← home</a></p>
        <p>Dharan, Nepal · available remotely</p>
      </footer>
    </main>
  )
}
