// src/data/projects.js

export const projects = [
  {
    id: 1,
    title: "DocNow",
    subtitle: "Doctor Appointment Platform",
    slug: "docnow-doctor-appointment-platform",

    shortDescription:
      "A role-based doctor appointment booking platform with secure payments and scalable scheduling workflows.",

    description:
      "DocNow is a full-stack doctor appointment platform supporting three user roles — patient, doctor, and admin. The system enables doctor discovery by specialization, slot-based scheduling, appointment tracking, and secure online payments. The backend follows a clean modular architecture with separated controllers, business logic, and data layers to ensure scalability and maintainability.",

    techStack: ["React", "Node.js", "Express.js", "MongoDB", "JWT", "Razorpay"],

    features: [
      "Role-based access control (Patient, Doctor, Admin)",
      "Doctor search by specialization",
      "Slot-based appointment scheduling",
      "Appointment tracking dashboard",
      "Secure online payments via Razorpay",
      "Clean modular backend architecture",
    ],

    githubLink: "https://github.com/mahasinprodhan/docnow",
    liveLink: "https://docnest-z4gx.onrender.com/", // keep empty if not deployed
    image: "/projects/docnow.png",
    status: "Completed",
  },

  {
    id: 2,
    title: "BlogifyAI",
    subtitle: "AI-Powered Blogging Platform",
    slug: "blogifyai-ai-powered-blogging-platform",

    shortDescription:
      "A MERN-based blogging platform with AI-assisted content generation and role-based access control.",

    description:
      "BlogifyAI is a full-stack blogging platform built using the MERN stack. It features JWT-based authentication, role-based access control for users and admins, and a structured publishing workflow. The platform integrates the Gemini API to generate AI-assisted blog content and supports secure image uploads and content management.",

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Gemini API",
    ],

    features: [
      "JWT-based authentication and authorization",
      "Role-based access (User, Admin)",
      "AI-powered content generation using Gemini API",
      "Image uploads and content management",
      "Protected routes and admin dashboard",
    ],

    githubLink: "https://github.com/MahasinProdhan/Blogify-AI",
    liveLink: "https://quickblog-gs.vercel.app/",
    image: "/projects/blogifyai.png",
    status: "Completed",
  },

  {
    id: 3,
    title: "CIVIRA",
    subtitle: "Civic Issue Reporting System",
    slug: "civira-civic-issue-reporting-system",

    shortDescription:
      "A full-stack civic issue reporting platform with geo-tagged complaints and intelligent issue routing.",

    description:
      "CIVIRA is a full-stack civic issue reporting system designed as a final-year project. The platform allows citizens to report issues using geo-tagged photo uploads with automatic GPS and timestamp extraction. It includes a complete complaint lifecycle with status tracking, officer workflows, public dashboards, and AI-assisted features such as issue categorization and image filtering.",

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "OTP Authentication",
      "Maps API",
      "AI Services",
    ],

    features: [
      "OTP-based authentication",
      "Geo-tagged photo uploads",
      "Automatic GPS & timestamp extraction",
      "Complaint lifecycle tracking",
      "Officer workflows and public dashboards",
      "AI-assisted issue categorization and filtering",
    ],

    githubLink: "https://github.com/mahasinprodhan/civira",
    liveLink: "https://civira.onrender.com/",
    image: "/projects/civira.png",
    status: "Ongoing",
  },
];
