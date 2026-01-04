import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Club de la Memoria - Espacio de Bienestar para Adultos Mayores",
    short_name: "Club de la Memoria",
    description:
      "El primer club de adultos mayores activos del Ecuador desde 2004. Programa integral con estimulación cognitiva, expresión emocional y encuentro social.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#33BBD2",
    icons: [
      {
        src: "/icon-light-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/icon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  }
}
