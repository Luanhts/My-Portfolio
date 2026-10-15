import { ArrowUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const navigation = [
  { href: "/#sobre", label: "Sobre", shortLabel: "Sobre" },
  { href: "/#experiencia", label: "Experiência", shortLabel: "Experiência" },
  { href: "/#projetos", label: "Projetos", shortLabel: "Projetos" },
  { href: "/#tecnologias", label: "Tecnologias", shortLabel: "Tech" },
] as const;

export function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-zinc-800/70 bg-zinc-950/85 backdrop-blur-xl">
      <a
        href="#conteudo"
        className="fixed left-4 top-3 z-[60] -translate-y-20 rounded-md bg-zinc-50 px-4 py-2 text-sm font-medium text-zinc-950 transition-transform focus:translate-y-0"
      >
        Pular para o conteúdo
      </a>
      <div className="mx-auto flex max-w-6xl flex-col px-4">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/#topo"
            aria-label="Luan Henrique, voltar ao início"
            className="group flex items-center gap-3 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            <Image
              src="/icon.svg"
              alt=""
              width={36}
              height={36}
              aria-hidden="true"
              className="size-9 shrink-0 rounded-xl transition-[filter] group-hover:brightness-125"
            />
            <span className="text-sm font-semibold tracking-tight text-zinc-100 transition-colors group-hover:text-white">
              Luan Henrique
            </span>
          </Link>

          <nav aria-label="Navegação principal" className="hidden items-center gap-6 md:flex">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-sm text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <Link
            href="/#contato"
            className="inline-flex h-9 items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900/60 px-4 text-sm font-medium text-zinc-100 transition-colors hover:border-zinc-500 hover:bg-zinc-900 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
          >
            Contato
            <ArrowUpRight className="size-4 text-zinc-400" aria-hidden="true" />
          </Link>
        </div>

        <nav
          aria-label="Navegação móvel"
          className="-mx-2 flex items-center gap-1 overflow-x-auto border-t border-zinc-900 md:hidden"
        >
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="inline-flex min-h-11 items-center whitespace-nowrap rounded-sm px-2 text-sm font-medium text-zinc-400 transition-colors hover:text-zinc-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
            >
              {item.shortLabel}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
