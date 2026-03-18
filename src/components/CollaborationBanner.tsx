import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CollaborationBanner = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Animated Background Waves */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-[600px] h-[400px] bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-[100px] animate-wave" />
        <div className="absolute bottom-0 right-1/4 w-[500px] h-[350px] bg-gradient-to-l from-secondary/15 to-primary/15 rounded-full blur-[90px] animate-wave delay-300" />
      </div>

      {/* Motion Lines */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-primary to-transparent"
            style={{
              top: `${20 + i * 15}%`,
              left: 0,
              right: 0,
              animation: `slide-right ${3 + i * 0.5}s ease-in-out infinite`,
              animationDelay: `${i * 0.2}s`,
            }}
          />
        ))}
      </div>

      <div className="container mx-auto relative">
        <div className={`glass-strong site-animated-surface site-animated-surface-2 rounded-3xl p-12 md:p-16 text-center border-2 border-primary/30 glow-border ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
          {/* Gradient Background Overlay */}
          <div 
            className="absolute inset-0 rounded-3xl opacity-30"
            style={{
              background: 'radial-gradient(circle at 50% 50%, hsl(189 100% 50% / 0.15), transparent 70%)',
            }}
          />

          <div className="relative space-y-8">
            <div className="space-y-4">
              <h2 className="text-3xl md:text-5xl font-bold glow-text">
                Available for Freelance, Internship, or Collaboration
              </h2>
              <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
                Let's bring your ideas to life with cutting-edge technology and creative solutions
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                variant="hero" 
                size="xl"
                className="group min-w-[200px] text-lg"
              >
                Let's Connect
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-2 transition-transform" />
              </Button>
              <Button 
                variant="hero-outline" 
                size="xl"
                className="min-w-[200px] text-lg"
              >
                View Portfolio
              </Button>
            </div>

            {/* Floating Elements */}
            <div className="absolute -top-8 -left-8 w-32 h-32 bg-primary/10 rounded-full blur-2xl animate-float" />
            <div className="absolute -bottom-8 -right-8 w-40 h-40 bg-secondary/10 rounded-full blur-2xl animate-float delay-300" />
          </div>
        </div>
      </div>

      <style>{`
        @keyframes slide-right {
          0% {
            transform: translateX(-100%);
            opacity: 0;
          }
          50% {
            opacity: 1;
          }
          100% {
            transform: translateX(100%);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default CollaborationBanner;
