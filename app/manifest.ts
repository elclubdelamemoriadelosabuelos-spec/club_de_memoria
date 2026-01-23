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
    theme_color: "#2EB9BE",
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
