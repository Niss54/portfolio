import { Code2, Sparkles, Smartphone, Palette, Braces, Zap, MessageCircle, Rocket, ChevronRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeLiquidEtherBackground from "@/components/HomeLiquidEtherBackground";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

type ServiceCard = {
  icon: React.ComponentType<{ className?: string }>;
  title: string;
  description: string;
  technologies: string[];
  deliverables: string[];
  learnMoreHref?: string;
};

const serviceCards: ServiceCard[] = [
  {
    icon: Code2,
    title: "Custom SaaS Development",
    description:
      "Turn your concept into a scalable product. Get clean code, robust databases, and a strong foundation ready for growth.",
    technologies: ["Next.js", "React", "Node.js", "PostgreSQL", "Stripe", "Supabase"],
    deliverables: [
      "Complete SaaS MVP",
      "User authentication and authorization",
      "Subscription and payment management",
      "Admin dashboard and analytics",
    ],
    learnMoreHref: "/all-projects",
  },
  {
    icon: Sparkles,
    title: "AI and LLM Integration",
    description:
      "Build secure RAG systems and integrate APIs like OpenAI and Anthropic to automate support and document workflows.",
    technologies: ["LangChain", "OpenAI API", "Anthropic", "Python", "Vector DBs", "Next.js"],
    deliverables: [
      "Custom AI agents",
      "RAG architecture",
      "Automated workflows",
      "Secure data pipelines",
    ],
  },
  {
    icon: Smartphone,
    title: "Fast-Track MVP",
    description:
      "Validate your idea quickly by building only the core features needed for launch in under 30 days.",
    technologies: ["React Native", "Expo", "Firebase", "Vercel"],
    deliverables: [
      "Core feature development",
      "Rapid prototyping",
      "Scalable initial architecture",
      "App store deployment",
    ],
  },
  {
    icon: Palette,
    title: "UI/UX Implementation",
    description:
      "Transform designs into pixel-perfect, interactive interfaces that are responsive, accessible, and conversion-ready.",
    technologies: ["Figma to code", "Tailwind CSS", "Framer Motion", "Accessibility"],
    deliverables: [
      "Pixel-perfect implementation",
      "Responsive across all devices",
      "Smooth UI animations",
      "WCAG accessibility compliance",
    ],
  },
  {
    icon: Braces,
    title: "API Development and Integration",
    description:
      "Build robust REST APIs and connect third-party services so your operational tools work together seamlessly.",
    technologies: ["Node.js", "Express", "REST APIs", "PostgreSQL", "Redis"],
    deliverables: [
      "Scalable API architecture",
      "Optimized query performance",
      "Third-party platform integrations",
      "Security best practices",
    ],
  },
];

const faqItems = [
  {
    q: "What exactly do I get with your SaaS development service?",
    a: "You receive a production-ready SaaS product, including authentication, billing, core business workflows, and deployment setup. I also provide handover documentation and post-launch support guidance.",
  },
  {
    q: "How fast can we go to market?",
    a: "Most MVPs can launch within 3 to 8 weeks, depending on scope. You receive a clear milestone timeline before development starts.",
  },
  {
    q: "Can you add AI to my existing software?",
    a: "Yes. I can integrate AI features into your existing system without disrupting core workflows, including chat assistants, retrieval systems, and automation pipelines.",
  },
  {
    q: "Can you build mobile apps?",
    a: "Yes. I build cross-platform mobile apps and also support backend APIs, push notifications, and release workflows.",
  },
  {
    q: "How much will this investment cost?",
    a: "Pricing depends on your scope and complexity. I offer hourly, project-based, and retainer engagement models based on your goals.",
  },
  {
    q: "What happens after the project launches?",
    a: "After launch, I provide stabilization support and can continue with maintenance, feature expansion, and performance optimization.",
  },
  {
    q: "Will you collaborate with my in-house developers?",
    a: "Absolutely. I can work directly with your in-house team, follow your coding standards, and contribute through your existing delivery process.",
  },
  {
    q: "Are your technologies modern and secure?",
    a: "Yes. I use modern frameworks and follow security best practices, including secure authentication flows, input validation, least-privilege access, and safe deployment patterns.",
  },
];

const Services = () => {
  return (
    <div className="relative min-h-screen">
      <HomeLiquidEtherBackground />
      <Navbar />

      <main id="web-development" className="relative z-10 pt-28">
        <section className="container mx-auto px-6 py-10">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight max-w-5xl">
            Technical solutions tied to business outcomes
          </h1>
          <p className="mt-4 text-lg text-muted-foreground max-w-3xl">
            Stop paying for hours. Pay for results. Here is exactly how I can help your business grow.
          </p>
        </section>

        <section className="container mx-auto px-6 py-4">
          <div className="grid gap-6 md:grid-cols-2">
            {serviceCards.map((service) => (
              <article
                key={service.title}
                className="glass-strong rounded-2xl border border-primary/20 p-6 site-animated-surface"
              >
                <div className="flex items-start gap-4">
                  <div className="rounded-xl bg-primary/15 p-3">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h2 className="text-3xl font-semibold leading-tight">{service.title}</h2>
                  </div>
                </div>

                <p className="mt-5 text-muted-foreground leading-8">{service.description}</p>

                <p className="mt-5 text-xl font-semibold">Technologies:</p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {service.technologies.map((tech) => (
                    <span key={tech} className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-sm text-muted-foreground">
                      {tech}
                    </span>
                  ))}
                </div>

                <p className="mt-6 text-xl font-semibold">Deliverables:</p>
                <ul className="mt-3 space-y-2">
                  {service.deliverables.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-muted-foreground">
                      <span className="text-primary">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {service.learnMoreHref && (
                  <a
                    href={service.learnMoreHref}
                    className="mt-5 inline-flex items-center gap-1 text-primary hover:text-primary/80 transition-colors"
                  >
                    Learn more
                    <ChevronRight className="h-4 w-4" />
                  </a>
                )}
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-10">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 p-8">
            <h2 className="text-4xl font-bold">Why Work With Me?</h2>
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div className="flex items-start gap-3">
                <Zap className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-2xl font-semibold">Fast Turnaround</p>
                  <p className="text-muted-foreground">Most projects completed within 2 to 4 weeks.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <MessageCircle className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-2xl font-semibold">Clear Communication</p>
                  <p className="text-muted-foreground">Daily updates and transparent progress tracking.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Sparkles className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-2xl font-semibold">Quality Code</p>
                  <p className="text-muted-foreground">Clean, documented, and maintainable code.</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <Rocket className="h-6 w-6 text-primary" />
                <div>
                  <p className="text-2xl font-semibold">Ongoing Support</p>
                  <p className="text-muted-foreground">Post-launch guidance and optimization support.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="faq" className="container mx-auto px-6 py-10">
          <div className="text-center mb-8">
            <h2 className="text-4xl md:text-5xl font-bold">Frequently Asked Questions About My Services</h2>
            <p className="mt-3 text-lg text-muted-foreground">Common questions about pricing, timeline, and what is included.</p>
          </div>

          <Accordion type="single" collapsible className="mx-auto w-full max-w-5xl space-y-4">
            {faqItems.map((item, idx) => (
              <AccordionItem
                key={item.q}
                value={`faq-${idx}`}
                className="glass rounded-2xl border border-transparent shadow-none px-4 md:px-6"
              >
                <AccordionTrigger className="text-left text-base md:text-lg font-semibold leading-7 py-5 pl-4 md:pl-6 pr-2 md:pr-3 hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-base leading-8 text-muted-foreground pb-6 pl-4 md:pl-6 pr-8 md:pr-10">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default Services;
