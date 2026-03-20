import projectNeurosense from "@/assets/project-neurosense.png";
import projectInternai from "@/assets/project-internai.png";
import projectPhool from "@/assets/project-phool.png";
import projectEventhub from "@/assets/project-eventhub.png";
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
    title: "NeuroSense AI",
    description: "Real-time emotion and cognitive load tracker with privacy-first, on-device intelligence.",
    image: projectNeurosense,
    tags: ["AI", "React", "Machine Learning", "Privacy"],
    demo: "https://neurosense-ai.netlify.app",
    github: "#",
  },
  {
    title: "InternAI",
    description: "Smart internship finder platform powered by AI to match candidates with opportunities.",
    image: projectInternai,
    tags: ["AI", "React", "Node.js", "MongoDB"],
    demo: "https://internaii.netlify.app/",
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
    title: "JeevanSOS V2",
    description: "Enhanced version with 10-minute medicine delivery and improved emergency response features.",
    image: projectJeevansosV2,
    tags: ["Healthcare", "React", "Delivery", "Emergency"],
    demo: "https://emergencys.netlify.app/",
    github: "#",
  },
  {
    title: "Limpio Shop",
    description: "Full e-commerce mobile-first experience with product categories and seamless checkout.",
    image: projectLimpioV2,
    tags: ["E-commerce", "Mobile", "PWA", "Shopping"],
    demo: "https://www.limpios.shop",
    github: "#",
  },
  {
    title: "Rise Blue Media",
    description: "Digital marketing and media platform for brand growth and online presence enhancement.",
    image: "/image.png",
    tags: ["Marketing", "Media", "Branding", "Digital"],
    demo: "https://riseblue.netlify.app/",
    github: "#",
  },
];