import { useState, useEffect, useRef } from "react";
import { Code, Palette, Sparkles, Layout } from "lucide-react";

const ServicesSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Building responsive, scalable web applications with modern technologies and best practices.",
      gradient: "from-primary via-cyan-400 to-blue-500",
    },
    {
      icon: Layout,
      title: "App Design",
      description: "Creating intuitive mobile and web app designs that prioritize user experience and engagement.",
      gradient: "from-secondary via-purple-400 to-indigo-500",
    },
    {
      icon: Palette,
      title: "Branding",
      description: "Developing unique brand identities that resonate with your audience and stand out in the market.",
      gradient: "from-primary via-teal-400 to-cyan-500",
    },
    {
      icon: Sparkles,
      title: "UI/UX",
      description: "Designing beautiful, functional interfaces with seamless user experiences and interactions.",
      gradient: "from-secondary via-pink-400 to-purple-500",
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

  return (
    <section ref={sectionRef} className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className={`text-primary text-lg font-medium mb-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            What I Offer
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Why Choose Me?
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`} />
          <p className={`text-muted-foreground text-lg max-w-2xl mx-auto ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
            Delivering excellence across multiple disciplines with cutting-edge solutions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`group relative glass-strong rounded-2xl p-6 border border-primary/20 transition-all duration-500 hover:translate-y-[-10px] hover:shadow-[0_20px_60px_hsl(189_100%_50%/0.3)] ${
                isVisible ? 'animate-slide-up' : 'opacity-0'
              }`}
              style={{ animationDelay: `${400 + index * 100}ms` }}
            >
              {/* Gradient Glow Background */}
              <div 
                className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-500 blur-xl`}
              />

              {/* Icon with Glow */}
              <div className="relative mb-6">
                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} blur-2xl opacity-0 group-hover:opacity-50 transition-opacity duration-500`} />
                <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}>
                  <service.icon className="w-8 h-8 text-foreground" />
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-3">
                <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `linear-gradient(135deg, hsl(189 100% 50% / 0.3), hsl(250 70% 60% / 0.3))`,
                  padding: '1px',
                  WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
                  WebkitMaskComposite: 'xor',
                  maskComposite: 'exclude',
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
