import { Github, Facebook, Linkedin } from "lucide-react";

import LogoJavascript from "/public/images/logos/newLogos/JavaScript.svg";
import LogoTypescript from "/public/images/logos/newLogos/TypeScript.svg";
import LogoReact from "/public/images/logos/newLogos/React.svg";
import LogoNextjs from "/public/images/logos/newLogos/Next.js.svg";
import LogoNodejs from "/public/images/logos/newLogos/Node.js.svg";
import LogoPostgreSQL from "/public/images/logos/newLogos/PostgresSQL.svg";
import LogoVue from "/public/images/logos/newLogos/Vue.js.svg";
import LogoMongoDB from "/public/images/logos/newLogos/MongoDB.svg";
import LogoTailwindcss from "/public/images/logos/newLogos/Tailwind CSS.svg";
import LogoGit from "/public/images/logos/newLogos/Git.svg";
import LogoDjango from "/public/images/logos/newLogos/Django.svg";
import LogoRest from "/public/images/logos/newLogos/Django REST.svg";
import LogoGithub from "/public/images/logos/newLogos/GitHub.svg";
import LogoCSS3 from "/public/images/logos/newLogos/CSS3.svg";
import LogoBootstrap from "/public/images/logos/newLogos/Bootstrap.svg";
import LogoDocker from "/public/images/logos/newLogos/Docker.svg";
import LogoHTML5 from "/public/images/logos/newLogos/HTML5.svg";
import LogoPython from "/public/images/logos/newLogos/Python.svg";
import LogoSolidity from "/public/images/logos/newLogos/Solidity.svg";
import LogoArduino from "/public/images/logos/newLogos/Arduino.svg";
import LogoROS2 from "/public/images/logos/newLogos/ROS2.svg";
import LogoNuxt from "/public/images/logos/newLogos/Nuxt.js.svg";
import LogoJquery from "/public/images/logos/newLogos/jQuery.svg";
import LogoC from "/public/images/logos/newLogos/C.svg";
import LogoCpp from "/public/images/logos/newLogos/C++.svg";
import LogoBlender from "/public/images/logos/newLogos/Blender.svg";
import LogoMaya from "/public/images/logos/newLogos/Maya.svg";

import LogoKinu from "/public/images/logos/kinu_logo.png";
import ProjectAllVideoDownloader from "/public/images/projects/AllVideoDownloader.png";
import ProjectByaparLink from "/public/images/projects/Byaparlink.jpeg";
import ProjectClipr from "/public/images/projects/Clipr.png";
import ProjectHeightComparison from "/public/images/projects/Height.png";

import { ExperienceDetails, ProjectDetails, TechDetails } from "@/lib/types";

export const NAV_LINKS = [
  {
    label: "About",
    href: "#about",
  },
  {
    label: "Work",
    href: "#work",
  },
  {
    label: "Contact",
    href: "#contact",
  },
];

export const SOCIAL_LINKS = [
  {
    icon: Github,
    url: "https://github.com/sudipnext",
  },
  {
    icon: Linkedin,
    url: "https://www.linkedin.com/in/sudipnext/",
  },
  {
    icon: Facebook,
    url: "https://www.facebook.com/sudipnext",
  },
];

export const TECHNOLOGIES: TechDetails[] = [
  // {
  //   label: "HTML5",
  //   logo: LogoHTML5,
  //   url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  // },
  // {
  //   label: "CSS3",
  //   logo: LogoCSS3,
  //   url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  // },
  // {
  //   label: "Bootstrap",
  //   logo: LogoBootstrap,
  //   url: "https://getbootstrap.com/",
  // },
  {
    label: "Tailwindcss",
    logo: LogoTailwindcss,
    url: "https://tailwindcss.com/",
  },
  {
    label: "Javascript",
    logo: LogoJavascript,
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    label: "Typescript",
    logo: LogoTypescript,
    url: "https://www.typescriptlang.org/",
  },
  {
    label: "jQuery",
    logo: LogoJquery,
    url: "https://jquery.com/",
  },
  // {
  //   label: "React",
  //   logo: LogoReact,
  //   url: "https://react.dev/",
  // },
  // {
  //   label: "Next.js",
  //   logo: LogoNextjs,
  //   url: "https://nextjs.org/",
  // },
  {
    label: "Node.js",
    logo: LogoNodejs,
    url: "https://nodejs.org/en",
  },
  {
    label: "Vue.js",
    logo: LogoVue,
    url: "https://vuejs.org/",
  },
  {
    label: "Nuxt.js",
    logo: LogoNuxt,
    url: "https://nuxtjs.org/",
  },
  {
    label: "Docker",
    logo: LogoDocker,
    url: "https://www.docker.com/",
  },

  {
    label: "Git",
    logo: LogoGit,
    url: "https://git-scm.com/",
  },
  {
    label: "Github",
    logo: LogoGithub,
    url: "https://www.github.com/",
  },
  {
    label: "Python",
    logo: LogoPython,
    url: "https://www.python.org/",
  },
  {
    label: "Django",
    logo: LogoDjango,
    url: "https://www.djangoproject.com/",
  },
  {
    label: "DRF",
    logo: LogoRest,
    url: "https://restfulapi.net/",
  },
  {
    label: "PostgreSQL",
    logo: LogoPostgreSQL,
    url: "https://www.postgresql.org/",
  },
  {
    label: "MongoDB",
    logo: LogoMongoDB,
    url: "https://www.mongodb.com/",
  },
  {
    label: "C",
    logo: LogoC,
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    label: "C++",
    logo: LogoCpp,
    url: "https://en.wikipedia.org/wiki/C%2B%2B",
  },
  {
    label: "Arduino",
    logo: LogoArduino,
    url: "https://www.arduino.cc/",
  },
  {
    label: "ROS2",
    logo: LogoROS2,
    url: "https://index.ros.org/doc/ros2/",
  },
  // {
  //   label: "Solidity",
  //   logo: LogoSolidity,
  //   url: "https://soliditylang.org/",
  // },

  // {
  //   label: "Blender",
  //   logo: LogoBlender,
  //   url: "https://www.blender.org/",
  // },
  // {
  //   label: "Maya",
  //   logo: LogoMaya,
  //   url: "https://www.autodesk.com/products/maya/overview",
  // },
];

export const EXPERIENCES: ExperienceDetails[] = [
  {
    logo: LogoKinu,
    logoAlt: "KinuTech",
    position: "Junior FullStack Developer",
    startDate: new Date(2023, 2),
    currentlyWorkHere: false,
    endDate: new Date(2024, 1),
    summary: [
      "Contribution on Development of a Video Based Ecommerce start-up company product by implementing different. Mostly Backend Systems",
      "Worked with a variety of technologies, including Django, Django Rest Framework, Django Admin Optimization, Postgresql Nuxt.js, Typescript, bs4, Selenium, MechanicalSoup, Scrapy, Jupyter Notebook, Numpy, Pandas, Large Data Handling, Data Cleaning,  TailwindCss, and others.",
    ],
  },
];

export const PROJECTS: ProjectDetails[] = [
  {
    name: "HeightComparision Website",
    description:
      "Scraped thousands of Celebrity, Anime Height Data from Different Sources and Build a Complete Django Rest API to Compare Height with Different Objects. Build a Khamis Rochies Height Prediction Model.",
    url: "https://www.heightcomparison.com/",
    previewImage: ProjectHeightComparison,
    technologies: [
      "Django",
      "DRF",
      "BeautifulSoup",
      "Selenium",
      "Scrapy",
      "MechanicalSoup",
      "Opengraph",
      "PostgreSQL",
    ],
  },

  {
    name: "ByaparLink Ecommerce Dashboard",
    description:
      "Complete Django and DRF Based Multi Vendor Back-end with all Working Like Making Order, Reviews, Delivery, Interactive Dashboard made with all Major Functionality etc. Implemented a OTP based Authentication System",
    url: "https://byaparlink.com/",
    previewImage: ProjectByaparLink,
    technologies: ["Django", "PostgreSQL", "OpenStreetMap"],
  },
  {
    name: "All Video Downloader",
    description:
      "All in One Youtube, Tiktok and Instagram Video Downloader with Django Backend.",
    url: "",
    previewImage: ProjectAllVideoDownloader,
    technologies: ["Django", "SQLite", "MechanicalSoup"],
  },
  {
    name: "Clipr",
    description:
      "A Complete URL Shortner Like Bit.ly with Dashboard features with full JWT Auth Project with Django. Currently Building in Progress..",
    url: "",
    previewImage: ProjectClipr,
    technologies: ["Django", "Django Rest Framework", "JWT Auth", "PostgreSQL"],
  },
];
