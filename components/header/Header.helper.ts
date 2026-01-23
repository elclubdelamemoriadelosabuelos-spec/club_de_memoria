import type { NavItem } from "./Header.types"
import { COMPANY, NAVIGATION, SECTIONS } from "@/lib/constants"

/**
 * Company logo
 */
export const COMPANY_LOGO = {
  src: COMPANY.logo,
  alt: COMPANY.name,
}

/**
 * Navigation items
 */
export const NAV_ITEMS: NavItem[] = NAVIGATION.items

/**
 * CTA button config
 */
export const CTA_BUTTON = NAVIGATION.cta

/**
 * Scroll to a section smoothly
 */
export function scrollToSection(id: string, callback?: () => void): void {
  const element = document.getElementById(id)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
    callback?.()
  }
}
