import { useEffect, useState } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import CustomCursor from "@/components/CustomCursor";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const AllProjects = lazy(() => import("./pages/AllProjects"));
const AllCertificates = lazy(() => import("./pages/AllCertificates"));
const AllReviews = lazy(() => import("./pages/AllReviews"));
const Blog = lazy(() => import("./pages/Blog"));
const AIServices = lazy(() => import("./pages/AIServices"));
const Services = lazy(() => import("./pages/Services"));
const Automation = lazy(() => import("./pages/Automation"));

const queryClient = new QueryClient();

const App = () => {
  const [showCustomCursor, setShowCustomCursor] = useState(false);

  useEffect(() => {
    const hasFinePointer = window.matchMedia("(pointer: fine)").matches;
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    setShowCustomCursor(hasFinePointer && !prefersReduced);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        {showCustomCursor && <CustomCursor />}
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Suspense fallback={<div className="h-screen w-screen flex items-center justify-center bg-black"><div className="w-8 h-8 border-4 border-[#00d9ff] border-t-transparent rounded-full animate-spin"></div></div>}>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/all-projects" element={<AllProjects />} />
              <Route path="/all-certificates" element={<AllCertificates />} />
              <Route path="/reviews" element={<AllReviews />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/ai-services" element={<AIServices />} />
              <Route path="/services" element={<Services />} />
              <Route path="/automation" element={<Automation />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
