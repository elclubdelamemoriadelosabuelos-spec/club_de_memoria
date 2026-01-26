/**
 * Centralized constants for the entire project
 */

// ============================================================================
// COMPANY INFORMATION
// ============================================================================

export const COMPANY = {
  name: "Club de la Memoria",
  description: "El primer club de adultos mayores activos de Quito. Creando bienestar, propósito y comunidad desde 2004.",
  logo: "/logo_club_memoria.png",
  foundedYear: 2004,
  location: "José Prta N39-164, Quito-Ecuador",
  locationUrl: "https://maps.app.goo.gl/JZaoAsgJLUtvN9VU6?g_st=ic",
}

// ============================================================================
// CONTACT INFORMATION
// ============================================================================

export const CONTACT = {
  phone: "+593963596624",
  phoneDisplay: "+593 96 359 6624",
  phone2: "+593995671600",
  phone2Display: "+593 99 567 1600",
  whatsapp: {
    number: "+593963596624",
    url: "https://wa.me/+593963596624",
    defaultMessage: "Hola, me gustaría información sobre el Club de la Memoria",
  },
  schedule: {
    days: "Lunes a Viernes",
    hours: "10:00 - 16:00",
  },
}

// ============================================================================
// SOCIAL MEDIA
// ============================================================================

export const SOCIAL_MEDIA = {
  facebook: {
    name: "Facebook",
    url: "https://www.facebook.com/profile.php?id=61565484248833",
    icon: "facebook" as const,
  },
  instagram: {
    name: "Instagram",
    url: "https://www.instagram.com/clubdelamemoria",
    icon: "instagram" as const,
  },
  tiktok: {
    name: "TikTok",
    url: "https://www.tiktok.com/@clubdelamemoriauio",
    icon: "tiktok" as const,
  },
}

// ============================================================================
// NAVIGATION
// ============================================================================

export const NAVIGATION = {
  items: [
    { label: "Inicio", sectionId: "video-hero" },
    { label: "Conócenos", sectionId: "nosotros" },
    { label: "Programa", sectionId: "programa" },
    { label: "Nuestro Equipo", sectionId: "equipo" },
  ],
  cta: {
    label: "Contáctanos",
    sectionId: "contacto",
  },
}

// ============================================================================
// HERO CONTENT
// ============================================================================

export const HERO = {
  badge: "Desde 2004",
  videoHero: {
    badge: "Desde 2004 en Ecuador",
    headline: "Un club donde la vida se celebra cada día",
    ctaText: "Descubre más",
    scrollText: "Desliza",
  },
  stats: {
    value: "21+",
    label: "Años creando bienestar",
  },
  image: "/hero_image.jpeg",
}

// ============================================================================
// VIDEO CONFIGURATION
// ============================================================================

export const VIDEO = {
  hero: {
    src: "/video-hero.mp4",
  },
}

// ============================================================================
// INSTAGRAM
// ============================================================================

export const INSTAGRAM = {
  url: "https://www.instagram.com/clubdelamemoria",
  posts: [
    {
      id: 1,
      url: "https://www.instagram.com/reel/DQVdX8UDYd6/",
    },
    {
      id: 2,
      url: "https://www.instagram.com/p/DOZsKP2jR4e/",
    },
    {
      id: 3,
      url: "https://www.instagram.com/reel/DOH8QO5DbQD/",
    },
    {
      id: 4,
      url: "https://www.instagram.com/p/DSqgS47DUZ0/",
    },
    {
      id: 5,
      url: "https://www.instagram.com/reel/DSl0jndDfOv/",
    },
    {
      id: 6,
      url: "https://www.instagram.com/reel/DSTnbjZjYvB/",
    },
  ],
}

// ============================================================================
// FORM CONFIGURATION
// ============================================================================

export const FORM = {
  successMessageTimeout: 5000, // milliseconds
  initialContactForm: {
    nombre: "",
    email: "",
    telefono: "",
    mensaje: "",
  },
}

// ============================================================================
// SECTION IDs
// ============================================================================

export const SECTIONS = {
  videoHero: "video-hero",
  inicio: "inicio",
  nosotros: "nosotros",
  programa: "programa",
  metodo: "metodo",
  equipo: "equipo",
  contacto: "contacto",
  galeria: "galeria",
} as const
