import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { SectionHeading } from "@/components/SectionHeading";
import { homepageProjects, projects } from "@/lib/projects";

export function Projects() {
  return (
    <section
      id="projetos"
      className="scroll-mt-36 border-b border-zinc-900 px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          number="03"
          label="Projetos"
          title="Cases com contexto e implementação."
          description="Projetos apresentados com honestidade: o que foi construído, qual era o objetivo e onde o código pode ser consultado."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {homepageProjects.map((project, index) => (
            <ProjectCard
              key={project.slug}
              project={project}
              featured={index === 0}
            />
          ))}
        </div>

        <div className="flex flex-col items-start justify-between gap-5 border-t border-zinc-900 pt-8 sm:flex-row sm:items-center">
          <p className="text-sm text-zinc-400">
            {projects.length} projetos publicados e novos cases em preparação.
          </p>
          <Link
            href="/projetos"
            className="group inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-700 px-5 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            Ver todos os projetos
            <ArrowRight
              className="size-4 transition-transform group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
}
