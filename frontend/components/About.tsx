export function About() {
  return (
    <section id="sobre" className="scroll-mt-32 md:scroll-mt-28 border-y border-zinc-900 text-white py-20 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col gap-8">
        {/* Identificador da Seção */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-zinc-500 uppercase">
          <span className="w-8 h-[1px] bg-zinc-700"></span>
          <span>01 — Sobre</span>
        </div>

        {/* Título Principal */}
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight max-w-4xl text-zinc-100">
          Engenharia de software com foco em produto.
        </h2>

        {/* Grid de Conteúdo */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-16 text-base text-zinc-400 leading-relaxed mt-4">
          <p>
            Sou desenvolvedor com formação em Engenharia de Software e cerca de
            1,5 ano de experiência prática construindo produtos no mercado. Atuo
            do design de interface ao deploy, com olhar para arquitetura limpa,
            testes e métricas de uso.
          </p>
          <p>
            Acredito que boas interfaces são silenciosas: respeitam o tempo do
            usuário, comunicam com clareza e escalam sem perder consistência. É
            isso que busco entregar em cada componente, fluxo e release.
          </p>
        </div>
      </div>
    </section>
  );
}
