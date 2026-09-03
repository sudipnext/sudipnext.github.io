import { experience, links, projects, skillGroups } from "@/config/portfolio"

export const metadata = {
  title: "CV",
  description: "Experience, education, research, projects, and technical background of Sudip Parajuli.",
}

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

      <div className="subpage-intro cv-intro">
        <p className="eyebrow">Curriculum vitae</p>
        <h1>Software Engineer</h1>
        <p className="lead-small">
          Product-minded engineer with experience across open-source AI systems,
          backend architecture, full-stack applications, applied machine learning,
          cloud infrastructure, and robotics.
        </p>
        <div className="contact-line">
          <span>Dharan, Nepal</span>
          <a className="text-link" href={links.email}>info@parajulisudip.com.np</a>
          <a className="text-link" href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
        </div>
        <p className="cv-actions">
          <a className="download-link" href={links.resume} download>Download PDF résumé ↓</a>
        </p>
      </div>

      <section className="section" aria-labelledby="summary-heading">
        <div className="section-label">
          <span>01</span>
          <h2 id="summary-heading">Profile</h2>
        </div>
        <div className="section-content prose-block">
          <p>
            I take products from ambiguous requirements to working systems. My recent
            work centers on AI-assisted document creation and model-agnostic agent
            workflows; my earlier work includes travel infrastructure, recommendation
            systems, payments, data pipelines, and cloud deployment.
          </p>
          <p>
            My engineering background also crosses into electronics and autonomous
            robotics. Alongside professional work, I have led technical communities,
            mentored AI learners, organized national hackathons, and published with IEEE.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-heading">
        <div className="section-label">
          <span>02</span>
          <h2 id="experience-heading">Experience</h2>
        </div>
        <div className="section-content timeline">
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
        </div>
      </section>

      <section className="section" aria-labelledby="education-heading">
        <div className="section-label">
          <span>03</span>
          <h2 id="education-heading">Education & research</h2>
        </div>
        <div className="section-content timeline">
          <article className="timeline-item">
            <time>2021 — 2025</time>
            <div>
              <h3>B.E. in Electronics, Communication and Information Engineering</h3>
              <p className="organization">Tribhuvan University · IOE, Purwanchal Campus</p>
              <p>
                Engineering study spanning software, data, electronics, communications,
                embedded systems, machine learning, and robotics.
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <time>2025</time>
            <div>
              <h3>
                <a className="text-link" href="https://ieeexplore.ieee.org/document/10933029" target="_blank" rel="noreferrer">
                  Navigation of Mobile Robot with Nav2 and SLAM Using LiDAR ↗
                </a>
              </h3>
              <p className="organization">4th ICSADL · IEEE</p>
              <p>
                Peer-reviewed conference paper based on a custom autonomous robot.
                DOI: 10.1109/ICSADL65848.2025.10933029.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <div className="section-label">
          <span>04</span>
          <h2 id="skills-heading">Technical skills</h2>
        </div>
        <div className="section-content skill-list">
          {skillGroups.map((group) => (
            <div className="skill-row" key={group.name}>
              <h3>{group.name}</h3>
              <p>{group.items.join(" · ")}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="projects-heading">
        <div className="section-label">
          <span>05</span>
          <h2 id="projects-heading">Selected projects</h2>
        </div>
        <div className="section-content compact-projects">
          {projects.filter((project) => project.featured).map((project) => (
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
          <p className="section-more"><a href="/projects/" className="text-link">View all projects →</a></p>
        </div>
      </section>

      <section className="section" aria-labelledby="interests-heading">
        <div className="section-label">
          <span>06</span>
          <h2 id="interests-heading">Interests</h2>
        </div>
        <div className="section-content prose-block">
          <p>
            Open-source AI, developer tools, reliable backend systems, document
            intelligence, recommendation systems, graph neural networks, autonomous
            robotics, technical writing, and widening access to practical engineering education.
          </p>
        </div>
      </section>

      <footer className="footer">
        <p><a className="text-link" href="/">← home</a></p>
        <p>Last updated September 2026</p>
      </footer>
    </main>
  )
}
