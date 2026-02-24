import { useState, useEffect, useRef } from "react";
import { Award, Briefcase, Users, Calendar } from "lucide-react";
import { motion } from "framer-motion";
import CertificateCard from "./CertificateCard";

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
import certDuLogicLeague from "@/assets/cert-du-logic-league.jpg";
import certMicrosoftGenai from "@/assets/cert-microsoft-genai-v2.jpg";
import certGdgSyntrix from "@/assets/cert-gdg-syntrix.jpg";
import certGdgNexora from "@/assets/cert-gdg-nexora.jpg";

interface Certification {
  name: string;
  image: string;
  description: string;
}

const certifications: Certification[] = [
  { name: "SOFTFLEW Technologies", image: certSoftflew, description: "Python with Data Science - 41 Days Summer Training" },
  { name: "AWS Solutions Architecture", image: certAws, description: "Solutions Architecture Job Simulation via Forage" },
  { name: "HackShastra", image: certHackshastra, description: "Round 1 Idea Submission - Team Red Shade" },
  { name: "Intel AI for Entrepreneurship", image: certIntel, description: "Skill India Digital Hub - AI for Entrepreneurship" },
  { name: "InternAI Assistant", image: certInternai, description: "AI-Powered Internship Training Program" },
  { name: "VIT Bhopal UX Design", image: certVitBhopal, description: "Wireframe Submission - Innovation Council" },
  { name: "CodeMatrix: Genesis", image: certCodematrix, description: "Round 1 Hackathon - Team Syntrix, AITH Kanpur" },
  { name: "GDG CodeMatrix Genesis", image: certGdgGenesis, description: "Hackathon Participation - GDG DR AITD Kanpur" },
  { name: "TechGig Innovation Challenge", image: certTechgig, description: "Ideas For India - Environmental Sustainability Hackathon" },
  { name: "Google Startup School", image: certGoogleStartups, description: "Prompt to Prototype - Certificate of Completion" },
  { name: "DU Logic League", image: certDuLogicLeague, description: "Top Performer - ARSD College Tech-A-Thon Week 5" },
  { name: "Microsoft x PW Skills", image: certMicrosoftGenai, description: "Generative AI for All - Certificate of Completion" },
  { name: "Google Developer Group", image: certGdgSyntrix, description: "CodeMatrix Genesis Finalist - Team Syntrix" },
  { name: "Google Developer Group", image: certGdgNexora, description: "CodeMatrix Genesis Finalist - Team Nexora" },
];

const stats = [
  { icon: Briefcase, label: "Projects Done", value: 10, suffix: "+" },
  { icon: Users, label: "Happy Clients", value: 10, suffix: "+" },
  { icon: Calendar, label: "Years Experience", value: 1, suffix: "" },
  { icon: Award, label: "Certifications", value: 14, suffix: "" },
];

type Phase = "hidden" | "stacking" | "spread";

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [phase, setPhase] = useState<Phase>("hidden");
  const sectionRef = useRef<HTMLElement>(null);
  const displayCerts = certifications.slice(0, 4);
  const total = displayCerts.length;
  const centerIndex = Math.floor(total / 2);

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

  useEffect(() => {
    if (!isVisible) return;
    setPhase("stacking");
    const timer = setTimeout(() => setPhase("spread"), 1400);
    return () => clearTimeout(timer);
  }, [isVisible]);

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

  const getCardMotion = (index: number) => {
    const isLeft = index < centerIndex;
    const isCenter = index === centerIndex;

    // Stack offset for depth illusion
    const stackRotate = (index - centerIndex) * 0.4;

    // Spread: fan with ±5deg max rotation
    const spreadOffset = (index - centerIndex) * 290;
    const maxFanRotation = 5;
    const fanRotation = centerIndex === 0 ? 0 : ((index - centerIndex) / centerIndex) * maxFanRotation;

    return {
      initial: {
        x: isCenter ? 0 : isLeft ? -900 : 900,
        y: 0,
        rotate: isCenter ? 0 : isLeft ? -20 : 20,
        scale: 0.8,
        opacity: 0,
      },
      stacking: {
        x: 0,
        y: 0,
        rotate: stackRotate,
        scale: 1,
        opacity: 1,
      },
      spread: {
        x: spreadOffset,
        y: 0,
        rotate: fanRotation,
        scale: 1,
        opacity: 1,
      },
    };
  };

  const getZIndex = (index: number) => {
    if (phase === "spread") return total - Math.abs(index - centerIndex);
    return total - index;
  };

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        {/* Header */}
        <div className="flex items-center justify-between mb-16">
          <div>
            <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? "animate-slide-up" : "opacity-0"}`}>
              Achievements & Stats
            </h2>
            <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary ${isVisible ? "animate-slide-up delay-100" : "opacity-0"}`} />
          </div>
          <a
            href="/all-certificates"
            className={`px-5 py-2.5 text-sm font-medium rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300 ${isVisible ? "animate-slide-up delay-200" : "opacity-0"}`}
          >
            View All Certificates →
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={`glass-strong rounded-2xl p-6 text-center border border-primary/20 group hover:scale-105 transition-all duration-500 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.3)] ${
                isVisible ? "animate-slide-up" : "opacity-0"
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

        {/* Certificate Deck */}
        <div className="max-w-7xl mx-auto">
          <h3 className={`text-3xl font-bold text-center mb-16 ${isVisible ? "animate-slide-up delay-300" : "opacity-0"}`}>
            Professional Certifications
          </h3>

          {/* Deck Container */}
          <div className="relative overflow-x-auto overflow-y-visible pb-8" style={{ minHeight: "460px" }}>
            <div
              className="relative flex items-center justify-center"
              style={{
                minWidth: phase === "spread" ? `${total * 290}px` : "auto",
                height: "420px",
                margin: "0 auto",
              }}
            >
              {displayCerts.map((cert, index) => {
                const m = getCardMotion(index);
                const target = phase === "spread" ? m.spread : phase === "stacking" ? m.stacking : m.initial;

                return (
                  <motion.div
                    key={index}
                    className="absolute"
                    initial={m.initial}
                    animate={target}
                    transition={{
                      type: "spring",
                      stiffness: phase === "stacking" ? 90 : 55,
                      damping: phase === "stacking" ? 12 : 16,
                      bounce: phase === "stacking" ? 0.3 : 0,
                      delay:
                        phase === "stacking"
                          ? Math.abs(index - centerIndex) * 0.05
                          : phase === "spread"
                            ? Math.abs(index - centerIndex) * 0.04
                            : 0,
                    }}
                    style={{ zIndex: getZIndex(index) }}
                  >
                    <CertificateCard
                      name={cert.name}
                      image={cert.image}
                      description={cert.description}
                      isSpread={phase === "spread"}
                    />
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Scroll hint */}
          {phase === "spread" && (
            <motion.p
              className="text-center text-sm text-muted-foreground mt-4"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
            >
              ← Scroll to browse • Click any card to flip →
            </motion.p>
          )}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
