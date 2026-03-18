import { useState, useEffect, useRef } from "react";
import profileImage from "@/assets/about-profile.png";
import MagicRings from "@/components/ui/MagicRings";

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
          {/* Photo + Rings */}
          <div className={`flex justify-center ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            {/* outer wrapper — no overflow hidden, rings bleed freely */}
            <div className="relative" style={{ width: '400px', height: '500px' }}>

              {/* Rings — square canvas, absolutely centered on the wrapper */}
              <div
                className="pointer-events-none"
                style={{
                  position: 'absolute',
                  width: '560px',
                  height: '560px',
                  left: '50%',
                  top: '50%',
                  transform: 'translate(-50%, -50%)',
                  zIndex: 0,
                }}
              >
                <MagicRings
                  color="#fc42ff"
                  colorTwo="#42fcff"
                  ringCount={6}
                  speed={1}
                  attenuation={12}
                  lineThickness={2}
                  baseRadius={0.28}
                  radiusStep={0.08}
                  scaleRate={0.09}
                  opacity={0.95}
                  blur={0}
                  noiseAmount={0}
                  rotation={0}
                  ringGap={1.35}
                  fadeIn={0.7}
                  fadeOut={0.5}
                  followMouse={false}
                  mouseInfluence={0.2}
                  hoverScale={1.2}
                  parallax={0.05}
                  clickBurst={false}
                />
              </div>

              {/* Image — NO wrapper div, absolutely centered via translate so no rectangular box */}
              <img
                src={profileImage}
                alt="Nishant Maurya"
                style={{
                  position: 'absolute',
                  left: '50%',
                  top: '40%',
                  transform: 'translate(-50%, -50%)',
                  width: '340px',
                  height: '390px',
                  objectFit: 'contain',
                  zIndex: 10,
                }}
                className="drop-shadow-[0_20px_32px_rgba(0,0,0,0.6)]"
              />
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
