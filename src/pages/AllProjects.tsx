import { useEffect } from "react";
import Navbar from "@/components/Navbar";
import ProjectCard from "@/components/ProjectCard";
import DarkVeil from "@/components/DarkVeil";
import "@/components/DarkVeil.css";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { projects } from "@/data/projects";

const AllProjects = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-black text-foreground relative overflow-hidden">
      {/* DarkVeil Background */}
      <div className="fixed inset-0 z-0 darkveil-wrapper pointer-events-none">
        <DarkVeil
          hueShift={0}
          noiseIntensity={0.03}
          scanlineIntensity={0.06}
          speed={0.5}
          scanlineFrequency={1.2}
          warpAmount={0.08}
        />
      </div>
      <div className="relative z-10">
        <Navbar />
        <section className="pt-28 pb-20 px-6 relative">
          <div className="container mx-auto relative z-10">
          <div className="flex items-center gap-4 mb-12">
            <button
              onClick={() => navigate("/")}
              className="site-animated-chip p-2 rounded-xl text-primary hover:bg-primary/10 transition-all"
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
              <ProjectCard
                key={project.title}
                project={project}
                animationClassName="animate-slide-up"
                animationDelay={`${index * 100}ms`}
              />
            ))}
          </div>
          </div>
        </section>
        </div>
    </div>
  );
};

export default AllProjects;
