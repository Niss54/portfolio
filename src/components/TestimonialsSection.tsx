import { useState, useEffect, useRef, useMemo } from "react";
import { Star, Send, Loader2, Upload, Edit2, X, CheckCircle, Camera, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { Link } from "react-router-dom";

interface Review {
  id: string;
  name: string;
  role: string | null;
  rating: number;
  message: string;
  created_at: string;
  image_url: string | null;
  edit_token: string | null;
}

type TestimonialsSectionProps = {
  mode?: "preview" | "full";
};

const TestimonialsSection = ({ mode = "full" }: TestimonialsSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [reviews, setReviews] = useState<Review[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({ name: "", role: "", rating: 5, message: "" });
  const [profileImage, setProfileImage] = useState<File | null>(null);
  const [profilePreview, setProfilePreview] = useState<string | null>(null);
  const [editingReviewId, setEditingReviewId] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { toast } = useToast();

  // Get user's editable review IDs from localStorage
  const getEditableIds = (): Record<string, string> => {
    try {
      return JSON.parse(localStorage.getItem("my_review_tokens") || "{}");
    } catch { return {}; }
  };

  const saveEditableId = (reviewId: string, token: string) => {
    const ids = getEditableIds();
    ids[reviewId] = token;
    localStorage.setItem("my_review_tokens", JSON.stringify(ids));
  };

  // Overall rating calculation
  const overallRating = useMemo(() => {
    if (reviews.length === 0) return { avg: 0, total: 0, distribution: [0, 0, 0, 0, 0] };
    const distribution = [0, 0, 0, 0, 0];
    let sum = 0;
    reviews.forEach(r => {
      sum += r.rating;
      distribution[r.rating - 1]++;
    });
    return { avg: parseFloat((sum / reviews.length).toFixed(1)), total: reviews.length, distribution };
  }, [reviews]);

  const titleRating = reviews.length > 0 ? `${overallRating.avg.toFixed(1)}★` : "No ratings yet";

  useEffect(() => {
    const fetchReviews = async () => {
      const { data, error } = await supabase
        .from('reviews')
        .select('*')
        .order('created_at', { ascending: false });
      if (!error) setReviews(data || []);
      setIsLoading(false);
    };
    fetchReviews();

    const channel = supabase
      .channel('reviews-realtime')
      .on('postgres_changes', { event: 'INSERT', schema: 'public', table: 'reviews' },
        (payload) => setReviews((cur) => [payload.new as Review, ...cur])
      )
      .on('postgres_changes', { event: 'UPDATE', schema: 'public', table: 'reviews' },
        (payload) => setReviews((cur) => cur.map(r => r.id === (payload.new as Review).id ? payload.new as Review : r))
      )
      .on('postgres_changes', { event: 'DELETE', schema: 'public', table: 'reviews' },
        (payload) => setReviews((cur) => cur.filter(r => r.id !== payload.old.id))
      )
      .subscribe();
    return () => { supabase.removeChannel(channel); };
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.2 });
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        toast({ title: "Error", description: "Image must be under 2MB", variant: "destructive" });
        return;
      }
      setProfileImage(file);
      setProfilePreview(URL.createObjectURL(file));
    }
  };

  const uploadImage = async (file: File): Promise<string | null> => {
    const ext = file.name.split('.').pop();
    const path = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;
    const { error } = await supabase.storage.from('review-images').upload(path, file);
    if (error) { console.error('Upload error:', error); return null; }
    const { data } = supabase.storage.from('review-images').getPublicUrl(path);
    return data.publicUrl;
  };

  const startEdit = (review: Review) => {
    setEditingReviewId(review.id);
    setFormData({ name: review.name, role: review.role || "", rating: review.rating, message: review.message });
    if (review.image_url) setProfilePreview(review.image_url);
    sectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const cancelEdit = () => {
    setEditingReviewId(null);
    setFormData({ name: "", role: "", rating: 5, message: "" });
    setProfileImage(null);
    setProfilePreview(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.message.trim()) {
      toast({ title: "Error", description: "Please fill in your name and review", variant: "destructive" });
      return;
    }

    setIsSubmitting(true);
    let imageUrl: string | null = null;
    if (profileImage) imageUrl = await uploadImage(profileImage);

    if (editingReviewId) {
      const tokens = getEditableIds();
      const { error } = await supabase
        .from('reviews')
        .update({
          name: formData.name.trim(),
          role: formData.role.trim() || null,
          rating: formData.rating,
          message: formData.message.trim(),
          ...(imageUrl ? { image_url: imageUrl } : {}),
        })
        .eq('id', editingReviewId)
        .eq('edit_token', tokens[editingReviewId]);

      setIsSubmitting(false);
      if (error) {
        toast({ title: "Error", description: "Failed to update review.", variant: "destructive" });
        return;
      }
      cancelEdit();
      toast({ title: "Updated! ✨", description: "Your review has been updated." });
    } else {
      const { data, error } = await supabase
        .from('reviews')
        .insert({
          name: formData.name.trim(),
          role: formData.role.trim() || null,
          rating: formData.rating,
          message: formData.message.trim(),
          image_url: imageUrl,
        })
        .select()
        .single();

      setIsSubmitting(false);
      if (error) {
        toast({ title: "Error", description: "Failed to submit review.", variant: "destructive" });
        return;
      }
      if (data) saveEditableId(data.id, data.edit_token || "");
      setFormData({ name: "", role: "", rating: 5, message: "" });
      setProfileImage(null);
      setProfilePreview(null);
      toast({ title: "Thank you! 🎉", description: "Your review has been submitted." });
    }
  };

  const editableIds = getEditableIds();

  if (mode === "preview") {
    return (
      <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />

        <div className="container mx-auto relative">
          <div className="text-center mb-12">
            <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
              Client Reviews
            </h2>
            <p className={`text-xl md:text-2xl font-semibold text-primary ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
              {titleRating}
            </p>
            <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto my-6 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`} />
            <p className={`text-muted-foreground text-lg ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
              {reviews.length > 0
                ? `Live average based on ${overallRating.total} review${overallRating.total !== 1 ? 's' : ''}`
                : 'Be the first one to leave a review.'}
            </p>
          </div>

          <div className={`max-w-3xl mx-auto ${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
            <div className="glass-strong site-animated-surface site-animated-surface-2 rounded-3xl p-8 md:p-10 border-2 border-primary/20 glow-border text-center space-y-6">
              <div>
                <div className="text-5xl md:text-6xl font-bold glow-text mb-3">
                  {reviews.length > 0 ? overallRating.avg.toFixed(1) : "--"}
                </div>
                <div className="flex justify-center gap-1 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star
                      key={star}
                      className={`w-6 h-6 ${star <= Math.round(overallRating.avg) ? 'fill-primary text-primary' : 'text-muted-foreground/40'}`}
                    />
                  ))}
                </div>
                <p className="text-muted-foreground">
                  {reviews.length > 0
                    ? `Realtime score updates automatically when a new review is submitted.`
                    : 'Submit a review to start the live rating.'}
                </p>
              </div>

              <Button variant="hero" size="xl" asChild>
                <Link to="/reviews">
                  Open Full Reviews Page
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section ref={sectionRef} className="py-20 px-6 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-primary/5 blur-[120px] rounded-full" />

      <div className="container mx-auto relative">
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Client Reviews {reviews.length > 0 ? `• ${titleRating}` : ""}
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`} />
          <p className={`text-muted-foreground text-lg ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            Share your experience working with me
          </p>
        </div>

        {/* Overall Rating */}
        {reviews.length > 0 && (
          <div className={`max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`}>
            <div className="glass-strong site-animated-surface rounded-3xl p-8 border border-primary/20 text-center">
              <div className="text-6xl font-bold glow-text mb-2">{overallRating.avg}</div>
              <div className="flex justify-center gap-1 mb-2">
                {[1, 2, 3, 4, 5].map(s => (
                  <Star key={s} className={`w-6 h-6 ${s <= Math.round(overallRating.avg) ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-4">Based on {overallRating.total} review{overallRating.total !== 1 ? 's' : ''}</p>
              <div className="space-y-2 max-w-xs mx-auto">
                {[5, 4, 3, 2, 1].map(star => {
                  const count = overallRating.distribution[star - 1];
                  const pct = overallRating.total > 0 ? (count / overallRating.total) * 100 : 0;
                  return (
                    <div key={star} className="flex items-center gap-2 text-sm">
                      <span className="w-3 text-muted-foreground">{star}</span>
                      <Star className="w-3 h-3 fill-primary text-primary" />
                      <div className="flex-1 h-2 bg-background/50 rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-primary to-secondary rounded-full transition-all duration-700" style={{ width: `${pct}%` }} />
                      </div>
                      <span className="w-6 text-right text-muted-foreground">{count}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}

        {/* Rating Form */}
        <div className={`max-w-2xl mx-auto mb-12 ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
          <div className="glass-strong site-animated-surface site-animated-surface-2 rounded-3xl p-8 border-2 border-primary/20 glow-border">
            <h3 className="text-2xl font-bold mb-6 glow-text">
              {editingReviewId ? 'Edit Your Review' : 'Leave a Review'}
            </h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Profile Image Upload */}
              <div className="flex justify-center">
                <div
                  className="relative w-20 h-20 rounded-full border-2 border-primary/30 overflow-hidden cursor-pointer group"
                  onClick={() => fileInputRef.current?.click()}
                >
                  {profilePreview ? (
                    <img src={profilePreview} alt="Profile" className="w-full h-full object-cover" />
                  ) : (
                    <div className="w-full h-full bg-background/50 flex items-center justify-center">
                      <Camera className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <Upload className="w-5 h-5 text-foreground" />
                  </div>
                  <input ref={fileInputRef} type="file" accept="image/*" onChange={handleImageChange} className="hidden" />
                </div>
              </div>
              <p className="text-center text-xs text-muted-foreground -mt-4">Upload your photo (optional)</p>

              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="site-animated-input w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                    placeholder="Enter your name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="text-sm font-medium mb-2 block">Your Role (Optional)</label>
                  <input
                    type="text"
                    value={formData.role}
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="site-animated-input w-full px-4 py-3 rounded-xl focus:outline-none transition-all"
                    placeholder="e.g. CEO, Developer, Student"
                    disabled={isSubmitting}
                  />
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Rating</label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button key={star} type="button" onClick={() => setFormData({ ...formData, rating: star })} className="transition-transform hover:scale-110" disabled={isSubmitting}>
                      <Star className={`w-8 h-8 ${star <= formData.rating ? 'fill-primary text-primary' : 'text-muted-foreground'}`} />
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="text-sm font-medium mb-2 block">Your Review *</label>
                <textarea
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  rows={4}
                  className="site-animated-input w-full px-4 py-3 rounded-xl focus:outline-none transition-all resize-none"
                  placeholder="Share your experience..."
                  disabled={isSubmitting}
                />
              </div>

              <div className="flex gap-3">
                <Button type="submit" variant="hero" size="lg" className="flex-1" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <><Loader2 className="w-5 h-5 mr-2 animate-spin" />Submitting...</>
                  ) : editingReviewId ? (
                    <><Edit2 className="w-5 h-5 mr-2" />Update Review</>
                  ) : (
                    <><Send className="w-5 h-5 mr-2" />Submit Review</>
                  )}
                </Button>
                {editingReviewId && (
                  <Button type="button" variant="hero-outline" size="lg" onClick={cancelEdit}>
                    <X className="w-5 h-5" />
                  </Button>
                )}
              </div>
            </form>
          </div>
        </div>

        {/* Reviews Display */}
        {isLoading ? (
          <div className="flex justify-center py-12">
            <Loader2 className="w-8 h-8 animate-spin text-primary" />
          </div>
        ) : reviews.length > 0 ? (
          <div className="max-w-4xl mx-auto space-y-6">
            <h3 className="text-2xl font-bold text-center mb-8 glow-text">Recent Reviews</h3>
            {reviews.map((review, index) => (
              <div
                key={review.id}
                className={`glass-strong site-animated-surface rounded-2xl p-6 border border-primary/20 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.3)] transition-all duration-300 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}
                style={{ animationDelay: `${400 + index * 100}ms` }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-start gap-4">
                    {/* Profile Image */}
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-primary/30 flex-shrink-0">
                      {review.image_url ? (
                        <img src={review.image_url} alt={review.name} className="w-full h-full object-cover" />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-primary/30 to-secondary/30 flex items-center justify-center text-lg font-bold text-primary">
                          {review.name.charAt(0).toUpperCase()}
                        </div>
                      )}
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h4 className="text-lg font-semibold text-foreground">{review.name}</h4>
                        <span className="site-animated-chip inline-flex items-center gap-1 text-xs text-primary px-2 py-0.5 rounded-full">
                          <CheckCircle className="w-3 h-3" /> Verified
                        </span>
                      </div>
                      {review.role && <p className="text-sm text-primary font-medium">{review.role}</p>}
                      <p className="text-sm text-muted-foreground">{new Date(review.created_at).toLocaleDateString()}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-5 h-5 ${i < review.rating ? 'fill-primary text-primary' : 'text-muted-foreground/30'}`} />
                      ))}
                    </div>
                    {editableIds[review.id] && (
                      <button onClick={() => startEdit(review)} className="ml-2 p-1.5 rounded-lg hover:bg-primary/10 transition-colors" title="Edit your review">
                        <Edit2 className="w-4 h-4 text-primary" />
                      </button>
                    )}
                  </div>
                </div>
                <p className="text-foreground leading-relaxed">{review.message}</p>
              </div>
            ))}
          </div>
        ) : (
          <div className={`text-center ${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
            <p className="text-muted-foreground text-lg">Be the first to leave a review!</p>
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
