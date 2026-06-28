
export function Contact() {
  const currentYear = new Date().getFullYear();

  return (
    <section className="border-1 text-white pt-24 pb-12 px-6 md:px-12 lg:px-24">
      <div className="max-w-6xl mx-auto flex flex-col items-center text-center gap-8">
        {/* Identificador da Seção */}
        <div className="flex items-center gap-3 text-xs tracking-widest text-zinc-500 uppercase justify-center">
          <span className="w-8 h-[1px] bg-zinc-700"></span>
          <span>04 — Contato</span>
        </div>

        {/* Textos Principais */}
        <div className="flex flex-col gap-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-zinc-100">
            Vamos construir algo juntos.
          </h2>
          <p className="text-base text-zinc-400 max-w-lg mx-auto leading-relaxed">
            Aberto a oportunidades, colaborações e conversas sobre produto e
            engenharia.
          </p>
        </div>

        {/* Grupo de Botões/Links */}
        <div className="flex flex-wrap items-center justify-center gap-3 mt-4">
          {/* Botão E-mail */}
          <a
            href="mailto:seu-email@dominio.com"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121214]/40 border border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-200 text-zinc-400 text-sm font-medium rounded-xl transition-all duration-300"
          >
            <svg
              className="w-4 h-4 stroke-current"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <rect width="20" height="16" x="2" y="4" rx="2" />
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
            </svg>
            <span>E-mail</span>
          </a>

          {/* Botão LinkedIn */}
          <a
            href="https://www.linkedin.com/in/luanhenriquets/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121214]/40 border border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-200 text-zinc-400 text-sm font-medium rounded-xl transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
            </svg>
            <span>LinkedIn</span>
          </a>

          {/* Botão GitHub */}
          <a
            href="https://github.com/Luanhts"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#121214]/40 border border-zinc-800/80 hover:border-zinc-700 hover:text-zinc-200 text-zinc-400 text-sm font-medium rounded-xl transition-all duration-300"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.0.069-.608.0 1.003.708 1.531 2.032 1.531.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
              />
            </svg>
            <span>GitHub</span>
          </a>
        </div>

        {/* Footer Divisor e Copyright */}
        <div className="w-full mt-16 pt-8 border-t border-zinc-900 flex flex-col items-center">
          <p className="text-xs text-zinc-600 tracking-wide font-light">
            © {currentYear} — Construído com cuidado e atenção aos detalhes.
          </p>
        </div>
      </div>
    </section>
  );
}
