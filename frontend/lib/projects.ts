export type Project = {
  slug: string;
  title: string;
  category: string;
  summary: string;
  challenge: string;
  solution: string;
  contributions: string[];
  technologies: string[];
  status: string;
  featured: boolean;
  period?: string;
  githubUrl?: string;
  liveUrl?: string;
  visual: "legal" | "commerce" | "telemetry";
};

export const projects: Project[] = [
  {
    slug: "sistema-juridico-gestao",
    title: "Sistema Jurídico de Gestão",
    category: "Case profissional confidencial",
    summary:
      "Atuação em um sistema jurídico de gestão, apresentada de forma generalizada para preservar informações do cliente e do contexto profissional.",
    challenge:
      "Contribuir com um sistema de gestão inserido no domínio jurídico sem expor regras de negócio, dados ou informações protegidas pelo contexto profissional.",
    solution:
      "Participação na evolução de interfaces e fluxos internos. Os detalhes de implementação e as regras de negócio não são divulgados por confidencialidade.",
    contributions: [
      "Atuação no desenvolvimento de interfaces para o sistema jurídico de gestão.",
      "Preservação das informações do cliente e do contexto de negócio.",
    ],
    technologies: ["Sistema de gestão", "Case confidencial"],
    status: "Código privado por confidencialidade",
    featured: true,
    visual: "legal",
  },
  {
    slug: "horafit",
    title: "HoraFit",
    category: "Aplicação full stack",
    summary:
      "Plataforma para uma loja de alimentação saudável, com catálogo, carrinho, pedidos e painel administrativo.",
    challenge:
      "Reunir a experiência de compra e a operação da loja em uma aplicação única, cobrindo desde a descoberta dos itens até o acompanhamento dos pedidos.",
    solution:
      "Uma aplicação full stack com vitrine responsiva, carrinho persistido, checkout e uma área administrativa para produtos, estoque e pedidos.",
    contributions: [
      "Construção do storefront e dos fluxos de catálogo, carrinho e checkout.",
      "Implementação do painel administrativo para gestão da operação.",
      "Modelagem da API e das entidades de produtos, categorias e pedidos.",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "NestJS",
      "Prisma",
      "PostgreSQL",
    ],
    status: "Projeto autoral em evolução",
    featured: true,
    period: "2025-2026",
    githubUrl: "https://github.com/Luanhts/HoraFit",
    liveUrl: "https://www.ahorafitpg.com.br/",
    visual: "commerce",
  },
  {
    slug: "aero-telemetry-api",
    title: "AeroTelemetry API",
    category: "API REST experimental",
    summary:
      "API tipada com CRUD em memória para veículos, criada para praticar organização de backend e contratos HTTP.",
    challenge:
      "Estruturar operações de cadastro, consulta, atualização e remoção em uma API pequena, legível e preparada para evoluir.",
    solution:
      "Backend em Node.js e Express organizado por rotas, controller e tipos, com respostas HTTP explícitas e armazenamento temporário em memória.",
    contributions: [
      "Implementação do CRUD de veículos e dos contratos HTTP.",
      "Organização do código por responsabilidades.",
      "Configuração de TypeScript estrito, ESLint e Prettier.",
    ],
    technologies: ["Node.js", "Express", "TypeScript", "REST API"],
    status: "Projeto experimental em evolução",
    featured: true,
    period: "2026",
    githubUrl: "https://github.com/Luanhts/AeroTelemetryApi",
    visual: "telemetry",
  },
];

export const homepageProjects = projects
  .filter((project) => project.featured)
  .slice(0, 3);

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
