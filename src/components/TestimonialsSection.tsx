import { useState, useEffect, useRef } from "react";
import { Star, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";

interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  timestamp: Date;
}

const TestimonialsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [formData, setFormData] = useState({ name: "", rating: 5, text: "" });
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.text.trim()) {
      toast({
        title: "Error",
        description: "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    const newReview: Review = {
      id: Date.now().toString(),
      name: formData.name,
      rating: formData.rating,
      text: formData.text,
      timestamp: new Date(),
    };

    setReviews([newReview, ...reviews]);
    setFormData({ name: "", rating: 5, text: "" });
    
    toast({
      title: "Thank you!",
      description: "Your review has been submitted.",
    });
  };

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      {/* Subtle Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Client Reviews
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`} />
          <p className={`text-muted-foreground text-lg ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            Share your experience working with me
          </p>
        </div>

        {/* Rating Form */}
        <div className={`max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
          <div className="glass-strong rounded-3xl p-8 border-2 border-primary/20 glow-border">
            <h3 className="text-2xl font-bold mb-6 glow-text">Leave a Review</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="text-sm font-medium mb-2 block">Your Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-background/50 border-2 border-primary/20 rounded-xl focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(189_100%_50%/0.4)] transition-all"
                  placeholder="Enter your name"
                />
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setFormData({ ...formData, rating: star })}
                      className="transition-transform hover:scale-110"
                    >
                      <Star
                        className={`w-8 h-8 ${
                          star <= formData.rating
                            ? 'fill-primary text-primary'
                            : 'text-muted-foreground'
                        }`}
                      />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Your Review</label>
                <textarea
                  value={formData.text}
                  onChange={(e) => setFormData({ ...formData, text: e.target.value })}
                  rows={4}
                  className="w-full px-4 py-3 bg-background/50 border-2 border-primary/20 rounded-xl focus:outline-none focus:border-primary focus:shadow-[0_0_20px_hsl(189_100%_50%/0.4)] transition-all resize-none"
                  placeholder="Share your experience..."
                />
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Submit Review
              </Button>
            </form>
          </div>
        </div>

        {/* Reviews Display */}
        {reviews.length > 0 && (
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8 glow-text">Recent Reviews</h3>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`glass-strong rounded-2xl p-6 border border-primary/20 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.3)] transition-all duration-300 ${
                  isVisible ? 'animate-slide-up' : 'opacity-0'
                }`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h4 className="text-lg font-semibold text-foreground">{review.name}</h4>
                    <p className="text-sm text-muted-foreground">
                      {review.timestamp.toLocaleDateString()}
                    </p>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-primary text-primary" />
                    ))}
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        )}

        {reviews.length === 0 && (
          <div className={`text-center ${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
            <p className="text-muted-foreground text-lg">
              Be the first to leave a review!
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
