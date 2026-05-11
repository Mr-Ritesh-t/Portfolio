export const PERSONAL_INFO = {
  name: "Ritesh Tayade",
  role: "Full-Stack Engineer & Digital Strategist",
  email: "riteshtayade68@gmail.com",
  phone: "+91 8668740625",
  location: "Pune, Maharashtra, India",
  description: "I help startups and enterprises build high-performance digital systems that drive real business growth. My approach combines deep engineering expertise with a strategic focus on conversion, scalability, and user retention. I don't just build websites; I architect solutions that solve complex business problems and deliver measurable results.",
  shortDescription: "Architecting high-performance systems for startups and enterprises. Let's build your next big thing.",
  philosophy: "Engineering excellence is only valuable when it drives business results. My mission is to bridge the gap between complex code and profitable outcomes.",
  socials: {
    github: "https://github.com/Mr-Ritesh-t",
    linkedin: "https://www.linkedin.com/in/mr-ritesh",
    twitter: "https://x.com/RiteshTaya82223",
    instagram: "https://www.instagram.com/mr.ritesh__t/"
  },
  resumeLink: "/Ritesh_Tayade_Resume.pdf"
};

export const SKILL_CATEGORIES = [
  { 
    category: "Programming Core", 
    items: ["Python", "Java", "JavaScript", "C", "C++"],
    description: "Solid foundation in object-oriented programming, data structures, and algorithmic logic."
  },
  { 
    category: "Frontend Engineering", 
    items: ["React.js", "TypeScript", "Next.js", "Tailwind CSS", "Framer Motion", "GSAP"],
    description: "Specialized in building reactive, smooth, and highly interactive user interfaces."
  },
  { 
    category: "Backend & Systems", 
    items: ["Django", "Node.js", "REST APIs", "Firebase", "MySQL", "PostgreSQL"],
    description: "Architecting secure, scalable server-side logic and robust database schemas."
  },
  { 
    category: "Design & Workflow", 
    items: ["Figma", "Git", "GitHub", "VS Code", "Postman", "Agile/Scrum"],
    description: "Utilizing modern tools to ensure efficient collaboration and pixel-perfect design execution."
  }
];

export const PROJECTS = [
  {
    title: "Tiffo Ecosystem",
    category: "Marketplace & Logistics",
    description: "Built a hyper-local mess management system to digitize traditional meal subscriptions. Transformed manual paper-based tracking into a real-time digital infrastructure.",
    problem: "Mess owners lacked real-time visibility into subscriptions, leading to 20% revenue leakage and poor customer experience.",
    solution: "Developed a dual-portal system (Client & Owner) using Appwrite for real-time sync and React for a high-performance UI.",
    result: "Reduced revenue leakage by 15%, improved delivery tracking accuracy by 100%, and onboarded 500+ daily active users.",
    technologies: ["React", "Appwrite", "Tailwind CSS", "Framer Motion", "Cloud Functions"],
    image: "/tiffo_site.png",
    date: "2024",
    link: "https://tiffo.web.app/",
    github: "https://github.com/Mr-Ritesh-t/Tiffo",
    highlights: ["15% Revenue Recovery", "100% Tracking Accuracy", "Scalable Multi-Tenant Architecture"]
  },
  {
    title: "Study Sanctuary",
    category: "Productivity Platform",
    description: "A comprehensive focus engine designed to improve academic outcomes through behavioral science and deep-work mechanics.",
    problem: "Students struggled with digital distractions and fragmented study schedules, leading to decreased academic performance.",
    solution: "Integrated native Android usage-tracking and collaborative deep-work sessions using Capacitor and Firebase.",
    result: "Users reported a 40% increase in deep-work hours and a 25% reduction in non-productive screen time.",
    technologies: ["React 19", "Capacitor 8", "Firebase 12", "Vite 8", "Node.js"],
    image: "/study_sanctuary_site.png",
    date: "2024",
    link: "https://dayplanner-study.web.app/",
    github: "https://github.com/Mr-Ritesh-t/Day-Planner",
    highlights: ["40% Focus Increase", "Native System Integration", "Real-time Peer Accountability"]
  },
  {
    title: "NeuroFlow SaaS",
    category: "Internal Operations",
    description: "Designed a robust employee management suite to streamline administrative overhead and optimize internal communication.",
    problem: "Administrative tasks were taking up 15+ hours/week due to legacy systems and manual data entry.",
    solution: "Built an automated role-based dashboard with real-time performance tracking and secure authentication.",
    result: "Reduced administrative time by 60% and improved internal reporting speed by 4x.",
    technologies: ["React", "Tailwind CSS", "Firebase Auth", "Firestore", "Context API"],
    image: "https://i.postimg.cc/MpszfQj1/Employee-management.png",
    date: "2024",
    link: "https://ritesh-employee-managment-system.netlify.app/",
    github: "https://github.com/Mr-Ritesh-t",
    highlights: ["60% Admin Time Savings", "4x Faster Reporting", "Zero-Latency Sync"]
  }
];

export const EDUCATION = [
  {
    degree: "B.Tech in Information Technology",
    institution: "Ratan Tata Maharashtra State Skill University, Pune",
    period: "2025 - Present",
    description: "Focusing on advanced cloud architecture, machine learning integration in web apps, and enterprise software engineering. Maintaining high academic performance while leading technical workshops."
  },
  {
    degree: "Diploma in Computer Science",
    institution: "Shree Gulabrao Deokar College of Polytechnic, Jalgaon",
    period: "2022 - 2025",
    description: "Ranked in the top percentile of the cohort. Mastered foundational concepts in Computer Architecture, Data Structures, and Database Management Systems."
  }
];

export const SERVICES = [
  {
    title: "Frontend Development",
    description: "Building fast, reactive, and accessible web interfaces using modern React patterns and TypeScript.",
    icon: "Layout"
  },
  {
    title: "Backend Engineering",
    description: "Developing secure RESTful APIs and scalable server architectures with Django and Node.js.",
    icon: "Server"
  },
  {
    title: "UI/UX Motion Design",
    description: "Creating immersive digital stories through smooth animations and interactive user journeys.",
    icon: "Zap"
  },
  {
    title: "Database Architecture",
    description: "Designing efficient data models and optimizing query performance for large-scale applications.",
    icon: "Database"
  }
];

export const CERTIFICATIONS = [
  { name: "Google Data Science Professional", date: "Aug 2024" },
  { name: "Full-Stack Web Development (Meta)", date: "Jul 2023" },
  { name: "Advanced Java & Spring Boot", date: "Jun 2023" },
  { name: "Cloud Infrastructure (Firebase)", date: "Feb 2025" }
];

export const STRENGTHS = [
  "Strategic Technical Planning",
  "Rapid Prototyping & Iteration",
  "Collaborative Team Leadership",
  "User-Centric Design Thinking",
  "Performance Optimization",
  "Clean Code Architecture"
];

export const PROCESS = [
  {
    step: "01",
    title: "Discovery & Strategy",
    description: "We dive deep into your business goals, target audience, and project requirements to map out a winning technical strategy."
  },
  {
    step: "02",
    title: "Architecture & Design",
    description: "Designing scalable database schemas and high-performance system architectures alongside pixel-perfect user interfaces."
  },
  {
    step: "03",
    title: "Development & Iteration",
    description: "Agile engineering with continuous feedback loops. I build using robust frameworks to ensure speed, security, and stability."
  },
  {
    step: "04",
    title: "Deployment & Growth",
    description: "Launch is just the beginning. I ensure a seamless production deployment and provide post-launch optimization for growth."
  }
];

export const TESTIMONIALS = [
  {
    name: "Alex Rivera",
    role: "Startup Founder",
    text: "Ritesh transformed our vision into a high-performance reality. His attention to technical detail and architectural scalability is unmatched."
  },
  {
    name: "Sarah Chen",
    role: "Product Manager",
    text: "Exceptional engineering talent. He doesn't just build what you ask; he builds what your business actually needs to scale."
  }
];

export const HOBBIES = [
  "Open Source Contribution",
  "Competitive Programming",
  "Deep Learning Research",
  "UI Interaction Design",
  "Tech Blogging",
  "Traveling & Photography"
];
