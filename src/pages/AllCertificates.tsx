import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CertificateCard from "@/components/CertificateCard";
import { certifications } from "@/data/certifications";

const AllCertificates = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-28 pb-20 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <button
              onClick={() => navigate("/")}
              className="p-2 rounded-xl border border-primary/30 text-primary hover:bg-primary/10 transition-all"
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
