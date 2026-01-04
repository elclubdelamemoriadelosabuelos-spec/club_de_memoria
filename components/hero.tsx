"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById("contacto")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="inicio"
      className="pt-24 md:pt-32 pb-16 md:pb-24 bg-gradient-to-br from-primary/5 via-background to-accent/5"
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-base font-semibold">
                21 años de experiencia en Quito
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              Espacio de vitalidad para <span className="text-primary">reconectar</span> con la vida
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
              El primer club de adultos mayores de Quito. Un lugar donde son acompañados con actividades,
              amistad y alegría, promoviendo su bienestar y calidad de vida.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-base md:text-lg px-8 py-6 group"
              >
                Agenda tu visita
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                asChild
                className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground font-semibold text-base md:text-lg px-8 py-6 bg-transparent"
              >
                <a href="https://wa.me/593995671600" target="_blank" rel="noopener noreferrer">
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="/elderly-adults-enjoying-activities-together-in-a-b.jpg"
                alt="Adultos mayores felices participando en actividades del Club de la Memoria"
                className="w-full h-auto object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-xl max-w-[200px]">
              <p className="text-4xl font-bold">21+</p>
              <p className="text-sm font-medium">Años creando bienestar</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
