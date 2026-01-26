import { Heart, Users, Sparkles, Award } from "lucide-react"
import { aboutCardColors } from "@/lib/colors"
import type { Feature } from "./About.types"

/**
 * Features data for the about section
 */
export const FEATURES: Feature[] = [
  {
    icon: Heart,
    title: "Trato cercano y humano",
    description: "Un ambiente familiar donde cada persona es escuchada y acompañada con calidez.",
    color: aboutCardColors[0].color,
    accentColor: aboutCardColors[0].accent,
  },
  {
    icon: Users,
    title: "Comunidad y pertenencia",
    description: "Más que un club, somos una familia donde se comparte, se ríe y se crean lazos significativos.",
    color: aboutCardColors[1].color,
    accentColor: aboutCardColors[1].accent,
  },
  {
    icon: Sparkles,
    title: "Actividades con propósito",
    description: "Cada actividad está diseñada para estimular la mente, expresar emociones y conectar con otros.",
    color: aboutCardColors[2].color,
    accentColor: aboutCardColors[2].accent,
  },
  {
    icon: Award,
    title: "Pioneros en Ecuador",
    description: "El primer club de adultos mayores activos del país, con 21 años de experiencia comprobada.",
    color: aboutCardColors[3].color,
    accentColor: aboutCardColors[3].accent,
  },
]

/**
 * Quote for the about section
 */
export const ABOUT_QUOTE = "Aquí no vienen a pasar el tiempo,\nvienen a vivirlo"

/**
 * Navigate to next slide
 */
export function getNextSlide(current: number, total: number): number {
  return (current + 1) % total
}

/**
 * Navigate to previous slide
 */
export function getPrevSlide(current: number, total: number): number {
  return (current - 1 + total) % total
}
