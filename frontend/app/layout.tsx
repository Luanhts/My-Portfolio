import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

export const metadata: Metadata = {
  title: "Luan Henrique | Desenvolvedor de Software",
  description:
    "Portfólio de Luan Henrique, desenvolvedor de software focado em interfaces modernas, performance e produtos escaláveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className="dark scroll-smooth">
      {/* bg-zinc-950: Deixa o fundo no grafite super escuro da imagem
        text-zinc-50: Deixa os textos brancos por padrão
      */}
      <body className={`${inter.className} bg-zinc-950 text-zinc-50 min-h-screen antialiased`}>
        {children}
      </body>
    </html>
  );
}
