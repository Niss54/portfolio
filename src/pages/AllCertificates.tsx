import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Plasma from "@/components/Plasma";
import CertificateCard from "@/components/CertificateCard";
import { certifications } from "@/data/certifications";

const AllCertificates = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const isMobile = typeof window !== "undefined" && window.innerWidth < 768;

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Plasma
          color="#ff6b35"
          speed={0.6}
          direction="forward"
          scale={1.1}
          opacity={0.75}
          mouseInteractive={!isMobile}
        />
      </div>

      <div
        className="absolute inset-0 z-[1] pointer-events-none"
        style={{
          background:
            "linear-gradient(180deg, hsl(220 70% 10% / 0.72) 0%, hsl(220 70% 8% / 0.78) 50%, hsl(220 70% 7% / 0.84) 100%)",
        }}
      />

      <Navbar />
      <section className="relative z-10 pt-28 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <button
              onClick={() => navigate("/")}
              className="site-animated-chip p-2 rounded-xl text-primary hover:bg-primary/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold glow-text">All Certificates</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-3" />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {certifications.map((cert, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
              >
                <CertificateCard
                  name={cert.name}
                  frontImage={cert.frontImage}
                  backImage={cert.backImage}
                  description={cert.description}
                  isSpread={true}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default AllCertificates;
