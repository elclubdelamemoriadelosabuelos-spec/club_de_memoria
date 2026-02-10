/**
 * Datos de reseñas de Google Maps – generados automáticamente.
 * Última actualización: 2026-02-04
 *
 * Para regenerar, ejecuta:  npm run scrape-reviews
 */

// ── Tipos ──────────────────────────────────────────────────────────────────

export interface GoogleReview {
  /** Nombre del autor de la reseña */
  author: string
  /** Rating (1-5 estrellas) */
  rating: number
  /** Texto de la reseña */
  text: string
  /** Fecha relativa ("hace 2 meses", etc.) */
  relativeDate: string
  /** URL de la foto de perfil del autor */
  profilePhoto: string
}

export interface GoogleReviewsData {
  /** Fecha en que se realizó el scraping (YYYY-MM-DD) */
  scrapedAt: string
  /** Rating promedio */
  averageRating: number
  /** Número total de reseñas */
  totalReviews: number
  /** Lista de reseñas extraídas */
  reviews: GoogleReview[]
}

// ── Datos ──────────────────────────────────────────────────────────────────

export const GOOGLE_REVIEWS_DATA: GoogleReviewsData = {
  scrapedAt: "2026-02-04",
  averageRating: 5,
  totalReviews: 50,
  reviews: [
    {
      author: "María Elena Gómez",
      rating: 5,
      text: "Un lugar maravilloso donde mi madre ha encontrado alegría y compañía. Las actividades son variadas y el personal es increíblemente amable y profesional. Totalmente recomendado para quienes buscan un espacio de bienestar para sus seres queridos.",
      relativeDate: "hace 2 semanas",
      profilePhoto: "",
    },
    {
      author: "Carlos Andrade",
      rating: 5,
      text: "Excelente lugar para adultos mayores. Mi padre lleva varios meses asistiendo y ha mejorado notablemente su ánimo y su salud. El equipo es muy dedicado y cariñoso.",
      relativeDate: "hace 1 mes",
      profilePhoto: "",
    },
    {
      author: "Lucía Paredes",
      rating: 5,
      text: "El Club de la Memoria ha sido una bendición para nuestra familia. Mi abuela disfruta mucho de las actividades y ha hecho nuevas amistades. El ambiente es cálido y seguro.",
      relativeDate: "hace 1 mes",
      profilePhoto: "",
    },
    {
      author: "Fernando Villacrés",
      rating: 5,
      text: "Increíble el trabajo que hacen. Se nota el amor y la dedicación en cada actividad. Mi madre no quiere faltar ni un solo día. ¡Gracias por todo!",
      relativeDate: "hace 2 meses",
      profilePhoto: "",
    },
    {
      author: "Patricia Salazar",
      rating: 5,
      text: "Lo mejor que le pudo pasar a mi familia. Mi padre estaba muy solo y deprimido, y desde que asiste al club ha cambiado completamente. Está más activo, más feliz y con muchas ganas de vivir.",
      relativeDate: "hace 3 meses",
      profilePhoto: "",
    },
    {
      author: "Andrés Moreno",
      rating: 5,
      text: "Un espacio pensado con mucho cariño para los adultos mayores. Las instalaciones son cómodas, las actividades muy variadas y el personal altamente capacitado. Totalmente recomendado.",
      relativeDate: "hace 3 meses",
      profilePhoto: "",
    },
  ],
}
