import { StructuredData } from "@/components/structured-data"
import { pageMetadata, profilePageSchema } from "@/lib/seo"
import { experience, links, projects, skillGroups } from "@/config/portfolio"

export const metadata = pageMetadata(
  "CV & Experience | Sudip Parajuli (sudipnext)",
  "Experience, education, and skills of Sudip Parajuli (sudipnext), Software Engineer & Open Source Lead at Presenton, based in Kathmandu, Nepal.",
  "/cv/",
)

export default function CVPage() {
  return (
    <main className="page-shell">
      <StructuredData data={profilePageSchema("/cv/", "CV of Sudip Parajuli (sudipnext)")} />
      <header className="site-header">
        <a href="/" className="site-name">Sudip Parajuli</a>
        <nav aria-label="Primary navigation">
          <a href="/">home</a>
          <a href="/projects/">projects</a>
        </nav>
      </header>

      <div className="subpage-intro cv-intro">
        <p className="eyebrow">Curriculum vitae</p>
        <h1>Sudip Parajuli</h1>
        <p className="organization">Also known online as <a className="text-link" href={links.github} target="_blank" rel="noreferrer">sudipnext ↗</a></p>
        <p className="lead-small">
          Software Engineer &amp; Open Source Lead at Presenton, based in Kathmandu, Nepal.
          I work on open-source software, enterprise features, infrastructure, and desktop applications.
        </p>
        <div className="contact-line">
          <span>Kathmandu, Nepal</span>
          <a className="text-link" href={links.email}>coc42060@gmail.com</a>
          <a className="text-link" href={links.github} target="_blank" rel="noreferrer">GitHub ↗</a>
          <a className="text-link" href={links.linkedin} target="_blank" rel="noreferrer">LinkedIn ↗</a>
          <a className="text-link" href={links.scholar} target="_blank" rel="noreferrer">Google Scholar ↗</a>
          <a className="text-link" href={links.youtube} target="_blank" rel="noreferrer">YouTube ↗</a>
        </div>
      </div>

      <section className="section" aria-labelledby="summary-heading">
        <div className="section-label">
          <h2 id="summary-heading">Profile</h2>
        </div>
        <div className="section-content prose-block">
          <p>
            At Presenton, I develop features, review pull requests, and maintain the
            product and infrastructure. Previously, I worked at Exploreden,
            building hotel-booking features, provider integrations, Stripe payments,
            recommendation systems, and data pipelines.
          </p>
          <p>
            I studied electronics, communication, and information engineering, and
            worked on an autonomous robot as part of my research. Outside work,
            I’ve helped with student communities, taught AI classes, and helped
            organize workshops and hackathons.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="experience-heading">
        <div className="section-label">
          <h2 id="experience-heading">Experience</h2>
        </div>
        <div className="section-content timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.organization}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="organization">
                  {item.url ? (
                    <a className="text-link" href={item.url} target="_blank" rel="noreferrer">
                      {item.organization} ↗
                    </a>
                  ) : item.organization}
                </p>
                <p>{item.description}</p>
                {item.details?.length ? (
                  <ul className="contribution-list">
                    {item.details.map((detail) => <li key={detail}>{detail}</li>)}
                  </ul>
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="education-heading">
        <div className="section-label">
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
          <h2 id="projects-heading">Selected projects</h2>
        </div>
        <div className="section-content compact-projects">
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
            </article>
          ))}
          <p className="section-more"><a href="/projects/" className="text-link">View selected projects →</a></p>
        </div>
      </section>

      <section className="section" aria-labelledby="interests-heading">
        <div className="section-label">
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
