"use client"

import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"

export function VideoHero() {
  const scrollToNext = () => {
    const element = document.getElementById("inicio")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section id="video-hero" className="relative h-screen w-full overflow-hidden">
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
        poster="/elderly-people-enjoying-activities-together-warm-a.jpg"
      >
        <source src="https://videos.pexels.com/video-files/3209828/3209828-uhd_2560_1440_25fps.mp4" type="video/mp4" />
      </video>

      {/* Overlay con gradiente del color principal */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />

      {/* Contenido centrado */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <span className="mb-6 inline-block rounded-full bg-white/20 px-5 py-2 text-sm md:text-base font-semibold text-white backdrop-blur-sm">
          Desde 2004 en Ecuador
        </span>

        <h1 className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
          Donde la vida se celebra cada día
        </h1>

        <p className="max-w-2xl text-lg md:text-xl lg:text-2xl text-white/90 leading-relaxed text-pretty mb-10">
          El primer club de adultos mayores activos del Ecuador. Vitalidad, amistad y alegría en un solo lugar.
        </p>

        <Button
          size="lg"
          onClick={scrollToNext}
          className="bg-white text-primary hover:bg-white/90 font-semibold text-base md:text-lg px-10 py-7 rounded-full shadow-xl"
        >
          Descubre más
        </Button>
      </div>

      {/* Botón de scroll animado */}
      <button
        onClick={scrollToNext}
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <span className="text-sm font-medium">Desliza</span>
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  )
}
