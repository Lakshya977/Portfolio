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
    image: "/projects/Project1.png",
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
    liveUrl: "https://job-portal-client-mauve.vercel.app/",
    image: "/projects/project2.png",
    featured: true,
  },
  {
    id: 3,
    title: "Stock Price Prediction with LSTM & Sentiment",
    description: "LSTM-based model combining historical data with sentiment analysis from news and tweets",
    longDescription:
      "Built a Python-based forecasting system that predicts stock prices by combining historical OHLCV data with sentiment scores derived from financial news and Twitter using VADER and TextBlob. Trained an LSTM model using TensorFlow/Keras, achieving better accuracy than traditional models. Used Yahoo Finance & News APIs, and visualized results with Matplotlib.",
    technologies: [
      "Python",
      "TensorFlow",
      "LSTM",
      "VADER",
      "TextBlob",
      "yfinance",
      "NewsAPI",
      "Matplotlib",
    ],
    githubUrl: "https://github.com/Lakshya977/StockPrediction",
    liveUrl: "",
    image: "/projects/Stock_Prediction.jpg",
    featured: false,
  },
  {
    id: 4,
    title: "Lakshya Singh – Developer Portfolio",
    description: "Modern, responsive portfolio website built with Vite, Tailwind, and Framer Motion",
    longDescription:
      "Designed and built a sleek portfolio showcasing projects, skills, and contact details. Used Vite + React for fast rendering, Tailwind CSS for styling, and Framer Motion for animations. Emphasized responsive design, smooth UI transitions, and professional layout. Hosted on Vercel for optimized performance.",
    technologies: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Framer Motion",
    ],
    githubUrl: "https://github.com/Lakshya977/Portfolio",
    liveUrl: "https://lakshyasingh-portfolio-4tpb.vercel.app/",
    image: "/projects/portfolio.png",
    featured: false,
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
    { name: "Python", level: 75, category: "data" },
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
    { name: "MySQL", level: 80, category: "database" },
    { name: "Firebase", level: 70, category: "database" },
  ],
  tools: [
    { name: "Git", level: 90, category: "tools" },
    { name: "GitHub", level: 90, category: "tools" },
    { name: "VS Code", level: 90, category: "tools" },
    { name: "Postman", level: 85, category: "tools" },
    { name: "Cloudinary", level: 75, category: "tools" },
    { name: "Multer", level: 75, category: "tools" },
    { name: "OAuth", level: 80, category: "auth" },
    { name: "AWS EC2", level: 70, category: "tools" },
    { name: "Render", level: 75, category: "tools" },
    { name: "Netlify", level: 80, category: "tools" },
    { name: "Vercel", level: 85, category: "tools" },
  ],
  cloud: [
    { name: "AWS EC2", level: 70, category: "cloud" },
    { name: "Render", level: 75, category: "cloud" },
    { name: "Netlify", level: 80, category: "cloud" },
    { name: "Vercel", level: 85, category: "cloud" },
  ],
  data: [
     { name: "Seaborn", level: 65, category: "data" },
    { name: "Power BI", level: 60, category: "data" },
    { name: "Excel", level: 85, category: "data" },
    { name: "Scikit-learn", level: 65, category: "data" },
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
    duration: "2021–2022",
    location: "Delhi, India",
    percentage: "85.8%",
    current: false,
  },
  {
    id: 3,
    institution: "Bal Bhavan Public School",
    degree: "Class X (CBSE)",
    duration: "2019–2020",
    location: "Delhi, India",
    percentage: "90%",
    current: false,
  }

];

export const leadership = [
  {
    id: 1,
    organization: "Robotics Club, MSIT",
    position: "Event Management",
    duration: "2023 – 2025",
    description:
      "Organized and facilitated a robotics workshop focusing on basic automation principles and Arduino programming. Engaged 30+ participants in hands-on learning sessions and live demos, helping promote practical tech exposure on campus.",
  },
];


export const navItems = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
];
