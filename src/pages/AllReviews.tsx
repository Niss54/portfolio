import { useEffect } from "react";
import { ArrowLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import TestimonialsSection from "@/components/TestimonialsSection";

const AllReviews = () => {
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <section className="pt-28 px-6">
        <div className="container mx-auto">
          <div className="flex items-center gap-4 mb-4">
            <button
              onClick={() => navigate("/")}
              className="site-animated-chip p-2 rounded-xl text-primary hover:bg-primary/10 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-4xl md:text-5xl font-bold glow-text">All Reviews</h1>
              <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mt-3" />
            </div>
          </div>
        </div>
      </section>
      <TestimonialsSection mode="full" />
    </div>
  );
};

export default AllReviews;