"use client"

import { useEffect } from "react"
import { ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { VideoHeroProps } from "./VideoHero.types"
import { VIDEO_CONFIG, HERO_CONTENT, scrollToNextSection } from "./VideoHero.helper"
import { SECTIONS } from "@/lib/constants"
import { useLazyVideo, useSlowConnection } from "@/hooks/use-lazy-video"

export function VideoHero({ className }: VideoHeroProps) {
  const { videoRef, shouldLoad } = useLazyVideo({ rootMargin: "200px" })
  const isSlowConnection = useSlowConnection()

  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldLoad || isSlowConnection) return

    // Solo cargar el video si no está ya cargado
    if (video.readyState === 0) {
      video.load()
    }

    // Intentar reproducir automáticamente (puede fallar en algunos navegadores)
    const playPromise = video.play()
    if (playPromise !== undefined) {
      playPromise.catch(() => {
        // Auto-play falló, pero el video está listo para reproducir
        // El usuario puede interactuar para reproducir
      })
    }
  }, [shouldLoad, isSlowConnection, videoRef])

  return (
    <section id={SECTIONS.videoHero} className={`relative h-screen w-full overflow-hidden ${className ?? ""}`}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        playsInline
        preload={shouldLoad && !isSlowConnection ? "auto" : "none"}
        className="absolute inset-0 w-full h-full object-cover"
        {...(VIDEO_CONFIG.poster && { poster: VIDEO_CONFIG.poster })}
        disablePictureInPicture
        disableRemotePlayback
        aria-label="Video de presentación del Club de la Memoria"
      >
        {shouldLoad && !isSlowConnection && (
          <source src={VIDEO_CONFIG.src} type="video/mp4" />
        )}
      </video>

      <div className="absolute inset-0 bg-gradient-to-b from-primary/60 via-primary/40 to-primary/70" />

      <div className="relative z-10 flex flex-col items-center justify-center h-full px-4 text-center">
        <span className="mb-6 inline-block rounded-full bg-white/20 px-5 py-2 text-sm md:text-base font-semibold text-white backdrop-blur-sm">
          {HERO_CONTENT.badge}
        </span>

        <p className="max-w-4xl text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight text-balance mb-6">
          {HERO_CONTENT.headline}
        </p>

        <Button
          size="lg"
          onClick={scrollToNextSection}
          className="bg-white text-primary hover:bg-[#F87229] hover:text-white font-semibold text-base md:text-2xl px-10 py-7 rounded-full shadow-xl"
        >
          {HERO_CONTENT.ctaText}
        </Button>
      </div>

      <button
        onClick={scrollToNextSection}
        aria-label="Ir a la siguiente sección"
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/80 hover:text-white transition-colors"
      >
        <span className="text-sm font-medium">{HERO_CONTENT.scrollText}</span>
        <ChevronDown className="h-8 w-8 animate-bounce" />
      </button>
    </section>
  )
}
