import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import projectJeevansos from "@/assets/project-jeevansos.png";
import projectNeurosense from "@/assets/project-neurosense.png";
import projectLimpio from "@/assets/project-limpio.png";
import projectInternai from "@/assets/project-internai.png";
import projectPhool from "@/assets/project-phool.png";
import projectEventhub from "@/assets/project-eventhub.png";
import projectNissh from "@/assets/project-nissh.png";
import projectJeevansosV2 from "@/assets/project-jeevansos-v2.png";
import projectLimpioV2 from "@/assets/project-limpio-v2.png";

const projects = [
  { title: "JeevanSOS", description: "Urgent blood request platform connecting donors with those in need during medical emergencies.", image: projectJeevansos, tags: ["React", "Node.js", "Real-time", "Healthcare"], demo: "#", github: "#" },
  { title: "NeuroSense AI", description: "Real-time emotion and cognitive load tracker with privacy-first, on-device intelligence.", image: projectNeurosense, tags: ["AI", "React", "Machine Learning", "Privacy"], demo: "#", github: "#" },
  { title: "Limpio - The Soul Cleaner", description: "Premium floor cleaner e-commerce platform made in India with top-quality ingredients.", image: projectLimpio, tags: ["E-commerce", "React", "Node.js", "Shopify"], demo: "#", github: "#" },
  { title: "InternAI", description: "Smart internship finder platform powered by AI to match candidates with opportunities.", image: projectInternai, tags: ["AI", "React", "Node.js", "MongoDB"], demo: "#", github: "#" },
  { title: "Phool - Finding Her", description: "Beautiful CSS flower animation project showcasing creative frontend development and artistic design.", image: projectPhool, tags: ["CSS Art", "Animation", "Creative", "Frontend"], demo: "https://phool-finding-her.netlify.app", github: "#" },
  { title: "EventHub", description: "Discover local events near you - browse by category and explore community calendars.", image: projectEventhub, tags: ["Events", "React", "Community", "Discovery"], demo: "#", github: "#" },
  { title: "Nissh Portfolio", description: "Personal portfolio website with stunning particle animations and modern design aesthetics.", image: projectNissh, tags: ["Portfolio", "React", "Animation", "Design"], demo: "https://nissh.info", github: "#" },
  { title: "JeevanSOS V2", description: "Enhanced version with 10-minute medicine delivery and improved emergency response features.", image: projectJeevansosV2, tags: ["Healthcare", "React", "Delivery", "Emergency"], demo: "https://preview--jeevan-sos-connect-58.lovable.app", github: "#" },
  { title: "Limpio Shop", description: "Full e-commerce mobile-first experience with product categories and seamless checkout.", image: projectLimpioV2, tags: ["E-commerce", "Mobile", "PWA", "Shopping"], demo: "https://limpios.shop", github: "#" },
];

const AllProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-28 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold glow-text">All Projects</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-3" />
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div
                key={project.title}
                className="group relative glass-strong rounded-2xl overflow-hidden border border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)] animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>
                <div className="p-6 space-y-4">
                  <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-muted-foreground">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30">{tag}</span>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-4">
                    <Button variant="hero" size="sm" className="flex-1" asChild>
                      <a href={project.demo} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />Live Demo
                      </a>
                    </Button>
                    <Button variant="hero-outline" size="sm" className="flex-1" asChild>
                      <a href={project.github} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2" />Code
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllProjects;
