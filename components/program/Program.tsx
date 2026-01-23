"use client"

import * as React from "react"
import { Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel"
import { Dialog, DialogContent } from "@/components/ui/dialog"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { cn } from "@/lib/utils"
import { programCardColors, brandColors } from "@/lib/colors"
import type { ProgramProps, ProgramCardProps, DialogCarouselProps, ScheduleItem } from "./Program.types"
import { SCHEDULE } from "./Program.helper"
import { getOptimizedImagePath } from "@/lib/image-utils"

export function Program({ className }: ProgramProps) {
  const [selectedItem, setSelectedItem] = React.useState<ScheduleItem | null>(null)
  const [dialogOpen, setDialogOpen] = React.useState(false)

  const handleCardClick = (item: ScheduleItem) => {
    setSelectedItem(item)
    setDialogOpen(true)
  }

  return (
    <section id="programa" className={`py-16 md:py-24 bg-background ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Nuestro <span className="text-primary">Programa de Día</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            De Lunes a Viernes de 10:00 a 16:00, un programa integral diseñado para acompañar a los adultos mayores a lo largo de toda la
            jornada en un entorno seguro, activo y humano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto md:auto-rows-fr">
          {SCHEDULE.map((item, index) => (
            <ProgramCard key={index} item={item} index={index} onClick={() => handleCardClick(item)} />
          ))}
        </div>
      </div>

      {/* Modal de detalle */}
      <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
        <DialogContent
          className="w-[94vw] max-w-[480px] lg:max-w-[1000px] h-[92vh] lg:h-[700px] overflow-hidden p-0 rounded-xl lg:rounded-2xl border-0 shadow-2xl"
        >
          {selectedItem && (
            <div className="flex flex-col lg:flex-row h-full font-bold">
              <div className="relative h-80 lg:h-full lg:w-[48%] shrink-0 bg-gray-100 overflow-hidden">
                <DialogCarousel images={selectedItem.images} />
                {selectedItem.time && (
                  <div
                    className="absolute top-3 left-3 lg:top-4 lg:left-4 text-white px-3 py-1.5 lg:px-4 lg:py-2 rounded-lg flex gap-2 text-sm lg:text-base font-bold shadow-md items-center"
                    style={{ backgroundColor: brandColors.turquoise }}
                  >
                    <Clock className="h-4 w-4 lg:h-5 lg:w-5" />
                    {selectedItem.time}
                  </div>
                )}
              </div>

              <div className="flex flex-col flex-1 min-h-0 bg-white overflow-hidden">
                <div className="px-5 py-4 lg:px-6 lg:py-5 border-b border-gray-100 shrink-0">
                  <DialogHeader>
                    <DialogTitle
                      className="text-lg lg:text-2xl font-bold leading-snug pr-8"
                      style={{ color: brandColors.navy }}
                    >
                      {selectedItem.title}
                    </DialogTitle>
                  </DialogHeader>
                </div>

                <div className="flex-1 overflow-y-auto px-5 py-4 lg:px-6 lg:py-5 space-y-3 lg:space-y-4">
                  {selectedItem.activities.map((activity, idx) => (
                    <div
                      key={idx}
                      className="bg-gray-50 rounded-xl p-4 lg:p-5 border border-gray-100"
                    >
                      <div className="flex gap-4">
                        <div
                          className="shrink-0 w-8 h-8 lg:w-10 lg:h-10 rounded-lg flex items-center justify-center text-white font-bold text-sm lg:text-base"
                          style={{ backgroundColor: brandColors.turquoise }}
                        >
                          {idx + 1}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4
                            className="font-semibold text-base lg:text-lg leading-snug"
                            style={{ color: brandColors.navy }}
                          >
                            {activity.name}
                          </h4>
                          <p className="text-sm lg:text-base text-gray-600 leading-relaxed mt-1.5">
                            {activity.description}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div
                  className="px-5 py-4 lg:px-6 lg:py-5 border-t border-gray-100 shrink-0"
                  style={{ backgroundColor: `${brandColors.turquoise}08` }}
                >
                  <p
                    className="font-medium text-center italic text-sm lg:text-base leading-relaxed"
                    style={{ color: brandColors.turquoise }}
                  >
                    "{selectedItem.footer}"
                  </p>
                </div>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </section>
  )
}

function ProgramCard({ item, onClick, index }: ProgramCardProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)
  const colorScheme = programCardColors[index % programCardColors.length]

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  return (
    <div
      onClick={onClick}
      className={cn(
        "group relative bg-white rounded-2xl overflow-hidden transition-all duration-500 cursor-pointer",
        "shadow-[0_4px_20px_-4px_rgba(0,0,0,0.1)]",
        "hover:shadow-[0_20px_50px_-12px_rgba(0,0,0,0.2)]",
        "hover:-translate-y-1",
        "border border-gray-100/80",
        "min-h-[400px] md:h-full md:min-h-0",
        colorScheme.hover
      )}
    >
      <div className="flex flex-col md:flex-row h-full">
        <div
          className="w-full md:w-1.5 h-1.5 md:h-full"
          style={{ backgroundColor: colorScheme.accent }}
        />

        {/* Sección de imagen - Izquierda */}
        <div className="relative w-full md:w-1/2 h-96 md:h-full md:flex-1 overflow-hidden shrink-0">
          <Carousel
            setApi={setApi}
            opts={{
              loop: true,
              align: "start",
            }}
            plugins={[]}
            className="w-full h-full"
          >
            <CarouselContent className="h-full ml-0">
              {item.images.map((image, idx) => (
                <CarouselItem key={idx} className="h-full pl-0 basis-full shrink-0">
                  <div className="relative w-full h-full flex items-center justify-center bg-gray-50">
                    <img
                      src={getOptimizedImagePath(image)}
                      alt={`${item.title} - imagen ${idx + 1}`}
                      className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading={idx === 0 ? "eager" : "lazy"}
                      decoding={idx === 0 ? "sync" : "async"}
                    />
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>

          <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-transparent pointer-events-none" />
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
            {item.images.map((_, idx) => (
              <button
                key={idx}
                onClick={(e) => {
                  e.stopPropagation()
                  api?.scrollTo(idx)
                }}
                className={cn(
                  "h-1.5 rounded-full transition-all duration-300",
                  current === idx
                    ? "bg-white w-5"
                    : "bg-white/40 w-1.5 hover:bg-white/60"
                )}
                aria-label={`Ir a imagen ${idx + 1}`}
              />
            ))}
          </div>

          {item.time && (
            <div
              className="absolute top-3 right-3 backdrop-blur-md text-white px-3 py-1.5 rounded-lg flex gap-1.5 text-xs font-medium shadow-lg items-center"
              style={{ backgroundColor: `${colorScheme.accent}e6` }}
            >
              <Clock className="h-3 w-3" />
              {item.time}
            </div>
          )}
        </div>

        {/* Sección de información - Derecha */}
        <div className="flex-1 p-5 md:p-6 flex flex-col justify-between min-h-0">
          <div className="flex-1 flex flex-col min-h-0">
            <h3
              className="text-lg md:text-xl font-bold mb-3 md:mb-4 transition-colors duration-300 line-clamp-2"
              style={{ color: brandColors.textDark }}
            >
              {item.title}
            </h3>

            <ul className="space-y-2 mb-4 flex-1">
              {item.activities.slice(0, 3).map((activity, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm md:text-base text-gray-600">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                    style={{ backgroundColor: colorScheme.accent }}
                  />
                  <span className="leading-relaxed">{activity.name}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-3 border-t border-gray-100 shrink-0">
            <div className="flex items-center justify-between">
              <p
                className="text-xs md:text-sm font-medium leading-relaxed line-clamp-2 flex-1"
                style={{ color: colorScheme.accent }}
              >
                {item.footer}
              </p>
              <div
                className="ml-3 w-8 h-8 rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2"
                style={{ backgroundColor: `${colorScheme.accent}15` }}
              >
                <ChevronRight
                  className="h-4 w-4"
                  style={{ color: colorScheme.accent }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function DialogCarousel({ images }: DialogCarouselProps) {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(0)

  React.useEffect(() => {
    if (!api) return

    const onSelect = () => {
      setCurrent(api.selectedScrollSnap())
    }

    api.on("select", onSelect)
    onSelect()

    return () => {
      api.off("select", onSelect)
    }
  }, [api])

  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev()
  }, [api])

  const scrollNext = React.useCallback(() => {
    api?.scrollNext()
  }, [api])

  return (
    <div className="absolute inset-0">
      <Carousel
        setApi={setApi}
        opts={{
          loop: true,
          align: "start",
        }}
        className="w-full h-full"
      >
        <CarouselContent className="h-full ml-0">
          {images.map((image, idx) => (
            <CarouselItem key={idx} className="h-full pl-0">
              <img
                src={getOptimizedImagePath(image)}
                alt={`Imagen ${idx + 1}`}
                className="w-full h-full object-contain"
                loading={idx === 0 ? "eager" : "lazy"}
                decoding={idx === 0 ? "sync" : "async"}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <button
        onClick={scrollPrev}
        className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full transition-all duration-200 hover:scale-110 z-10 shadow-lg"
        aria-label="Imagen anterior"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2.5 rounded-full transition-all duration-200 hover:scale-110 z-10 shadow-lg"
        aria-label="Siguiente imagen"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
        {images.map((_, idx) => (
          <button
            key={idx}
            onClick={() => api?.scrollTo(idx)}
            className={cn(
              "h-2 rounded-full transition-all duration-300 shadow-sm",
              current === idx
                ? "bg-white w-8"
                : "bg-white/60 w-2 hover:bg-white/80"
            )}
            aria-label={`Ir a imagen ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
