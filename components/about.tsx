"use client"

import { Heart, Users, Sparkles, Award } from "lucide-react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

export function About() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const features = [
    {
      icon: Heart,
      title: "Trato cercano y humano",
      description: "Un ambiente familiar donde cada persona es escuchada y acompañada con calidez.",
      color: "from-primary to-primary/80",
      accentColor: "#33BBD2",
    },
    {
      icon: Users,
      title: "Comunidad y pertenencia",
      description: "Más que un club, somos una familia donde se comparte, se ríe y se crean lazos significativos.",
      color: "from-accent to-accent/80",
      accentColor: "#F87229",
    },
    {
      icon: Sparkles,
      title: "Actividades con propósito",
      description: "Cada actividad está diseñada para estimular la mente, expresar emociones y conectar con otros.",
      color: "from-secondary to-secondary/80",
      accentColor: "#F5A51C",
    },
    {
      icon: Award,
      title: "Pioneros en Ecuador",
      description: "El primer club de adultos mayores activos del país, con 21 años de experiencia comprobada.",
      color: "from-primary to-accent",
      accentColor: "#33BBD2",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % features.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + features.length) % features.length)
  }

  return (
    <section id="nosotros" className="py-16 md:py-24 bg-muted/30 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm md:text-base font-semibold text-primary uppercase tracking-wider mb-3">
            Conócenos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            ¿Qué es el{" "}
            <span className="text-primary relative">
              Club de la Memoria
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 200 8" fill="none">
                <path
                  d="M2 6C50 2 150 2 198 6"
                  stroke="#33BBD2"
                  strokeWidth="3"
                  strokeLinecap="round"
                  className="animate-pulse"
                />
              </svg>
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
           Un entorno lleno de energía y cercanía, donde los adultos mayores fortalecen vínculos, redescubren intereses y comparten momentos significativos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-center max-w-7xl mx-auto">
          {/* Left side - Carousel */}
          <div className="relative">
            <div className="relative overflow-hidden">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {features.map((feature, index) => (
                  <div key={index} className="min-w-full px-1">
                    <div className="relative bg-card border-2 border-border rounded-3xl p-8 md:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300">
                      <div
                        className="relative w-20 h-20 rounded-3xl flex items-center justify-center mb-6 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${feature.accentColor}, ${feature.accentColor}dd)`,
                        }}
                      >
                        <feature.icon className="h-10 w-10 text-white" />

                        {/* Glow effect */}
                        <div
                          className="absolute inset-0 rounded-3xl blur-xl opacity-40"
                          style={{ background: feature.accentColor }}
                        />
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">{feature.title}</h3>
                      <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>

                      {/* Decorative corner accent with better styling */}
                      <div
                        className="absolute bottom-0 right-0 w-32 h-32 rounded-tl-[6rem] opacity-5"
                        style={{ background: feature.accentColor }}
                      />

                      {/* Top accent line */}
                      <div
                        className="absolute top-0 left-0 right-0 h-1 rounded-t-3xl"
                        style={{ background: `linear-gradient(90deg, ${feature.accentColor}, transparent)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation buttons with improved styling */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-12 w-12 border-2 border-primary/30 hover:bg-primary hover:text-white hover:border-primary bg-background shadow-md transition-all hover:scale-110"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>

              {/* Improved dots indicator */}
              <div className="flex gap-2.5">
                {features.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 rounded-full transition-all duration-300 ${
                      currentSlide === index
                        ? "bg-primary w-10 shadow-lg shadow-primary/50"
                        : "bg-border/60 w-3 hover:bg-primary/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-12 w-12 border-2 border-primary/30 hover:bg-primary hover:text-white hover:border-primary bg-background shadow-md transition-all hover:scale-110"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Right side - Video placeholder with improved design */}
          <div className="relative">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-muted border-2 border-border shadow-xl">
              {/* TODO: Replace with actual video embed when ready */}
              <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/5 via-background to-accent/5">
                <div className="text-center z-10">
                  <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center shadow-2xl shadow-primary/30 hover:scale-110 transition-transform duration-300 cursor-pointer">
                    <svg
                      className="w-12 h-12 text-white ml-1"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </div>
                  <p className="text-base text-foreground font-semibold">Video del Club de la Memoria</p>
                  <p className="text-sm text-muted-foreground mt-2">Próximamente</p>
                </div>
              </div>
              {/* Placeholder image with better opacity */}
              <div className="absolute inset-0 opacity-10">
                <img
                  src="/elderly-people-happy-activities-club.jpg"
                  alt="Video placeholder"
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Decorative gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 via-transparent to-accent/10 pointer-events-none" />
            </div>
          </div>
          </div>
            <div className="mt-16 max-w-4xl mx-auto text-center">
                <p className="text-secondary text-2xl md:text-4xl font-semibold text-primary mb-4">
                  "Aquí no vienen a pasar el tiempo, vienen a vivirlo"
                </p>
             </div>
      </div>
    </section>
  )
}
