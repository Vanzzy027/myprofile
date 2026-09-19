// Single source of truth for all personal data on the site.
// Edit this file to update the hero, About, Experience, Services, Personal Banking,
// Projects, Events and Blog listings. SEO tags, JSON-LD, sitemap.xml and llms.txt
// are all generated from it at build time.

import type {
  BankingProduct,
  BlogPost,
  Education,
  Event,
  Experience,
  Person,
  Pictorial,
  Project,
  Service,
  SkillCategory,
} from "../types";

export const SITE_URL = "https://ekariuki.britech.co.ke";
export const SITE_NAME = "Evanson Kariuki";
// TODO: replace with a designed 1200×630 image (current one is a generated placeholder).
export const OG_IMAGE = "/og-image.jpg";

export const person: Person = {
  name: "Evanson Kariuki",
  alternateNames: ["Evans Kariuki", "Evanson M. Kariuki", "Evanson Mathenge Kariuki"],
  headline:
    "Fullstack Software Engineer & Personal Banking DSR at HFCB. Co-Founder, Brivemarc Technologies.",
  shortTitle: "Fullstack Software Engineer · HFCB Personal Banking",
  location: { city: "Embu", region: "Embu County", country: "Kenya", countryCode: "KE" },
  summary:
    "I build web, mobile and IoT systems with React, TypeScript and Node.js, and I help Kenyans access personal loans, property financing, insurance and bank accounts at HFCB. Working on both sides of finance and software is why I build fintech that fits how people actually borrow and pay.",
  email: "ekariuki@britech.co.ke",
  phone: "+254 112 178 578",
  phoneE164: "+254112178578",
  social: {
    github: "https://github.com/Vanzzy027",
    linkedin: "https://www.linkedin.com/in/evanson-kariuki-252545350",
    company: "https://britech.co.ke",
  },
  photo: "/assets/me/evanson-kariuki.webp",
  photoAlt: "Evanson Kariuki, fullstack software engineer, smiling in a grey t-shirt",
  // TODO: upload an updated CV that includes HFCB and Brivemarc Technologies.
  cvUrl: "/assets/Evanson_M_Kariuki_Resume.pdf",
};

export const brivemarc = {
  name: "Brivemarc Technologies",
  url: "https://britech.co.ke",
  description:
    "Kenyan software company building websites, web and mobile apps, POS systems and custom business software.",
};

export const hfcb = {
  name: "HFCB",
  description: "Kenyan bank, formerly known as HFC.",
};

export const experience: Experience[] = [
  {
    id: "hfcb",
    organization: "HFCB",
    title: "Direct Sales Representative, Personal Banking (Credit)",
    start: "2026-08-10",
    end: null,
    summary:
      "I help Kenyans access personal loans, property and property financing, insurance and personal bank accounts.",
    highlights: [
      "Assess client needs and match them to the right HFCB product",
      "Guide clients through credit applications from first enquiry to disbursement",
      "Explain personal loans, property financing, insurance and account options in plain language",
    ],
  },
  {
    id: "brivemarc",
    organization: "Brivemarc Technologies",
    organizationUrl: "https://britech.co.ke",
    title: "Co-Founder · Fullstack Engineer & IoT Systems Specialist",
    // TODO: confirm the month Brivemarc Technologies started.
    start: "2025-01-01",
    end: null,
    summary:
      "Co-founder of a Kenyan software company building websites, web apps, mobile apps, POS systems and custom business software.",
    highlights: [
      "Deliver client websites such as jamboafricansafari.com and jmhealthcareltd.co.ke",
      "Build POS and business management systems",
      "Lead IoT and embedded work: ESP32 firmware, sensor networks and dashboards",
    ],
  },
  {
    id: "gdgoc-uoem",
    organization: "GDGoC University of Embu",
    title: "IoT & Robotics Organizer (former)",
    // TODO: confirm the dates you held the GDGoC organizer role.
    start: "2024-01-01",
    end: "2025-12-31",
    summary:
      "Organised IoT and robotics sessions for Google Developer Groups on Campus at the University of Embu.",
    highlights: [
      "Ran hands-on ESP32, sensor and MQTT workshops",
      "Mentored students building their first connected prototypes",
    ],
  },
];

export const services: Service[] = [
  { name: "Web Development", description: "Fast, search-friendly websites and web apps built with React and TypeScript." },
  { name: "Custom Software Development", description: "Software shaped around how your business actually runs." },
  { name: "Application Development", description: "Internal tools, portals and dashboards with secure backends." },
  { name: "Mobile App Development", description: "Cross-platform Android and iOS apps with Flutter." },
  { name: "SaaS Development", description: "Multi-tenant products with accounts, billing and admin tools." },
  { name: "Database Development", description: "MySQL, PostgreSQL and Firebase data models that scale cleanly." },
  { name: "IT Consulting", description: "Practical advice on systems, hosting and choosing the right tools." },
  { name: "Web Design", description: "Clean, responsive interfaces that work on any phone." },
  { name: "IoT Solutions", description: "ESP32 and Arduino devices, sensors, automation and live dashboards." },
  { name: "Computer Networking", description: "Office network setup and troubleshooting, grounded in CCNA fundamentals." },
];

export const bankingProducts: BankingProduct[] = [
  { name: "Personal loans", description: "Financing for personal goals, with guidance on what fits your income and plans." },
  { name: "Property and property financing", description: "Support for buying, building or financing property." },
  { name: "Insurance", description: "Cover options to protect you, your family and your assets." },
  { name: "Personal bank accounts", description: "Help choosing and opening the right personal account." },
];

export const bankingSteps = [
  "Tell me what you need: a loan, property, cover or an account.",
  "I assess your needs and explain the HFCB options that fit.",
  "I guide you through the application and the documents required.",
  "I follow up with you through to decision and disbursement.",
];

// TODO: confirm this disclaimer and all Personal Banking wording with HFCB policy / compliance.
export const bankingDisclaimer =
  "All products are offered by HFCB and are subject to HFCB terms, conditions and approval.";

export const skills: SkillCategory[] = [
  { category: "Frontend", items: ["React", "TypeScript", "Redux Toolkit", "RTK Query", "Tailwind CSS", "JavaScript"] },
  { category: "Backend", items: ["Node.js", "Express", "Hono", "FastAPI", "Python", "REST APIs"] },
  { category: "Databases", items: ["MySQL", "PostgreSQL", "Firebase", "Firestore", "SQLite"] },
  {
    category: "Systems & IoT",
    items: ["ESP32", "Arduino", "Embedded Systems", "TinyML / Edge AI", "MQTT", "Linux / Bash", "Automation", "Raspberry Pi"],
  },
  { category: "Cloud & Networking", items: ["Azure", "CCNA Fundamentals", "Netlify", "Git", "GitHub Actions"] },
  { category: "Mobile", items: ["Flutter", "Dart", "React Native"] },
];

export const education: Education[] = [
  {
    institution: "University of Embu",
    credential: "Bachelor of Science",
    field: "Information Technology",
    year: "2021 – 2025",
    grade: "Second Class Honours",
  },
  {
    institution: "Teach2Give",
    credential: "Software Engineering",
    field: "Certified SERN Stack Software Engineer",
    year: "2025",
    grade: "Certified",
  },
  {
    institution: "Data Breed Africa",
    credential: "Data Analytics",
    field: "Data Analytics",
    // TODO: confirm the year the Data Breed Africa certificate was awarded.
    year: "",
    grade: "Certified",
  },
  {
    institution: "KASNEB",
    credential: "Certified Information Systems Solutions Expert (CISSE)",
    field: "Information Systems",
    year: "2024",
    grade: "Certified",
  },
  {
    institution: "Endarasha Boys High School",
    credential: "Kenya Certificate of Secondary Education",
    field: "",
    year: "2017 – 2021",
    grade: "C+ Plain",
  },
];

export const projects: Project[] = [
  {
    id: "car-rental-platform",
    title: "Vehicle Booking Platform",
    category: "Web",
    tags: ["React", "TypeScript", "Node.js", "MySQL", "Azure"],
    shortDescription: "Car rental and vehicle booking platform that supported 200+ test users.",
    longDescription:
      "A full-stack vehicle booking platform built for Vanske Car Rental and tested with more than 200 users. Customers check real-time availability and book online; staff manage the fleet, bookings and payments from an admin dashboard. React frontend, Node.js/Express API and a MySQL database hosted on Azure.",
    role: "Fullstack Developer",
    year: 2025,
    liveUrl: "https://vanskecarrental.netlify.app/",
    repoUrl: null,
    images: [
      "/assets/projects/car-rental-1.webp",
      "/assets/projects/car-rental-2.webp",
      "/assets/projects/car-rental-3.webp",
      "/assets/projects/car-rental-4.webp",
    ],
    imageAlts: [
      "Vanske Car Rental landing page with a featured supercar and booking call to action",
      "Vanske Car Rental contact page with enquiry form",
      "Customer dashboard showing bookings, spending and recent activity",
      "Vehicle catalogue grid with prices and booking buttons",
    ],
    featured: true,
  },
  {
    id: "jambo-african-safari",
    title: "Jambo African Safaris Website",
    category: "Web",
    client: "Brivemarc Technologies",
    // TODO: confirm the full tech stack used.
    tags: ["React", "Vite", "Responsive Design"],
    shortDescription: "Safari booking website for East African tour packages, delivered by Brivemarc Technologies.",
    longDescription:
      "A responsive website for Jambo African Safaris, built by Brivemarc Technologies. It presents curated safari packages across Kenya, Uganda, Tanzania and Ethiopia and turns visitors into booking enquiries.",
    role: "Co-Founder & Fullstack Engineer",
    year: 2025,
    liveUrl: "https://jamboafricansafari.com",
    repoUrl: null,
    // TODO: add a screenshot of jamboafricansafari.com (e.g. /assets/projects/jambo-african-safari.webp).
    images: [],
    featured: true,
  },
  {
    id: "jm-healthcare",
    title: "JM Healthcare Website",
    category: "Web",
    client: "Brivemarc Technologies",
    // TODO: confirm the full tech stack used.
    tags: ["React", "Vite", "Responsive Design"],
    shortDescription: "Healthcare company website delivered by Brivemarc Technologies.",
    longDescription:
      "A professional website for JM Healthcare Ltd, built by Brivemarc Technologies. It sets out the company's services clearly and gives patients and partners a direct way to get in touch.",
    role: "Co-Founder & Fullstack Engineer",
    year: 2025,
    liveUrl: "https://jmhealthcareltd.co.ke",
    repoUrl: null,
    // TODO: add a screenshot of jmhealthcareltd.co.ke (e.g. /assets/projects/jm-healthcare.webp).
    images: [],
    featured: false,
  },
  {
    id: "pos-management-systems",
    title: "POS & Business Management Systems",
    category: "Software",
    client: "Brivemarc Technologies",
    tags: ["React", "Node.js", "PostgreSQL", "MySQL"],
    shortDescription: "Point-of-sale and management systems for Kenyan businesses.",
    longDescription:
      "Point-of-sale and business management systems built at Brivemarc Technologies for retail and service clients: sales, stock, receipts, staff roles and reports in one place. Client deployments are private.",
    role: "Co-Founder & Fullstack Engineer",
    year: 2025,
    liveUrl: null,
    repoUrl: null,
    // TODO: add a screenshot of a POS system (with client data hidden).
    images: [],
    featured: false,
  },
  {
    id: "smart-lighting-system",
    title: "Smart Lighting System",
    category: "IoT",
    tags: ["ESP32", "MQTT", "PIR", "Relays", "C++"],
    shortDescription: "Occupancy-triggered lighting automation using ESP32 and PIR sensors.",
    longDescription:
      "An IoT system that detects room occupancy with PIR sensors connected to an ESP32. Lights switch through relay modules, and the system publishes its state over MQTT for remote monitoring on a web dashboard. It cuts energy wasted lighting empty rooms.",
    role: "IoT Developer",
    year: 2025,
    liveUrl: null,
    repoUrl: null,
    images: [
      "/assets/projects/smart-lighting-1.webp",
      "/assets/projects/smart-lighting-2.webp",
      "/assets/projects/smart-lighting-3.webp",
      "/assets/projects/smart-lighting-4.webp",
    ],
    imageAlts: [
      "ESP32 smart lighting prototype wired to two bulbs on a desk",
      "Bulb switched on by the occupancy sensor",
      "ESP32, relay module and PIR sensor wiring for the smart lighting system",
      "Smart lighting prototype with bulbs switched off when the room is empty",
    ],
    featured: true,
  },
  {
    id: "iot-monitoring-dashboard",
    title: "Firebase IoT Greenhouse Monitoring Dashboard",
    category: "IoT",
    tags: ["Firebase", "ESP32", "Realtime DB", "JavaScript", "HTML", "CSS"],
    shortDescription: "Real-time greenhouse sensor dashboard connected to Firebase.",
    longDescription:
      "A web dashboard that shows live data from ESP32 sensor nodes through Firebase Realtime Database. Nodes stream temperature, humidity and soil moisture; the dashboard updates without a refresh and adds historical charts, irrigation controls and alert thresholds.",
    role: "Fullstack IoT Developer",
    year: 2024,
    liveUrl: null,
    repoUrl: null,
    images: [
      "/assets/projects/iot-dashboard-1.webp",
      "/assets/projects/iot-dashboard-2.webp",
      "/assets/projects/iot-dashboard-3.webp",
      "/assets/projects/iot-dashboard-4.webp",
      "/assets/projects/iot-dashboard-5.webp",
      "/assets/projects/iot-dashboard-6.webp",
    ],
    imageAlts: [
      "Greenhouse dashboard overview with live temperature, humidity and soil moisture readings",
      "Soil irrigation alert with current sensor values",
      "Control panel for temperature, humidity and soil moisture thresholds",
      "Dashboard with crop imagery and live sensor cards",
      "Table of historical sensor readings",
      "Line charts of temperature, humidity and soil moisture over time",
    ],
    featured: true,
  },
  {
    id: "smart-meal-planning-app",
    title: "Smart Meal Planning App",
    category: "Mobile",
    tags: ["React Native", "Expo", "Firebase", "AI"],
    shortDescription: "AI-assisted meal planner with grocery list generation (in progress).",
    longDescription:
      "A cross-platform mobile app that recommends weekly meal plans from dietary preferences and the ingredients you have. It generates grocery lists automatically and syncs across devices with Firebase. In active development.",
    role: "Mobile Developer",
    year: 2025,
    liveUrl: null,
    repoUrl: null,
    images: ["/assets/projects/meal-planner.webp"],
    imageAlts: ["Meal planning app screens showing recipe cards on a phone"],
    featured: false,
  },
  {
    id: "learning-management-system",
    title: "Learning Management System",
    category: "Software",
    tags: ["React", "Node.js", "MySQL", "CRUD"],
    shortDescription: "Student records, online quizzes and grading for academic institutions.",
    longDescription:
      "A learning management system for academic institutions: student enrolment, course management, online quizzes, grade entry and report generation, with role-based access for admins, lecturers and students. Node.js and MySQL backend with a React frontend.",
    role: "Backend Developer",
    year: 2024,
    liveUrl: null,
    repoUrl: null,
    images: ["/assets/projects/lms.webp"],
    imageAlts: ["Learning management system running on a desktop and laptop workstation"],
    featured: false,
  },
];

export const events: Event[] = [
  {
    id: "gdgoc-iot-workshop",
    title: "IoT & Robotics Workshop",
    date: "2024-03-15",
    role: "Speaker · GDGoC UoEm IoT & Robotics Organizer",
    description:
      "Hands-on session at the University of Embu introducing students to ESP32, sensor integration and MQTT.",
    outcomes: ["40+ students trained", "5 prototype projects built", "Partnership with the university lab"],
    type: "workshop",
  },
  {
    id: "code-tech-society",
    title: "Code & Tech Society",
    date: "2024-01-10",
    role: "Vice Chairperson",
    description: "Led student tech community initiatives and organised hackathons and coding challenges.",
    outcomes: ["3 hackathons organised", "200+ active members", "Industry speaker sessions"],
    type: "leadership",
  },
];

export const pictorials: Pictorial[] = [
  {
    id: "gdgoc-iot-workshop",
    event: "GDGoC UoEm IoT & Robotics Workshop",
    date: "2024-03-15",
    description: "Hands-on IoT workshop at the University of Embu.",
    images: [
      { src: "/assets/events/iot-workshop-1.webp", alt: "ESP32 board with sensor and red status LEDs during the IoT workshop" },
      { src: "/assets/events/iot-workshop-2.webp", alt: "Student-built ultrasonic robot car from the robotics session" },
      { src: "/assets/events/iot-workshop-3.webp", alt: "Raspberry Pi board held up during the IoT workshop" },
    ],
  },
];

export const blogs: BlogPost[] = [
  {
    id: "getting-started-with-esp32-mqtt",
    title: "Getting Started with ESP32 and MQTT",
    date: "2025-01-20",
    excerpt:
      "A practical guide to connecting your ESP32 to an MQTT broker and streaming sensor data to a web dashboard.",
    tags: ["IoT", "ESP32", "MQTT", "Tutorial"],
    coverImage: "/assets/blogs/esp32-iot-poster.webp",
    coverAlt: "Poster for The Future of Connectivity, an ESP32 IoT session by Evans Kariuki at GDG University of Embu",
  },
  {
    id: "building-realtime-dashboards-firebase",
    title: "Building Realtime Dashboards with Firebase and React",
    date: "2025-02-10",
    excerpt: "How I connected IoT sensor data to a live React dashboard using Firebase Realtime Database.",
    tags: ["Firebase", "React", "IoT", "Web"],
    coverImage: "/assets/blogs/firebase-dashboard.webp",
    coverAlt: "Firebase-powered greenhouse dashboard with live sensor readings",
  },
];
