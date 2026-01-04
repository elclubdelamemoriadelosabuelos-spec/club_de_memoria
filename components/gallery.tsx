"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const images = [
    { src: "/gallery-celebration.jpg", category: "Celebraciones", title: "Cumpleaños especial" },
    { src: "/gallery-art.jpg", category: "Arte", title: "Taller de pintura" },
    { src: "/gallery-dance.jpg", category: "Baile", title: "Tarde de baile" },
    { src: "/gallery-games.jpg", category: "Juegos", title: "Juegos de mesa" },
    { src: "/gallery-excursion.jpg", category: "Excursiones", title: "Salida mensual" },
    { src: "/gallery-music.jpg", category: "Música", title: "Musicoterapia" },
    { src: "/gallery-cooking.jpg", category: "Cocina", title: "Taller de cocina" },
    { src: "/gallery-yoga.jpg", category: "Ejercicio", title: "Yoga y relajación" },
  ]

  return (
    <section id="galeria" className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Nuestra <span className="text-primary">Galería</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Momentos que capturan la alegría, la conexión y la vitalidad de nuestro club.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((image, index) => (
            <div
              key={index}
              className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1"
              onClick={() => setSelectedImage(index)}
            >
              <img src={image.src || "/placeholder.svg"} alt={image.title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <span className="inline-block text-xs font-semibold text-primary bg-white/90 px-2 py-1 rounded-full mb-2">
                  {image.category}
                </span>
                <p className="text-sm font-semibold text-white">{image.title}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox */}
        {selectedImage !== null && (
          <div
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <Button
              variant="ghost"
              size="icon"
              className="absolute top-4 right-4 text-white hover:bg-white/10 rounded-full"
              onClick={() => setSelectedImage(null)}
            >
              <X className="h-6 w-6" />
            </Button>
            <div className="relative max-w-5xl w-full">
              <img
                src={images[selectedImage].src || "/placeholder.svg"}
                alt={images[selectedImage].title}
                className="w-full h-auto rounded-2xl"
                onClick={(e) => e.stopPropagation()}
              />
              <div className="absolute bottom-4 left-4 right-4 bg-black/60 backdrop-blur-sm rounded-xl p-4">
                <span className="inline-block text-xs font-semibold text-primary bg-white/90 px-2 py-1 rounded-full mb-2">
                  {images[selectedImage].category}
                </span>
                <p className="text-lg font-semibold text-white">{images[selectedImage].title}</p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}
