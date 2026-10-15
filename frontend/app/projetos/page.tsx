import type { Metadata } from "next";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export const metadata: Metadata = {
  title: "Projetos",
  description:
    "Projetos e cases de Luan Henrique, com contexto, tecnologias, implementação e links para código e aplicações.",
  alternates: { canonical: "/projetos" },
  openGraph: {
    title: "Projetos | Luan Henrique",
    description:
      "Projetos e cases de Luan Henrique, com contexto, tecnologias e implementação.",
    type: "website",
    locale: "pt_BR",
    siteName: "Luan Henrique Portfolio",
    images: [{ url: "/opengraph-image", alt: "Luan Henrique, desenvolvedor front-end" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Projetos | Luan Henrique",
    description:
      "Projetos e cases de Luan Henrique, com contexto, tecnologias e implementação.",
    images: ["/opengraph-image"],
  },
};

export default function ProjectsPage() {
  return (
    <main id="conteudo" className="min-h-screen px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar ao início
        </Link>

        <header className="pb-12 pt-16 md:pb-16 md:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
            Portfólio / {projects.length.toString().padStart(2, "0")} projetos
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            Projetos construídos para aprender e resolver problemas reais.
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            Uma visão completa dos projetos publicados, incluindo cases
            profissionais, aplicações full stack e experimentos técnicos.
          </p>
        </header>

        <section aria-label="Todos os projetos" className="grid gap-6 pb-20 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </section>
      </div>
    </main>
  );
}
