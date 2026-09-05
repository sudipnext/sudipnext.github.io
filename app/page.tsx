import { StructuredData } from "@/components/structured-data"
import { profilePageSchema } from "@/lib/seo"
import { WorkDetails } from "@/components/work-details"
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
      <StructuredData data={profilePageSchema("/", "Sudip Parajuli (sudipnext)")} />
      <header className="site-header">
        <a href="/" className="site-name">Sudip Parajuli</a>
        <nav aria-label="Primary navigation">
          <a href="#experience">experience</a>
          <a href="/projects/">projects</a>
          <a href="#writing">blog</a>
          <a href="/cv/">cv</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow">Kathmandu, Nepal</p>
          <h1 id="intro-title">Hi, I’m Sudip.</h1>
          <p className="lead">Software Engineer &amp; Open Source Lead</p>
          <p>
            I’m Sudip Parajuli, and I go by <ArrowLink href={links.github}>sudipnext</ArrowLink> online.
            I work at <ArrowLink href={links.presenton}>Presenton</ArrowLink>, where I
            develop open-source software, build enterprise features, and maintain
            the infrastructure and desktop app.
          </p>
          <p>
            Previously, I worked at Exploreden and helped build its hotel-booking
            platform. My other work includes recommendation systems, robotics, and
            teaching. Here’s a little about what I’ve worked on.
          </p>
          <div className="link-row" aria-label="Profile links">
            <ArrowLink href={links.github}>GitHub</ArrowLink>
            <ArrowLink href={links.linkedin}>LinkedIn</ArrowLink>
            <ArrowLink href={links.scholar}>Google Scholar</ArrowLink>
            <ArrowLink href={links.blog}>Blog</ArrowLink>
            <ArrowLink href={links.youtube}>YouTube</ArrowLink>
            <a className="text-link" href={links.email}>Email</a>
          </div>
        </div>
      </section>

      <section className="section" id="experience" aria-labelledby="experience-heading">
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
                  {item.url ? <ArrowLink href={item.url}>{item.organization}</ArrowLink> : item.organization}
                </p>
                <p>{item.description}</p>
                <WorkDetails name={item.organization} items={item.details} />
              </div>
            </article>
          ))}
          <p className="section-more"><a href="/cv/" className="text-link">Read the full CV →</a></p>
        </div>
      </section>

      <section className="section" aria-labelledby="work-heading">
        <div className="section-label">
          <h2 id="work-heading">Selected work</h2>
        </div>
        <div className="section-content item-list">
          {projects.map((project) => (
            <article className="project-item" key={project.name}>
              <div>
                <h3><ArrowLink href={project.url}>{project.name}</ArrowLink></h3>
                {project.secondaryLink ? (
                  <> · <ArrowLink href={project.secondaryLink.url}>{project.secondaryLink.label}</ArrowLink></>
                ) : null}
                <span className="item-meta">{project.meta}</span>
              </div>
              <div>
                <p>{project.description}</p>
                <WorkDetails name={project.name} items={project.details} />
              </div>
            </article>
          ))}
          <p className="section-more">
            <a href="/projects/" className="text-link">View more projects →</a>
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="skills-heading">
        <div className="section-label">
          <h2 id="skills-heading">Skills & tools</h2>
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

      <section className="section" id="writing" aria-labelledby="writing-heading">
        <div className="section-label">
          <h2 id="writing-heading">Blog</h2>
        </div>
        <div className="section-content">
          <ul className="writing-list">
            {writing.map((post) => (
              <li key={post.title}>
                <span className="post-topic">{post.topic}</span>
                <ArrowLink href={post.url}>{post.title}</ArrowLink>
              </li>
            ))}
          </ul>
          <p className="section-more"><ArrowLink href={links.blog}>Browse all articles</ArrowLink></p>
        </div>
      </section>

      <footer className="footer">
        <p>You can find me on GitHub or get in touch by email.</p>
        <p><a className="text-link" href={links.email}>coc42060@gmail.com</a></p>
      </footer>
    </main>
  )
}
