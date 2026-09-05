export const profile = {
  name: "Sudip Parajuli",
  nickname: "sudipnext",
  siteUrl: "https://parajulisudip.com.np",
  location: "Kathmandu, Nepal",
  email: "coc42060@gmail.com",
  jobTitle: "Software Engineer & Open Source Lead",
} as const

export const links = {
  github: "https://github.com/sudipnext",
  linkedin: "https://www.linkedin.com/in/sudipnext/",
  scholar: "https://scholar.google.com/citations?user=9NtxD5EAAAAJ&hl=en",
  blog: "https://blog.parajulisudip.com.np",
  medium: "https://medium.com/@sudipnext",
  email: `mailto:${profile.email}`,
  presenton: "https://presenton.ai",
  youtube: "https://www.youtube.com/@sudipnext",
}

export type Project = {
  name: string
  url: string
  description: string
  meta: string
  details?: string[]
  secondaryLink?: {
    label: string
    url: string
  }
}

export const projects: Project[] = [
  {
    name: "Presenton",
    secondaryLink: { label: "Visit Presenton", url: links.presenton },
    url: "https://github.com/presenton/presenton",
    description:
      "An open-source AI presentation tool for creating editable slide decks, with custom templates, PowerPoint and PDF exports, and self-hosting.",
    meta: "Next.js · Python · Electron · Kubernetes",
    details: [
      "Working on the open-source product, adding features, reviewing pull requests, and maintaining the existing infrastructure.",
      "Building enterprise features like sign-in with OIDC, user provisioning with SCIM, and role-based access control (RBAC).",
      "Working on secure self-hosting and deployment options using Kubernetes, Helm, Docker, and Podman.",
      "Building and maintaining the Electron app for macOS, Linux, and Windows.",
    ],
  },
  {
    name: "Exploreden",
    url: "https://exploreden.com.au",
    description:
      "A hotel-booking platform that brings together travel providers, payments, recommendations, and itinerary planning.",
    meta: "Django · React · Travel APIs · Stripe",
    details: [
      "I worked on integrations with RateHawk, Hotelbeds, Viator, and other hotel API providers.",
      "I built hotel-booking flows and connected Stripe for payments.",
      "Part of my work involved importing large amounts of provider data and setting up cron jobs for scheduled processing.",
      "Other features I worked on included recommendations, itinerary planning, credits, and rewards.",
    ],
  },
  {
    name: "llmai",
    url: "https://github.com/presenton/llmai",
    description:
      "A provider-neutral Python library that gives OpenAI, Anthropic, Gemini, Bedrock, DeepSeek, and other LLM APIs a shared interface for messages, tools, schemas, streaming, and responses.",
    meta: "Python · multi-provider LLMs · sync/async · structured output",
    secondaryLink: {
      label: "PyPI",
      url: "https://pypi.org/project/llmai/",
    },
  },
  {
    name: "nexREC",
    secondaryLink: { label: "Watch demo on YouTube", url: "https://youtu.be/oyYRzqYHRWY" },
    url: "https://github.com/sudipnext/nexREC",
    description:
      "A full-stack movie recommendation system built around graph neural networks and vector search, developed as a final-year engineering project.",
    meta: "PyTorch Geometric · Milvus · Django · PostgreSQL · Remix",
  },
  {
    name: "Autonomous navigation robot",
    secondaryLink: { label: "Watch demo on YouTube", url: "https://youtu.be/62uYFLbEVDE" },
    url: "https://ieeexplore.ieee.org/document/10933029",
    description:
      "A custom differential-drive robot for autonomous mapping and navigation, documented in a peer-reviewed IEEE conference paper.",
    meta: "ROS 2 · Nav2 · SLAM · LiDAR · C++ · Arduino",
  },
]

export const experience = [
  {
    period: "2025 — now",
    title: "Software Engineer & Open Source Lead",
    organization: "Presenton",
    url: "https://presenton.ai",
    description:
      "I spend most of my time on the open-source product, adding features and reviewing pull requests. I also look after the infrastructure and work on enterprise features and the desktop app.",
    details: projects.find((project) => project.name === "Presenton")?.details,
  },
  {
    period: "2024 — 2025",
    title: "Full-stack Engineer",
    organization: "Exploreden",
    url: "https://exploreden.com.au",
    description:
      "I worked on the hotel-booking platform with the team. My work included connecting travel providers, adding payments, and building features to help people plan their trips.",
    details: projects.find((project) => project.name === "Exploreden")?.details,
  },
  {
    period: "2023 — 2024",
    title: "Backend engineer",
    organization: "Kinu Tech",
    description:
      "I learned a lot about backend development at Kinu Tech through project work and mentorship. I worked with Django, APIs, web scraping, and data processing, and got familiar with caching, background tasks, and cloud deployment.",
    details: [
      "I learned to build APIs with Django and Django REST Framework, use PostgreSQL, and customize Django admin.",
      "I used BeautifulSoup, Scrapy, and Selenium for web scraping, and learned to clean and process the data with pandas and NumPy.",
      "I got familiar with caching, Celery background tasks, AWS tools such as Lambda, CDK, and ECR, and CI/CD with GitHub Actions.",
      "I also explored React, Next.js, Nuxt, and TypeScript while helping with frontend work.",
    ],
  },
  {
    period: "2024 — 2025",
    title: "University lead, CS50 AI",
    organization: "CS50x Nepal",
    url: "https://cs50xnepal.ioepc.edu.np",
    description:
      "I helped run CS50 AI classes and supported students as they worked through the course and their projects. I also helped organize workshops and the X-Hack 3.0 hackathon.",
  },
  {
    period: "2022 — 2025",
    title: "Advisor · Secretary · Vice Secretary",
    organization: "EXCESS, IOE Purwanchal Campus",
    url: "https://excess.ioepc.edu.np/",
    description:
      "I took on different roles in the student society, helping organize workshops, learning sessions, and hackathons. I also taught sessions on Django, web development, IoT, and robotics.",
  },
  {
    period: "2021 — 2025",
    title: "Data fellow",
    organization: "Code for Nepal",
    url: "https://codefornepal.org/",
    description:
      "Through the fellowship, I learned Python, SQL, data analysis, and visualization. I also explored machine learning, data warehousing, cloud computing, and Docker, and learned about working on software with others.",
  },
]

export const skillGroups = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "C", "Shell"],
  },
  {
    name: "Backend & APIs",
    items: ["Django", "Django REST Framework", "FastAPI", "Flask", "Node.js", "Celery", "OAuth 2.0", "OIDC", "SCIM", "RBAC", "REST APIs"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Electron", "Remix", "Nuxt", "Tailwind CSS", "Shadcn UI", "HTML", "CSS"],
  },
  {
    name: "AI & data",
    items: ["PyTorch", "PyTorch Geometric", "Hugging Face", "pandas", "NumPy", "scikit-learn", "GNNs", "vector search", "LLM tooling"],
  },
  {
    name: "Data & infrastructure",
    items: ["PostgreSQL", "Redis", "Milvus", "MongoDB", "Docker", "Podman", "Kubernetes", "Helm", "Nginx", "GitHub Actions", "AWS CDK", "Lambda", "EC2", "ECR", "Lightsail"],
  },
  {
    name: "Robotics & automation",
    items: ["ROS 2", "Nav2", "SLAM", "LiDAR", "Arduino", "ESP32", "MQTT", "Selenium", "Scrapy", "BeautifulSoup"],
  },
]

export const writing = [
  {
    topic: "Django",
    title: "Mastering Django: Memcache and DatabaseCache for Speed",
    url: "https://blog.parajulisudip.com.np/mastering-django-memcache-databasecache-for-speed",
  },
  {
    topic: "Security",
    title: "Sharing Important Secrets over the Internet with GPG Keys",
    url: "https://blog.parajulisudip.com.np/sharing-important-secrets-over-internet-gpg-keys",
  },
  {
    topic: "Algorithms",
    title: "Solving Cryptarithmetic with a Genetic Algorithm",
    url: "https://blog.parajulisudip.com.np/crypt-arithmetic-genetic-algorithm",
  },
  {
    topic: "Nginx",
    title: "How Nginx Helps in Load Balancing, Reverse Proxy, and HTTP Caching",
    url: "https://blog.parajulisudip.com.np/understanding-nginx-a-comprehensive-guide",
  },
  {
    topic: "Web scraping",
    title: "Getting Started with BeautifulSoup4",
    url: "https://blog.parajulisudip.com.np/getting-started-with-beautifulsoup4",
  },
]
