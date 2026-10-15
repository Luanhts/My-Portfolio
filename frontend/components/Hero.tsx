import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section
      id="topo"
      className="relative mx-auto flex min-h-[calc(100vh-5rem)] max-w-6xl scroll-mt-36 flex-col justify-center px-6 py-20 md:px-12 md:py-28"
    >
      <div className="pointer-events-none absolute inset-x-6 top-20 -z-10 h-80 bg-[radial-gradient(circle_at_center,rgba(63,63,70,0.22),transparent_68%)]" />

      <div className="grid items-center gap-14 lg:grid-cols-[minmax(0,1.35fr)_minmax(280px,0.65fr)] lg:gap-10">
        <div>
          <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-xs font-medium text-zinc-300">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75 motion-reduce:animate-none" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Disponível para oportunidades front-end
          </div>

          <p className="mb-4 text-sm font-medium uppercase tracking-[0.18em] text-zinc-400">
            Olá, eu sou Luan Henrique
          </p>
          <h1 className="max-w-4xl text-4xl font-bold tracking-[-0.04em] text-zinc-50 sm:text-5xl md:text-6xl">
            Desenvolvedor front-end que transforma regras complexas em interfaces claras.
          </h1>

          <p className="mt-7 max-w-3xl text-base leading-relaxed text-zinc-300 sm:text-lg md:text-xl">
            Estudante de Engenharia de Software com 1 ano como Estagiário Front-end
            no Sicredi. Trabalho na construção e evolução de interfaces com atenção
            à qualidade do código, consistência visual e experiência de uso.
          </p>

          <div className="mt-10 flex w-full flex-col items-stretch gap-4 sm:w-auto sm:flex-row sm:items-center">
            <a
              href="#projetos"
              className="group inline-flex h-11 items-center justify-center gap-2 rounded-md bg-zinc-50 px-6 text-sm font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              Ver projetos
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
            </a>

            <a
              href="#experiencia"
              className="inline-flex h-11 items-center justify-center rounded-md border border-zinc-700 bg-zinc-950 px-6 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              Minha experiência
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
