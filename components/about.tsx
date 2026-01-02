"use client"

import { Heart, Users, Sparkles, Award } from "lucide-react"
import { useState } from "react"

export function About() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

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
            Un espacio de vitalidad donde los adultos mayores reconectan con actividades, amistad, familiaridad y
            alegría. Aquí no vienen a pasar el tiempo, <strong className="text-foreground">vienen a vivirlo</strong>.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Glow effect on hover */}
              <div
                className="absolute -inset-1 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-xl"
                style={{ background: `linear-gradient(135deg, ${feature.accentColor}40, ${feature.accentColor}20)` }}
              />

              <div className="relative bg-card border border-border rounded-2xl p-6 md:p-8 h-full transition-all duration-500 group-hover:border-primary/50 group-hover:-translate-y-2 group-hover:shadow-xl">
                {/* Animated icon container */}
                <div
                  className={`relative w-16 h-16 rounded-2xl flex items-center justify-center mb-5 transition-all duration-500 group-hover:scale-110 group-hover:rotate-3`}
                  style={{
                    background:
                      hoveredIndex === index
                        ? `linear-gradient(135deg, ${feature.accentColor}, ${feature.accentColor}99)`
                        : `${feature.accentColor}15`,
                  }}
                >
                  <feature.icon
                    className="h-8 w-8 transition-all duration-500"
                    style={{
                      color: hoveredIndex === index ? "white" : feature.accentColor,
                    }}
                  />

                  {/* Floating particles on hover */}
                  <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-primary/60 opacity-0 group-hover:opacity-100 group-hover:animate-ping" />
                </div>

                {/* Title with underline animation */}
                <h3 className="text-lg md:text-xl font-bold mb-3 relative inline-block">
                  {feature.title}
                  <span
                    className="absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-500 group-hover:w-full"
                    style={{ width: hoveredIndex === index ? "100%" : "0%" }}
                  />
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                  {feature.description}
                </p>

                {/* Corner accent */}
                <div
                  className="absolute bottom-0 right-0 w-16 h-16 rounded-tl-[4rem] opacity-0 group-hover:opacity-10 transition-opacity duration-500"
                  style={{ background: feature.accentColor }}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {[
            { number: "21+", label: "Años de experiencia" },
            { number: "500+", label: "Familias felices" },
            { number: "50+", label: "Actividades semanales" },
            { number: "100%", label: "Amor y dedicación" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center p-4 rounded-xl bg-card/50 border border-border/50 hover:border-primary/30 transition-all duration-300 hover:scale-105"
            >
              <div className="text-3xl md:text-4xl font-bold text-primary mb-1">{stat.number}</div>
              <div className="text-sm md:text-base text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
