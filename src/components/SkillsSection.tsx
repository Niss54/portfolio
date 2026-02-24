import { useState, useEffect, useRef } from "react";
import { Check } from "lucide-react";

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const categories = [
    {
      number: "1",
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
      number: "2",
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
      number: "3",
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
              key={cat.number}
              className={`flex flex-col md:flex-row items-start gap-6 md:gap-12 ${
                isVisible ? "animate-slide-up" : "opacity-0"
              }`}
              style={{ animationDelay: `${catIdx * 150}ms` }}
            >
              {/* Number + Items (left) */}
              <div className="flex items-start gap-6 flex-1">
                <span className="text-6xl md:text-7xl font-bold text-muted-foreground/30 leading-none select-none">
                  {cat.number}
                </span>
                <div className="space-y-3">
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
                        className="px-3 py-1 rounded-full text-xs font-medium bg-primary/20 text-primary border border-primary/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
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
      </div>
    </section>
  );
};

export default SkillsSection;
