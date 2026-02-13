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
    liveLink: "https://doc-now-nu.vercel.app/", // keep empty if not deployed
    image: "/projects/docnow.png",
    status: "Completed",
  },

  {
    id: 2,
    title: "Mindmine Institute",
    subtitle: "Coaching Institute Website",
    slug: "mindmine-institute-coaching-platform",

    shortDescription:
      "A MERN-based coaching institute platform showcasing courses, categories, and institute details with a modern UI.",

    description:
      "Mindmine Institute is a full-stack coaching institute platform built using the MERN stack. The project focuses on presenting courses, categories, and institute information through a clean, responsive, and user-friendly interface. It is designed to scale as an educational platform with structured content management and modern web practices.",

    techStack: ["React", "Node.js", "Express.js", "MongoDB", "MERN Stack"],

    features: [
      "Course and category-based navigation",
      "Modern and responsive UI",
      "Scalable MERN architecture",
      "Clean project structure",
      "Live deployment on Vercel",
    ],

    githubLink: "https://github.com/passportpulse/mind-mine-institute-mahasin",
    liveLink: "https://mind-mine-institute-mahasin.vercel.app/",
    image: "/projects/mindmine.png",
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

  {
    id: 4,
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
    liveLink: "https://blogify-ai-flame.vercel.app//",
    image: "/projects/blogifyai.png",
    status: "Completed",
  },

  {
    id: 5,
    title: "Portfolio",
    subtitle: "Personal Developer Portfolio",
    slug: "personal-mern-portfolio",

    shortDescription:
      "A full-stack MERN portfolio showcasing projects, skills, and a functional contact system.",

    description:
      "This is a personal portfolio website built using the MERN stack to showcase projects, skills, and experience. It includes a backend-powered contact form implemented using Nodemailer for secure email delivery. The project follows a clean design approach with optimized performance and scalability in mind.",

    techStack: ["React", "Node.js", "Express.js", "MongoDB", "Nodemailer"],

    features: [
      "Modern and responsive UI",
      "Dynamic project showcase",
      "Backend-powered contact form",
      "Email notifications using Nodemailer",
      "Clean and scalable MERN architecture",
    ],

    githubLink: "https://github.com/MahasinProdhan/Portfolio", // placeholder
    liveLink: "https://mahasinportfolio.vercel.app/", // placeholder
    image: "/projects/portfolio.png",
    status: "Completed",
  },

  {
    id: 6,
    title: "Cognix",
    subtitle: "AI Chat & Image Generation Platform",
    slug: "cognix-ai-chat-image-platform",

    shortDescription:
      "A ChatGPT-inspired MERN application offering AI-powered chat and image generation.",

    description:
      "Cognix is a full-stack AI platform inspired by ChatGPT, built using the MERN stack. It supports real-time conversational AI and image generation by integrating OpenAI and Google Gemini APIs. The application includes secure authentication, prompt-based interactions, and optimized API handling to manage AI responses efficiently.",

    techStack: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "OpenAI API",
      "Google Gemini API",
      "ImageKit",
    ],

    features: [
      "AI-powered chat interface",
      "Text-to-image generation",
      "Integration with OpenAI and Gemini APIs",
      "Secure JWT-based authentication",
      "Optimized API request handling",
      "Modern and responsive UI",
    ],

    githubLink: "https://github.com/MahasinProdhan/Cognix", // placeholder
    liveLink: "https://cognix.app", // placeholder
    image: "/projects/cognix.png",
    status: "Completed",
  },
];
