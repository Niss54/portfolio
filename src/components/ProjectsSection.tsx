import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";
import projectJeevansos from "@/assets/project-jeevansos.png";
import projectNeurosense from "@/assets/project-neurosense.png";
import projectLimpio from "@/assets/project-limpio.png";
import projectInternai from "@/assets/project-internai.png";
import projectPhool from "@/assets/project-phool.png";
import projectEventhub from "@/assets/project-eventhub.png";
import projectNissh from "@/assets/project-nissh.png";
import projectJeevansosV2 from "@/assets/project-jeevansos-v2.png";
import projectLimpioV2 from "@/assets/project-limpio-v2.png";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const projects = [
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6 relative">
      {/* Floating Particles Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-primary/20 animate-particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${10 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Featured Projects
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`} />
          <p className={`text-muted-foreground text-lg max-w-2xl mx-auto ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            Showcasing my latest work in web development, mobile apps, and blockchain technology
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className={`group relative glass-strong rounded-2xl overflow-hidden border border-primary/20 transition-all duration-500 hover:scale-105 hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)] ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${300 + index * 100}ms` }}
            >
              {/* Project Image */}
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                
                {/* Hover Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground">
                  {project.description}
                </p>

                {/* Tech Stack Badges */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full border border-primary/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3 pt-4">
                  <Button variant="hero" size="sm" className="flex-1">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Live Demo
                  </Button>
                  <Button variant="hero-outline" size="sm" className="flex-1">
                    <Github className="w-4 h-4 mr-2" />
                    Code
                  </Button>
                </div>
              </div>

              {/* 3D Tilt Effect Overlay */}
              <div className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                style={{
                  background: 'radial-gradient(circle at var(--mouse-x, 50%) var(--mouse-y, 50%), hsl(189 100% 50% / 0.15), transparent 50%)',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
