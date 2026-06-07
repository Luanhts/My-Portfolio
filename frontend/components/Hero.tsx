import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative flex flex-col items-center justify-center text-center px-4 pt-24 pb-16 md:pt-32 md:pb-24 max-w-4xl mx-auto">
      {/* BADGE: Disponível para novos projetos */}
      <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/30 px-4 py-1.5 text-xs text-zinc-400 font-medium mb-8">
        <span className="relative flex h-2 w-2">
          {/* Efeito pulsante discreto */}
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Disponível para novos projetos
      </div>

      {/* TÍTULO PRINCIPAL (H1 & H2 combinados) */}
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-zinc-50 mb-4">
        Desenvolvedor Front-end
      </h1>
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-zinc-500 mb-8">
        Construindo interfaces modernas e escaláveis.
      </h2>

      {/* DESCRIÇÃO DA PROPOSTA DE VALOR */}
      <p className="text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal mb-10">
        Engenheiro de software focado em entregar produtos digitais com
        arquitetura limpa, performance e experiência do usuário em primeiro
        lugar. Transformo requisitos complexos em interfaces simples, rápidas e
        mensuráveis.
      </p>

      {/* BOTÕES DE CHAMADA PARA AÇÃO (CTAs) */}
      <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
        {/* Botão Primário (Ver Projetos) */}
        <a
          href="#projetos"
          className="inline-flex h-11 w-full sm:w-auto items-center justify-center gap-2 rounded-md bg-zinc-50 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-zinc-200 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
        >
          Ver Projetos
          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Botão Secundário (Entrar em Contato) */}
        <a
          href="#contato"
          className="inline-flex h-11 w-full sm:w-auto items-center justify-center rounded-md border border-zinc-850 bg-zinc-950 px-6 text-sm font-medium text-zinc-50 transition-colors hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
        >
          Entrar em Contato
        </a>
      </div>
    </section>
  );
}
