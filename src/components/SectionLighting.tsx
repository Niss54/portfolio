import { useState, useEffect, useRef, ReactNode } from "react";
import { Lightbulb } from "lucide-react";

interface SectionLightingProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

const SectionLighting = ({ children, className = "", id }: SectionLightingProps) => {
  const [isLightOn, setIsLightOn] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Light turns on when section is 30% visible, off when less than 10%
        if (entry.isIntersecting && entry.intersectionRatio >= 0.15) {
          setIsLightOn(true);
        } else if (!entry.isIntersecting || entry.intersectionRatio < 0.1) {
          setIsLightOn(false);
        }
      },
      { 
        threshold: [0, 0.1, 0.15, 0.3, 0.5],
        rootMargin: "-5% 0px -5% 0px"
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div 
      ref={sectionRef}
      id={id}
      className={`relative ${className}`}
    >
      {/* Premium Bulb Light at Top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex flex-col items-center">
        {/* Wire/Cord */}
        <div 
          className={`w-[2px] h-8 transition-all duration-700 ${
            isLightOn 
              ? 'bg-gradient-to-b from-primary/80 to-primary shadow-[0_0_10px_hsl(189_100%_50%/0.6)]' 
              : 'bg-muted-foreground/30'
          }`}
        />
        
        {/* Bulb Container */}
        <div className="relative">
          {/* Glow Effect Behind Bulb */}
          <div 
            className={`absolute inset-0 rounded-full blur-xl transition-all duration-700 ${
              isLightOn 
                ? 'bg-primary/60 scale-[2.5] opacity-100' 
                : 'bg-transparent scale-100 opacity-0'
            }`}
          />
          
          {/* Bulb Icon */}
          <div 
            className={`relative p-3 rounded-full border-2 transition-all duration-500 ${
              isLightOn 
                ? 'bg-gradient-to-br from-primary via-cyan-400 to-primary border-primary/80 shadow-[0_0_30px_hsl(189_100%_50%/0.8),0_0_60px_hsl(189_100%_50%/0.4)]' 
                : 'bg-background/80 border-muted-foreground/30 shadow-none'
            }`}
          >
            <Lightbulb 
              className={`w-5 h-5 transition-all duration-500 ${
                isLightOn 
                  ? 'text-background fill-background' 
                  : 'text-muted-foreground fill-transparent'
              }`}
            />
          </div>
        </div>
      </div>

      {/* Spotlight Cone Effect */}
      <div 
        className={`absolute top-0 left-1/2 -translate-x-1/2 w-[400px] md:w-[600px] h-[200px] md:h-[300px] pointer-events-none transition-all duration-700 z-10 ${
          isLightOn ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'conic-gradient(from 90deg at 50% 0%, transparent 40%, hsl(189 100% 50% / 0.08) 45%, hsl(189 100% 50% / 0.15) 50%, hsl(189 100% 50% / 0.08) 55%, transparent 60%)',
          transform: 'translateX(-50%)',
          maskImage: 'linear-gradient(to bottom, white, transparent)',
          WebkitMaskImage: 'linear-gradient(to bottom, white, transparent)',
        }}
      />

      {/* Content Wrapper with Dim/Light Effect */}
      <div 
        className={`relative z-0 transition-all duration-700 ${
          isLightOn 
            ? 'opacity-100 [&_.glow-text]:drop-shadow-[0_0_20px_hsl(189_100%_50%/0.5)]' 
            : 'opacity-40 brightness-50'
        }`}
      >
        {children}
      </div>

      {/* Enhanced Shadow Overlay when light is OFF */}
      <div 
        className={`absolute inset-0 pointer-events-none transition-all duration-700 z-[5] ${
          isLightOn 
            ? 'opacity-0' 
            : 'opacity-100'
        }`}
        style={{
          background: 'radial-gradient(ellipse at center top, transparent 0%, hsl(222 47% 5% / 0.3) 50%, hsl(222 47% 5% / 0.6) 100%)',
        }}
      />

      {/* Heading Spotlight Glow when light is ON */}
      <div 
        className={`absolute top-16 left-1/2 -translate-x-1/2 w-[300px] md:w-[500px] h-[150px] pointer-events-none transition-all duration-700 z-[5] ${
          isLightOn ? 'opacity-100' : 'opacity-0'
        }`}
        style={{
          background: 'radial-gradient(ellipse at center, hsl(189 100% 50% / 0.1) 0%, transparent 70%)',
        }}
      />
    </div>
  );
};

export default SectionLighting;