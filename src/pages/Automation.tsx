import { useMemo, useState } from "react";
import {
  Bot,
  Clock3,
  Gauge,
  Mail,
  Database,
  Workflow,
  GitBranch,
  Target,
  ScanSearch,
  CircleDollarSign,
  Check,
  ArrowUp,
} from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HomeLiquidEtherBackground from "@/components/HomeLiquidEtherBackground";

type ProjectCard = {
  title: string;
  category: string;
  complexity: string;
  hours: string;
  description: string;
  tools: string[];
  results: Array<{ label: string; value: string }>;
};

const projects: ProjectCard[] = [
  {
    title: "Automated WhatsApp Sales Funnel",
    category: "Communication",
    complexity: "Complex",
    hours: "60+ hours/month",
    description:
      "Replaced manual customer texting with intelligent routing that qualifies leads instantly and captures data 24/7.",
    tools: ["WhatsApp Business API", "n8n", "OpenAI", "PostgreSQL"],
    results: [
      { label: "Lead Capture Speed", value: "Instant" },
      { label: "Labor Costs", value: "60% reduction" },
      { label: "Conversion Rate", value: "25% increase" },
    ],
  },
  {
    title: "Zero-Touch Deployment Pipeline",
    category: "DevOps",
    complexity: "Medium",
    hours: "40+ hours/month",
    description:
      "Eliminated manual server updates and costly release errors by engineering a robust CI/CD automation pipeline.",
    tools: ["GitHub Actions", "Vercel", "Jest", "ESLint"],
    results: [
      { label: "Release Velocity", value: "80% faster" },
      { label: "Costly Downtime", value: "50% reduction" },
      { label: "Team Output", value: "30% capacity unlocked" },
    ],
  },
  {
    title: "High-Volume Lead Nurturing Engine",
    category: "Marketing",
    complexity: "Medium",
    hours: "32+ hours/month",
    description:
      "Built a hands-off engine that captures leads, scores intent, and nurtures prospects until they are ready to buy.",
    tools: ["n8n", "Airtable", "SendGrid", "Slack"],
    results: [
      { label: "Speed-to-Lead", value: "< 1 Minute" },
      { label: "Sales Pipeline", value: "35% wider" },
      { label: "Data Entry Errors", value: "0%" },
    ],
  },
  {
    title: "Omnichannel Presence Automator",
    category: "Marketing",
    complexity: "Simple",
    hours: "24+ hours/month",
    description:
      "Created a scheduling and publishing automation engine that scales social reach without agency dependency.",
    tools: ["n8n", "Buffer", "Google Sheets", "Twitter API"],
    results: [
      { label: "Brand Consistency", value: "100% maintained" },
      { label: "Organic Reach", value: "45% increase" },
      { label: "Agency Fees", value: "$0" },
    ],
  },
  {
    title: "Competitive Intelligence Scraper",
    category: "Data",
    complexity: "Complex",
    hours: "48+ hours/month",
    description:
      "Built legal market monitoring workflows that extract competitor trends around the clock with alerting.",
    tools: ["Puppeteer", "n8n", "MongoDB", "Google Sheets"],
    results: [
      { label: "Research Overhead", value: "Fully automated" },
      { label: "Data Reliability", value: "95%+ accuracy" },
      { label: "Manual Analysis", value: "90% time saved" },
    ],
  },
  {
    title: "Behavior-Driven Revenue Recovery",
    category: "Marketing",
    complexity: "Medium",
    hours: "20+ hours/month",
    description:
      "Engineered advanced trigger-based recovery flows that convert abandoned users back into paying customers.",
    tools: ["n8n", "SendGrid", "PostgreSQL", "Analytics"],
    results: [
      { label: "Revenue Recovery", value: "28% lift in opens" },
      { label: "Conversion Rate", value: "42% lift in clicks" },
      { label: "Customer Churn", value: "15% lower" },
    ],
  },
];

const tools = [
  {
    emoji: "🔁",
    name: "n8n",
    subtitle: "Infrastructure",
    description: "Enterprise-grade workflow automation engine connecting systems securely.",
    points: ["Bridge fragmented software", "Eliminate manual data transfer", "Scale cost-effectively", "Secure internal tooling"],
  },
  {
    emoji: "⚙️",
    name: "GitHub Actions",
    subtitle: "Operational Efficiency",
    description: "Automated software delivery pipelines that keep releases fast and stable.",
    points: ["Reduce deployment downtime", "Automate quality checks", "Accelerate feature releases", "Enforce standards"],
  },
  {
    emoji: "⚡",
    name: "Zapier",
    subtitle: "Rapid Prototyping",
    description: "High-speed integration platform for quick business automation wins.",
    points: ["Instant API connectivity", "Immediate task offloading", "Rapid MVP automation", "Cross-team notifications"],
  },
  {
    emoji: "🎯",
    name: "Make (Integromat)",
    subtitle: "Advanced Logic Routing",
    description: "Visual architecture for orchestrating complex multi-step business logic.",
    points: ["Multi-step business flows", "Automated data formatting", "Fail-safe error routing", "Advanced API orchestration"],
  },
  {
    emoji: "🤖",
    name: "Puppeteer",
    subtitle: "Market Intelligence",
    description: "Headless automation for extracting high-value data without manual intervention.",
    points: ["Automated market research", "Unattended QA testing", "Mass document generation", "Competitor monitoring"],
  },
  {
    emoji: "⏰",
    name: "Background Workers",
    subtitle: "Asset Reliability",
    description: "Server-side scheduling for mission-critical recurring jobs.",
    points: ["Zero-touch daily reporting", "Automated infrastructure backups", "Nightly maintenance", "Scheduled payment processing"],
  },
];

const serviceOffers = [
  {
    icon: Workflow,
    title: "Workflow Automation",
    description: "Automate repetitive tasks and connect your tools with n8n, Zapier, or custom solutions.",
    points: ["API integrations", "Data synchronization", "Process automation", "Webhook handling"],
  },
  {
    icon: GitBranch,
    title: "CI/CD Automation",
    description: "Automated testing, building, and deployment pipelines for your applications.",
    points: ["GitHub Actions setup", "Automated testing", "Deployment automation", "Code quality checks"],
  },
  {
    icon: Database,
    title: "Data Automation",
    description: "Web scraping, data processing, and ETL pipelines for business intelligence.",
    points: ["Web scraping", "Data cleaning", "ETL pipelines", "Report generation"],
  },
  {
    icon: Mail,
    title: "Marketing Automation",
    description: "Email campaigns, social media posting, and lead nurturing automation.",
    points: ["Email automation", "Social media scheduling", "Lead capture", "Campaign tracking"],
  },
];

const Automation = () => {
  const [hours, setHours] = useState(10);
  const [rate, setRate] = useState(50);

  const monthlySavings = useMemo(() => Math.round(hours * rate * 4 * 0.5), [hours, rate]);

  return (
    <div className="relative min-h-screen">
      <HomeLiquidEtherBackground />
      <Navbar />

      <main className="relative z-10 pt-28">
        <section className="container mx-auto px-6 py-10 text-center">
          <p className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1 text-sm text-primary">
            <Bot className="h-4 w-4" /> Automation Specialist
          </p>
          <h1 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Drowning in Repetitive Tasks?
            <span className="block text-primary">Reclaim 10+ Hours Every Week.</span>
          </h1>
          <p className="mx-auto mt-5 max-w-5xl text-lg text-muted-foreground leading-8">
            Stop wasting expensive talent on manual data entry that bottlenecks growth. I design custom n8n and Zapier
            workflows that sync your tools, eliminate human error, and help you scale without hiring more staff.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="#automation-services" className="rounded-xl border border-primary/40 bg-primary/15 px-6 py-3 font-medium text-primary hover:bg-primary/20 transition-colors">
              Build My Custom Workflow
            </a>
            <a href="#automation-projects" className="rounded-xl border border-primary/30 bg-background/50 px-6 py-3 font-medium text-foreground hover:border-primary/60 transition-colors">
              See Real ROI Examples
            </a>
          </div>

          <div className="mt-12 grid gap-4 md:grid-cols-3">
            <div className="glass rounded-xl border border-primary/20 p-5">
              <p className="text-5xl font-bold text-primary">50+</p>
              <p className="mt-2 text-muted-foreground">Hours Saved Weekly</p>
            </div>
            <div className="glass rounded-xl border border-primary/20 p-5">
              <p className="text-5xl font-bold text-blue-400">15+</p>
              <p className="mt-2 text-muted-foreground">Automation Projects</p>
            </div>
            <div className="glass rounded-xl border border-primary/20 p-5">
              <p className="text-5xl font-bold text-green-400">90%</p>
              <p className="mt-2 text-muted-foreground">Reduction in Manual Work</p>
            </div>
          </div>
        </section>

        <section id="automation-projects" className="container mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold">Automation Projects</h2>
          <p className="mt-2 text-muted-foreground">Real-world automation solutions built for measurable outcomes.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="glass-strong rounded-xl border border-primary/20 p-5">
                <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
                  <h3 className="text-3xl font-semibold leading-tight">{project.title}</h3>
                  <span className="inline-flex items-center gap-1 text-green-400 text-sm">
                    <Clock3 className="h-4 w-4" /> {project.hours}
                  </span>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="rounded-full bg-primary/20 px-3 py-1 text-sm text-primary">{project.category}</span>
                  <span className="rounded-full bg-blue-500/20 px-3 py-1 text-sm text-blue-300">{project.complexity}</span>
                </div>

                <p className="mt-4 text-muted-foreground leading-8">{project.description}</p>

                <p className="mt-4 font-semibold">Tools Used:</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span key={tool} className="rounded bg-primary/10 px-2.5 py-1 text-sm text-primary">
                      {tool}
                    </span>
                  ))}
                </div>

                <div className="mt-5 border-t border-primary/20 pt-4">
                  <p className="font-semibold">Results:</p>
                  <div className="mt-3 grid grid-cols-3 gap-3">
                    {project.results.map((result) => (
                      <div key={result.label}>
                        <p className="text-3xl font-semibold text-green-400">{result.value}</p>
                        <p className="text-sm text-muted-foreground">{result.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-8">
          <h2 className="text-4xl font-bold">Automation Tools I Use</h2>
          <p className="mt-2 text-muted-foreground">Expert in leading automation platforms and technologies.</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {tools.map((tool) => (
              <article key={tool.name} className="glass-strong rounded-xl border border-primary/20 p-5">
                <p className="text-4xl">{tool.emoji}</p>
                <h3 className="mt-3 text-3xl font-semibold">{tool.name}</h3>
                <p className="text-primary">{tool.subtitle}</p>
                <p className="mt-3 text-muted-foreground leading-8">{tool.description}</p>
                <ul className="mt-4 space-y-1">
                  {tool.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 text-green-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-8">
          <div className="rounded-xl border border-primary/30 bg-gradient-to-r from-primary/10 to-secondary/10 p-6 md:p-8">
            <h2 className="text-center text-5xl font-bold">Calculate Your Automation ROI</h2>
            <p className="mt-3 text-center text-muted-foreground text-lg">
              See how much time and money you could save with automation.
            </p>

            <div className="mt-8 rounded-xl border border-primary/20 bg-background/40 p-5 md:p-6">
              <div className="grid gap-4 md:grid-cols-2">
                <label className="block">
                  <span className="mb-2 block font-medium">Hours spent on manual tasks per week</span>
                  <input
                    type="number"
                    min={0}
                    value={hours}
                    onChange={(e) => setHours(Number(e.target.value || 0))}
                    className="w-full rounded-lg border border-primary/20 bg-background/60 px-4 py-3 text-foreground outline-none focus:border-primary/50"
                  />
                </label>

                <label className="block">
                  <span className="mb-2 block font-medium">Your hourly rate ($)</span>
                  <input
                    type="number"
                    min={0}
                    value={rate}
                    onChange={(e) => setRate(Number(e.target.value || 0))}
                    className="w-full rounded-lg border border-primary/20 bg-background/60 px-4 py-3 text-foreground outline-none focus:border-primary/50"
                  />
                </label>
              </div>

              <div className="mt-6 rounded-xl border border-green-500/40 bg-green-500/10 p-6 text-center">
                <p className="text-muted-foreground">Potential Monthly Savings</p>
                <p className="mt-2 text-6xl font-bold text-green-400">${monthlySavings.toLocaleString()}+</p>
                <p className="mt-2 text-muted-foreground">Based on 50% automation efficiency</p>
              </div>

              <div className="mt-6 text-center">
                <a href="#automation-services" className="inline-flex rounded-xl border border-primary/40 bg-primary/15 px-6 py-3 font-medium text-primary hover:bg-primary/20 transition-colors">
                  Let's Automate Your Workflow
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="automation-services" className="container mx-auto px-6 py-8">
          <h2 className="text-center text-5xl font-bold">Automation Services I Offer</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2">
            {serviceOffers.map((service) => (
              <article key={service.title} className="glass-strong rounded-xl border border-primary/20 p-5">
                <div className="flex items-start gap-3">
                  <div className="rounded-lg bg-primary/15 p-2">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-semibold">{service.title}</h3>
                </div>
                <p className="mt-4 text-muted-foreground">{service.description}</p>
                <ul className="mt-4 space-y-2">
                  {service.points.map((point) => (
                    <li key={point} className="flex items-start gap-2 text-muted-foreground">
                      <Check className="mt-1 h-4 w-4 text-green-400" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="container mx-auto px-6 py-10 text-center">
          <h2 className="text-5xl font-bold">Ready to Automate Your Business?</h2>
          <p className="mx-auto mt-4 max-w-4xl text-lg text-muted-foreground">
            Let us discuss how automation can save time and money. Get a free consultation to identify workflow opportunities.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <a href="/#contact" className="rounded-xl border border-primary/40 bg-primary/15 px-6 py-3 font-medium text-primary hover:bg-primary/20 transition-colors">
              Schedule Free Consultation
            </a>
            <a href="/services" className="rounded-xl border border-primary/30 bg-background/50 px-6 py-3 font-medium text-foreground hover:border-primary/60 transition-colors">
              View All Services
            </a>
          </div>
        </section>

        <Footer />
      </main>

      <a
        href="#"
        className="fixed bottom-8 right-8 z-40 inline-flex h-12 w-12 items-center justify-center rounded-full border border-primary/50 bg-background/80 text-primary backdrop-blur-md hover:bg-primary/20"
        aria-label="Back to top"
      >
        <ArrowUp className="h-5 w-5" />
      </a>
    </div>
  );
};

export default Automation;
