import { Activity, BriefcaseBusiness, ShoppingBag } from "lucide-react";
import type { Project } from "@/lib/projects";

const visuals = {
  legal: {
    icon: BriefcaseBusiness,
    code: "CASE 01",
    gradient: "from-violet-500/20 via-zinc-950 to-zinc-950",
  },
  commerce: {
    icon: ShoppingBag,
    code: "CASE 02",
    gradient: "from-emerald-500/20 via-zinc-950 to-zinc-950",
  },
  telemetry: {
    icon: Activity,
    code: "CASE 03",
    gradient: "from-sky-500/20 via-zinc-950 to-zinc-950",
  },
} satisfies Record<Project["visual"], object>;

type ProjectVisualProps = {
  project: Project;
  compact?: boolean;
  featured?: boolean;
};

export function ProjectVisual({
  project,
  compact = false,
  featured = false,
}: ProjectVisualProps) {
  const visual = visuals[project.visual];
  const Icon = visual.icon;

  return (
    <div
      className={`relative flex overflow-hidden border-b border-zinc-800/80 bg-gradient-to-br ${visual.gradient} ${compact ? (featured ? "h-64 md:h-auto" : "h-56") : "min-h-72 md:min-h-96"}`}
    >
      <div
        className="absolute inset-0 opacity-40"
        aria-hidden="true"
        style={{
          backgroundImage:
            "linear-gradient(rgba(113,113,122,.16) 1px, transparent 1px), linear-gradient(90deg, rgba(113,113,122,.16) 1px, transparent 1px)",
          backgroundSize: "32px 32px",
          maskImage: "linear-gradient(to bottom, black, transparent 90%)",
        }}
      />
      <div className="relative flex min-h-[inherit] flex-1 flex-col justify-between p-6 md:p-8">
        <div className="flex items-center justify-between text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
          <span>{visual.code}</span>
          <span>{project.period ?? "Confidencial"}</span>
        </div>
        <div className="flex items-end justify-between gap-6">
          <div>
            <p className="mb-2 text-xs uppercase tracking-[0.18em] text-zinc-400">
              {project.category}
            </p>
            <p className="max-w-md text-xl font-semibold tracking-tight text-zinc-100 md:text-2xl">
              {project.title}
            </p>
          </div>
          <div className="flex size-12 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-950/80 text-zinc-200 backdrop-blur md:size-14">
            <Icon className="size-5 md:size-6" aria-hidden="true" />
          </div>
        </div>
      </div>
    </div>
  );
}
