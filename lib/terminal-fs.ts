"use client"

// Virtual file system for the terminal

export type FileSystemNode = {
  name: string
  type: "file" | "directory"
  content?: string
  children?: Record<string, FileSystemNode>
}

export type FileSystem = {
  root: FileSystemNode
  currentPath: string[]
}

// Create the initial file system structure
export function createFileSystem(): FileSystem {
  return {
    root: {
      name: "/",
      type: "directory",
      children: {
        home: {
          name: "home",
          type: "directory",
          children: {
            sudipnext: {
              name: "sudipnext",
              type: "directory",
              children: {
                "about.txt": {
                  name: "about.txt",
                  type: "file",
                  content: `Hi, I'm Sudip Parajuli from Dharan, Nepal.
I work on Data Science, Web Scraping, Robotics, and Web Development using Python and JavaScript.
I help build human-centric products with positive impact.

Status: Open For Work`,
                },
                "skills.txt": {
                  name: "skills.txt",
                  type: "file",
                  content: `# Languages
Python, JavaScript, TypeScript, SQL, HTML, CSS

# Frameworks
React, Next.js, Django, Express, TailwindCSS

# Data Science
Pandas, NumPy, Scikit-learn, Matplotlib, TensorFlow

# Web Scraping
BeautifulSoup, Scrapy, Selenium, Requests`,
                },
                "contact.txt": {
                  name: "contact.txt",
                  type: "file",
                  content: `Email: contact@sudipparajuli.com
GitHub: https://github.com/sudipnext
LinkedIn: https://linkedin.com/in/sudipnext
Twitter: https://twitter.com/sudipnext`,
                },
                projects: {
                  name: "projects",
                  type: "directory",
                  children: {
                    "data-dashboard.md": {
                      name: "data-dashboard.md",
                      type: "file",
                      content: `# Data Visualization Dashboard

Interactive dashboard for visualizing complex datasets

## Technologies
- React
- D3.js
- Python
- Flask

## Links
- Demo: https://example.com/data-dashboard
- GitHub: https://github.com/sudipnext/data-dashboard`,
                    },
                    "ecommerce-scraper.md": {
                      name: "ecommerce-scraper.md",
                      type: "file",
                      content: `# E-commerce Scraper

Web scraper for e-commerce sites with data analysis

## Technologies
- Python
- Scrapy
- Pandas
- MongoDB

## Links
- Demo: https://example.com/ecommerce-scraper
- GitHub: https://github.com/sudipnext/ecommerce-scraper`,
                    },
                    "blog-platform.md": {
                      name: "blog-platform.md",
                      type: "file",
                      content: `# Personal Blog Platform

Custom blog platform with markdown support

## Technologies
- Next.js
- MDX
- TailwindCSS
- Vercel

## Links
- Demo: https://example.com/blog-platform
- GitHub: https://github.com/sudipnext/blog-platform`,
                    },
                  },
                },
                blog: {
                  name: "blog",
                  type: "directory",
                  children: {
                    "web-scraping.md": {
                      name: "web-scraping.md",
                      type: "file",
                      content: `# Getting Started with Web Scraping in Python

Date: 2023-12-15
Tags: Python, Web Scraping, BeautifulSoup

Learn the basics of web scraping using BeautifulSoup and Requests.

## Introduction

Web scraping is a technique to extract data from websites. This post covers the basics of web scraping with Python.

## Sample Code

\`\`\`python
import requests
from bs4 import BeautifulSoup

url = 'https://example.com'
response = requests.get(url)
soup = BeautifulSoup(response.text, 'html.parser')

# Find all links
links = soup.find_all('a')
for link in links:
    print(link.get('href'))
\`\`\``,
                    },
                    "dashboards.md": {
                      name: "dashboards.md",
                      type: "file",
                      content: `# Building Interactive Dashboards with React and D3

Date: 2023-11-20
Tags: React, D3.js, Data Visualization

A comprehensive guide to creating data visualizations.

## Introduction

This post explores how to build interactive dashboards using React and D3.js.

## Sample Code

\`\`\`jsx
import React, { useEffect, useRef } from 'react';
import * as d3 from 'd3';

function BarChart({ data }) {
  const svgRef = useRef();
  
  useEffect(() => {
    // D3 code to create bar chart
    const svg = d3.select(svgRef.current);
    // ...
  }, [data]);
  
  return <svg ref={svgRef}></svg>;
}
\`\`\``,
                    },
                    "machine-learning.md": {
                      name: "machine-learning.md",
                      type: "file",
                      content: `# Machine Learning for Beginners: A Practical Guide

Date: 2023-10-05
Tags: Python, Machine Learning, Scikit-learn

Start your journey into machine learning with Python.

## Introduction

This guide will help beginners understand the basics of machine learning using Python.

## Sample Code

\`\`\`python
from sklearn.model_selection import train_test_split
from sklearn.ensemble import RandomForestClassifier
from sklearn.metrics import accuracy_score

# Split data
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)

# Train model
model = RandomForestClassifier()
model.fit(X_train, y_train)

# Evaluate
predictions = model.predict(X_test)
accuracy = accuracy_score(y_test, predictions)
print(f"Accuracy: {accuracy:.2f}")
\`\`\``,
                    },
                  },
                },
                "cv.json": {
                  name: "cv.json",
                  type: "file",
                  content: `{
  "name": "Sudip Parajuli",
  "title": "Full Stack Software Engineer",
  "location": "Dharan, Nepal",
  "email": "coc42060@gmail.com",
  "phone": "(+977) 9811359372",
  "website": "parajulisudip.com.np",
  "experience": [
    {
      "position": "Backend Engineer",
      "company": "Kinu Tech Pvt. Ltd",
      "period": "2024 Sept - Present",
      "description": "Proficient in AWS (EC2, Lambda, CDK, Beanstalk, Lightsail), CI/CD with GitHub Actions. Built Django backend for international travel booking, integrated APIs (Hotelbeds), implemented recommendation systems (Gorse), Stripe payments, caching, microservices, Celery, AWS Lambda, CDK, ECR, Google OAuth2."
    },
    {
      "position": "Junior Backend Engineer",
      "company": "Kinu Tech Pvt. Ltd",
      "period": "March 2023 - Feb 2024",
      "description": "API integrations, backend optimizations, built height prediction model and backend for heightcomparison.com, scraped 50k+ data, contributed to Pharmacy Dashboard (Nuxt3), Django admin customization, worked with Django, DRF, PostgreSQL, Nuxt.js, TypeScript, bs4, Selenium, Scrapy, Pandas, TailwindCSS."
    },
    {
      "position": "University Lead, Instructor",
      "company": "CS50xNepal",
      "period": "Present",
      "description": "Mentored 60+ students in AI/ML, led CS50 AI 2024/2025, organized/mentored hackathons (X-Hack 3.0), taught Python, Django, databases, web scraping."
    },
    {
      "position": "Advisor & Former Secretary",
      "company": "EXCESS",
      "period": "Present",
      "description": "Taught 1500+ students (Django, IoT, Robotics, ROS2, Web), led X-Hack 2.0, organized workshops, facilitated student-alumni-industry collaboration."
    },
    {
      "position": "Data Fellow",
      "company": "Code for Nepal",
      "period": "2021 - 2025",
      "description": "Python (pandas, NumPy, PyTorch), SQL (PostgreSQL, SQL Server, Snowflake), Shell scripting, data analysis, visualization (Matplotlib, Seaborn), ML (PyTorch), Docker, cloud, OOP, Git."
    }
  ],
  "education": [
    {
      "degree": "B.E. in Electronics, Communication and Information Engineering",
      "institution": "Tribhuvan University, Institute Of Engineering, Purwanchal Campus",
      "period": "05/2021 - 06/2025",
      "description": "4th Semester Class Topper, Active in EXCESS, CS50xNepal, Code for Nepal. Organized hackathons, workshops, mentored students in AI/ML."
    }
  ],
  "publications": [
    {
      "title": "Navigation of Mobile Robot with Nav2 and SLAM using LiDAR",
      "conference": "2025 4th International Conference on Sentiment Analysis and Deep Learning (ICSADL)",
      "status": "accepted",
      "year": "2025"
    }
  ],
  "majorProjects": [
    {
      "title": "URL Shortener with Complete Dashboard",
      "description": "Full-fledged URL shortener with analytics, JWT auth, dashboard (ShadCN UI), Django & DRF backend, user management, link tracking, custom short URLs."
    },
    {
      "title": "GNN Based Recommendation System",
      "description": "Full-stack recommendation system using Milvus, HuggingFace, PyTorch, PyTorch Geometric, Django, Remix, PostgreSQL, GNNs (SAGEConv, GAT, GATv2), Nginx, Gunicorn, Whitenoise."
    },
    {
      "title": "All-in-One Video Downloader",
      "description": "Platform for downloading from YouTube, TikTok, Instagram, with optimized backend and user-friendly interface."
    },
    {
      "title": "Multi Vendor E-commerce Dashboard for ByaparLink",
      "description": "E-commerce management system: order tracking, product creation, authentication, phone OTP, Django & DRF backend, modern UI frontend."
    }
  ],
  "skills": {
    "programmingLanguages": ["Python", "JavaScript / TypeScript", "C++"],
    "toolsAndFrameworks": ["Django", "Django REST Framework", "React", "Next.js", "ShadCN", "Nuxt3", "Remix", "FastAPI", "Pandas", "NumPy", "TailwindCSS", "PyTorch", "scikit-learn", "PyTorch Geometric"],
    "devopsAndCloud": ["AWS CDK", "AWS Lambda", "AWS EC2", "AWS Lightsail", "Docker", "ECR", "GitHub Actions"],
    "webScrapingAndAutomation": ["Selenium", "BeautifulSoup", "Scrapy", "MechanicalSoup"],
    "otherTools": ["PostgreSQL", "Redis", "Milvus", "MongoDB", "Stripe (Payment Gateway Integration)"]
  },
  "interests": "Writing technical blogs on https://medium.com/@sudipnext. Research interests: Robotics, Deep Learning, Graph Neural Networks, Recommendation Systems, scalable applications, optimization."
}
`,
                },
                ".bashrc": {
                  name: ".bashrc",
                  type: "file",
                  content: `# Welcome to sudipnext's portfolio terminal!
# Type 'help' to see available commands.

alias ll='ls -la'
alias projects='cd ~/projects'
alias blog='cd ~/blog'

echo "Welcome to sudipnext's portfolio terminal!"
echo "Type 'help' to see available commands."
echo ""
`,
                },
              },
            },
          },
        },
      },
    },
    currentPath: ["home", "sudipnext"],
  }
}

// Helper functions for navigating the file system
export function getNodeAtPath(fs: FileSystem, path: string[]): FileSystemNode | null {
  let current: FileSystemNode = fs.root

  if (path.length === 0) return current

  for (const segment of path) {
    if (segment === "") continue
    if (!current.children || !current.children[segment]) {
      return null
    }
    current = current.children[segment]
  }

  return current
}

export function resolvePath(fs: FileSystem, path: string): string[] {
  if (path.startsWith("/")) {
    // Absolute path
    const segments = path.split("/").filter(Boolean)
    return segments
  } else {
    // Relative path
    const segments = path.split("/")
    const newPath = [...fs.currentPath]

    for (const segment of segments) {
      if (segment === "") continue
      if (segment === ".") continue
      if (segment === "..") {
        if (newPath.length > 0) {
          newPath.pop()
        }
      } else {
        newPath.push(segment)
      }
    }

    return newPath
  }
}

export function formatPath(path: string[]): string {
  if (path.length === 0) return "/"
  return "/" + path.join("/")
}

export function getDirectoryContents(fs: FileSystem, path: string[]): FileSystemNode[] {
  const node = getNodeAtPath(fs, path)
  if (!node || node.type !== "directory" || !node.children) {
    return []
  }

  return Object.values(node.children)
}
