/**
 * Colores de la identidad de marca - Club de la Memoria
 * Basados en los pilares del Método RESTOR
 */

// Colores principales de la marca
export const brandColors = {
  // Turquesa - Física (Primary)
  turquoise: "#2EB9BE",
  // Naranja - Emocional (Secondary)
  orange: "#F87229",
  // Amarillo/Dorado - Nutricional (Accent)
  gold: "#FAB033",
  // Rojo/Coral - Social
  coral: "#FF3E59",
  // Azul Navy - Cognitiva
  navy: "#033A64",
  // Texto oscuro
  textDark: "#1a1a2e",
  // Blanco
  white: "#ffffff",
} as const

// Colores de terceros (WhatsApp, etc.)
export const thirdPartyColors = {
  whatsapp: "#25D366",
  whatsappHover: "#20BA5A",
} as const

// Alias semánticos para los pilares
export const pillarColors = {
  fisica: brandColors.turquoise,
  emocional: brandColors.orange,
  nutricional: brandColors.gold,
  social: brandColors.coral,
  cognitiva: brandColors.navy,
} as const

// Clases de Tailwind para backgrounds
export const pillarBgClasses = {
  fisica: "bg-[#2EB9BE]",
  emocional: "bg-[#F87229]",
  nutricional: "bg-[#FAB033]",
  social: "bg-[#FF3E59]",
  cognitiva: "bg-[#033A64]",
} as const

// Configuración de colores para cards del programa
export const programCardColors = [
  { 
    name: "fisica",
    bg: pillarBgClasses.fisica, 
    hover: "hover:border-[#2EB9BE]/50", 
    accent: brandColors.turquoise 
  },
  { 
    name: "emocional",
    bg: pillarBgClasses.emocional, 
    hover: "hover:border-[#F87229]/50", 
    accent: brandColors.orange 
  },
  { 
    name: "nutricional",
    bg: pillarBgClasses.nutricional, 
    hover: "hover:border-[#FAB033]/50", 
    accent: brandColors.gold 
  },
  { 
    name: "cognitiva",
    bg: pillarBgClasses.cognitiva, 
    hover: "hover:border-[#033A64]/50", 
    accent: brandColors.navy 
  },
  { 
    name: "social",
    bg: pillarBgClasses.social, 
    hover: "hover:border-[#FF3E59]/50", 
    accent: brandColors.coral 
  },
  { 
    name: "adicional",
    bg: pillarBgClasses.fisica, 
    hover: "hover:border-[#2EB9BE]/50", 
    accent: brandColors.turquoise 
  },
] as const

// Colores para el componente About
export const aboutCardColors = [
  { color: "from-primary to-primary/80", accent: brandColors.turquoise },
  { color: "from-accent to-accent/80", accent: brandColors.orange },
  { color: "from-secondary to-secondary/80", accent: brandColors.gold },
  { color: "from-primary to-accent", accent: brandColors.turquoise },
] as const

// Tipo para los nombres de pilares
export type PillarName = keyof typeof pillarColors
