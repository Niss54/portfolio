import { useState, useEffect, useRef } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import CertificateCard from "@/components/CertificateCard";

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

const certifications = [
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
                  image={cert.image}
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
