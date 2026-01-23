import type { HeroStats } from "./Hero.types"
import { CONTACT, HERO, SECTIONS } from "@/lib/constants"

/**
 * WhatsApp URL
 */
export const WHATSAPP_URL = CONTACT.whatsapp.url

/**
 * Hero stats
 */
export const HERO_STATS: HeroStats = HERO.stats

/**
 * Hero image
 */
export const HERO_IMAGE = HERO.image

/**
 * Scroll to contact section
 */
export function scrollToContact(): void {
  const element = document.getElementById(SECTIONS.contacto)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}
