import { ExternalLink, Gamepad2 } from "lucide-react";

interface ProjetoItem {
  title: string;
  description: string;
  badgeText: string;
  tags: string[];
  githubUrl?: string;
  deployUrl?: string;
}

const hasValidUrl = (url?: string) => Boolean(url && url !== "#");

export function Projects() {
  const projects: ProjetoItem[] = [
    {
      badgeText: "NEXT.JS",
      title: "SaaS de E-commerce Corporativo",
      description:
        "Plataforma multi-tenant para gestão de catálogo, pedidos e analytics em tempo real, reduzindo tempo de checkout em 38%.",
      tags: ["Next.js", "NestJS", "Prisma", "PostgreSQL"],
      githubUrl: "#",
      deployUrl: "#",
    },
    {
      badgeText: "REACT",
      title: "Dashboard de Operações Logísticas",
      description:
        "Interface unificada para roteirização e KPIs operacionais, com visualizações performáticas sobre datasets de alto volume.",
      tags: ["React", "TypeScript", "TanStack Query"],
      githubUrl: "#",
      deployUrl: "#",
    },
  ];

  return (
    <section id="projetos" className="scroll-mt-32 md:scroll-mt-28 border-b border-zinc-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Identificador da Seção */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-zinc-500 uppercase">
          <span className="w-8 h-[1px] bg-zinc-700"></span>
          <span>03 — Projetos</span>
        </div>

        {/* Cabeçalho */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
            Projetos em destaque.
          </h2>
          <p className="text-base text-zinc-400">
            Seleção de trabalhos com foco em performance, escalabilidade e
            resultado de negócio.
          </p>
        </div>

        {/* Grid de Projetos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-[#121214]/40 border border-zinc-800/60 rounded-2xl overflow-hidden flex flex-col group hover:border-zinc-700/80 transition-colors duration-300"
            >
              {/* Container de Preview (Grid de Fundo) */}
              <div
                className="h-64 relative flex items-center justify-center border-b border-zinc-800/60"
                style={{
                  backgroundImage: `
                    linear-gradient(to right, rgba(63, 63, 70, 0.1) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(63, 63, 70, 0.1) 1px, transparent 1px)
                  `,
                  backgroundSize: "24px 24px",
                }}
              >
                {/* Badge Centralizado */}
                <span className="bg-[#18181b]/90 border border-zinc-800 px-4 py-1.5 rounded-md text-xs font-medium tracking-wider text-zinc-400 backdrop-blur-sm uppercase">
                  {project.badgeText}
                </span>
              </div>

              {/* Informações do Projeto */}
              <div className="p-6 flex flex-col justify-between flex-1 gap-6">
                <div className="flex flex-col gap-3">
                  {/* Título e Links */}
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-bold text-zinc-100 tracking-tight text-xl">
                      {project.title}
                    </h3>
                    <div className="flex items-center gap-3 text-zinc-500">
                      {hasValidUrl(project.githubUrl) && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-zinc-300 transition-colors"
                          title="Ver repositório"
                        >
                          <Gamepad2 className="w-5 h-5" />{" "}
                        </a>
                      )}
                      {hasValidUrl(project.deployUrl) && (
                        <a
                          href={project.deployUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="hover:text-zinc-300 transition-colors"
                          title="Ver aplicação"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Descrição */}
                  <p className="text-sm text-zinc-400 leading-relaxed max-w-[95%]">
                    {project.description}
                  </p>
                </div>

                {/* Tags das Techs */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-[#18181b] border border-zinc-800/80 text-xs px-2.5 py-1 rounded-md text-zinc-400 font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
