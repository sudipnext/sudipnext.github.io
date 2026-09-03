import { experience, links, projects, skillGroups, writing } from "@/config/portfolio"

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a href={href} className="text-link" target="_blank" rel="noreferrer">
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <a href="/" className="site-name">Sudip Parajuli</a>
        <nav aria-label="Primary navigation">
          <a href="#experience">experience</a>
          <a href="/projects/">projects</a>
          <a href="/cv/">cv</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow">Software Engineer · Nepal</p>
          <h1 id="intro-title">Software Engineer.</h1>
          <p className="lead">
            I build open-source AI products, dependable backend systems, and useful
            software from first principles to production.
          </p>
          <p>
            Currently working on <ArrowLink href={links.presenton}>Presenton</ArrowLink>,
            an open-source AI presentation platform and API. My work spans product
            engineering, model integrations, document processing, web platforms,
            machine learning, and robotics.
          </p>
          <div className="link-row" aria-label="Profile links">
            <ArrowLink href={links.github}>GitHub</ArrowLink>
            <ArrowLink href={links.linkedin}>LinkedIn</ArrowLink>
            <ArrowLink href={links.scholar}>Google Scholar</ArrowLink>
            <ArrowLink href={links.blog}>Blog</ArrowLink>
            <a className="text-link" href={links.email}>Email</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="focus-heading">
        <div className="section-label">
          <span>01</span>
          <h2 id="focus-heading">Current focus</h2>
        </div>
        <div className="section-content prose-block">
          <p>
            At Presenton, I work across the system that turns prompts, documents,
            and structured data into editable presentations. That includes model-agnostic
            orchestration, document ingestion, presentation-scoped context, rich editing,
            high-fidelity export, desktop packaging, and self-hosted deployment.
          </p>
          <p>
            I&apos;m particularly interested in the software layer between AI models and
            people: making different models behave consistently, keeping outputs editable,
            and building tools that remain understandable and under the user&apos;s control.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="work-heading">
        <div className="section-label">
          <span>02</span>
          <h2 id="work-heading">Selected work</h2>
        </div>
        <div className="section-content item-list">
          {projects.map((project) => (
            <article className="project-item" key={project.name}>
              <div>
                {project.url ? <ArrowLink href={project.url}>{project.name}</ArrowLink> : project.name}
                <span className="item-meta">{project.meta}</span>
              </div>
              <p>{project.description}</p>
            </article>
          ))}
          <p className="section-more">
            <a href="/projects/" className="text-link">View the four flagship projects →</a>
          </p>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-heading">
        <div className="section-label">
          <span>03</span>
          <h2 id="experience-heading">Experience</h2>
        </div>
        <div className="section-content timeline">
          {experience.map((item) => (
            <article className="timeline-item" key={`${item.period}-${item.organization}`}>
              <time>{item.period}</time>
              <div>
                <h3>{item.title}</h3>
                <p className="organization">
                  {item.url ? <ArrowLink href={item.url}>{item.organization}</ArrowLink> : item.organization}
                </p>
                <p>{item.description}</p>
              </div>
            </article>
          ))}
          <p className="section-more"><a href="/cv/" className="text-link">Read the full CV →</a></p>
        </div>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <div className="section-label">
          <span>04</span>
          <h2 id="skills-heading">Technical range</h2>
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

      <section className="section" aria-labelledby="research-heading">
        <div className="section-label">
          <span>05</span>
          <h2 id="research-heading">Research & education</h2>
        </div>
        <div className="section-content timeline">
          <article className="timeline-item">
            <time>2025</time>
            <div>
              <h3>
                <ArrowLink href="https://ieeexplore.ieee.org/document/10933029">
                  Navigation of Mobile Robot with Nav2 and SLAM Using LiDAR
                </ArrowLink>
              </h3>
              <p className="organization">IEEE · 4th ICSADL · DOI 10.1109/ICSADL65848.2025.10933029</p>
              <p>
                Co-authored and built the robotics system behind a study of autonomous
                navigation with ROS 2, Nav2, SLAM, LiDAR, and differential-drive control.
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <time>2021 — 2025</time>
            <div>
              <h3>B.E. in Electronics, Communication and Information Engineering</h3>
              <p className="organization">Tribhuvan University · IOE, Purwanchal Campus</p>
              <p>
                Combined software engineering with embedded systems, communication,
                data science, machine learning, and robotics.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="writing-heading">
        <div className="section-label">
          <span>06</span>
          <h2 id="writing-heading">Writing</h2>
        </div>
        <div className="section-content">
          <ul className="writing-list">
            {writing.map((post) => (
              <li key={post.title}>
                <time>{post.date}</time>
                <ArrowLink href={post.url}>{post.title}</ArrowLink>
              </li>
            ))}
          </ul>
          <p className="section-more"><ArrowLink href={links.blog}>Browse all articles</ArrowLink></p>
        </div>
      </section>

      <footer className="footer">
        <p>Open to ambitious product, engineering, research, and graduate-study opportunities.</p>
        <p><a className="text-link" href={links.email}>info@parajulisudip.com.np</a></p>
      </footer>
    </main>
  )
}
