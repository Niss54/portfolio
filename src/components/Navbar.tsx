import { useState, useEffect } from "react";
import { Moon, Sun, Menu, X } from "lucide-react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    document.documentElement.classList.toggle("dark", newTheme === "dark");
  };

  const scrollToSection = (id: string) => {
    setMobileOpen(false);
    const element = document.getElementById(id);
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const navLinks = [
    { label: "About", id: "about" },
    { label: "Skills", id: "skills" },
    { label: "Services", id: "services" },
    { label: "Portfolio", id: "work" },
    { label: "Contact", id: "contact" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-4">
      <div
        className={`flex items-center justify-between w-full max-w-6xl px-6 py-3 rounded-2xl border transition-all duration-300 ${
          scrolled
            ? "bg-background/80 backdrop-blur-xl border-border/60 shadow-xl"
            : "bg-background/50 backdrop-blur-md border-border/30"
        } ${theme === "light" ? "bg-white/90 border-gray-200/60" : ""}`}
      >
        {/* Logo */}
        <button onClick={() => scrollToSection("home")} className="flex items-center gap-2 shrink-0">
          <img src={logo} alt="Logo" className="h-8 w-auto" />
        </button>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors rounded-lg hover:bg-muted/50"
            >
              {link.label}
            </button>
          ))}
        </div>

        {/* Right side */}
        <div className="hidden md:flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-lg hover:bg-muted/50 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="w-4 h-4 text-muted-foreground" />
            ) : (
              <Moon className="w-4 h-4 text-muted-foreground" />
            )}
          </button>
          <a
            href="/resume-nishant-maurya.pdf"
            download
            className="px-5 py-2 text-sm font-medium rounded-xl bg-foreground text-background hover:opacity-90 transition-opacity"
          >
            Download CV
          </a>
        </div>

        {/* Mobile toggle */}
        <button className="md:hidden text-foreground" onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="fixed inset-x-0 top-[72px] mx-4 p-4 rounded-2xl bg-background/95 backdrop-blur-xl border border-border/60 shadow-xl md:hidden flex flex-col gap-1 z-50">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className="px-4 py-3 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg text-left transition-colors"
            >
              {link.label}
            </button>
          ))}
          <div className="flex items-center gap-3 mt-2 pt-2 border-t border-border/30">
            <button onClick={toggleTheme} className="p-2 rounded-lg hover:bg-muted/50">
              {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
            <a
              href="/resume-nishant-maurya.pdf"
              download
              className="flex-1 text-center px-5 py-2 text-sm font-medium rounded-xl bg-foreground text-background"
            >
              Download CV
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
