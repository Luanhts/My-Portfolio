import type { Metadata } from "next";
import { ArrowLeft, ArrowRight, Code2, ExternalLink, LockKeyhole } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProjectVisual } from "@/components/ProjectVisual";
import { getProject, projects } from "@/lib/projects";

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const project = getProject((await params).slug);

  if (!project) {
    return {};
  }

  return {
    title: project.title,
    description: project.summary,
    alternates: { canonical: `/projetos/${project.slug}` },
    openGraph: {
      title: `${project.title} | Luan Henrique`,
      description: project.summary,
      type: "article",
      locale: "pt_BR",
      siteName: "Luan Henrique Portfolio",
      images: [{ url: "/opengraph-image", alt: "Luan Henrique, desenvolvedor front-end" }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${project.title} | Luan Henrique`,
      description: project.summary,
      images: ["/opengraph-image"],
    },
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = getProject((await params).slug);

  if (!project) {
    notFound();
  }

  return (
    <main id="conteudo" className="min-h-screen px-6 py-8 md:px-12 lg:px-24">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/#projetos"
          className="inline-flex items-center gap-2 rounded-md text-sm font-medium text-zinc-300 transition-colors hover:text-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar para os projetos
        </Link>

        <header className="pb-12 pt-16 md:pb-16 md:pt-24">
          <p className="text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
            {project.category}
          </p>
          <h1 className="mt-5 max-w-4xl text-4xl font-bold tracking-tight text-zinc-50 sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-zinc-300 md:text-xl">
            {project.summary}
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            {project.githubUrl ? (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <Code2 className="size-4" aria-hidden="true" />
                Ver código no GitHub
                <span className="sr-only"> (abre em uma nova aba)</span>
              </a>
            ) : (
              <span className="inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-700 px-5 text-sm font-medium text-zinc-300">
                <LockKeyhole className="size-4" aria-hidden="true" />
                Código confidencial
              </span>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-700 px-5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                <ExternalLink className="size-4" aria-hidden="true" />
                Acessar aplicação
                <span className="sr-only"> (abre em uma nova aba)</span>
              </a>
            )}
          </div>
        </header>

        <div className="overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/30">
          <ProjectVisual project={project} />
        </div>

        <div className="grid gap-12 py-16 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] md:py-24">
          <section aria-labelledby="desafio-title">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              01 / Desafio
            </p>
            <h2 id="desafio-title" className="mt-4 text-2xl font-semibold text-zinc-100">
              O problema a resolver
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">{project.challenge}</p>
          </section>

          <section aria-labelledby="solucao-title">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              02 / Solução
            </p>
            <h2 id="solucao-title" className="mt-4 text-2xl font-semibold text-zinc-100">
              A abordagem construída
            </h2>
            <p className="mt-4 leading-relaxed text-zinc-400">{project.solution}</p>
          </section>
        </div>

        <div className="grid gap-12 border-y border-zinc-900 py-16 md:grid-cols-[minmax(0,1.35fr)_minmax(0,0.65fr)] md:py-20">
          <section aria-labelledby="contribuicoes-title">
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              03 / Contribuições
            </p>
            <h2 id="contribuicoes-title" className="mt-4 text-2xl font-semibold text-zinc-100">
              Principais entregas
            </h2>
            <ul className="mt-6 space-y-4">
              {project.contributions.map((contribution) => (
                <li key={contribution} className="flex gap-4 leading-relaxed text-zinc-300">
                  <span className="mt-2 size-1.5 shrink-0 rounded-full bg-zinc-500" aria-hidden="true" />
                  {contribution}
                </li>
              ))}
            </ul>
          </section>

          <aside>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-zinc-400">
              Tecnologias
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {project.technologies.map((technology) => (
                <span
                  key={technology}
                  className="rounded-full border border-zinc-800 bg-zinc-900/50 px-3 py-1.5 text-sm text-zinc-300"
                >
                  {technology}
                </span>
              ))}
            </div>
            <dl className="mt-8 space-y-4 border-t border-zinc-900 pt-6 text-sm">
              {project.period && (
                <div className="flex justify-between gap-4">
                  <dt className="text-zinc-400">Período</dt>
                  <dd className="text-right text-zinc-200">{project.period}</dd>
                </div>
              )}
              <div className="flex justify-between gap-4">
                <dt className="text-zinc-400">Status</dt>
                <dd className="text-right text-zinc-200">{project.status}</dd>
              </div>
            </dl>
          </aside>
        </div>

        <div className="flex flex-col items-start justify-between gap-6 py-16 md:flex-row md:items-center md:py-20">
          <div>
            <p className="text-sm text-zinc-400">Quer conhecer os outros trabalhos?</p>
            <h2 className="mt-2 text-2xl font-semibold text-zinc-100">Veja todos os cases em destaque.</h2>
          </div>
          <Link
            href="/#projetos"
            className="inline-flex h-11 items-center gap-2 rounded-lg border border-zinc-700 px-5 text-sm font-medium text-zinc-200 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            Voltar aos projetos
            <ArrowRight className="size-4" aria-hidden="true" />
          </Link>
        </div>
      </div>
    </main>
  );
}
