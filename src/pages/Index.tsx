import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import LoadingScreen from "@/components/LoadingScreen";
import SectionLighting from "@/components/SectionLighting";
import { lazy, Suspense } from "react";

const AboutSection = lazy(() => import("@/components/AboutSection"));
const SkillsSection = lazy(() => import("@/components/SkillsSection"));
const ServicesSection = lazy(() => import("@/components/ServicesSection"));
const ProjectsSection = lazy(() => import("@/components/ProjectsSection"));
const TestimonialsSection = lazy(() => import("@/components/TestimonialsSection"));
const CertificationsSection = lazy(() => import("@/components/CertificationsSection"));
const ContactSection = lazy(() => import("@/components/ContactSection"));
const CollaborationBanner = lazy(() => import("@/components/CollaborationBanner"));
const Footer = lazy(() => import("@/components/Footer"));
const ChatbotWidget = lazy(() => import("@/components/ChatbotWidget"));

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

  return (
    <>
      {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      <div className="relative min-h-screen">
        <Navbar />

        <div className="relative z-10">
          <HeroSection />

        <div className="relative bg-black">
          <Suspense fallback={<div className="h-32 flex items-center justify-center text-white/50">Loading section...</div>}>
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
              <TestimonialsSection mode="preview" />
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
          </Suspense>
        </div>
      </div>

      <Suspense fallback={null}>
        <ChatbotWidget />
      </Suspense>
    </div>
    </>
  );
};

export default Index;
