import { VIDEO, HERO, SECTIONS } from "@/lib/constants"

/**
 * Video configuration
 */
export const VIDEO_CONFIG = VIDEO.hero

/**
 * Hero content
 */
export const HERO_CONTENT = HERO.videoHero

/**
 * Scroll to next section
 */
export function scrollToNextSection(): void {
  const element = document.getElementById(SECTIONS.inicio)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}
