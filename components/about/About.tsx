"use client"

import { useState, useRef, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { brandColors } from "@/lib/colors"
import type { AboutProps } from "./About.types"
import { FEATURES, ABOUT_QUOTE, getNextSlide, getPrevSlide } from "./About.helper"
import Image from "next/image"
import { UnderlineWave } from "@/components/ui/underline-wave"
import { useLazyVideo } from "@/hooks/use-lazy-video"

export function About({ className }: AboutProps) {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isPlaying, setIsPlaying] = useState(false)
  const [videoLoaded, setVideoLoaded] = useState(false)
  const { videoRef, shouldLoad } = useLazyVideo({ rootMargin: "100px" })

  const nextSlide = () => {
    setCurrentSlide(getNextSlide(currentSlide, FEATURES.length))
  }

  const prevSlide = () => {
    setCurrentSlide(getPrevSlide(currentSlide, FEATURES.length))
  }

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad) return

    if (video.children.length === 0) {
      const sourceWebm = document.createElement('source')
      sourceWebm.src = '/about_video.webm'
      sourceWebm.type = 'video/webm'
      video.appendChild(sourceWebm)
      video.load()
      setVideoLoaded(true)
    }
  }, [shouldLoad])

  const handlePlay = () => {
    const video = videoRef.current
    if (!video) return

    // Reproducir video (ya debería estar cargado)
    video.play()
      .then(() => setIsPlaying(true))
      .catch((error) => {
        console.error("Error al reproducir video:", error)
      })
  }

  return (
    <section id="nosotros" className={`py-16 md:py-24 bg-muted/30 overflow-hidden ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <span className="inline-block text-sm md:text-base font-semibold text-primary uppercase tracking-wider mb-3">
            Conócenos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            ¿Qué es el{" "}
            <span className="text-primary relative">
              Club de la Memoria
              <UnderlineWave
                className="absolute -bottom-2 left-0 w-full h-2 animate-pulse"
                color={brandColors.turquoise}
              />
            </span>
            ?
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Un entorno lleno de energía y cercanía, donde los adultos mayores fortalecen vínculos, redescubren intereses y comparten momentos significativos.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12 items-center max-w-7xl mx-auto w-full overflow-hidden">
          <div className="relative order-2 lg:order-1 w-full min-w-0">
            <div className="relative overflow-hidden w-full">
              <div
                className="flex transition-transform duration-700 ease-in-out w-full"
                style={{ transform: `translateX(-${currentSlide * 100}%)` }}
              >
                {FEATURES.map((feature, index) => (
                  <div key={index} className="w-full shrink-0 px-1">
                    <div className="relative bg-card border-2 border-border rounded-2xl sm:rounded-3xl p-5 sm:p-6 md:p-8 lg:p-10 shadow-lg hover:shadow-2xl transition-shadow duration-300 overflow-hidden">
                      <div
                        className="relative w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-2xl sm:rounded-3xl flex items-center justify-center mb-4 sm:mb-6 shadow-lg"
                        style={{
                          background: `linear-gradient(135deg, ${feature.accentColor}, ${feature.accentColor}dd)`,
                        }}
                      >
                        <feature.icon className="h-7 w-7 sm:h-8 sm:w-8 md:h-10 md:w-10 text-white" />
                        <div
                          className="absolute inset-0 rounded-2xl sm:rounded-3xl blur-xl opacity-40"
                          style={{ background: feature.accentColor }}
                        />
                      </div>

                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold mb-2 sm:mb-4 text-foreground">{feature.title}</h3>
                      <p className="text-lg sm:text-xl md:text-xl text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                      <div
                        className="absolute bottom-0 right-0 w-20 sm:w-24 md:w-32 h-20 sm:h-24 md:h-32 rounded-tl-[4rem] sm:rounded-tl-[5rem] md:rounded-tl-[6rem] opacity-5"
                        style={{ background: feature.accentColor }}
                      />
                      <div
                        className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl sm:rounded-t-3xl"
                        style={{ background: `linear-gradient(90deg, ${feature.accentColor}, transparent)` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex items-center justify-center gap-3 sm:gap-4 mt-6 sm:mt-8">
              <Button
                variant="outline"
                size="icon"
                onClick={prevSlide}
                className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary/30 hover:bg-[#F87229] hover:text-white hover:border-[#F87229] bg-background shadow-md transition-all hover:scale-110"
              >
                <ChevronLeft className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>

              <div className="flex gap-2 sm:gap-2.5">
                {FEATURES.map((_, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="icon"
                    onClick={() => setCurrentSlide(index)}
                    className={`h-2.5 sm:h-3 rounded-full transition-all duration-300 p-0 ${currentSlide === index
                      ? "bg-primary w-8 sm:w-10 shadow-lg shadow-primary/50"
                      : "bg-border/60 w-2.5 sm:w-3 hover:bg-[#F87229]/50"
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextSlide}
                className="rounded-full h-10 w-10 sm:h-12 sm:w-12 border-2 border-primary/30 hover:bg-[#F87229] hover:text-white hover:border-[#F87229] bg-background shadow-md transition-all hover:scale-110"
              >
                <ChevronRight className="h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </div>
          </div>

          <div className="relative order-1 lg:order-2 w-full min-w-0">
            <div className="relative aspect-4/3 sm:aspect-video rounded-2xl sm:rounded-3xl overflow-hidden bg-muted border-2 border-border shadow-xl group">
              {/* Imagen de fondo mientras el video no se reproduce */}
              {!isPlaying && (
                <div className="absolute inset-0 z-0">
                  <Image
                    src="/hero_image.webp"
                    alt="Club de la Memoria"
                    fill
                    className="object-cover"
                    quality={85}
                    sizes="(max-width: 768px) 100vw, 50vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-linear-to-tr from-primary/40 via-primary/20 to-accent/30" />
                </div>
              )}
              
              <video
                ref={videoRef}
                preload={shouldLoad ? "metadata" : "none"}
                className="w-full h-full object-cover relative z-1"
                controls={isPlaying}
                playsInline
                muted={false}
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onLoadedData={() => setVideoLoaded(true)}
                disablePictureInPicture
                controlsList="nodownload"
                aria-label="Video sobre el Club de la Memoria"
              >
                {shouldLoad && (
                  <source src="/about_video.webm" type="video/webm" />
                )}
              </video>
              
              {!isPlaying && (
                <div 
                  className="absolute inset-0 flex items-center justify-center cursor-pointer transition-opacity group-hover:opacity-90 z-20"
                  onClick={handlePlay}
                >
                  <div className="text-center px-4">
                    <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 mx-auto mb-4 sm:mb-6 rounded-full bg-linear-to-br from-primary to-primary/70 flex items-center justify-center shadow-2xl shadow-primary/30 hover:scale-110 transition-transform duration-300">
                      <Image
                        src="/play-icon.svg"
                        alt="Play"
                        width={48}
                        height={48}
                        className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 ml-0.5 sm:ml-1 brightness-0 invert"
                      />
                    </div>
                    <p className="text-sm sm:text-base text-white font-semibold drop-shadow-lg">Club de la Memoria</p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <p className="text-secondary text-2xl md:text-4xl font-semibold italic font-serif mb-4 whitespace-pre-line">
            "{ABOUT_QUOTE}"
          </p>
        </div>
      </div>
    </section>
  )
}
