import { ArrowRight, Code2, ExternalLink, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { ProjectVisual } from "@/components/ProjectVisual";
import type { Project } from "@/lib/projects";

type ProjectCardProps = {
  project: Project;
  featured?: boolean;
};

export function ProjectCard({ project, featured = false }: ProjectCardProps) {
  const visibleTechnologies = project.technologies.slice(0, 4);
  const remainingTechnologies = project.technologies.length - visibleTechnologies.length;

  return (
    <article
      className={`group flex flex-col overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30 transition-colors hover:border-zinc-700 ${featured ? "md:col-span-2 md:grid md:grid-cols-2" : ""}`}
    >
      <ProjectVisual project={project} compact featured={featured} />

      <div className="flex flex-1 flex-col justify-between gap-8 p-6 md:p-8">
        <div>
          <div className="mb-4 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.16em] text-zinc-400">
            {!project.githubUrl && <LockKeyhole className="size-3.5" aria-hidden="true" />}
            {project.status}
          </div>
          <h3 className="text-2xl font-semibold tracking-tight text-zinc-100">
            {project.title}
          </h3>
          <p className="mt-3 leading-relaxed text-zinc-400">{project.summary}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {visibleTechnologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-300"
              >
                {technology}
              </span>
            ))}
            {remainingTechnologies > 0 && (
              <span className="rounded-full border border-zinc-800 bg-zinc-950 px-3 py-1 text-xs text-zinc-400">
                +{remainingTechnologies}
              </span>
            )}
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href={`/projetos/${project.slug}`}
            className="group/link inline-flex h-10 items-center gap-2 rounded-lg bg-zinc-100 px-4 text-sm font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            Ver detalhes
            <ArrowRight
              className="size-4 transition-transform group-hover/link:translate-x-1"
              aria-hidden="true"
            />
          </Link>
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-700 px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <Code2 className="size-4" aria-hidden="true" />
              GitHub
              <span className="sr-only"> (abre em uma nova aba)</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg border border-zinc-700 px-4 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              <ExternalLink className="size-4" aria-hidden="true" />
              Acessar projeto
              <span className="sr-only"> (abre em uma nova aba)</span>
            </a>
          )}
        </div>
      </div>
    </article>
  );
}
