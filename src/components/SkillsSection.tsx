import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";
import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiLangchain, SiGooglecloud, SiMongodb, SiDocker } from "react-icons/si";
import LogoLoop from "@/components/ui/LogoLoop";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    {
      title: "Languages & Tools",
      subtitle: "Core programming & version control",
      items: [
        "Python, JavaScript, C, Java",
        "HTML/CSS, Tailwind CSS",
        "Git, GitHub, GitLab, Docker",
      ],
      tags: ["Python", "JavaScript", "Java", "C", "Git"],
    },
    {
      title: "AI & Machine Learning",
      subtitle: "LLMs, agents, AI workflows",
      items: [
        "LLMs, LangChain, Hugging Face",
        "AI Agents, n8n Workflows, ADK",
        "Google Cloud DLP, Vertex AI, NLP",
      ],
      tags: ["LangChain", "Hugging Face", "n8n", "Vertex AI"],
    },
    {
      title: "Full Stack & Cloud",
      subtitle: "Databases, cloud, web apps",
      items: [
        "Streamlit, React, Modern Web Development",
        "Supabase, MongoDB, PostgreSQL",
        "Google Cloud, AWS, Docker",
        "User Authentication & Crypto Payments",
      ],
      tags: ["Supabase", "MongoDB", "AWS", "Streamlit", "Docker"],
    },
    {
      title: "Mobile Application Development",
      subtitle: "Android, iOS & cross-platform apps",
      items: [
        "Android App Development (Java, Kotlin)",
        "iOS App Development (Swift, SwiftUI)",
        "Cross-Platform Development (Flutter, React Native)",
        "Mobile UI/UX Design (Material UI, Cupertino)",
        "API Integration & RESTful Services",
        "Push Notifications & App Permissions",
        "App Performance Optimization",
        "App Store & Play Store Deployment",
        "Authentication, Payments & Security",
      ],
      tags: [
        "Android",
        "Kotlin",
        "Swift",
        "Flutter",
        "React Native",
        "REST API",
        "Firebase",
        "Push Notifications",
        "UI/UX",
        "App Store",
        "Play Store",
        "Firebase Auth",
        "Mobile Security",
      ],
    },
  ];

  const techLogos = [
    { node: <SiReact color="#61DAFB" />, title: "React" },
    { node: <SiNextdotjs color="#FFFFFF" />, title: "Next.js" },
    { node: <SiTypescript color="#3178C6" />, title: "TypeScript" },
    { node: <SiTailwindcss color="#06B6D4" />, title: "Tailwind CSS" },
    { node: <SiLangchain color="#39E58C" />, title: "LangChain" },
    { node: <SiGooglecloud color="#4285F4" />, title: "Google Cloud" },
    { node: <SiMongodb color="#47A248" />, title: "MongoDB" },
    { node: <SiDocker color="#2496ED" />, title: "Docker" },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto max-w-5xl">
        <h2
          className={`text-4xl md:text-5xl font-bold glow-text mb-16 ${
            isVisible ? "animate-slide-up" : "opacity-0"
          }`}
        >
          Skills & Expertise
        </h2>

        <div className="space-y-12">
          {categories.map((cat, catIdx) => (
            <div
              key={cat.title}
              className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${catIdx * 150}ms` }}
            >
              {/* Items (left) */}
              <div className="space-y-3 flex-1">
                {cat.items.map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-primary shrink-0" />
                    <span className="text-foreground/90 text-sm md:text-base">
                      {item}
                    </span>
                  </div>
                ))}
                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {cat.tags.map((tag) => (
                    <span
                      key={tag}
                      className="site-animated-chip px-3 py-1 rounded-full text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Title (right) */}
              <div className="md:text-right md:min-w-[220px] shrink-0">
                <h3 className="text-xl md:text-2xl font-bold text-foreground">
                  {cat.title}
                </h3>
                <p className="text-muted-foreground text-sm">{cat.subtitle}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-14 ${isVisible ? "animate-slide-up delay-400" : "opacity-0"}`}>
          <LogoLoop
            logos={techLogos}
            speed={95}
            direction="right"
            logoHeight={34}
            gap={80}
            pauseOnHover={false}
            ariaLabel="Technology icons"
          />
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
