import { useState, useEffect, useRef } from "react";
import profileImage from "@/assets/about-profile.png";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

          {/* Bio */}
          <div className={`space-y-4 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Founder and full stack software developer with hands-on experience building real-world web applications and platforms. Founder of InternAI and Limpio, with strong exposure to hackathons, product building, and technical pitching.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Skilled in HTML, React, CSS, JavaScript, Node.js, and MongoDB, with a focus on solving practical problems through technology. Certified in Generative AI, startup innovation, and software engineering through Microsoft, Google, and industry programs.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Actively seeking opportunities to build, learn, and contribute in fast-paced tech environments.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
