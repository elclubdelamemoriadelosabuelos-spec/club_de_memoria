"use client"

import { useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const galleryImages = [
  {
    src: "/gallery-celebration.jpg",
    alt: "Celebración de cumpleaños en el club",
    category: "Celebraciones",
  },
  {
    src: "/gallery-art.jpg",
    alt: "Taller de pintura y arte",
    category: "Arte",
  },
  {
    src: "/gallery-dance.jpg",
    alt: "Clase de baile y movimiento",
    category: "Baile",
  },
  {
    src: "/gallery-games.jpg",
    alt: "Juegos de memoria y estimulación",
    category: "Juegos",
  },
  {
    src: "/gallery-excursion.jpg",
    alt: "Paseo y excursión grupal",
    category: "Paseos",
  },
  {
    src: "/gallery-music.jpg",
    alt: "Taller de música y canto",
    category: "Música",
  },
  {
    src: "/gallery-cooking.jpg",
    alt: "Taller de cocina saludable",
    category: "Cocina",
  },
  {
    src: "/gallery-yoga.jpg",
    alt: "Sesión de yoga y relajación",
    category: "Bienestar",
  },
]

export function Gallery() {
  const [selectedImage, setSelectedImage] = useState<number | null>(null)

  const openLightbox = (index: number) => setSelectedImage(index)
  const closeLightbox = () => setSelectedImage(null)

  const goToPrevious = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === 0 ? galleryImages.length - 1 : selectedImage - 1)
    }
  }

  const goToNext = () => {
    if (selectedImage !== null) {
      setSelectedImage(selectedImage === galleryImages.length - 1 ? 0 : selectedImage + 1)
    }
  }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Galería de <span className="text-primary">momentos</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            Cada día en el Club está lleno de alegría, aprendizaje y conexión
          </p>
        </div>

        {/* Grid de galería estilo masonry */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 md:gap-4 max-w-6xl mx-auto">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              onClick={() => openLightbox(index)}
              className={`
                relative overflow-hidden rounded-xl cursor-pointer group
                ${index === 0 || index === 5 ? "md:col-span-2 md:row-span-2" : ""}
                ${index === 0 || index === 5 ? "aspect-square" : "aspect-square"}
              `}
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              {/* Overlay al hover */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                <span className="text-white text-sm md:text-base font-semibold">{image.category}</span>
                <span className="text-white/80 text-xs md:text-sm">{image.alt}</span>
              </div>
              {/* Badge de categoría */}
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                <span className="text-xs font-medium text-primary">{image.category}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4" onClick={closeLightbox}>
          {/* Botón cerrar */}
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Cerrar galería"
          >
            <X className="h-6 w-6" />
          </button>

          {/* Botón anterior */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToPrevious()
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Imagen anterior"
          >
            <ChevronLeft className="h-8 w-8" />
          </button>

          {/* Imagen */}
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image
              src={galleryImages[selectedImage].src || "/placeholder.svg"}
              alt={galleryImages[selectedImage].alt}
              fill
              className="object-contain"
            />
          </div>

          {/* Botón siguiente */}
          <button
            onClick={(e) => {
              e.stopPropagation()
              goToNext()
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white/80 hover:text-white p-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors z-10"
            aria-label="Imagen siguiente"
          >
            <ChevronRight className="h-8 w-8" />
          </button>

          {/* Info de imagen */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-center">
            <p className="text-white font-semibold text-lg">{galleryImages[selectedImage].category}</p>
            <p className="text-white/70 text-sm">{galleryImages[selectedImage].alt}</p>
            <p className="text-white/50 text-xs mt-2">
              {selectedImage + 1} / {galleryImages.length}
            </p>
          </div>
        </div>
      )}
    </section>
  )
}
