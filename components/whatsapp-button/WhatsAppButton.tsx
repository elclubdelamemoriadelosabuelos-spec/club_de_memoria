"use client"

import type { WhatsAppButtonProps } from "./WhatsAppButton.types"
import { getWhatsAppUrl, WHATSAPP_COLORS } from "./WhatsAppButton.helper"
import { WhatsAppIcon } from "@/components/ui/whatsapp-icon"

export function WhatsAppButton({ className }: WhatsAppButtonProps) {
  return (
    <a
      href={getWhatsAppUrl()}
      target="_blank"
      rel="noopener noreferrer"
      className={`fixed bottom-6 right-6 text-white w-14 h-14 md:w-16 md:h-16 rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-all z-50 group ${className ?? ""}`}
      style={{ 
        backgroundColor: WHATSAPP_COLORS.normal,
      }}
      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = WHATSAPP_COLORS.hover}
      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = WHATSAPP_COLORS.normal}
      aria-label="Contactar por WhatsApp"
    >
      <WhatsAppIcon className="group-hover:scale-110 transition-transform md:w-8 md:h-8" />
    </a>
  )
}
