import { thirdPartyColors } from "@/lib/colors"
import { CONTACT } from "@/lib/constants"

/**
 * Generate WhatsApp URL with default message
 */
export function getWhatsAppUrl(): string {
  const encodedMessage = encodeURIComponent(CONTACT.whatsapp.defaultMessage)
  return `https://wa.me/${CONTACT.whatsapp.number}?text=${encodedMessage}`
}

/**
 * Get WhatsApp colors
 */
export const WHATSAPP_COLORS = {
  normal: thirdPartyColors.whatsapp,
  hover: thirdPartyColors.whatsappHover,
}
