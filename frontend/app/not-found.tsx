import { ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function NotFound() {
  return (
    <main id="conteudo" className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-xl text-center">
        <p className="text-sm font-medium uppercase tracking-[0.2em] text-zinc-400">
          Erro 404
        </p>
        <h1 className="mt-5 text-4xl font-bold tracking-tight text-zinc-50 md:text-6xl">
          Esta página não foi encontrada.
        </h1>
        <p className="mt-5 leading-relaxed text-zinc-400">
          O endereço pode ter mudado ou o conteúdo não está mais disponível.
        </p>
        <Link
          href="/"
          className="mx-auto mt-8 inline-flex h-11 items-center gap-2 rounded-lg bg-zinc-100 px-5 text-sm font-medium text-zinc-950 transition-colors hover:bg-white focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400"
        >
          <ArrowLeft className="size-4" aria-hidden="true" />
          Voltar ao início
        </Link>
      </div>
    </main>
  );
}
