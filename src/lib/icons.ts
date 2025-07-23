// ✅ Framework & Library Icons
import {
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiVite,
  SiRedux,
  SiSpring,
  SiNodedotjs,
  SiExpress,
  SiFlutter,

  // ✅ Language Icons
  SiJavascript,
  SiTypescript,
  SiOpenjdk,
  SiHtml5,
  SiCss3,
  SiPython,
  SiDart,

  // ✅ Database Icons
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiMongoose,

  // ✅ Tool & Cloud Icons
  SiGit,
  SiKubernetes,
  SiBitbucket,
  SiJira,
  SiDocker,
  SiAmazon,
  SiApache,
  SiGradle,
  SiHibernate,
  SiVisualstudiocode,
  SiCloudinary,
  SiAuth0,
  SiJsonwebtokens,
  SiStripe,
  SiOauth,
} from "react-icons/si";

import {
  Code,
  Code2,
  Database,
  Shield,
  Network,
} from "lucide-react";

// 🛠️ Icon Mapping for Each Technology
export const techIcons = {
  // 🔷 Languages
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  Python: SiPython,
  Dart: SiDart,
  HTML: SiHtml5,
  CSS: SiCss3,
  SQL: SiMysql,

  // 🎨 Frontend
  "React.js": SiReact,
  "Next.js": SiNextdotjs,
  "Tailwind CSS": SiTailwindcss,
  "Vite.js": SiVite,
  Redux: SiRedux,

  // 🔧 Backend
  "Spring Boot": SiSpring,
  "Spring Framework": SiSpring,
  "Spring Security": Shield,
  "Node.js": SiNodedotjs,
  "Express.js": SiExpress,
  "RESTful APIs": Code2,
  JWT: SiJsonwebtokens,
  "JPA/Hibernate": SiHibernate,
  Maven: SiApache,
  Gradle: SiGradle,
  Microservices: Network,
  OAuth: SiOauth,
  "Stripe API": SiStripe,

  // 🛢️ Databases
  MongoDB: SiMongodb,
  MySQL: SiMysql,
  Firebase: SiFirebase,
  "H2 Database": Database,
  Mongoose: SiMongoose,

  // 🧰 Tools
  Git: SiGit,
  VSCode: SiVisualstudiocode,
  Jira: SiJira,
  Bitbucket: SiBitbucket,
  Docker: SiDocker,
  Kubernetes: SiKubernetes,

  // ☁️ Cloud
  AWS: SiAmazon,
  Cloudinary: SiCloudinary,
  Auth0: SiAuth0,
  Stripe: SiStripe,
};

// 🎨 Tailwind Class Color Mapping by Category
export const categoryColors = {
  language: "text-indigo-400",
  frontend: "text-sky-400",
  backend: "text-purple-400",
  database: "text-cyan-400",
  tools: "text-yellow-400",
  cloud: "text-orange-400",
  mobile: "text-green-400",
  auth: "text-rose-400",
} as const;

export type TechName = keyof typeof techIcons;
export type CategoryType = keyof typeof categoryColors;
