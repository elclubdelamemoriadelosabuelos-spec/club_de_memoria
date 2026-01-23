import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Club de la Memoria - Mejor Club para Adultos Mayores 60+ en Quito",
    short_name: "Club Memoria",
    description:
      "El primer y mejor club de adultos mayores 60+ en Quito desde 2004. Bienestar integral con actividades físicas, cognitivas y creativas. Alternativa a Club Mitra.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#2EB9BE",
    categories: ["health", "lifestyle", "social"],
    lang: "es-EC",
    icons: [
      {
        src: "/clubmemoria/android-icon-36x36.png",
        sizes: "36x36",
        type: "image/png",
      },
      {
        src: "/clubmemoria/android-icon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        src: "/clubmemoria/android-icon-72x72.png",
        sizes: "72x72",
        type: "image/png",
      },
      {
        src: "/clubmemoria/android-icon-96x96.png",
        sizes: "96x96",
        type: "image/png",
      },
      {
        src: "/clubmemoria/android-icon-144x144.png",
        sizes: "144x144",
        type: "image/png",
      },
      {
        src: "/clubmemoria/android-icon-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
    ],
  }
}
