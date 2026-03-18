import projectJeevansos from "@/assets/project-jeevansos.png";
import projectNeurosense from "@/assets/project-neurosense.png";
import projectLimpio from "@/assets/project-limpio.png";
import projectInternai from "@/assets/project-internai.png";
import projectPhool from "@/assets/project-phool.png";
import projectEventhub from "@/assets/project-eventhub.png";
import projectNissh from "@/assets/project-nissh.png";
import projectJeevansosV2 from "@/assets/project-jeevansos-v2.png";
import projectLimpioV2 from "@/assets/project-limpio-v2.png";

export type ProjectItem = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  demo: string;
  github: string;
};

export const projects: ProjectItem[] = [
  {
    title: "JeevanSOS",
    description: "Urgent blood request platform connecting donors with those in need during medical emergencies.",
    image: projectJeevansos,
    tags: ["React", "Node.js", "Real-time", "Healthcare"],
    demo: "#",
    github: "#",
  },
  {
    title: "NeuroSense AI",
    description: "Real-time emotion and cognitive load tracker with privacy-first, on-device intelligence.",
    image: projectNeurosense,
    tags: ["AI", "React", "Machine Learning", "Privacy"],
    demo: "#",
    github: "#",
  },
  {
    title: "Limpio - The Soul Cleaner",
    description: "Premium floor cleaner e-commerce platform made in India with top-quality ingredients.",
    image: projectLimpio,
    tags: ["E-commerce", "React", "Node.js", "Shopify"],
    demo: "#",
    github: "#",
  },
  {
    title: "InternAI",
    description: "Smart internship finder platform powered by AI to match candidates with opportunities.",
    image: projectInternai,
    tags: ["AI", "React", "Node.js", "MongoDB"],
    demo: "#",
    github: "#",
  },
  {
    title: "Phool - Finding Her",
    description: "Beautiful CSS flower animation project showcasing creative frontend development and artistic design.",
    image: projectPhool,
    tags: ["CSS Art", "Animation", "Creative", "Frontend"],
    demo: "https://phool-finding-her.netlify.app",
    github: "#",
  },
  {
    title: "EventHub",
    description: "Discover local events near you - browse by category and explore community calendars.",
    image: projectEventhub,
    tags: ["Events", "React", "Community", "Discovery"],
    demo: "#",
    github: "#",
  },
  {
    title: "Nissh Portfolio",
    description: "Personal portfolio website with stunning particle animations and modern design aesthetics.",
    image: projectNissh,
    tags: ["Portfolio", "React", "Animation", "Design"],
    demo: "https://nissh.info",
    github: "#",
  },
  {
    title: "JeevanSOS V2",
    description: "Enhanced version with 10-minute medicine delivery and improved emergency response features.",
    image: projectJeevansosV2,
    tags: ["Healthcare", "React", "Delivery", "Emergency"],
    demo: "https://preview--jeevan-sos-connect-58.lovable.app",
    github: "#",
  },
  {
    title: "Limpio Shop",
    description: "Full e-commerce mobile-first experience with product categories and seamless checkout.",
    image: projectLimpioV2,
    tags: ["E-commerce", "Mobile", "PWA", "Shopping"],
    demo: "https://limpios.shop",
    github: "#",
  },
];