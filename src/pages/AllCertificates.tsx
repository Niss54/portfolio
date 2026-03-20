import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import GradientBlinds from "@/components/GradientBlinds";
import CertificateCard from "@/components/CertificateCard";
import { certifications } from "@/data/certifications";

const AllCertificates = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="relative min-h-screen bg-black text-foreground">
      <div className="fixed inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 pointer-events-auto">
          <GradientBlinds
            gradientColors={['#ff6b35', '#ff1493', '#00bfff']}
            angle={45}
            noise={0.15}
            blindCount={20}
            blindMinWidth={60}
            mouseDampening={0.2}
            mirrorGradient={false}
            spotlightRadius={0.6}
            spotlightSoftness={1.2}
            spotlightOpacity={0.8}
            distortAmount={0.3}
            shineDirection="left"
            mixBlendMode="screen"
            dpr={1}
          />
        </div>
      </div>

      <div className="relative z-10 overflow-hidden">
        <Navbar />
        <section className="relative pt-28 pb-20 px-6">
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
    </div>
  );
};

export default AllCertificates;
