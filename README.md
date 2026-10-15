# Portfólio / Luan Henrique

Portfólio profissional de Luan Henrique, desenvolvedor front-end e estudante de
Engenharia de Software com experiência na construção de produtos digitais.

## Destaques

- Apresentação profissional e experiência no Sicredi.
- Cases com páginas detalhadas e metadata individual.
- Projetos públicos ligados diretamente ao GitHub.
- Case confidencial apresentado sem expor código ou cliente.
- SEO técnico com Open Graph, sitemap, robots e manifest.
- Layout responsivo e navegação acessível.
- Validação automática com ESLint, TypeScript, testes e GitHub Actions.

## Projetos apresentados

- **Sistema Jurídico de Gestão:** case profissional confidencial.
- **HoraFit:** aplicação full stack para catálogo, carrinho, pedidos e gestão.
- **AeroTelemetry API:** API REST experimental para gerenciamento de veículos.

## Tecnologias

Next.js, React, TypeScript, Tailwind CSS e Lucide.

## Executando localmente

Requisitos: Node.js 20.9 ou superior.

```bash
cd frontend
npm ci
npm run dev
```

A aplicação ficará disponível em `http://localhost:3000`.

## Validações

```bash
cd frontend
npm run check
npm run build
```

## Configuração

Copie as variáveis documentadas em `frontend/.env.example` para um arquivo
`.env.local`. Em produção, configure `NEXT_PUBLIC_SITE_URL` com a URL pública do
portfólio para gerar canonical, sitemap e robots corretamente.

Na Vercel, defina `frontend` como Root Directory. O projeto usa a integração
nativa do Next.js e não precisa de rewrites para `index.html`.

## Conteúdo dos cases

Os dados ficam centralizados em `frontend/lib/projects.ts`. Cada slug gera uma
rota estática em `/projetos/[slug]` durante o build.

## Contato

- [E-mail](mailto:luanhenriquetaborda.s@gmail.com)
- [LinkedIn](https://www.linkedin.com/in/luanhenriquets/)
- [GitHub](https://github.com/Luanhts)
