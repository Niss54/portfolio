import {
  Brain,
  Bot,
  Sparkles,
  Rocket,
  ShieldCheck,
  PlugZap,
  ChartColumnBig,
  Database,
  Check,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeLiquidEtherBackground from "@/components/HomeLiquidEtherBackground";

const serviceCards = [
  {
    icon: Bot,
    title: "24/7 AI Sales and Support Agents",
    description:
      "Autonomous AI agents that handle support queries, capture leads, and qualify users without delay.",
  },
  {
    icon: Database,
    title: "Enterprise Knowledge Retrieval (RAG)",
    description:
      "Custom retrieval systems that query your documents instantly and return reliable, source-backed answers.",
  },
  {
    icon: PlugZap,
    title: "Workflow AI Integration",
    description:
      "Inject AI into existing workflows and automate repetitive tasks with reliable failover and monitoring.",
  },
  {
    icon: Sparkles,
    title: "Predictive and Generative Features",
    description:
      "Build intelligent product features for recommendations, content generation, and smarter decision flows.",
  },
  {
    icon: Rocket,
    title: "Bespoke AI Architecture",
    description:
      "Scalable architecture designed for your product stage, team capacity, and long-term data strategy.",
  },
  {
    icon: ChartColumnBig,
    title: "AI Strategy and ROI Consulting",
    description:
      "Roadmaps focused on business outcomes, cost control, and measurable impact for each AI initiative.",
  },
];

const technologies = [
  { name: "OpenAI GPT-4", type: "LLM", iconEmoji: "🤖", iconColor: "#4F8CFF" },
  { name: "Anthropic Claude", type: "LLM", iconEmoji: "🧠", iconColor: "#FF7CC5" },
  { name: "Google Gemini", type: "LLM", iconEmoji: "✨", iconColor: "#F9B24E" },
  { name: "LangChain", type: "Framework", iconEmoji: "🔗", iconColor: "#B39DDB" },
  { name: "LlamaIndex", type: "Framework", iconEmoji: "🦙", iconColor: "#C8A2C8" },
  { name: "Pinecone", type: "Vector DB", iconEmoji: "📊", iconColor: "#5AA0FF" },
  { name: "Weaviate", type: "Vector DB", iconEmoji: "🗄️", iconColor: "#8A6FD1" },
  { name: "Vercel AI SDK", type: "Framework", iconEmoji: "▲", iconColor: "#111111" },
  { name: "Hugging Face", type: "Models", iconEmoji: "🤗", iconColor: "#F4A340" },
  { name: "OpenAI Embeddings", type: "Embeddings", iconEmoji: "🎯", iconColor: "#FF5B87" },
];

const caseStudies = [
  {
    title: "Automated Customer Success Engine",
    challenge:
      "Support volume grew faster than team capacity, causing delayed responses and rising operational cost.",
    solution:
      "Built a GPT + RAG support pipeline with CRM context and confidence-based escalation to human agents.",
    results: ["80% faster resolution", "60% cost reduction", "35% retention lift", "70% workflow automation"],
  },
  {
    title: "Instant Institutional Knowledge Base",
    challenge:
      "Teams spent hours searching scattered documents across multiple tools and legacy systems.",
    solution:
      "Implemented a centralized retrieval layer with semantic indexing and permissions-aware responses.",
    results: ["90% time saved", "25% output increase", "50% faster onboarding", "95%+ answer reliability"],
  },
  {
    title: "Infinite Content Generation Engine",
    challenge:
      "Content teams struggled to scale production without hurting quality and margin.",
    solution:
      "Designed an AI-assisted editorial pipeline with templates, review controls, and multi-channel publishing.",
    results: ["5x content throughput", "70% faster turnaround", "65% cost reduction", "40% growth support"],
  },
];

const processSteps = [
  "Discovery and planning",
  "Technology selection",
  "Prototype development",
  "Implementation",
  "Testing and refinement",
  "Deployment and support",
];

const pricing = [
  {
    name: "Hourly",
    value: "$15/hour",
    points: ["Perfect for small tasks", "Consulting and advice", "Flexible commitment"],
  },
  {
    name: "Project-Based",
    value: "$500-$10k/project",
    points: ["Fixed scope and price", "Milestone-based payments", "Predictable budget"],
  },
  {
    name: "Retainer",
    value: "Custom/month",
    points: ["Ongoing support", "Priority execution", "Long-term partnership"],
  },
];

const AIServices = () => {
  return (
    <div className="relative min-h-screen">
      <HomeLiquidEtherBackground />
      <Navbar />

      <main className="relative z-10 pt-28">
        <section id="ai-integration" className="container mx-auto px-6 py-14">
          <div className="mx-auto max-w-5xl text-center">
            <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/40 px-4 py-1 text-sm text-primary">
              <Brain className="h-4 w-4" /> AI Integration Specialist
            </p>
            <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
              Stop Losing Customers to Slow Support.
              <span className="block text-primary">Scale Faster with Custom AI.</span>
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              I build production-ready ChatGPT, Claude, and RAG systems that automate support, improve knowledge
              access, and reduce operational cost.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="#contact"
                className="rounded-xl border border-primary/40 bg-primary/15 px-6 py-3 font-medium text-primary hover:bg-primary/20 transition-colors"
              >
                Get Your Free AI Strategy Session
              </a>
              <a
                href="#case-studies"
                className="rounded-xl border border-primary/30 bg-background/50 px-6 py-3 font-medium text-foreground hover:border-primary/60 transition-colors"
              >
                See Case Studies
              </a>
            </div>
          </div>

          <div className="mt-12 grid gap-6 md:grid-cols-3">
            <div className="glass-strong rounded-2xl border border-primary/20 p-6">
              <h3 className="text-xl font-semibold">Faster Development</h3>
              <p className="mt-2 text-muted-foreground">AI-powered systems reduce development and delivery time.</p>
            </div>
            <div className="glass-strong rounded-2xl border border-primary/20 p-6">
              <h3 className="text-xl font-semibold">Better User Experience</h3>
              <p className="mt-2 text-muted-foreground">Intelligent features that users engage with daily.</p>
            </div>
            <div className="glass-strong rounded-2xl border border-primary/20 p-6">
              <h3 className="text-xl font-semibold">Enterprise Security</h3>
              <p className="mt-2 text-muted-foreground">Privacy-first implementation and safer data handling.</p>
            </div>
          </div>
        </section>

        <section id="web-development" className="container mx-auto px-6 py-10">
          <h2 className="text-3xl md:text-4xl font-bold">AI Services I Offer</h2>
          <p className="mt-2 text-muted-foreground">Comprehensive AI integration services tailored to business needs.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {serviceCards.map((item) => (
              <article key={item.title} className="glass-strong rounded-2xl border border-primary/20 p-6">
                <div className="flex items-start gap-3">
                  <div className="rounded-xl bg-primary/15 p-2">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-semibold leading-tight">{item.title}</h3>
                    <p className="mt-3 text-muted-foreground leading-7">{item.description}</p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="automation" className="container mx-auto px-6 py-10">
          <h2 className="text-3xl md:text-4xl font-bold">AI Technologies I Work With</h2>
          <p className="mt-2 text-muted-foreground">Leading AI platforms and frameworks for production use.</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
            {technologies.map((tech) => (
              <div key={tech.name} className="glass rounded-xl border border-primary/20 px-4 py-6 text-center">
                <div className="mb-3 text-3xl leading-none" style={{ color: tech.iconColor }}>
                  {tech.iconEmoji}
                </div>
                <p className="font-medium text-foreground">{tech.name}</p>
                <p className="mt-1 text-xs text-muted-foreground">{tech.type}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="case-studies" className="container mx-auto px-6 py-10">
          <h2 className="text-3xl md:text-4xl font-bold">AI Success Stories</h2>
          <p className="mt-2 text-muted-foreground">Real-world AI projects with measurable business outcomes.</p>
          <div className="mt-8 space-y-6">
            {caseStudies.map((item) => (
              <article key={item.title} className="glass-strong rounded-2xl border border-primary/20 p-6 md:p-8">
                <div className="grid gap-6 lg:grid-cols-[1.7fr_1fr]">
                  <div>
                    <h3 className="text-3xl font-semibold leading-tight">{item.title}</h3>
                    <p className="mt-5 text-sm uppercase tracking-wide text-primary">Challenge</p>
                    <p className="mt-1 text-muted-foreground leading-7">{item.challenge}</p>
                    <p className="mt-5 text-sm uppercase tracking-wide text-primary">Solution</p>
                    <p className="mt-1 text-muted-foreground leading-7">{item.solution}</p>
                  </div>
                  <div className="rounded-2xl border border-primary/20 bg-primary/5 p-5">
                    <p className="text-lg font-semibold">Results</p>
                    <ul className="mt-4 space-y-3">
                      {item.results.map((result) => (
                        <li key={result} className="flex items-center gap-2 text-foreground">
                          <Check className="h-4 w-4 text-primary" />
                          <span>{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-10">
          <h2 className="text-center text-3xl md:text-4xl font-bold">My AI Development Process</h2>
          <div className="mt-8 space-y-4">
            {processSteps.map((step, idx) => (
              <div key={step} className="glass rounded-2xl border border-primary/20 p-5">
                <p className="text-lg font-semibold">{idx + 1}. {step}</p>
              </div>
            ))}
          </div>
        </section>

        <section id="pricing" className="container mx-auto px-6 py-10">
          <div className="rounded-2xl border border-primary/20 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 md:p-8">
            <h2 className="text-center text-3xl md:text-4xl font-bold">Flexible Pricing Options</h2>
            <p className="mt-2 text-center text-muted-foreground">Choose the engagement model that fits your project.</p>
            <div className="mt-8 grid gap-6 md:grid-cols-3">
              {pricing.map((plan) => (
                <article key={plan.name} className="glass-strong rounded-xl border border-primary/20 p-5">
                  <h3 className="text-2xl font-semibold">{plan.name}</h3>
                  <p className="mt-1 text-4xl font-bold text-primary">{plan.value}</p>
                  <ul className="mt-5 space-y-2 text-muted-foreground">
                    {plan.points.map((point) => (
                      <li key={point} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="container mx-auto px-6 py-14">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold">Ready to Build Something Intelligent?</h2>
            <p className="mt-4 text-lg text-muted-foreground">
              Let us discuss your project and map a practical AI plan for your business.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href="/#contact"
                className="rounded-xl border border-primary/40 bg-primary/15 px-6 py-3 font-medium text-primary hover:bg-primary/20 transition-colors"
              >
                Schedule Free Consultation
              </a>
              <a
                href="/blog"
                className="rounded-xl border border-primary/30 bg-background/50 px-6 py-3 font-medium text-foreground hover:border-primary/60 transition-colors"
              >
                Read AI Articles
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </main>
    </div>
  );
};

export default AIServices;
