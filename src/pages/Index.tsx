import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { NeonBlueBackground } from "@/components/AnimatedBackground";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ServicesSection from "@/components/ServicesSection";
import ProjectsSection from "@/components/ProjectsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import CertificationsSection from "@/components/CertificationsSection";
import ContactSection from "@/components/ContactSection";
import CollaborationBanner from "@/components/CollaborationBanner";
import Footer from "@/components/Footer";
import LoadingScreen from "@/components/LoadingScreen";
import ChatbotWidget from "@/components/ChatbotWidget";
import SectionLighting from "@/components/SectionLighting";
import CustomCursor from "@/components/CustomCursor";

const Index = () => {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    document.documentElement.style.scrollBehavior = "smooth";
    return () => { document.documentElement.style.scrollBehavior = "auto"; };
  }, []);

  useEffect(() => {
    if (!isLoading && location.state?.scrollTo) {
      setTimeout(() => {
        const el = document.getElementById(location.state.scrollTo);
        if (el) el.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  }, [isLoading, location.state]);

  if (isLoading) {
    return <LoadingScreen onComplete={() => setIsLoading(false)} />;
  }

  return (
    <div className="relative min-h-screen">
      <CustomCursor />
      <Navbar />
      
      {/* Hero Section - with Spline background */}
      <HeroSection />
      
      {/* All other sections - with premium neon blue background */}
      <div className="relative">
        <NeonBlueBackground />
        <div className="relative z-10">
          <SectionLighting id="about" className="pt-8">
            <AboutSection />
          </SectionLighting>

          <SectionLighting id="skills" className="pt-8">
            <SkillsSection />
          </SectionLighting>
          
          <SectionLighting id="services" className="pt-8">
            <ServicesSection />
          </SectionLighting>
          
          <SectionLighting id="work" className="pt-8">
            <ProjectsSection />
          </SectionLighting>
          
          <SectionLighting id="reviews" className="pt-8">
            <TestimonialsSection />
          </SectionLighting>
          
          <SectionLighting id="certifications" className="pt-8">
            <CertificationsSection />
          </SectionLighting>
          
          <SectionLighting className="pt-8">
            <CollaborationBanner />
          </SectionLighting>
          
          <SectionLighting id="contact" className="pt-8">
            <ContactSection />
          </SectionLighting>
          
          <Footer />
        </div>
      </div>
      
      <ChatbotWidget />
    </div>
  );
};

export default Index;
