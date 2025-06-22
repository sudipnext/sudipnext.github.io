import { link } from "fs"
import { Github, Linkedin, Mail, Twitter } from "lucide-react"
import { title } from "process"

export const siteConfig = {
  name: "Sudip Parajuli",
  nickname: "sudipnext",
  description:
    "I'm Sudip Parajuli from Dharan, Nepal. I work on Data Science, Web Scraping, Robotics, and Web Development using Python and JavaScript. I help build human-centric products with positive impact.",
  status: "Open For Work",
  profileImage: "/head.jpg",

  // Social links
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/sudipnext",
      icon: Github,
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/sudipnext",
      icon: Linkedin,
    },
    {
      name: "Twitter",
      url: "https://twitter.com/sudipnext",
      icon: Twitter,
    },
    {
      name: "Email",
      url: "mailto:info@parajulisudip.com.np",
      icon: Mail,
    },
  ],

  // Navigation links
  navItems: [
    {
      title: "Home",
      href: "/",
    },
    {
      title: "Projects",
      href: "/projects",
    },
    {
      title: "Blog",
      href: "https://blog.parajulisudip.com.np",
    },
    {
      title: "Medium",
      href: "https://medium.com/@sudipnext",
    },
    {
      title: "CV",
      href: "/cv",
    },
  ],

  // Terminal commands
  terminalCommands: {
    help: "Shows available commands",
    about: "Displays information about me",
    skills: "Lists my technical skills",
    contact: "Shows my contact information",
    projects: "Navigates to my projects page",
    blog: "Navigates to my blog page",
    cv: "Navigates to my CV page",
    clear: "Clears the terminal",
  },

  // Skills
  skills: {
    languages: ["Python", "JavaScript", "TypeScript", "SQL", "HTML", "CSS"],
    frameworks: ["React", "Next.js", "Django", "Express", "TailwindCSS"],
    tools: ["Git", "Docker", "AWS", "Vercel", "Figma"],
    datascience: ["Pandas", "NumPy", "Scikit-learn", "Matplotlib", "TensorFlow"],
    scraping: ["BeautifulSoup", "Scrapy", "Selenium", "Requests"],
  },

  // Projects (sample data)
  projects: [
    {
      title: "nexREC",
      description: "A graph-based recommendation engine with sophisticated user preference analysis, developed as a final-year academic project.",
      tags: ["Python", "Django", "Graph Database", "Authentication", "DRF", "PostgreSQL", "Milvus", "Pytorch", "Pytorch Geometric", "Graph Neural Network"],
      image: "/projects/GNNMovieRecommendation.png",
      link: "https://youtu.be/oyYRzqYHRWY"
    },
    {
      title: "QuoteReels",
      description: "Flask app that automatically generates short-form video content by combining AI-analyzed quotes with relevant background videos.",
      tags: ["Python", "Flask", "JavaScript", "HTML", "CSS", "GEMINI", "Coverr", "MoviePy"],
      image: "/projects/QuoteToReels.png",
      link: "https://youtu.be/5Wd5WKrFXTo"
    },
    
    {
      title: "CS50 AI Smart Attendance System",
      description: "QR-based system to track daily student attendance.",
      tags: ["Python", "Django", "JavaScript", "HTML", "CSS", "JS"],
      image: "/projects/SmartAttendance.png",
      github: "https://github.com/CS50xNepalOfficial/AttendenceSystem"
    },
    {
      title: "Jha Consultancy Portfolio Website ",
      description: "Professional portfolio website showcasing Jha Consultancy's services and projects.",
      tags: ["Next.js", "Cloudflare", "Github Pages", "TailwindCSS"],
      image: "/projects/JhaConsultancy.png",
      link: "https://jhaconsultancy.co.in/"
    },
    {
      title: "Height Comparision",
      description: "API for comparing heights using scraped celebrity and anime character data, with height prediction model.",
      tags: ["Python", "Django", "Web Scraping", "Machine Learning"],
      image: "/projects/Height.png",
      link: "https://www.heightcomparison.com/",
    },

    {
      title: "Autonomous Robot from with ROS2 and Nav2",
      description: "Autonomous navigation robot using ROS2 and Nav2, featuring custom serial communication with Arduino microcontrollers for efficient data handling and precise movement.",
      tags: ["ROS2", "Nav2", "Python", "C++", "Robot"],
      image: "/projects/system_diagram_final.png",
      link: "https://youtu.be/62uYFLbEVDE",
      paper: "https://ieeexplore.ieee.org/document/10933029",
    },
    {
      title: "Automatic Emergency Response System",
      description: "IoT system for emergency detection and alert notification.",
      tags: ["C++","C", "ESP 32", "IoT", "Arduino IDE", "MQTT", "NodeRed", "JS"],
      image: "/projects/Automatic Emergency Response System.png",
      link: "https://youtu.be/PkWDqFJrmbY",
      github: "https://github.com/sudipnext/Automatic-Emergency-Response-System"
    },
    {
      title: "Clipr",
      description: "URL shortener with usage tracking and metrics.",
      tags: ["React", "Next.js", "JavaScript", "ShadCN", "docker", "docker-compose"],
      image: "/projects/Clipr.png",
      github: "https://github.com/sudipnext/url-shortner.git"
    },
    {
      title: "All Video Downloader",
      description: "Web app for downloading videos from YouTube, Facebook, and Instagram.",
      tags: ["HTML", "CSS", "Django", "JavaScript", "Web Scraping"],
      image: "/projects/AllVideoDownloader.png",
      link: "#",
    },
      {
      title: "Expenses Manager",
      description: "Web application for personal expense tracking and budget management.",
      tags: ["Python", "Django", "JavaScript", "Bootstrap"],
      image: "",
      github: "https://github.com/sudipnext/Expenses-Manager"
    },
    {
      title: "ByaparLink Dashboard",
      description: "Multi-vendor e-commerce dashboard for managing orders, products, and user authentication, featuring phone OTP verification.",
      tags: ["Python", "Django", "Django REST Framework", "JavaScript", "HTML", "CSS", "Bootstrap"],
      image: "",
      link: "https://www.upwork.com/att/download/portfolio/persons/uid/1298940389630046208/profile/projects/files/943cf6f9-f1bb-4e51-8c4d-dfafedba5d47"
    },
    {
      title: "Medium Unlocker",
      description: "Tool to access Medium articles without subscription.",
      tags: ["Python", "Django", "Web Scraping"],
      image: "",
      github: "https://github.com/sudipnext/medium-unlocker",
    },
    {
      title: "CryptArithmetic Solver Using Genetic Algorithm",
      description: "Implementation of genetic algorithms to solve cryptarithmetic puzzles.",
      tags: ["Python", "Genetic Algorithm", "CryptArithmetic"],
      images: "",
      github: "https://github.com/sudipnext/cryptGen"
    },
    {
      title: "NayaRojgar",
      description: "Job portal connecting job seekers with employers.",
      tags: ["Html", "CSS", "JS", "Django", "Bootstrap"],
      image: "/projects/NayaRojgar.png",
      github: "https://github.com/sudipnext/Nayarojgar",
    },
    {
      title: "Personal Blog Platform",
      description: "Custom markdown-supported blog platform built with Docusaurus.",
      tags: ["Next.js", "MDX", "TailwindCSS", "docusaurus"],
      image: "/projects/BlogPlatform.png",
      link: "https://blog.parajulisudip.com.np",
      github: "https://github.com/sudipnext/blog",
    },
    {
      title: "CS50 AI Class Visualizations",
      description: "Web application providing data visualizations for CS50 AI classes.",
      tags: ["Python", "Flask", "JavaScript", "HTML", "CSS", "DASH"],
      image: "",
      github: "https://github.com/CS50xNepalOfficial/CS50xAI-Visualizations"
    },
    {
      title: "Mini Lenovo Energy Management Tool(UnOfficial)",
      description: "Utility for managing energy settings on Lenovo devices running Linux.",
      tags: ["Python", "Linux", "Energy Management", "QT"],
      image: "",
      github: "https://github.com/sudipnext/lenovo_energy_management"
    }
  ],

  // Blog posts (sample data)
  blogPosts: [
    {
      title: "Getting Started with AWS Lightsail: Things You Need to Know Before Starting",
      description: "AWS Lightsail is, by far, one of the most user-friendly and powerful services offered by Amazon Web Services. It’s designed to simplify cloud computing for developers, small businesses, and anyone who wants to deploy applications quickly without the complexity of traditional AWS services. If you’re new to Lightsail or considering using it, here’s everything you need to know to get started.",
      date: "Feb 4, 2025",
      tags: ["AWS", "LightSail", "Cloud Computing"],
      slug: "https://medium.com/towardsdev/getting-started-with-aws-lightsail-things-you-need-to-know-before-starting-607e865a00be",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*rTWRIBG3Iv493y27cuUU4Q.png",
    },
    {
      title: "How to Configure Django with S3 Buckets for Efficient File Storage",
      description: "If you are searching for tutorials or ways to connect Django with s3 bucket there are plenty of the examples out there with many tutorials. I myself have gone through all of them setting up the s3 buckets with Django. It wasn’t my first time setting up but things are changed drastically. There are many ways how you can setup the Django application with s3. In this i will walk you through the most simplest configuration to setup the S3 bucket with Django. So, without any delay, let’s get started.",
      date: "Nov 13, 2024",
      tags: ["Django", "AWS", "S3", "Cloud Storage"],
      slug: "https://medium.com/python-in-plain-english/how-to-configure-django-with-s3-buckets-for-efficient-file-storage-99722c102e24",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*XUPbqazzA_sMy6MKfYTf4A.png",
    },
    {
      title: "Mastering Django Part 1: How to Use Memcache and DatabaseCache for Speed",
      description: "If you are absolute beginner to this concept of caching then it is okay that caching sounds super complex and fancy. Things are complex inside the caching i am not disagreeing with that sentiment either. But let me simplify some things for you why you need caching and how you can implement some common type of caches instantly to learn concepts.",
      date: "Nov 11, 2024",
      tags: ["Django", "Caching", "Memcache", "DatabaseCache"],
      slug: "https://medium.com/python-in-plain-english/efficient-caching-in-django-how-to-use-memcache-and-databasecache-for-speed-f06b1cb69f39",
      image: "https://miro.medium.com/v2/resize:fit:1400/format:webp/1*azc59i4VjeJ8guRVd-GdsA.png",
    },
  ],

  // Add these new sections for CV data
  cv: {
    personalInfo: {
      name: "Sudip Parajuli",
      location: "Dharan, Nepal",
      email: "coc42060@gmail.com",
      alternateEmail: "info@parajulisudip.com.np",
      phone: "(+977) 9811359372",
      website: "parajulisudip.com.np",
      status: "Open For Work"
    },
    
    education: [
      {
        degree: "B.E. in Electronics, Communication and Information Engineering",
        period: "05/2021 - 06/2025",
        institution: "Tribhuvan University, Institute Of Engineering, Purwanchal Campus",
        description: "4th Semester Class Topper, Active Member of Electronics and Communications Engineering Student Society Nepal (EXCESS), CS50xNepal, and Code for Nepal. Active in organizing hackathons, workshops, and mentoring students in AI and ML."
      }
    ],
    
    publications: [
      {
        title: "Navigation of Mobile Robot with Nav2 and SLAM using LiDAR",
        conference: "2025 4th International Conference on Sentiment Analysis and Deep Learning (ICSADL)",
        status: "accepted",
        year: "2025"
      }
    ],
    
    experience: [
      {
        organization: "Kinu Tech Pvt. Ltd",
        positions: [
          {
            title: "Backend Engineer",
            period: "2024 Sept - Present",
            company: "Kinu Tech Pvt. Ltd",
            description: "Proficient in Basic AWS Services like EC2, Lambda, CDK, Beanstalk, Lightsail etc. Learned CI/CD techniques with GitHub Actions. Major Experience Working with technologies like Django, Django REST Framework, React, Next.js. Worked on an international travel booking application. Created entire Django backend from scratch, implemented multiple APIs like Hotelbeds. Implemented Recommendation Systems using Gorse. Implemented Stripe for Payment Gateway. Optimized application performance by implementing caching strategies and microservices, leveraging Celery for task queuing, AWS Lambda for scheduled tasks, and AWS CDK with ECR for efficient deployment which improved system performance by 3 times. Implemented Google OAuth2 along with robust login/signup platform."
          },
          {
            title: "Junior Backend Engineer",
            period: "March 2023 - Feb 2024",
            company: "Kinu Tech Pvt. Ltd",
            description: "Worked on API integrations and backend optimizations. Built a Height Prediction model along with entire backend system of https://www.heightcomparison.com. Scraped thousands of websites to gather almost 50k celebs, anime data along with necessary information. Learned software engineering best practices through hands-on mentorship. Contributed to the development of a Pharmacy Dashboard in Nuxt3. Contributed on django admin customization with custom themes and functionality. Worked with Django, Django REST Framework, Django Admin Optimization, PostgreSQL, Nuxt.js, TypeScript, bs4, Selenium, MechanicalSoup, Scrapy, Jupyter Notebook, NumPy, Pandas, Large Data Handling, Data Cleaning, TailwindCSS, and others."
          }
        ]
      },
      {
        organization: "CS50xNepal",
        positions: [
          {
            title: "University Lead, Instructor",
            period: "Present",
            company: "CS50xNepal",
            description: "Mentored 60 students to enter in the field of AI and ML, leading CS50 AI 2024/2025. Conducted and mentored at the national-level hackathon (X-Hack 3.0 – A CS50 AI Inspired Hackathon) with 100+ participants. Mentored students in topics like Python, Django, databases, and web scraping. Led the CS50x hackathon, mentoring teams on project execution. Organized mini-hackathons and technical workshops."
          }
        ]
      },
      {
        organization: "EXCESS",
        positions: [
          {
            title: "Advisor",
            period: "Present",
            company: "Electronics and Communications Engineering Student Society Nepal",
            description: "Taught more than 1500+ students on topics like Django, IoT, Microcontroller, Robotics, ROS2, Web Development etc. Led and organized X-Hack 2.0, a national-level hardware hackathon with 17 teams. Conducted workshops on IoT, brainstorming, and web development to prepare participants. Facilitated collaboration between students, alumni, and industry professionals."
          },
          {
            title: "Secretary",
            period: "2023 - 2024",
            company: "Electronics and Communications Engineering Student Society Nepal",
            description: "Led DataCamp Donates Initiative from EXCESS as EXCESS Data Fellowship, Launched the first ever CS50 AI Nepal, The very first adaptation at the Purwanchal Campus Dharan with over 60 students active participation. Managed and Led Multiple Teams, Organized Events."
          },
          {
            title: "Vice Secretary",
            period: "2022 - 2023",
            company: "Electronics and Communications Engineering Student Society Nepal",
            description: "Worked on various projects including e-commerce websites, data scraping tools, and automation scripts."
          }
        ]
      },
      {
        organization: "Code for Nepal",
        positions: [
          {
            title: "Data Fellow",
            period: "2021 - 2025",
            company: "Code for Nepal",
            description: "Programming & Data Analysis: Proficient in Python (pandas, NumPy, PyTorch), SQL (PostgreSQL, SQL Server, Snowflake), and Shell scripting. Data Science & Visualization: Strong foundation in data manipulation, exploratory data analysis, and visualization (Matplotlib, Seaborn). Machine Learning & Engineering: Experience with deep learning (PyTorch), data warehousing, containerization (Docker), and cloud computing concepts. Software Development: Knowledge of object-oriented programming, version control (Git), and writing efficient Python code."
          }
        ]
      }
    ],

    majorProjects: [
      {
        title: "URL Shortener with Complete Dashboard",
        description: "Developed a full-fledged URL shortener with analytics, user authentication (JWT), and a clean dashboard using ShadCN UI. Backend built with Django & Django REST Framework (DRF), ensuring secure and scalable API endpoints. Implemented user management, link tracking, and custom short URLs."
      },
      {
        title: "GNN Based Recommendation System",
        description: "Built a full-stack recommendation system leveraging Milvus (vector database), HuggingFace, PyTorch, PyTorch Geometric, Django, Remix, PostgreSQL, and Graph Neural Network (GNNs) and variants like SAGEConv, GAT, GATv2 etc. Used Nginx, Gunicorn, and Whitenoise for efficient static file serving and API management."
      },
      {
        title: "All-in-One Video Downloader",
        description: "Created a robust platform supporting video downloads from multiple sources like YouTube, TikTok, Instagram with a user-friendly interface. Ensured efficient processing and seamless user experience with optimized backend services."
      },
      {
        title: "Multi Vendor E-commerce Dashboard for ByaparLink",
        description: "Built a complete e-commerce management system, enabling order tracking, product creation, and authentication. Integrated phone OTP verification for secure user access. Backend powered by Django & DRF, frontend using modern UI libraries for a smooth user experience."
      }
    ],
    
    detailedSkills: {
      programmingLanguages: ["Python", "JavaScript / TypeScript", "C++"],
      toolsAndFrameworks: ["Django", "Django REST Framework", "React", "Next.js", "ShadCN", "Nuxt3", "Remix", "FastAPI", "Pandas", "NumPy", "TailwindCSS", "PyTorch", "scikit-learn", "PyTorch Geometric"],
      devopsAndCloud: ["AWS CDK", "AWS Lambda", "AWS EC2", "AWS Lightsail", "Docker", "ECR", "GitHub Actions"],
      webScrapingAndAutomation: ["Selenium", "BeautifulSoup", "Scrapy", "MechanicalSoup"],
      otherTools: ["PostgreSQL", "Redis", "Milvus", "MongoDB", "Stripe (Payment Gateway Integration)"]
    },
    
    interests: "Beyond building projects, I am passionate writing technical blogs on https://medium.com/@sudipnext. My research interests includes Robotics, Deep Learning, Graph Neural Networks, and Recommendation Systems, with a focus on real-world scalable applications and optimization techniques."
  },
}
