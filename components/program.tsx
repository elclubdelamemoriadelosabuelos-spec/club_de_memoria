"use client"

import type React from "react"

import { useState } from "react"
import { Clock, Utensils, Music, Smile, Calendar } from "lucide-react"

export function Program() {
  const schedule = [
    {
      icon: Smile,
      time: "10:00 - 12:00",
      title: "Mañanas activas",
      description: "Socialización guiada, entrenamiento de memoria, movimiento, baile y Brain Gym.",
      image: "/elderly-morning-exercise-group-stretching.jpg",
    },
    {
      icon: Music,
      time: "12:00 - 14:00",
      title: "Talleres con propósito",
      description: "Arte, pintura, musicoterapia, talleres de memoria y actividades creativas.",
      image: "/elderly-people-doing-art-therapy-painting-together.jpg",
    },
    {
      icon: Utensils,
      time: "14:00 - 15:00",
      title: "Alimentación cuidada",
      description: "Breaks saludables y almuerzo acompañado en un ambiente familiar.",
      image: "/seniors-enjoying-healthy-lunch-together-dining.jpg",
    },
    {
      icon: Calendar,
      time: "15:00 - 16:00",
      title: "Tardes de disfrute",
      description: "Juegos de mesa y gimnasia vital adaptada para el bienestar físico.",
      image: "/seniors-playing-board-games-memory-activities.jpg",
    },
  ]

  return (
    <section id="programa" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Nuestro <span className="text-primary">Programa de Día</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            De 10:00 a 16:00, un programa integral diseñado para acompañar a los adultos mayores a lo largo de toda la
            jornada en un entorno seguro, activo y humano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto">
          {schedule.map((item, index) => (
            <FlipCard key={index} item={item} />
          ))}
        </div>

        <div className="mt-12 max-w-3xl mx-auto bg-accent/20 border-2 border-accent rounded-2xl p-6 md:p-8">
          <h3 className="text-xl md:text-2xl font-bold mb-3 text-center">Experiencias especiales</h3>
          <p className="text-center text-muted-foreground leading-relaxed">
            Además del programa diario, organizamos celebraciones, salidas mensuales y actividades en fechas importantes
            para crear momentos memorables.
          </p>
        </div>
      </div>
    </section>
  )
}

function FlipCard({
  item,
}: { item: { icon: React.ElementType; time: string; title: string; description: string; image: string } }) {
  const [isFlipped, setIsFlipped] = useState(false)

  return (
    <div
      className="relative h-72 md:h-80 cursor-pointer perspective-1000"
      onClick={() => setIsFlipped(!isFlipped)}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div
        className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
        style={{
          transformStyle: "preserve-3d",
          transform: isFlipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Cara frontal - Imagen */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary/20"
          style={{ backfaceVisibility: "hidden" }}
        >
          <img src={item.image || "/placeholder.svg"} alt={item.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 mb-2">
              <div className="bg-primary w-10 h-10 rounded-xl flex items-center justify-center">
                <item.icon className="h-5 w-5 text-white" />
              </div>
              <div className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-3 py-1 rounded-full">
                <Clock className="h-4 w-4 text-white" />
                <span className="text-sm font-semibold text-white">{item.time}</span>
              </div>
            </div>
            <h3 className="text-2xl font-bold text-white">{item.title}</h3>
            <p className="text-sm text-white/80 mt-1">Toca para más información</p>
          </div>
        </div>

        {/* Cara trasera - Información */}
        <div
          className="absolute inset-0 rounded-2xl overflow-hidden border-2 border-primary bg-background"
          style={{
            backfaceVisibility: "hidden",
            transform: "rotateY(180deg)",
          }}
        >
          <div className="h-full flex flex-col justify-center p-6 md:p-8">
            <div className="bg-primary/10 w-14 h-14 rounded-xl flex items-center justify-center mb-4">
              <item.icon className="h-7 w-7 text-primary" />
            </div>
            <div className="flex items-center gap-2 mb-3">
              <Clock className="h-4 w-4 text-primary" />
              <span className="text-sm font-semibold text-primary">{item.time}</span>
            </div>
            <h3 className="text-2xl font-bold mb-3 text-foreground">{item.title}</h3>
            <p className="text-muted-foreground leading-relaxed text-lg">{item.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
