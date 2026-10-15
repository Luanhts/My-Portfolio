const deploymentHost =
  process.env.NEXT_PUBLIC_SITE_URL ??
  process.env.VERCEL_PROJECT_PRODUCTION_URL ??
  process.env.VERCEL_URL;

const deploymentUrl = deploymentHost
  ? deploymentHost.startsWith("http")
    ? deploymentHost
    : `https://${deploymentHost}`
  : "http://localhost:3000";

export const siteUrl = new URL(deploymentUrl);

export const siteConfig = {
  name: "Luan Henrique",
  title: "Luan Henrique | Desenvolvedor Front-end",
  description:
    "Portfólio de Luan Henrique, desenvolvedor front-end e estudante de Engenharia de Software com experiência em interfaces e aplicações web.",
  email: "luanhenriquetaborda.s@gmail.com",
  github: "https://github.com/Luanhts",
  linkedin: "https://www.linkedin.com/in/luanhenriquets/",
} as const;
