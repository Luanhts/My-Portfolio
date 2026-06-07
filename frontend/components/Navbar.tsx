import { Download } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/50 bg-zinc-950/70 backdrop-blur-md">
      <div className="container mx-auto flex h-16 max-w-6xl items-center justify-between px-4">
        {/* LOGO / BRANDING */}
        <div className="flex items-center gap-2">
          <div className="flex h-8 w-8 items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900 font-bold text-zinc-50 text-sm">
            DV
          </div>
          <span className="text-zinc-400 font-medium text-sm">/ portfolio</span>
        </div>

        {/* NAVEGAÇÃO CENTRAL */}
        <nav className="hidden md:flex items-center gap-6">
          <a
            href="#sobre"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Sobre
          </a>
          <a
            href="#stacks"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Stacks
          </a>
          <a
            href="#projetos"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Projetos
          </a>
          <a
            href="#contato"
            className="text-sm font-medium text-zinc-400 hover:text-zinc-50 transition-colors"
          >
            Contato
          </a>
        </nav>

        {/* BOTÃO BAIXAR CV (Estilo Shadcn Button Outline) */}
        <div>
          <a
            href="/seu-curriculo.pdf"
            download
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-zinc-800 bg-zinc-900/50 px-4 py-2 text-sm font-medium text-zinc-50 shadow-sm transition-colors hover:bg-zinc-900 hover:text-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-400"
          >
            <Download className="h-4 w-4 text-zinc-400" />
            Baixar CV
          </a>
        </div>
      </div>
    </header>
  );
}
