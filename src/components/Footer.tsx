import { Github, Linkedin, Instagram, Youtube, ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://linkedin.com/in/nishantmaurya", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/nishantmaurya", label: "GitHub" },
    { icon: Instagram, href: "https://instagram.com/nishantmaurya", label: "Instagram" },
    { icon: Youtube, href: "https://youtube.com/@nishantmaurya", label: "YouTube" },
  ];

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <footer className="relative py-12 px-6 border-t border-primary/20 overflow-hidden">
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[100px] rounded-full" />

        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <img src={logo} alt="Niss Visuals" className="h-12 w-auto" />
              <p className="text-muted-foreground">
                Building digital experiences that make a difference. Developer, Engineer, and Founder.
              </p>
            </div>

            {/* Quick Navigation */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Quick Links</h4>
              <nav className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors w-fit relative group"
                  >
                    {link.name}
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="flex gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative p-3 glass-strong rounded-xl border border-primary/20 hover:border-primary/50 transition-all duration-300"
                    aria-label={social.label}
                  >
                    <div className="absolute inset-0 bg-primary/0 group-hover:bg-primary/10 rounded-xl transition-colors" />
                    <social.icon className="relative w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:scale-110 transition-all" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-sm">
              © {new Date().getFullYear()} Nishant Maurya. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Designed & Built with <span className="text-primary">♥</span> by Nishant
            </p>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 glass-strong rounded-full border-2 border-primary/30 hover:border-primary hover:shadow-[0_0_30px_hsl(189_100%_50%/0.5)] transition-all duration-300 z-50 group animate-slide-up"
          aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6 text-primary group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  );
};

export default Footer;
