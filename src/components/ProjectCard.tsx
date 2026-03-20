import type { KeyboardEvent, MouseEvent } from "react";
import { ArrowUpRight } from "lucide-react";
import type { ProjectItem } from "@/data/projects";

type ProjectCardProps = {
  project: ProjectItem;
  animationDelay?: string;
  animationClassName?: string;
};

const isUsableLink = (url: string) => url.trim().length > 0 && url !== "#";

const ProjectCard = ({ project, animationDelay, animationClassName }: ProjectCardProps) => {
  const viewUrl = isUsableLink(project.demo)
    ? project.demo
    : isUsableLink(project.github)
      ? project.github
      : undefined;

  const updateCursorPosition = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    const nextX = event.clientX - bounds.left;
    const nextY = event.clientY - bounds.top;

    event.currentTarget.style.setProperty("--project-cursor-x", `${nextX}px`);
    event.currentTarget.style.setProperty("--project-cursor-y", `${nextY}px`);
  };

  const resetCursorPosition = (event: MouseEvent<HTMLDivElement>) => {
    const bounds = event.currentTarget.getBoundingClientRect();
    event.currentTarget.style.setProperty("--project-cursor-x", `${bounds.width / 2}px`);
    event.currentTarget.style.setProperty("--project-cursor-y", `${bounds.height / 2}px`);
  };

  const openProject = () => {
    if (viewUrl) {
      window.open(viewUrl, "_blank", "noopener,noreferrer");
    }
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLDivElement>) => {
    if (!viewUrl) {
      return;
    }

    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openProject();
    }
  };

  return (
    <div
      data-project-cursor="view"
      className={`group relative glass-strong site-animated-surface rounded-2xl overflow-hidden border border-primary/20 transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_hsl(189_100%_50%/0.4)] ${
        animationClassName ?? ""
      }`}
      style={{
        animationDelay,
        ["--project-cursor-x" as string]: "50%",
        ["--project-cursor-y" as string]: "50%",
      }}
      onMouseMove={updateCursorPosition}
      onMouseEnter={resetCursorPosition}
      onMouseLeave={resetCursorPosition}
      onClick={openProject}
      onKeyDown={handleKeyDown}
      role={viewUrl ? "link" : undefined}
      tabIndex={viewUrl ? 0 : undefined}
      aria-label={viewUrl ? `View ${project.title}` : project.title}
    >
      <div className="absolute inset-0 z-20 hidden md:block pointer-events-none">
        <div
          className="absolute flex h-16 w-36 -translate-x-1/2 -translate-y-1/2 items-center justify-between rounded-full bg-white px-6 text-sm font-semibold uppercase tracking-[0.28em] text-black opacity-0 shadow-[0_18px_50px_rgba(255,255,255,0.24)] transition-opacity duration-300 group-hover:opacity-100"
          style={{
            left: "var(--project-cursor-x)",
            top: "var(--project-cursor-y)",
          }}
        >
          <span>View</span>
          <span className="flex h-10 w-10 items-center justify-center rounded-full bg-black text-white">
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="relative h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="p-6 space-y-4">
        <div className="flex items-start justify-between gap-4">
          <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>
          <div className="md:hidden shrink-0 flex h-12 w-12 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm">
            <ArrowUpRight className="h-4 w-4" />
          </div>
        </div>

        <p className="text-muted-foreground">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="site-animated-chip px-3 py-1 text-xs font-medium text-primary rounded-full"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      <div
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-500"
        style={{
          background:
            "radial-gradient(circle at var(--project-cursor-x, 50%) var(--project-cursor-y, 50%), hsl(189 100% 50% / 0.15), transparent 50%)",
        }}
      />
    </div>
  );
};

export default ProjectCard;