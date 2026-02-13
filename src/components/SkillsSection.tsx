import { useState, useEffect, useRef } from "react";
import { Code, Database, Globe, Server } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const skills = [
    { name: "HTML/CSS", level: 95, icon: Globe, color: "from-primary to-cyan-400" },
    { name: "JavaScript", level: 90, icon: Code, color: "from-secondary to-purple-400" },
    { name: "React", level: 92, icon: Code, color: "from-primary to-purple-400" },
    { name: "Python", level: 88, icon: Code, color: "from-secondary to-blue-400" },
    { name: "SQL", level: 85, icon: Database, color: "from-primary to-green-400" },
    { name: "Node.js", level: 85, icon: Server, color: "from-primary to-blue-400" },
    { name: "MongoDB", level: 88, icon: Database, color: "from-secondary to-indigo-400" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Technical Skills
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`} />
        </div>

        <div className={`max-w-3xl mx-auto space-y-6 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
          {skills.map((skill, index) => (
            <div key={skill.name} className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <skill.icon className="w-5 h-5 text-primary" />
                  <span className="text-foreground font-medium">{skill.name}</span>
                </div>
                <span className="text-primary font-semibold">{skill.level}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000 ease-out`}
                  style={{
                    width: isVisible ? `${skill.level}%` : '0%',
                    transitionDelay: `${200 + index * 100}ms`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
