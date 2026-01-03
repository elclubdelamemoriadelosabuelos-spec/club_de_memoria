"use client"

import { useState } from "react"
import { Play } from "lucide-react"
import { Card } from "@/components/ui/card"

export function VideoTestimonials() {
  const [activeVideo, setActiveVideo] = useState<string | null>(null)

  const testimonialVideos = [
    {
      id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/elderly-woman-smiling-testimonial-video.jpg",
      name: "María González",
      relation: "Hija de socia",
      preview: "Mi madre ha cambiado completamente desde que asiste al Club...",
    },
    {
      id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/family-member-testimonial-video.jpg",
      name: "Carlos Ramírez",
      relation: "Familiar",
      preview: "La profesionalidad y calidez del equipo es excepcional...",
    },
    {
      id: "dQw4w9WgXcQ", // Replace with actual YouTube video ID
      thumbnail: "/happy-elderly-testimonial-video.jpg",
      name: "Ana Martínez",
      relation: "Familiar de socia",
      preview: "Busqué muchas opciones y el Club superó todas nuestras expectativas...",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Testimonios de nuestras <span className="text-primary">familias</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Escucha las experiencias reales de quienes confían en nosotros
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonialVideos.map((video, index) => (
            <Card
              key={index}
              className="group overflow-hidden border-2 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
            >
              <div className="relative aspect-video bg-muted overflow-hidden">
                {activeVideo === video.id ? (
                  <iframe
                    className="w-full h-full"
                    src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0`}
                    title={`Testimonio de ${video.name}`}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                ) : (
                  <>
                    <img
                      src={video.thumbnail || "/placeholder.svg"}
                      alt={`Testimonio de ${video.name}`}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

                    {/* Play button */}
                    <button
                      onClick={() => setActiveVideo(video.id)}
                      className="absolute inset-0 flex items-center justify-center group/play"
                      aria-label={`Reproducir testimonio de ${video.name}`}
                    >
                      <div className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 group-hover/play:scale-110 group-hover/play:bg-primary shadow-lg shadow-primary/30">
                        <Play className="h-8 w-8 md:h-10 md:w-10 text-white fill-white ml-1" />
                      </div>
                    </button>
                  </>
                )}
              </div>

              <div className="p-6">
                <p className="text-muted-foreground leading-relaxed mb-4 text-pretty line-clamp-2">{video.preview}</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold text-foreground">{video.name}</p>
                  <p className="text-sm text-muted-foreground">{video.relation}</p>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* 
          INSTRUCCIONES PARA INTEGRAR VIDEOS REALES DE YOUTUBE:
          
          1. Sube tus videos de testimonios a YouTube
          2. Copia el ID del video de la URL (ej: de "youtube.com/watch?v=ABC123", el ID es "ABC123")
          3. Reemplaza los "dQw4w9WgXcQ" en el array testimonialVideos con tus IDs reales
          4. Opcionalmente, puedes usar las miniaturas automáticas de YouTube:
             thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`
        */}
      </div>
    </section>
  )
}
