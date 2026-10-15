import { Braces, Code2, Cpu, Database, Layers, Server } from "lucide-react";
import type { ReactNode } from "react";
import { SectionHeading } from "@/components/SectionHeading";

interface StackItem {
  icon: ReactNode;
  title: string;
  description: string;
}

const technologies: StackItem[] = [
    {
      icon: <Code2 className="w-5 h-5 text-zinc-400" />,
      title: "Angular",
      description: "Componentes, formulários e fluxos reativos com RxJS.",
    },
    {
      icon: <Layers className="w-5 h-5 text-zinc-400" />,
      title: "React",
      description: "Interfaces componentizadas e organização de estado.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-zinc-400" />,
      title: "Next.js",
      description: "App Router, rotas estáticas e renderização no servidor.",
    },
    {
      icon: <Braces className="w-5 h-5 text-zinc-400" />,
      title: "TypeScript",
      description: "Tipagem estática para contratos e código mais previsível.",
    },
    {
      icon: <Database className="w-5 h-5 text-zinc-400" />,
      title: "Prisma e PostgreSQL",
      description: "Modelagem de dados e persistência para aplicações web.",
    },
    {
      icon: <Server className="w-5 h-5 text-zinc-400" />,
      title: "Node.js e NestJS",
      description: "APIs organizadas, tipadas e integradas ao frontend.",
    },
];

export function Stacks() {

  return (
    <section
      id="tecnologias"
      className="scroll-mt-36 border-b border-zinc-900 px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-12">
        <SectionHeading
          number="04"
          label="Tecnologias"
          title="Tecnologias aplicadas em projetos."
          description="Ferramentas usadas na construção de interfaces, APIs e aplicações web."
        />

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {technologies.map((tech) => (
            <div
              key={tech.title}
              className="flex flex-col gap-4 rounded-xl border border-zinc-800 bg-zinc-900/30 p-6 transition-colors hover:border-zinc-700"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-950">
                {tech.icon}
              </div>

              <div className="flex flex-col gap-1.5">
                <h3 className="text-lg font-semibold tracking-tight text-zinc-100">
                  {tech.title}
                </h3>
                <p className="text-sm leading-relaxed text-zinc-400">
                  {tech.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
