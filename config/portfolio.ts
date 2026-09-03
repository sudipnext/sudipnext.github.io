export const links = {
  github: "https://github.com/sudipnext",
  linkedin: "https://www.linkedin.com/in/sudipnext/",
  blog: "https://blog.parajulisudip.com.np",
  medium: "https://medium.com/@sudipnext",
  email: "mailto:info@parajulisudip.com.np",
  presenton: "https://presenton.ai",
}

export type Project = {
  name: string
  url: string
  description: string
  meta: string
}

export const projects: Project[] = [
  {
    name: "Presenton",
    url: "https://github.com/presenton/presenton",
    description:
      "Open-source AI presentation generator and API with editable PPTX and PDF exports, custom templates, document ingestion, bring-your-own-model support, and self-hosting.",
    meta: "TypeScript · Next.js · Python · LLMs · Docker",
  },
  {
    name: "docx2everything",
    url: "https://github.com/sudipnext/docx2everything",
    description:
      "A dependency-free Python package that extracts Markdown, text, tables, images, footnotes, comments, and formatting from DOCX files.",
    meta: "Python · PyPI · document processing",
  },
  {
    name: "nexREC",
    url: "https://github.com/sudipnext/nexREC",
    description:
      "A full-stack movie recommendation system built around graph neural networks and vector search, developed as a final-year engineering project.",
    meta: "PyTorch Geometric · Milvus · Django · PostgreSQL · Remix",
  },
  {
    name: "Autonomous navigation robot",
    url: "https://ieeexplore.ieee.org/document/10933029",
    description:
      "A custom differential-drive robot for autonomous mapping and navigation, documented in a peer-reviewed IEEE conference paper.",
    meta: "ROS 2 · Nav2 · SLAM · LiDAR · C++ · Arduino",
  },
]

export const experience = [
  {
    period: "2025 — now",
    title: "Product engineering",
    organization: "Presenton AI",
    url: "https://presenton.ai",
    description:
      "Building an open-source presentation-generation platform across AI orchestration, document ingestion, rich editing, model integrations, exports, desktop packaging, and self-hosted deployment.",
  },
  {
    period: "2024 — 2025",
    title: "Full-stack engineer",
    organization: "Exploreden Australia",
    url: "https://exploreden.com.au",
    description:
      "Developed a travel-booking platform with Django and React, integrating Hotelbeds and RateHawk APIs for hotel and flight search alongside payments, authentication, recommendation features, and responsive product flows.",
  },
  {
    period: "2023 — 2024",
    title: "Backend engineer",
    organization: "Kinu Tech",
    description:
      "Progressed from junior to backend engineer, building Django services and data pipelines and improving system performance with caching, Celery, AWS Lambda, CDK, ECR, and CI/CD.",
  },
  {
    period: "2024 — 2025",
    title: "University lead, CS50 AI",
    organization: "CS50x Nepal",
    url: "https://cs50xnepal.ioepc.edu.np",
    description:
      "Led CS50 AI cohorts, mentored more than 60 learners, and helped organize workshops and X-Hack 3.0, a national AI hackathon with more than 100 participants.",
  },
  {
    period: "2022 — 2025",
    title: "Advisor · Secretary · Vice Secretary",
    organization: "EXCESS, IOE Purwanchal Campus",
    url: "https://excess.ioepc.edu.np/",
    description:
      "Led technical programs spanning Django, IoT, robotics, ROS 2, and web development; organized a 17-team hardware hackathon; and helped deliver learning sessions reaching more than 1,500 students.",
  },
  {
    period: "2021 — 2025",
    title: "Data fellow",
    organization: "Code for Nepal",
    url: "https://codefornepal.org/",
    description:
      "Developed foundations in Python, SQL, data analysis, visualization, machine learning, data warehousing, cloud computing, Docker, and collaborative software development.",
  },
]

export const skillGroups = [
  {
    name: "Languages",
    items: ["Python", "TypeScript", "JavaScript", "SQL", "C++", "C", "Shell"],
  },
  {
    name: "Backend & APIs",
    items: ["Django", "Django REST Framework", "FastAPI", "Flask", "Node.js", "Celery", "OAuth 2.0", "REST APIs"],
  },
  {
    name: "Frontend",
    items: ["React", "Next.js", "Remix", "Nuxt", "Tailwind CSS", "Shadcn UI", "HTML", "CSS"],
  },
  {
    name: "AI & data",
    items: ["PyTorch", "PyTorch Geometric", "Hugging Face", "pandas", "NumPy", "scikit-learn", "GNNs", "vector search", "LLM tooling"],
  },
  {
    name: "Data & infrastructure",
    items: ["PostgreSQL", "Redis", "Milvus", "MongoDB", "Docker", "Nginx", "GitHub Actions", "AWS CDK", "Lambda", "EC2", "ECR", "Lightsail"],
  },
  {
    name: "Robotics & automation",
    items: ["ROS 2", "Nav2", "SLAM", "LiDAR", "Arduino", "ESP32", "MQTT", "Selenium", "Scrapy", "BeautifulSoup"],
  },
]

export const writing = [
  {
    date: "May 2025",
    title: "Ditch Gamma? Discover This Free, Open-Source Presentation Tool",
    url: "https://blog.parajulisudip.com.np/ditch-gamma-discover-free-open-source-presentation-tool/",
  },
  {
    date: "Feb 2025",
    title: "Getting Started with AWS Lightsail",
    url: "https://blog.parajulisudip.com.np/getting-started-aws-lightsail-things-you-need-to-know/",
  },
  {
    date: "Nov 2024",
    title: "How to Configure Django with S3 Buckets for Efficient File Storage",
    url: "https://blog.parajulisudip.com.np/how-to-configure-django-with-s3-buckets-efficient-file-storage/",
  },
  {
    date: "Jun 2024",
    title: "How Nginx Helps in Load Balancing, Reverse Proxy, and HTTP Caching",
    url: "https://blog.parajulisudip.com.np/understanding-nginx-a-comprehensive-guide/",
  },
]
