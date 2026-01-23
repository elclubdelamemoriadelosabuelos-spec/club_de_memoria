import { Brain, Heart, Users2, Dumbbell, Apple } from "lucide-react"
import { pillarBgClasses } from "@/lib/colors"
import type { Pillar } from "./Method.types"

/**
 * RESTOR method pillars
 */
export const PILLARS: Pillar[] = [
  {
    icon: Dumbbell,
    title: "Física",
    color: pillarBgClasses.fisica,
    description: "Actividad física adaptada para fortalecer el cuerpo, mejorar la movilidad y promover la autonomía.",
  },
  {
    icon: Heart,
    title: "Emocional",
    color: pillarBgClasses.emocional,
    description:
      "Acompañamiento emocional que fomenta la autoestima, la expresión de sentimientos y el bienestar afectivo.",
  },
  {
    icon: Apple,
    title: "Nutricional",
    color: pillarBgClasses.nutricional,
    description:
      "Orientación en hábitos alimenticios saludables que apoyan la energía, la salud y la calidad de vida.",
  },
  {
    icon: Users2,
    title: "Social",
    color: pillarBgClasses.social,
    description:
      "Espacios de interacción que fortalecen vínculos, promueven la convivencia y previenen el aislamiento.",
  },
  {
    icon: Brain,
    title: "Cognitiva",
    color: pillarBgClasses.cognitiva,
    description: "Estimulación de la memoria, atención y funciones cognitivas para mantener la mente activa.",
  },
]
