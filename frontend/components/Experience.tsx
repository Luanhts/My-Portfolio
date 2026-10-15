import { Building2 } from "lucide-react";
import { SectionHeading } from "@/components/SectionHeading";

export function Experience() {
  return (
    <section
      id="experiencia"
      className="scroll-mt-36 border-b border-zinc-900 px-6 py-20 md:px-12 lg:px-24"
    >
      <div className="mx-auto flex max-w-6xl flex-col gap-10">
        <SectionHeading
          number="02"
          label="Experiência"
          title="Experiência real em desenvolvimento front-end."
          description="Vivência profissional colaborando com times e evoluindo interfaces usadas no dia a dia."
        />

        <article className="grid gap-8 rounded-2xl border border-zinc-800 bg-zinc-900/30 p-6 md:grid-cols-[minmax(0,0.7fr)_minmax(0,1.3fr)] md:p-8">
          <div className="flex items-start gap-4">
            <div className="flex size-11 shrink-0 items-center justify-center rounded-xl border border-zinc-700 bg-zinc-950 text-zinc-300">
              <Building2 className="size-5" aria-hidden="true" />
            </div>
            <div>
              <p className="font-semibold text-zinc-100">Sicredi</p>
              <p className="mt-1 text-sm text-zinc-400">1 ano de experiência</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-medium uppercase tracking-[0.16em] text-zinc-400">
              Estagiário Front-end
            </p>
            <h3 className="mt-3 text-2xl font-semibold tracking-tight text-zinc-100">
              Desenvolvimento e evolução de interfaces para aplicações web.
            </h3>
            <p className="mt-4 max-w-2xl leading-relaxed text-zinc-400">
              Atuação profissional no frontend, colaborando com o time na
              construção e manutenção de experiências consistentes, com atenção
              à clareza dos fluxos, qualidade do código e regras de negócio.
            </p>
          </div>
        </article>
      </div>
    </section>
  );
}
