import { useState, useEffect, useRef } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/data/projects";

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Featured Projects
            </h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`} />
          </div>
          <a
            href="/all-projects"
            className={`site-animated-chip px-5 py-2.5 text-sm font-medium rounded-xl text-primary hover:bg-primary/10 transition-all duration-300 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}
          >
            View All Projects →
          </a>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.slice(0, 2).map((project, index) => (
            <ProjectCard
              key={project.title}
              project={project}
              animationClassName={isVisible ? 'animate-slide-up' : 'opacity-0'}
              animationDelay={`${300 + index * 100}ms`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
