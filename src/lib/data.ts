export const personalInfo = {
  name: "Lakshya Singh",
  title: "Software Engineer",
  tagline: "Crafting scalable solutions with full-stack web technologies",
  description:
    "Welcome to my portfolio! I'm Lakshya Singh, a Full Stack Developer from Delhi passionate about building impactful web platforms. My journey includes developing AI-powered interview prep tools, job portals, and contributing to industry-level systems during internships at Revino and Voith. Skilled in React.js, Next.js, Node.js, and Java, I enjoy transforming complex problems into clean, maintainable code. I believe in constant learning, clean architecture, and solving real-world problems with tech.",
  email: "lakshya8998@gmail.com",
  phone: "+91 9718613114",
  location: "Delhi, India",
  linkedin: "https://www.linkedin.com/in/lakshya-singh-b7b325287/",
  github: "https://github.com/Lakshya977",
};

export const experience = [
  {
    id: 1,
    company: "Revino Solutions",
    position: "Software Development Intern",
    location: "Remote",
    duration: "Jun 2025 – Present",
    description: [
      "Developing 'EmpowerHer' – a career platform focused on empowering women through curated job listings and mentorship programs",
      "Creating a MERN stack job portal with RESTful APIs and secure JWT-based user authentication",
      "Building dynamic recruiter-applicant dashboards with job listing and application tracking features",
    ],
    technologies: ["MERN", "JWT", "REST API", "Tailwind", "MongoDB"],
    current: true,
  },
  {
    id: 2,
    company: "Voith Digital Solutions",
    position: "Intern – Network Engineering",
    location: "Noida",
    duration: "Jul 2024 – Aug 2024",
    description: [
      "Studied OSI Model, TCP/IP, routing, switching, and key industrial IoT network protocols",
      "Created internal documentation for industrial standards like PROFINET",
      "Practiced basic network configurations via Cisco Packet Tracer simulations",
    ],
    technologies: ["Networking", "Cisco Packet Tracer", "PROFINET"],
    current: false,
  },
];

export const projects = [
  {
    id: 1,
    title: "CrackIt – AI Interview Preparation",
    description: "AI-powered interview platform with role-specific questions and analytics dashboard",
    longDescription:
      "Built a Next.js platform for AI-driven interview preparation using Gemini API and MongoDB. Integrated Google/GitHub OAuth using NextAuth.js, Stripe for payments, and an admin dashboard for managing users and subscriptions.",
    technologies: [
      "Next.js",
      "Gemini API",
      "MongoDB",
      "Stripe",
      "NextAuth.js",
      "Tailwind CSS",
    ],
    githubUrl: "https://github.com/Lakshya977/CrackIt",
    liveUrl: "",
    image: "/projects/streaming-app.jpg",
    featured: true,
  },
  {
    id: 2,
    title: "JobInsider – MERN Stack Job Portal",
    description: "Role-based job portal with resume uploads and recruiter dashboards",
    longDescription:
      "Developed a job portal where recruiters can post jobs and users can apply with resumes. Integrated Multer & Cloudinary for uploads, JWT for secure access, and keyword/location filters for smart job search.",
    technologies: ["MongoDB", "Express", "React", "Node", "JWT", "Multer", "Cloudinary"],
    githubUrl: "https://github.com/Lakshya977/JobPortal",
    liveUrl: "",
    image: "/projects/task-management.jpg",
    featured: true,
  },
  {
    id: 3,
    title: "BeachSafe India",
    description: "Mobile application for beach safety assessment across Indian coastlines",
    longDescription:
      "Developed Flutter application covering 20+ Indian beaches across 8 states with automatic safety assessment based on wave height. Integrated Firebase Realtime Database with Google Maps API, implementing role-based access controls and offline data persistence.",
    technologies: [
      "Flutter",
      "Firebase",
      "Google Maps API",
      "Real-time Database",
    ],
    githubUrl: "https://github.com/RajputKartikeya/beachsafteyapp",
    liveUrl: "",
    image: "/projects/beachsafe-india.jpg",
    featured: true,
  },
];

export const skills = {
  languages: [
    { name: "Java", level: 90, category: "backend" },
    { name: "JavaScript", level: 95, category: "frontend" },
    { name: "TypeScript", level: 85, category: "frontend" },
    { name: "HTML", level: 95, category: "frontend" },
    { name: "CSS", level: 90, category: "frontend" },
    { name: "SQL", level: 80, category: "database" },
  ],
  frontend: [
    { name: "React.js", level: 90, category: "frontend" },
    { name: "Next.js", level: 85, category: "frontend" },
    { name: "Tailwind CSS", level: 90, category: "frontend" },
    { name: "HeroUI", level: 80, category: "frontend" },
  ],
  backend: [
    { name: "Node.js", level: 80, category: "backend" },
    { name: "Express.js", level: 80, category: "backend" },
    { name: "RESTful APIs", level: 85, category: "backend" },
    { name: "JWT", level: 85, category: "backend" },
    { name: "Stripe API", level: 75, category: "backend" },
  ],
  database: [
    { name: "MongoDB", level: 85, category: "database" },
    { name: "Mongoose", level: 80, category: "database" },
  ],
  tools: [
    { name: "Git", level: 90, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Cloudinary", level: 75, category: "tools" },
    { name: "Multer", level: 75, category: "tools" },
    { name: "OAuth", level: 80, category: "auth" },
  ],
};

export const education = [
  {
    id: 1,
    institution: "Maharaja Surajmal Institute of Technology",
    degree: "B.Tech in Computer Science Engineering",
    duration: "2022–2026",
    location: "Delhi, India",
    cgpa: "8.26 / 10.0",
    current: true,
  },
  {
    id: 2,
    institution: "Bal Bhavan Public School",
    degree: "Class XII (CBSE)",
    duration: "2020–2021",
    location: "Delhi, India",
    percentage: "85.8%",
    current: false,
  },
];

export const leadership = [];

export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
