import { useState, useEffect, useRef } from "react";
import { Award, Briefcase, Users, Calendar, X, Download, Share2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
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
import certMicrosoftGenai from "@/assets/cert-microsoft-genai.jpg";

interface Certification {
  name: string;
  image: string;
  description: string;
}

const CertificationsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCert, setSelectedCert] = useState<Certification | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();
  const stats = [
    { icon: Briefcase, label: "Projects Done", value: 10, suffix: "+" },
    { icon: Users, label: "Happy Clients", value: 10, suffix: "+" },
    { icon: Calendar, label: "Years Experience", value: 1, suffix: "" },
    { icon: Award, label: "Certifications", value: 12, suffix: "" },
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
    {
      name: "DU Logic League",
      image: certDuLogicLeague,
      description: "Top Performer - ARSD College Tech-A-Thon Week 5",
    },
    {
      name: "Microsoft x PW Skills",
      image: certMicrosoftGenai,
      description: "Generative AI for All - Certificate of Completion",
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
                onClick={() => setSelectedCert(cert)}
                className={`group relative glass-strong rounded-2xl p-6 text-center border border-primary/20 transition-all duration-500 hover:translate-y-[-8px] hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)] cursor-pointer ${
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

      {/* Lightbox Modal */}
      {selectedCert && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-md animate-fade-in"
          onClick={() => setSelectedCert(null)}
        >
          <div 
            className="relative max-w-4xl w-full max-h-[90vh] glass-strong rounded-2xl border border-primary/30 overflow-auto animate-scale-in flex flex-col"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-4 right-4 z-10 p-2 glass-strong rounded-full border border-primary/30 text-foreground hover:text-primary hover:border-primary transition-all duration-300"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Certificate Image */}
            <div className="p-6 pb-4 flex-shrink-0">
              <img 
                src={selectedCert.image} 
                alt={selectedCert.name}
                className="w-full h-auto max-h-[55vh] object-contain rounded-xl"
              />
            </div>

            {/* Certificate Info */}
            <div className="p-6 pt-2 text-center flex-shrink-0 bg-background/50">
              <h3 className="text-2xl font-bold text-foreground mb-2 glow-text">
                {selectedCert.name}
              </h3>
              <p className="text-muted-foreground mb-4">
                {selectedCert.description}
              </p>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap items-center justify-center gap-3">
                <a
                  href={selectedCert.image}
                  download={`${selectedCert.name.replace(/\s+/g, '_')}_Certificate`}
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-primary hover:bg-primary/80 text-primary-foreground rounded-xl font-medium transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Download className="w-4 h-4" />
                  Download
                </a>
                
                {/* Share Buttons */}
                <a
                  href={`https://twitter.com/intent/tweet?text=Check out my ${selectedCert.name} certificate!&url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-[#1DA1F2]/20 hover:bg-[#1DA1F2]/30 text-[#1DA1F2] border border-[#1DA1F2]/30 rounded-xl transition-all duration-300 hover:scale-105"
                  title="Share on X/Twitter"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </a>
                
                <a
                  href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(window.location.href)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-[#0A66C2]/20 hover:bg-[#0A66C2]/30 text-[#0A66C2] border border-[#0A66C2]/30 rounded-xl transition-all duration-300 hover:scale-105"
                  title="Share on LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(`Check out my ${selectedCert.name} certificate! ${window.location.href}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-10 h-10 bg-[#25D366]/20 hover:bg-[#25D366]/30 text-[#25D366] border border-[#25D366]/30 rounded-xl transition-all duration-300 hover:scale-105"
                  title="Share on WhatsApp"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(window.location.href);
                    toast({
                      title: "Link copied!",
                      description: "Certificate link copied to clipboard",
                    });
                  }}
                  className="inline-flex items-center justify-center w-10 h-10 bg-muted hover:bg-muted/80 text-muted-foreground border border-border rounded-xl transition-all duration-300 hover:scale-105"
                  title="Copy link"
                >
                  <Share2 className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CertificationsSection;
