export const links = {
  github: "https://github.com/sudipnext",
  linkedin: "https://www.linkedin.com/in/sudipnext/",
  blog: "https://blog.parajulisudip.com.np",
  medium: "https://medium.com/@sudipnext",
  email: "mailto:info@parajulisudip.com.np",
  presenton: "https://presenton.ai",
  resume: "/Sudip Parajuli.pdf",
}

export type Project = {
  name: string
  url?: string
  description: string
  meta: string
  category: "AI & developer tools" | "Machine learning & robotics" | "Web products" | "Community & utilities"
  featured?: boolean
}

export const projects: Project[] = [
  {
    name: "Presenton",
    url: "https://github.com/presenton/presenton",
    description:
      "Open-source AI presentation generator and API with editable PPTX/PDF exports, custom templates, document ingestion, BYOK model support, and self-hosting.",
    meta: "TypeScript · Next.js · Python · LLMs · Docker",
    category: "AI & developer tools",
    featured: true,
  },
  {
    name: "dsh-chatgpt-codex",
    url: "https://github.com/sudipnext/dsh-chatgpt-codex",
    description:
      "An OAuth plugin that brings ChatGPT authentication and Codex models to DeepSeek Harness through browser callback and device-code flows.",
    meta: "TypeScript · OAuth 2.0 · PKCE · AI agents",
    category: "AI & developer tools",
    featured: true,
  },
  {
    name: "DesignClaw",
    url: "https://github.com/sudipnext/designclaw",
    description:
      "A template-first AI design agent for creating on-brand social banners and exporting publish-ready PNG files.",
    meta: "AI agents · design automation · open source",
    category: "AI & developer tools",
  },
  {
    name: "docx2everything",
    url: "https://github.com/sudipnext/docx2everything",
    description:
      "A dependency-free Python package that extracts Markdown, text, tables, images, footnotes, comments, and formatting from DOCX files.",
    meta: "Python · PyPI · document processing",
    category: "AI & developer tools",
    featured: true,
  },
  {
    name: "QuoteReels",
    url: "https://github.com/sudipnext/QuoteReels",
    description:
      "An AI-assisted short-form video studio with script generation, stock-footage search, text-to-speech, and a drag-and-drop editor.",
    meta: "Python · Flask · LLMs · KittenTTS · MoviePy",
    category: "AI & developer tools",
    featured: true,
  },
  {
    name: "nexREC",
    url: "https://github.com/sudipnext/nexREC",
    description:
      "A full-stack movie recommendation system built around graph neural networks and vector search, developed as a final-year engineering project.",
    meta: "PyTorch Geometric · Milvus · Django · PostgreSQL · Remix",
    category: "Machine learning & robotics",
    featured: true,
  },
  {
    name: "Autonomous navigation robot",
    url: "https://ieeexplore.ieee.org/document/10933029",
    description:
      "A custom differential-drive robot for autonomous mapping and navigation, documented in a peer-reviewed IEEE conference paper.",
    meta: "ROS 2 · Nav2 · SLAM · LiDAR · C++ · Arduino",
    category: "Machine learning & robotics",
    featured: true,
  },
  {
    name: "Height Comparison",
    url: "https://www.heightcomparison.com/",
    description:
      "Backend, prediction model, and data pipeline for comparing celebrity and fictional-character heights from roughly 50,000 gathered records.",
    meta: "Django · machine learning · web scraping · data cleaning",
    category: "Machine learning & robotics",
  },
  {
    name: "CryptArithmetic Solver",
    url: "https://github.com/sudipnext/cryptGen",
    description: "A genetic-algorithm implementation for solving cryptarithmetic puzzles.",
    meta: "Python · genetic algorithms · optimization",
    category: "Machine learning & robotics",
  },
  {
    name: "All-in-One Video Downloader",
    description:
      "A web application for downloading and processing videos from YouTube, Facebook, Instagram, and other sources.",
    meta: "Django · JavaScript · scraping · media processing",
    category: "Web products",
  },
  {
    name: "Clipr",
    url: "https://github.com/sudipnext/url-shortner",
    description:
      "A URL-shortening platform with authentication, custom links, click tracking, analytics, and a complete dashboard.",
    meta: "Django REST Framework · Next.js · JWT · Docker",
    category: "Web products",
  },
  {
    name: "ByaparLink Dashboard",
    description:
      "A multi-vendor commerce dashboard for managing products and orders, with phone-based OTP authentication.",
    meta: "Django REST Framework · JavaScript · PostgreSQL",
    category: "Web products",
  },
  {
    name: "NayaRojgar",
    url: "https://github.com/sudipnext/Nayarojgar",
    description: "A job portal connecting job seekers and employers through listings and applications.",
    meta: "Django · JavaScript · Bootstrap",
    category: "Web products",
  },
  {
    name: "Expenses Manager",
    url: "https://github.com/sudipnext/Expenses-Manager",
    description: "A personal expense-tracking and budget-management web application.",
    meta: "Django · JavaScript · Bootstrap",
    category: "Web products",
  },
  {
    name: "Personal Blog Platform",
    url: "https://blog.parajulisudip.com.np",
    description: "A Markdown-based technical blog with interactive learning articles and visualizers.",
    meta: "Docusaurus · MDX · React",
    category: "Web products",
  },
  {
    name: "ICRTAI 2025",
    url: "https://icrtai.com",
    description:
      "The public website for the International Conference on Recent Trends in Artificial Intelligence 2025.",
    meta: "Next.js · Tailwind CSS · Cloudflare",
    category: "Web products",
  },
  {
    name: "Jha Consultancy",
    url: "https://jhaconsultancy.co.in/",
    description: "A responsive company portfolio and service website.",
    meta: "Next.js · Tailwind CSS · GitHub Pages",
    category: "Web products",
  },
  {
    name: "Automatic Emergency Response System",
    url: "https://github.com/sudipnext/Automatic-Emergency-Response-System",
    description: "An IoT prototype for emergency detection, telemetry, and alert notification.",
    meta: "ESP32 · C/C++ · MQTT · Node-RED",
    category: "Community & utilities",
  },
  {
    name: "CS50x Nepal Smart Attendance",
    url: "https://github.com/CS50xNepalOfficial/AttendenceSystem",
    description: "A QR-based attendance platform built for CS50x Nepal classes and events.",
    meta: "Django · JavaScript · education",
    category: "Community & utilities",
  },
  {
    name: "CS50 AI Class Visualizations",
    url: "https://github.com/CS50xNepalOfficial/CS50xAI-Visualizations",
    description: "Interactive data visualizations created to support CS50 AI learners.",
    meta: "Python · Flask · Dash · education",
    category: "Community & utilities",
  },
  {
    name: "Lenovo Energy Management for Linux",
    url: "https://github.com/sudipnext/lenovo_energy_management",
    description: "An unofficial Linux utility for controlling Lenovo battery and energy settings.",
    meta: "Python · Qt · Linux",
    category: "Community & utilities",
  },
  {
    name: "Medium Unlocker",
    url: "https://github.com/sudipnext/medium-unlocker",
    description: "A small Django utility for cleaning and reading publicly available article content.",
    meta: "Python · Django · scraping",
    category: "Community & utilities",
  },
]

export const experience = [
  {
    period: "2025 — now",
    title: "Product engineering",
    organization: "Presenton AI",
    url: "https://presenton.ai",
    description:
      "Building an open-source presentation-generation platform across AI orchestration, document ingestion, rich editing, model integrations, exports, desktop packaging, and self-hosted deployment. More than 700 contributions to the public repository.",
  },
  {
    period: "2024 — 2025",
    title: "Full-stack engineer",
    organization: "Exploreden Australia",
    description:
      "Developed a travel-booking platform with Django and React. Integrated hotel and flight providers, payments, authentication, and responsive product flows while helping coordinate technical delivery.",
  },
  {
    period: "2023 — 2024",
    title: "Backend engineer",
    organization: "Kinu Tech",
    description:
      "Progressed from junior to backend engineer. Built Django services and travel APIs, integrated recommendation and payment systems, and improved performance with caching, Celery, AWS Lambda, CDK, ECR, and CI/CD.",
  },
  {
    period: "2024 — 2025",
    title: "University lead, CS50 AI",
    organization: "CS50x Nepal",
    url: "https://www.linkedin.com/company/cs50xnepal/",
    description:
      "Led CS50 AI cohorts, mentored more than 60 learners, and helped organize workshops and X-Hack 3.0, a national AI hackathon with more than 100 participants.",
  },
  {
    period: "2022 — 2025",
    title: "Advisor · Secretary · Vice Secretary",
    organization: "EXCESS, IOE Purwanchal Campus",
    description:
      "Led technical programs spanning Django, IoT, robotics, ROS 2, and web development; organized a 17-team hardware hackathon; and helped deliver learning sessions reaching more than 1,500 students.",
  },
  {
    period: "2021 — 2025",
    title: "Data fellow",
    organization: "Code for Nepal",
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
