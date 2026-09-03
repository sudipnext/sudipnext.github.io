import Image from "next/image"
import Link from "next/link"

import { experience, links, projects, writing } from "@/config/portfolio"

function ArrowLink({ href, children }: { href: string; children: React.ReactNode }) {
  const external = href.startsWith("http")

  return (
    <a
      href={href}
      className="text-link"
      {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
    >
      {children} <span aria-hidden="true">↗</span>
    </a>
  )
}

export default function HomePage() {
  return (
    <main className="page-shell">
      <header className="site-header">
        <Link href="/" className="site-name">Sudip Parajuli</Link>
        <nav aria-label="Primary navigation">
          <Link href="/projects">projects</Link>
          <Link href="/cv">cv</Link>
        </nav>
      </header>

      <section className="intro" aria-labelledby="intro-title">
        <Image
          src="/head.jpg"
          alt="Sudip Parajuli"
          width={148}
          height={148}
          priority
          className="portrait"
        />
        <div>
          <h1 id="intro-title">Engineer, open-source builder, and teacher.</h1>
          <p>
            I&apos;m Sudip, a software engineer from Nepal. I build practical products
            across backend systems, AI tooling, and the web. Right now I&apos;m working
            on <ArrowLink href={links.presenton}>Presenton</ArrowLink>, an open-source
            AI presentation generator and API.
          </p>
          <p>
            I like systems that are useful, understandable, and easy to own. Away
            from product work, I write technical notes, teach, and experiment with
            robotics and machine learning.
          </p>
          <div className="link-row" aria-label="Profile links">
            <ArrowLink href={links.github}>GitHub</ArrowLink>
            <ArrowLink href={links.linkedin}>LinkedIn</ArrowLink>
            <ArrowLink href={links.blog}>Blog</ArrowLink>
            <ArrowLink href={links.medium}>Medium</ArrowLink>
            <a className="text-link" href={links.email}>Email</a>
          </div>
        </div>
      </section>

      <section className="section" aria-labelledby="now-heading">
        <h2 id="now-heading">now</h2>
        <div className="prose-block">
          <p>
            Building model-agnostic AI workflows at Presenton: document ingestion,
            editable presentation generation, local-first model support, and reliable
            exports. I&apos;m especially interested in the engineering layer that makes
            different language models feel consistent to the people using them.
          </p>
        </div>
      </section>

      <section className="section" aria-labelledby="work-heading">
        <div className="section-heading">
          <h2 id="work-heading">selected work</h2>
          <Link href="/projects" className="quiet-link">all projects →</Link>
        </div>
        <div className="item-list">
          {projects.map((project) => (
            <article className="project-item" key={project.name}>
              <div>
                <ArrowLink href={project.url}>{project.name}</ArrowLink>
                <span className="item-meta">{project.meta}</span>
              </div>
              <p>{project.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section" aria-labelledby="experience-heading">
        <h2 id="experience-heading">experience</h2>
        <div className="timeline">
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
        </div>
      </section>

      <section className="section" aria-labelledby="research-heading">
        <h2 id="research-heading">research & education</h2>
        <div className="timeline">
          <article className="timeline-item">
            <time>2025</time>
            <div>
              <h3>
                <ArrowLink href="https://ieeexplore.ieee.org/document/10933029">
                  Navigation of Mobile Robot with Nav2 and SLAM Using LiDAR
                </ArrowLink>
              </h3>
              <p className="organization">IEEE · ICSADL 2025</p>
              <p>
                Co-authored research on autonomous navigation with ROS 2, Nav2,
                SLAM, LiDAR, and a custom-built differential-drive robot.
              </p>
            </div>
          </article>
          <article className="timeline-item">
            <time>2021 — 2025</time>
            <div>
              <h3>B.E. in Electronics, Communication and Information Engineering</h3>
              <p className="organization">Tribhuvan University · IOE, Purwanchal Campus</p>
            </div>
          </article>
        </div>
      </section>

      <section className="section" aria-labelledby="writing-heading">
        <div className="section-heading">
          <h2 id="writing-heading">writing</h2>
          <ArrowLink href={links.blog}>all posts</ArrowLink>
        </div>
        <ul className="writing-list">
          {writing.map((post) => (
            <li key={post.title}>
              <time>{post.date}</time>
              <ArrowLink href={post.url}>{post.title}</ArrowLink>
            </li>
          ))}
        </ul>
      </section>

      <footer className="footer">
        <p>
          <a className="text-link" href={links.resume}>resume</a>
          <span aria-hidden="true"> · </span>
          <a className="text-link" href={links.email}>email</a>
        </p>
        <p>Last updated September 2026.</p>
      </footer>
    </main>
  )
}
