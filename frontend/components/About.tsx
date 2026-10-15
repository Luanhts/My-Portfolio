import { SectionHeading } from "@/components/SectionHeading";

export function About() {
  return (
    <section
      id="sobre"
      className="scroll-mt-36 border-y border-zinc-900 px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading
          number="01"
          label="Sobre"
          title="Engenharia de software aplicada a interfaces web."
        />

        <div className="grid gap-8 text-base leading-relaxed text-zinc-400 md:grid-cols-2 lg:gap-16 md:text-lg">
          <p>
            Sou estudante de Engenharia de Software e desenvolvedor com 1 ano de
            experiência como Estagiário Front-end no Sicredi. Minha atuação é
            concentrada no frontend, transformando regras e fluxos de negócio em
            interfaces claras, consistentes e fáceis de manter.
          </p>
          <p>
            Acredito que boas interfaces são silenciosas: respeitam o tempo do
            usuário, comunicam com clareza e escalam sem perder consistência. É
            isso que busco entregar em cada componente, fluxo e versão.
          </p>
        </div>
      </div>
    </section>
  );
}
