import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Mail, MapPin, Phone, Linkedin, Instagram, Send, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100, "Name must be less than 100 characters"),
  email: z.string().trim().email("Invalid email address").max(255, "Email must be less than 255 characters"),
  message: z.string().trim().min(1, "Message is required").max(1000, "Message must be less than 1000 characters"),
});

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<Record<string, string>>({});
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
    
    const result = contactSchema.safeParse(formData);
    
    if (!result.success) {
      const newErrors: Record<string, string> = {};
      result.error.errors.forEach((err) => {
        if (err.path[0]) {
          newErrors[err.path[0].toString()] = err.message;
        }
      });
      setErrors(newErrors);
      return;
    }

    setErrors({});
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });
    setFormData({ name: "", email: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };

  const socialLinks = [
    {
      icon: Mail,
      label: "Gmail",
      href: "mailto:nishant@example.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/nishantmaurya",
      color: "from-blue-600 to-blue-400",
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://bit.ly/3LMyPJM",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: MessageCircle,
      label: "WhatsApp",
      href: "http://bit.ly/4oUt1MH",
      color: "from-green-500 to-emerald-400",
    },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-6" id="contact">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <p className={`text-primary text-lg font-medium mb-2 ${isVisible ? 'animate-slide-up' : 'opacity-0'}`}>
            Let's Work Together
          </p>
          <h2 className={`text-4xl md:text-5xl font-bold glow-text mb-4 ${isVisible ? 'animate-slide-up delay-100' : 'opacity-0'}`}>
            Get In Touch
          </h2>
          <div className={`w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto mb-6 ${isVisible ? 'animate-slide-up delay-200' : 'opacity-0'}`} />
          <p className={`text-muted-foreground text-lg ${isVisible ? 'animate-slide-up delay-300' : 'opacity-0'}`}>
            Have a project in mind? Let's create something amazing together
          </p>
        </div>

        {/* Social Links Bar */}
        <div className={`flex flex-wrap justify-center gap-4 mb-12 ${isVisible ? 'animate-slide-up delay-400' : 'opacity-0'}`}>
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative"
            >
              <div className={`absolute inset-0 bg-gradient-to-r ${social.color} blur-xl opacity-0 group-hover:opacity-70 transition-opacity rounded-full`} />
              <div className="relative glass-strong p-4 rounded-full border border-primary/20 hover:scale-110 transition-all duration-300">
                <social.icon className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
              </div>
            </a>
          ))}
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form with Glowing Inputs */}
          <div className={`glass-strong rounded-3xl p-8 border-2 border-primary/20 glow-border ${isVisible ? 'animate-slide-up delay-500' : 'opacity-0'}`}>
            <h3 className="text-2xl font-bold mb-6 glow-text">Send a Message</h3>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Mail className="w-4 h-4 text-primary" />
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background/50 border-2 rounded-xl focus:outline-none transition-all ${
                    errors.name 
                      ? 'border-red-500' 
                      : 'border-primary/20 focus:border-primary focus:shadow-[0_0_20px_hsl(189_100%_50%/0.4)]'
                  }`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <Send className="w-4 h-4 text-primary" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 bg-background/50 border-2 rounded-xl focus:outline-none transition-all ${
                    errors.email 
                      ? 'border-red-500' 
                      : 'border-primary/20 focus:border-primary focus:shadow-[0_0_20px_hsl(189_100%_50%/0.4)]'
                  }`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              <div>
                <label className="flex items-center gap-2 text-sm font-medium mb-2">
                  <MessageCircle className="w-4 h-4 text-primary" />
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-background/50 border-2 rounded-xl focus:outline-none transition-all resize-none ${
                    errors.message 
                      ? 'border-red-500' 
                      : 'border-primary/20 focus:border-primary focus:shadow-[0_0_20px_hsl(189_100%_50%/0.4)]'
                  }`}
                  placeholder="Tell me about your project..."
                />
                {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
              </div>

              <Button type="submit" variant="hero" size="lg" className="w-full">
                <Send className="w-5 h-5 mr-2" />
                Send Message
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className={`space-y-6 ${isVisible ? 'animate-slide-up delay-600' : 'opacity-0'}`}>
            {/* Quick Contact Cards */}
            <div className="space-y-4">
              <div className="glass-strong rounded-2xl p-5 border border-primary/20 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                    <Mail className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Email</h4>
                    <p className="text-foreground">Nishantma05@gmail.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-5 border border-primary/20 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-secondary to-primary rounded-xl">
                    <Phone className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Phone</h4>
                    <p className="text-foreground">+91 8840301998</p>
                  </div>
                </div>
              </div>

              <div className="glass-strong rounded-2xl p-5 border border-primary/20 hover:shadow-[0_0_30px_hsl(189_100%_50%/0.3)] transition-all duration-300">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-gradient-to-br from-primary to-secondary rounded-xl">
                    <MapPin className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-muted-foreground">Location</h4>
                    <p className="text-foreground">Lucknow, UP, India</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
