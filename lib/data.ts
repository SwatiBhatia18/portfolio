import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import githublookup from "@/public/githublookup.png";
import traveladvisor from "@/public/traveladvisor.png";
import openboard from "@/public/openboard.png";
import imagesearch from "@/public/imagesearch.png";
import portfolio from "@/public/portfolio.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Chitkara University",
    location: "Punjab, India",
    description: "Bachelor's degree in Computer Science and Engineering",
    icon: React.createElement(LuGraduationCap),
    date: "2019 - 2023",
  },
  {
    title: "Oriserve - Software Engineer Intern",
    location: "Noida, UP",
    description:
      "Worked as a Software Engineer Intern handling ad-hoc tasks related to dashboards and chatbots. Gained hands-on experience and self-learned React during this time, which laid the foundation for my frontend development journey.",
    icon: React.createElement(CgWorkAlt),
    date: "2022 - 2023",
  },
  {
    title: "Oriserve - Junior Software Engineer",
    location: "Noida, UP",
    description:
      "Collaborated cross-functionally to deliver and enhance real-time chatbot and dashboard features using React, Socket.io, and best practices—boosting delivery speed and system reliability by 30–40%.",
    icon: React.createElement(FaReact),
    date: "2022 - 2023",
  },
  {
    title: "Oriserve - Software Engineer",
    location: "Noida, UP",
    description:
      "Spearheaded the frontend of an AI-powered Voice Analytics platform and optimized real-time call analysis workflows—boosting efficiency, scalability, and engagement by up to 50%.",
    icon: React.createElement(FaReact),
    date: "2024 – Present",
  },
] as const;

export const projectsData = [
  {
    title: "Portfolio",
    description:
      "A personal website to showcase projects, experience, and contact information in a visually engaging way.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Framer Motion",
      "React Email",
      "Resend",
      "Vercel",
    ],
    imageUrl: portfolio,
    githubUrl: "https://github.com/SwatiBhatia18/portfolio",
    projectUrl: ""
  },  
  {
    title: "Github Lookup",
    description:
      "Explore GitHub profiles and repositories with interactive data visualizations.",
    tags: [
      "React",
      "JavaScript",
      "Chart.js",
      "Particles.js",
      "GitHub API",
      "CSS",
      "HTML5",
    ],
    imageUrl: githublookup,
    githubUrl: "https://github.com/SwatiBhatia18/githubLookup",
    projectUrl: "https://githublookupp.netlify.app/",
  },
  {
    title: "Travel Advisor",
    description:
      "Created an interactive map with Google Maps API to display nearby places and details.",
    tags: ["React", "JavaScript", "Google Maps API", "HTML", "CSS"],
    imageUrl: traveladvisor,
    githubUrl: "https://github.com/SwatiBhatia18/Travel-Advisor",
    projectUrl: "https://travel-advisor-world.netlify.app/",
  },
  {
    title: "Image Search",
    description:
      "A gallery search app built with React, allowing users to search and view images from an external API.",
    tags: ["React", "JavaScript", "flickr API", "HTML", "CSS"],
    imageUrl: imagesearch,
    githubUrl: "https://github.com/SwatiBhatia18/Redux-Album",
    projectUrl: "https://gallery-search-six.vercel.app/",
  },
  {
    title: "Open Board",
    description:
      "A drawing and painting board built with the Canvas API, allowing users to create and edit designs with various tools.",
    tags: ["JavaScript", "HTML", "CSS", "Canvas API"],
    imageUrl: openboard,
    githubUrl: "https://github.com/SwatiBhatia18/OpenBoard",
    projectUrl: "https://openboard1.netlify.app/",
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Redux",
  "Tailwind",
  "SASS",
  "Bootstrap",
  "Material UI",
  "Ant Design",
  "Git",
  "Webpack",
  "Parcel",
  "D3.js",
  "Chart.js",
  "Jest",
  "Framer Motion",
  "Lighthouse",
  "Browser DevTools",
  "Jira",
  "Clickup",
  "GitHub",
] as const;
