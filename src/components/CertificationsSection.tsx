import { useState, useEffect, useRef } from "react";
import { Award, Briefcase, Users, Calendar } from "lucide-react";
import certSoftflew from "@/assets/cert-softflew.png";
import certAws from "@/assets/cert-aws.png";
import certHackshastra from "@/assets/cert-hackshastra.png";
import certIntel from "@/assets/cert-intel.png";
import certInternai from "@/assets/cert-internai.png";
import certVitBhopal from "@/assets/cert-vit-bhopal.jpg";
import certCodematrix from "@/assets/cert-codematrix.jpg";
import certGdgGenesis from "@/assets/cert-gdg-genesis.jpg";
import certTechgig from "@/assets/cert-techgig.jpg";
import certGoogleStartups from "@/assets/cert-google-startups.jpg";

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const stats = [
    { icon: Briefcase, label: "Projects Done", value: 10, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 10, suffix: "+" },
    { icon: Calendar, label: "Years Experience", value: 1, suffix: "" },
    { icon: Award, label: "Certifications", value: 10, suffix: "" },
  ];

  const certifications = [
    {
      name: "SOFTFLEW Technologies",
      image: certSoftflew,
      description: "Python with Data Science - 41 Days Summer Training",
    },
    {
      name: "AWS Solutions Architecture",
      image: certAws,
      description: "Solutions Architecture Job Simulation via Forage",
    },
    {
      name: "HackShastra",
      image: certHackshastra,
      description: "Round 1 Idea Submission - Team Red Shade",
    },
    {
      name: "Intel AI for Entrepreneurship",
      image: certIntel,
      description: "Skill India Digital Hub - AI for Entrepreneurship",
    },
    {
      name: "InternAI Assistant",
      image: certInternai,
      description: "AI-Powered Internship Training Program",
    },
    {
      name: "VIT Bhopal UX Design",
      image: certVitBhopal,
      description: "Wireframe Submission - Innovation Council",
    },
    {
      name: "CodeMatrix: Genesis",
      image: certCodematrix,
      description: "Round 1 Hackathon - Team Syntrix, AITH Kanpur",
    },
    {
      name: "GDG CodeMatrix Genesis",
      image: certGdgGenesis,
      description: "Hackathon Participation - GDG DR AITD Kanpur",
    },
    {
      name: "TechGig Innovation Challenge",
      image: certTechgig,
      description: "Ideas For India - Environmental Sustainability Hackathon",
    },
    {
      name: "Google Startup School",
      image: certGoogleStartups,
      description: "Prompt to Prototype - Certificate of Completion",
    },
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

  const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);

    useEffect(() => {
      if (!isVisible) return;

      let startTime: number;
      const animate = (currentTime: number) => {
        if (!startTime) startTime = currentTime;
        const progress = Math.min((currentTime - startTime) / duration, 1);
        setCount(Math.floor(progress * end));
        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);

    return <span>{count}</span>;
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Achievements & Stats
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`} />
        </div>

        {/* Stats Counter */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass-strong rounded-2xl p-6 text-center border border-primary/20 group hover:scale-105 transition-all duration-500 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.3)] ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${200 + index * 100}ms` }}
            >
              <div className="relative inline-block mb-4">
                <div className="absolute inset-0 bg-primary blur-xl opacity-0 group-hover:opacity-50 transition-opacity" />
                <stat.icon className="relative w-12 h-12 text-primary mx-auto" />
              </div>
              <div className="text-4xl font-bold text-foreground glow-text mb-2">
                <CountUp end={stat.value} />
                {stat.suffix}
              </div>
              <div className="text-muted-foreground text-sm">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Certifications Timeline */}
        <div className="max-w-5xl mx-auto">
          <h3 className={`text-3xl font-bold text-center mb-12 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
            Professional Certifications
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`group relative glass-strong rounded-2xl p-6 text-center border border-primary/20 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)] ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${600 + index * 100}ms` }}
              >
                {/* Blue Halo Effect */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl" />
                
                {/* Logo */}
                <div className="relative mb-4">
                  <div className="w-full h-48 mx-auto flex items-center justify-center bg-background/50 rounded-xl overflow-hidden group-hover:scale-105 transition-transform duration-500">
                    <img 
                      src={cert.image} 
                      alt={cert.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Content */}
                <h4 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {cert.name}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {cert.description}
                </p>

                {/* Badge */}
                <div className="mt-4 inline-flex items-center gap-1 px-3 py-1 bg-primary/10 rounded-full border border-primary/30">
                  <Award className="w-3 h-3 text-primary" />
                  <span className="text-xs text-primary font-medium">Certified</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
