import { Project } from "../../types/project";

export const projects: Project[] = [
  {
    slug: "medicode-emr",

    title: "MediCode EMR",
    institution: "RevoU",
    period: "Jul 2025 - Aug 2025",

    projectType: "Individual Project",

    description:
      "MediCode EMR is a full-stack healthcare management system designed to manage appointments, patient records, and clinical workflows through a secure multi-role platform.",

    background:
      "Healthcare systems require reliable digital platforms to manage patient records and appointments while maintaining strict security and access control.",

    method:
      "The frontend was built using Next.js 15 with Zustand state management and NextAuth authentication. The backend API was developed using NestJS with a modular architecture and Prisma ORM connected to PostgreSQL. Security was implemented using JWT authentication and RBAC guards.",

    result:
      "The system delivers a complete healthcare management platform featuring role-based dashboards, appointment scheduling, medical record management, and over 50 documented API endpoints.",

    techStack: {
      frontend: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS",
        "Zustand",
        "NextAuth.js"
      ],

      backend: [
        "NestJS",
        "TypeScript",
        "JWT Auth",
        "Passport.js",
        "Bcrypt"
      ],

      database: [
        "PostgreSQL",
        "Prisma ORM"
      ],

      tools: [
        "Swagger"
      ]
    },

    github:
      "https://github.com/revou-fsse-feb25/final-project-fe-egaherawati10",

    demo: "https://final-project-fe-egaherawati10.vercel.app/",

    gallery: [
      "/images/projects/medicode-home.png",
      "/images/projects/medicode-dashboard.png",
      "/images/projects/medicode-record.png",
      "/images/projects/medicode-erd.png"
    ]
  },

  {
    slug: "eggdrop-games",

    title: "EggDrop Games",
    institution: "RevoU",
    period: "Apr 2025",

    projectType: "Individual Project",

    description:
      "EggDrop Games is a web-based mini-game platform that combines a personal portfolio website with interactive browser games. The platform provides accessible entertainment while demonstrating core front-end development and game logic implementation using vanilla JavaScript.",

    background:
      "Interactive web applications are an effective way to demonstrate programming fundamentals such as event handling, DOM manipulation, and conditional logic. This project was created to showcase the ability to design a simple web platform that integrates multiple mini-games into a single cohesive user experience.",

    method:
      "The platform was built using modular HTML, CSS, and JavaScript files for each game component. Core game mechanics were implemented using event-driven programming and DOM manipulation, including random number generation for guessing logic, timer-based interaction for the clicker game, and conditional rules for Rock-Paper-Scissors. Layout and navigation were implemented using CSS Grid and Flexbox to maintain responsive structure across devices.",

    result:
      "The final deliverable is a deployed multi-game website featuring three interactive browser games: Rock-Paper-Scissors, Guess The Number, and Click The Egg. The platform includes smooth scrolling navigation, an About section describing the developer's background, and a contact section for communication. The application is publicly accessible via GitHub Pages.",

    techStack: {
      frontend: [
        "HTML5",
        "CSS3",
        "JavaScript",
      ],
      tools: [
        "Font Awesome",
        "GitHub Pages"
      ],
    },

    github:
      "https://github.com/revou-fsse-feb25/milestone-2-egaherawati10",

    demo:
      "https://revou-fsse-feb25.github.io/milestone-2-egaherawati10",

    gallery: [
      "/images/projects/eggdrop-home.png",
      "/images/projects/eggdrop-rps.png",
      "/images/projects/eggdrop-guess.png",
      "/images/projects/eggdrop-clicker.png"
    ]
  },

  {
    slug: "revoshop",
    title: "RevoShop",
    institution: "RevoU",
    period: "May 2025",

    projectType: "Individual Project",

    description:
      "RevoShop is a modern full-stack e-commerce web application designed to deliver a seamless online shopping experience.",

    background:
      "Modern e-commerce platforms require secure authentication, dynamic product data, and consistent user workflows.",

    method:
      "Built using Next.js 15, TypeScript, and Tailwind CSS with SSR for product data, NextAuth.js for authentication, and Zustand for state management.",

    result:
      "A deployed e-commerce platform featuring authentication, product catalog browsing, and an admin dashboard.",

    techStack: {
      frontend: [
        "Next.js 15",
        "TypeScript",
        "Tailwind CSS"
      ],
      backend: [
        "NextAuth.js"
      ],
      tools: [
        "Zustand",
        "Axios",
        "Jest",
        "Vercel"
      ],
    },

    github:
      "https://github.com/revou-fsse-feb25/milestone-3-egaherawati10",

    demo:
      "",

    gallery: [
      "/images/projects/revoshop-catalog.png",
      "/images/projects/revoshop-faq.png",
      "/images/projects/revoshop-admin-crud.png"
    ]
  },
  
  {
    slug: "revobank",

    title: "RevoBank",
    institution: "RevoU",
    period: "Jun 2025",

    projectType: "Individual Project",

    description:
      "RevoBank is a secure backend system for a digital banking platform designed to manage users, bank accounts, and financial transactions. The project demonstrates backend architecture, authentication security, and relational database modeling for financial systems.",

    background:
      "Digital banking platforms require secure systems capable of handling sensitive financial data while maintaining high reliability and data integrity. This project was developed to simulate a production-grade backend banking infrastructure capable of managing users, accounts, and transaction histories.",

    method:
      "The backend was built using the NestJS framework following a modular architecture. Business logic was separated using the repository pattern while Prisma ORM managed the PostgreSQL database schema and migrations. Security was implemented using JWT authentication, Bcrypt password hashing, and Role-Based Access Control (RBAC) to restrict access to sensitive endpoints. Automated tests were implemented using Jest to validate banking logic and API responses.",

    result:
      "The final deliverable is a deployed RESTful banking API capable of managing users, bank accounts, deposits, withdrawals, and inter-user transfers. The backend system is hosted on Railway with a Supabase-managed PostgreSQL database and includes secure authentication flows and documented API endpoints.",

    techStack: {
      backend: [
        "NestJS",
        "TypeScript",
        "JWT Authentication",
        "Bcrypt",
        "Passport.js",
      ],
      database: [
        "PostgreSQL",
        "Prisma ORM",
      ],
      tools: [
        "Railway",
        "Supabase"
      ],
    },

    github:
      "https://github.com/revou-fsse-feb25/milestone-4-egaherawati10",

    demo: "",

    gallery: [
      "/images/projects/revobank-get-users.png",
      "/images/projects/revobank-auth-login.png",
    ]
  },
]