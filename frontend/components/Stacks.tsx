import { Braces, Code2, Cpu, Database, Layers } from "lucide-react";
import React from "react";

interface StackItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

export function Stacks() {
  const technologies: StackItem[] = [
    {
      icon: <Code2 className="w-5 h-5 text-zinc-400" />,
      title: "Angular",
      description: "SPA empresariais com RxJS e arquitetura modular.",
    },
    {
      icon: <Layers className="w-5 h-5 text-zinc-400" />,
      title: "React",
      description: "Componentização e estados previsíveis em larga escala.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-zinc-400" />,
      title: "Next.js",
      description: "SSR, ISR e rotas otimizadas para performance.",
    },
    {
      icon: <Braces className="w-5 h-5 text-zinc-400" />,
      title: "TypeScript",
      description: "Tipagem estática para código seguro e escalável.",
    },
    {
      icon: <Database className="w-5 h-5 text-zinc-400" />,
      title: "Prisma",
      description: "ORM type-safe com migrações previsíveis.",
    },
  ];

  return (
    <section className="border-b text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Identificador da Seção */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-zinc-500 uppercase">
          <span className="w-8 h-[1px] bg-zinc-700"></span>
          <span>02 — Stacks</span>
        </div>

        {/* Cabeçalho */}
        <div className="flex flex-col gap-3 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-100">
            Tecnologias do dia a dia.
          </h2>
          <p className="text-base text-zinc-400">
            Ferramentas que uso para entregar produtos rápidos, tipados e
            mantíveis.
          </p>
        </div>

        {/* Grid de Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-6">
          {technologies.map((tech, index) => (
            <div
              key={index}
              className="bg-[#121214]/40 border border-zinc-800/60 rounded-xl p-6 flex flex-col gap-4 hover:border-zinc-700/80 transition-colors duration-300"
            >
              {/* Container do Ícone */}
              <div className="w-10 h-10 rounded-lg bg-[#18181b] flex items-center justify-center border border-zinc-800">
                {tech.icon}
              </div>

              {/* Texto do Card */}
              <div className="flex flex-col gap-1.5">
                <h3 className="font-semibold text-zinc-100 tracking-tight text-lg">
                  {tech.title}
                </h3>
                <p className="text-sm text-zinc-400 leading-relaxed">
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
