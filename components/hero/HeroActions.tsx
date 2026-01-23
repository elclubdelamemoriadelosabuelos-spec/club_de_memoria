"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { WHATSAPP_URL, scrollToContact } from "./Hero.helper"

/**
 * Acciones del Hero - Renderizado en cliente
 * Solo los botones necesitan interactividad
 */
export function HeroActions() {
  return (
    <div className="flex flex-col sm:flex-row gap-4 pt-4">
      <Button
        size="lg"
        onClick={scrollToContact}
        className="bg-primary hover:bg-[#F87229] hover:text-white text-primary-foreground font-semibold text-base md:text-xl px-8 py-6 group"
      >
        Agenda tu visita
        <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
      </Button>
      <Button
        size="lg"
        variant="outline"
        asChild
        className="border-2 border-primary text-primary hover:bg-[#F87229] hover:text-white hover:border-[#F87229] font-semibold text-lg md:text-2xl px-8 py-6 bg-transparent"
      >
        <a href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          WhatsApp
        </a>
      </Button>
    </div>
  )
}
