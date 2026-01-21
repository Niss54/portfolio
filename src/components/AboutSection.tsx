import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Code, Database, Globe, Server } from "lucide-react";
import profileImage from "@/assets/about-profile.png";

const AboutSection = () => {
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
            About Me
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`} />
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Photo Frame */}
          <div className={`flex justify-center ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary rounded-2xl blur-xl opacity-50 animate-pulse-glow" />
              <div className="relative w-80 h-80 rounded-2xl overflow-hidden border-2 border-primary/30 glass-strong">
                <img 
                  src={profileImage} 
                  alt="Nishant Maurya"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
              </div>
            </div>
          </div>

          {/* Bio & Skills */}
          <div className="space-y-8">
            <div className={`space-y-4 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I'm a passionate full-stack developer with expertise in building modern web applications. 
                With years of experience in the tech industry, I specialize in creating scalable solutions 
                that drive business growth and user engagement.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                My mission is to transform innovative ideas into powerful digital experiences that make 
                a lasting impact.
              </p>
            </div>

            {/* Skills Progress Bars */}
            <div className={`space-y-6 ${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
              <h3 className="text-2xl font-semibold text-foreground mb-4">Technical Skills</h3>
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
                        transitionDelay: `${400 + index * 100}ms`
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Download Resume Button */}
            <div className={`${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
              <Button variant="hero" size="lg" className="group">
                Download Resume
                <svg className="w-5 h-5 ml-2 group-hover:translate-y-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
