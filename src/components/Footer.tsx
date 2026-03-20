import { ArrowUp } from "lucide-react";
import { useState, useEffect } from "react";
import logo from "@/assets/logo.png";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const Footer = () => {
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");
  const [isTermsOpen, setIsTermsOpen] = useState(false);
  const [isPrivacyOpen, setIsPrivacyOpen] = useState(false);
  const [isCookiesOpen, setIsCookiesOpen] = useState(false);
  const termsOfServiceContent = `Terms of Service
Last Updated: March 18, 2026

1. Agreement to Terms
By accessing and using the website https://www.nissh.info ("Website"), you agree to be bound by these Terms of Service ("Terms"). If you do not agree, you must not use this Website.

These Terms constitute a legally binding agreement between you and Nishant Maurya, operating as Nissh.

2. Services Offered
We provide freelance and product-based digital services including full-stack web development, AI and automation solutions, mobile app development, API development, website design, optimization, and technical consulting.

All project details, timelines, and deliverables are defined in separate project agreements.

3. Project Engagement

3.1 Proposal and Acceptance
A project begins only after mutual agreement through written confirmation such as email or message.

3.2 Scope of Work
All work is defined in the agreed project scope. Any additional features or changes may result in additional charges and revised timelines.

3.3 Client Responsibilities
Clients agree to provide accurate requirements and materials, respond within three business days, give timely feedback, ensure they have rights to all provided content, and complete payments as agreed.

Delays from the client side may result in changes to the project timeline.

4. Payment Terms

4.1 Pricing
Project pricing depends on scope, complexity, and requirements.

4.2 Payment Structure
Typical payment structures include:
Small projects: 50 percent upfront and 50 percent upon completion
Medium projects: 40 percent upfront, 30 percent mid-stage, and 30 percent upon completion
Large projects: milestone-based payments
Hourly work: weekly or bi-weekly billing

4.3 Payment Methods
We accept payments via international methods such as bank transfer, payment gateways, or other agreed options.
All payments must be made in United States Dollars (USD) unless otherwise agreed.

4.4 Late Payments
Payments are due within 7 days of invoice. Late payments may result in suspension of work, a 5 percent monthly late fee, or project termination after 14 days.

4.5 Refund Policy
Refunds depend on the stage of the project and agreed terms. Completed work and initial deposits are non-refundable.

4.6 Invoices and Taxes
Invoices will be provided for all payments. Any applicable taxes will be handled as per relevant laws.

5. Intellectual Property Rights

5.1 Client Ownership
Upon full payment, clients receive ownership of final deliverables, excluding third-party tools, libraries, reusable modules, and internal systems.

5.2 Portfolio Rights
We reserve the right to showcase completed work in our portfolio unless restricted by a non-disclosure agreement.

5.3 Client Materials
Clients grant permission to use provided materials solely for project execution.

6. Confidentiality
All client data and project details are treated as confidential. Non-disclosure agreements can be signed if required.

7. Data and Privacy
We may collect basic client information necessary for project execution. We do not sell or misuse personal data and use it only for service delivery.

8. AI Services Disclaimer
AI-based outputs may not always be fully accurate. Clients are responsible for reviewing and validating results before use. We are not liable for decisions made based on AI-generated outputs.

9. Warranties

9.1 Quality Assurance
We ensure that work meets agreed requirements, follows industry standards, and includes a 30-day bug fix period for issues related to our work.

9.2 Limitations
We do not guarantee business outcomes, revenue growth, search rankings, or compatibility with future technologies.

10. Hosting and Third-Party Services
We are not responsible for hosting issues, server downtime, or third-party services unless explicitly included in the agreement.

11. Limitation of Liability
Our total liability is limited to the amount paid for the specific project. We are not responsible for indirect damages or data loss.

12. Project Cancellation

12.1 Client Cancellation
Clients may cancel projects at any time. Payment for completed work is required and advance payments are non-refundable.

12.2 Termination Rights
We may terminate a project if payments are delayed, terms are violated, requests are illegal or unethical, or communication prevents progress.

13. Maintenance and Support
Support beyond the initial 30-day period is chargeable unless included in a separate maintenance agreement.

14. Website Usage Rules
Users must not use the website for illegal purposes, attempt unauthorized access, copy content without permission, or upload harmful software.

15. Indemnification
You agree to hold us harmless from any claims or damages resulting from misuse of services or violation of these Terms.

16. Dispute Resolution
Disputes will first be resolved through mutual discussion. Legal matters will be governed by the laws of India, with jurisdiction in Lucknow, Uttar Pradesh.

17. Changes to Terms
We reserve the right to update these Terms at any time. Continued use of the website indicates acceptance of the updated Terms.

18. Severability
If any provision is found invalid, the remaining provisions will remain in effect.

19. Contact Information
Name: Nishant Maurya
Website: https://www.nissh.info
Email: nishantma05@gmail.com

By using our services, you agree to these Terms of Service.`;

  const privacyPolicyContent = `Privacy Policy
Last Updated: March 18, 2026

1. Introduction
Welcome to Nissh, operated by Nishant Maurya. We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website https://www.nissh.info.

By using this website, you agree to the terms of this Privacy Policy. If you do not agree, please do not use the website.

2. Information We Collect

2.1 Personal Information
We may collect personal information that you voluntarily provide when you:

Fill out contact forms
Request a consultation or service
Communicate with us through the website

This may include:

Name
Email address
Phone number
Project details and requirements
Any other information you choose to provide

2.2 Automatically Collected Information
When you visit our website, certain information may be collected automatically, such as:

IP address
Browser type and version
Operating system
Pages visited and time spent
Device type
Approximate location (city or country level)

3. How We Use Your Information
We use the collected information to:

Respond to inquiries and provide support
Communicate regarding projects and services
Improve website performance and user experience
Analyze traffic and usage patterns
Maintain security and prevent misuse
Comply with legal obligations

4. Cookies and Tracking Technologies
We use cookies and similar technologies to enhance user experience. Cookies are small files stored on your device.

Types of cookies we use include:

Essential cookies for website functionality
Analytics cookies to understand usage
Preference cookies to remember settings

You can manage or disable cookies through your browser settings.

5. Third-Party Services
We may use third-party services such as:

Analytics tools (for traffic analysis)
Hosting providers
Communication tools

These services may collect and process data according to their own privacy policies.

6. Data Security
We take appropriate measures to protect your information, including:

Secure HTTPS connections
Reliable hosting infrastructure
Limited access to sensitive data

However, no online system is completely secure, and we cannot guarantee absolute security.

7. Data Retention
We retain personal data only as long as necessary for service purposes or legal requirements.

8. Your Rights
Depending on applicable laws, you may have the right to:

Access your data
Correct inaccurate data
Request deletion of your data
Restrict or object to processing

To exercise your rights, contact us using the details below.

9. International Data Transfers
Your data may be processed in different locations depending on services used. We ensure reasonable safeguards are applied.

10. Children's Privacy
This website is not intended for individuals under the age of 13. We do not knowingly collect data from children.

11. Changes to This Policy
We may update this Privacy Policy from time to time. Updated versions will be posted on this page.

12. Contact Information
Name: Nishant Maurya
Website: https://www.nissh.info
Email: nishantma05@gmail.com

By using this website, you agree to this Privacy Policy.`;

  const cookiesContent = `# Cookies Policy

Last Updated: March 18, 2026

We use cookies and similar technologies to improve user experience, analyze traffic, and support core website functionality.

What We Use Cookies For

* Basic site functionality
* Performance and analytics
* Remembering user preferences

 Your Choice

You can control or disable cookies through your browser settings. Disabling some cookies may affect website functionality.

By continuing to use this website, you consent to the use of cookies as described above.`;

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 500);
    };
    
    // Sync with theme changes
    const observer = new MutationObserver(() => {
      setTheme(document.documentElement.classList.contains('dark') ? 'dark' : 'light');
    });
    
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class']
    });
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      observer.disconnect();
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const navLinks = [
    { name: "Home", href: "#" },
    { name: "About", href: "#about" },
    { name: "Work", href: "#work" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <footer className={`relative py-12 px-6 border-t overflow-hidden transition-all duration-300 ${
        theme === "light" ? "bg-white border-gray-200" : "border-primary/20"
      }`}>
        {/* Subtle Background Glow */}
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[600px] h-[200px] bg-primary/5 blur-[100px] rounded-full" />

        <div className="container mx-auto relative">
          <div className="grid md:grid-cols-2 lg:[grid-template-columns:minmax(220px,1.3fr)_auto_auto_auto_auto_minmax(200px,1fr)] gap-y-12 gap-x-8 lg:gap-x-14 mb-12 items-start">
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

            {/* Company Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Company</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="https://internaii.netlify.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  InternAI
                </a>
                <p className="text-muted-foreground">limpio</p>
                <a
                  href="/all-projects"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  Project
                </a>
                <a
                  href="/blog"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  Blog
                </a>
              </div>
            </div>

            {/* Resources Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Resources</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="/services#faq"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  FAQ
                </a>
                <a
                  href="/ai-services#automation"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  Tech Stack
                </a>
                <a
                  href="/reviews"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  Testimonials
                </a>
                <a
                  href="/ai-services#pricing"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  Pricing
                </a>
              </div>
            </div>

            {/* Services Links */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-foreground">Services</h4>
              <div className="flex flex-col gap-2">
                <a
                  href="/ai-services#ai-integration"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  AI Integration
                </a>
                <a
                  href="/services"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  Web Development
                </a>
                <a
                  href="/automation"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  Automation
                </a>
                <a
                  href="/ai-services#case-studies"
                  className="text-muted-foreground hover:text-primary transition-colors w-fit"
                >
                  Case Studies
                </a>
              </div>
            </div>

            {/* Connect */}
            <div className="space-y-4 md:justify-self-end">
              <h4 className="text-lg font-semibold text-foreground">Connect</h4>
              <div className="grid grid-cols-4 gap-3 w-fit md:ml-auto">
                <a
                  href="https://bit.ly/4pubDys"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                  className="w-10 h-10 flex items-center justify-center glass rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <svg className="w-5 h-5" style={{ color: "#1877F2" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </a>
                <a
                  href="https://bit.ly/3LMyPJM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-10 h-10 flex items-center justify-center glass rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <svg className="w-5 h-5" style={{ color: "#E4405F" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/in/niss-visuals"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-10 h-10 flex items-center justify-center glass rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <svg className="w-5 h-5" style={{ color: "#0A66C2" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="http://bit.ly/4oUt1MH"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                  className="w-10 h-10 flex items-center justify-center glass rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <svg className="w-5 h-5" style={{ color: "#25D366" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/Niss54"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                  className="w-10 h-10 flex items-center justify-center glass rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <svg className="w-5 h-5" style={{ color: "#F5F5F5" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a
                  href="https://www.youtube.com/@Niss.visuals"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube"
                  className="w-10 h-10 flex items-center justify-center glass rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <svg className="w-5 h-5" style={{ color: "#FF0000" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                  </svg>
                </a>
                <a
                  href="https://t.me/Nissvisuals"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Telegram"
                  className="w-10 h-10 flex items-center justify-center glass rounded-lg border border-primary/20 hover:border-primary/50 hover:bg-primary/10 transition-all"
                >
                  <svg className="w-5 h-5" style={{ color: "#26A5E4" }} fill="currentColor" viewBox="0 0 24 24">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="pt-8 border-t border-primary/10 flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="max-w-3xl text-center md:text-left space-y-2">
              <p className="text-xs text-muted-foreground leading-relaxed">
                By using this website, you agree to our Terms of Service. Services are delivered based on agreed project scope and payment milestones, client data is handled responsibly, and our liability is limited to the amount paid for the project under applicable Indian law.
              </p>
              <p className="text-muted-foreground text-sm">
                © {new Date().getFullYear()} Nishant Maurya. All rights reserved.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex items-center gap-4 text-sm">
                <a
                  href="#terms-of-service"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsTermsOpen(true);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                >
                  Terms of Service
                </a>
                <a
                  href="#privacy-policy"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsPrivacyOpen(true);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                >
                  Privacy Policy
                </a>
                <a
                  href="#cookies"
                  onClick={(event) => {
                    event.preventDefault();
                    setIsCookiesOpen(true);
                  }}
                  className="text-muted-foreground hover:text-primary transition-colors underline underline-offset-4"
                >
                  Cookies
                </a>
              </div>
              <p className="text-sm text-muted-foreground">
                Designed & Built with <span className="text-primary">♥</span> by Nishant
              </p>
            </div>
          </div>
        </div>
      </footer>

      <Dialog open={isTermsOpen} onOpenChange={setIsTermsOpen}>
        <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden border border-primary/30 bg-black text-white p-0 sm:rounded-2xl">
          <DialogHeader className="border-b border-white/10 px-6 py-4 text-left">
            <div className="flex items-center justify-between gap-3">
              <DialogTitle className="text-xl text-white">Terms of Service</DialogTitle>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => setIsTermsOpen(false)}
                  className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
                >
                  Back
                </button>
                <button
                  type="button"
                  onClick={() => setIsTermsOpen(false)}
                  className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          </DialogHeader>
          <div className="max-h-[calc(90vh-76px)] overflow-y-auto px-6 py-5">
            <pre className="whitespace-pre-wrap text-sm leading-7 font-sans text-white/90">{termsOfServiceContent}</pre>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isCookiesOpen} onOpenChange={setIsCookiesOpen}>
        <DialogContent className="w-[95vw] max-w-3xl max-h-[85vh] overflow-hidden border border-primary/30 bg-black text-white p-0 sm:rounded-2xl">
          <DialogHeader className="border-b border-white/10 px-6 py-4 text-left">
            <div className="flex items-center justify-between gap-3">
              <DialogTitle className="text-xl text-white">Cookies</DialogTitle>
              <button
                type="button"
                onClick={() => setIsCookiesOpen(false)}
                className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </DialogHeader>
          <div className="max-h-[calc(85vh-76px)] overflow-y-auto px-6 py-5">
            <pre className="whitespace-pre-wrap text-sm leading-7 font-sans text-white/90">{cookiesContent}</pre>
          </div>
        </DialogContent>
      </Dialog>

      <Dialog open={isPrivacyOpen} onOpenChange={setIsPrivacyOpen}>
        <DialogContent className="w-[95vw] max-w-5xl max-h-[90vh] overflow-hidden border border-primary/30 bg-black text-white p-0 sm:rounded-2xl">
          <DialogHeader className="border-b border-white/10 px-6 py-4 text-left">
            <div className="flex items-center justify-between gap-3">
              <DialogTitle className="text-xl text-white">Privacy Policy</DialogTitle>
              <button
                type="button"
                onClick={() => setIsPrivacyOpen(false)}
                className="rounded-md border border-white/20 px-3 py-1.5 text-xs font-medium text-white/90 hover:bg-white/10 transition-colors"
              >
                Close
              </button>
            </div>
          </DialogHeader>
          <div className="max-h-[calc(90vh-76px)] overflow-y-auto px-6 py-5">
            <pre className="whitespace-pre-wrap text-sm leading-7 font-sans text-white/90">{privacyPolicyContent}</pre>
          </div>
        </DialogContent>
      </Dialog>

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
