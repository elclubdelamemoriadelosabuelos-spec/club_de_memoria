import type { SocialLink } from "./Footer.types"
import { COMPANY, CONTACT, SOCIAL_MEDIA } from "@/lib/constants"

/**
 * Company info
 */
export const COMPANY_INFO = {
  name: COMPANY.name,
  description: COMPANY.description,
  logo: COMPANY.logo,
}

/**
 * Contact info
 */
export const CONTACT_INFO = {
  phone: CONTACT.phoneDisplay,
  location: COMPANY.location,
}

/**
 * Social links
 */
export const SOCIAL_LINKS: SocialLink[] = [
  SOCIAL_MEDIA.facebook,
  SOCIAL_MEDIA.instagram,
  SOCIAL_MEDIA.tiktok,
]

/**
 * Get current year for copyright
 */
export function getCurrentYear(): number {
  return new Date().getFullYear()
}
