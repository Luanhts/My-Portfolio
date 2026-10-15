import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Luan Henrique | Desenvolvedor Front-end",
    short_name: "Luan Henrique",
    description:
      "Portfólio profissional de Luan Henrique, desenvolvedor front-end.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    lang: "pt-BR",
  };
}
