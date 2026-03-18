import { useState, useEffect, useRef } from "react";
import { Award, Briefcase, Users, Calendar } from "lucide-react";
import { Link } from "react-router-dom";
import CertificateCard from "./CertificateCard";
import { certifications } from "@/data/certifications";

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const stats = [
    { icon: Briefcase, label: "Projects Done", value: 10, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 10, suffix: "+" },
    { icon: Calendar, label: "Years Experience", value: 1, suffix: "" },
    { icon: Award, label: "Certifications", value: certifications.length, suffix: "+" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const CountUp = ({ end, duration = 2000 }: { end: number; duration?: number }) => {
    const [count, setCount] = useState(0);
    useEffect(() => {
      if (!isVisible) return;
      let startTime: number;
      const animate = (t: number) => {
        if (!startTime) startTime = t;
        const p = Math.min((t - startTime) / duration, 1);
        setCount(Math.floor(p * end));
        if (p < 1) requestAnimationFrame(animate);
      };
      requestAnimationFrame(animate);
    }, [isVisible, end, duration]);
    return <span>{count}</span>;
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              Achievements & Stats
            </h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary ${isVisible ? "animate-slide-up delay-100" : "opacity-0"}`} />
          </div>
          <Link
            to="/all-certificates"
            className={`site-animated-chip px-5 py-2.5 text-sm font-medium rounded-xl text-primary hover:bg-primary/10 transition-all duration-300 ${isVisible ? "animate-slide-up delay-200" : "opacity-0"}`}
          >
            View All Certificates →
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass-strong site-animated-surface rounded-2xl p-6 text-center border border-primary/20 group hover:scale-105 transition-all duration-500 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.3)] ${isVisible ? "animate-slide-up" : "opacity-0"}`}
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

        <div className="max-w-7xl mx-auto">
          <h3 className={`text-3xl font-bold text-center mb-16 ${isVisible ? "animate-slide-up delay-300" : "opacity-0"}`}>
            Professional Certifications
          </h3>

          <div className="relative overflow-hidden py-2">
            <div className="cert-marquee-track">
              {[...certifications, ...certifications].map((cert, index) => (
                <div key={`${cert.name}-${index}`} className="cert-marquee-item">
                  <CertificateCard
                    name={cert.name}
                    frontImage={cert.frontImage}
                    backImage={cert.backImage}
                    description={cert.description}
                    isSpread={true}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .cert-marquee-track {
          display: flex;
          width: max-content;
          gap: 24px;
          animation: cert-marquee-left 90s linear infinite;
          will-change: transform;
        }

        .cert-marquee-track:hover {
          animation-play-state: paused;
        }

        .cert-marquee-item {
          flex: 0 0 auto;
        }

        @keyframes cert-marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
};

export default CertificationsSection;
