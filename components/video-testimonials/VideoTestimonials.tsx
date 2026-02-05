"use client"

import { useRef, useState, useEffect } from "react"
import { Play, Pause, Volume2, VolumeX, Quote, ArrowRight } from "lucide-react"
import Image from "next/image"
import type { VideoTestimonialsProps, VideoRefs, MutedState } from "./VideoTestimonials.types"
import {
  TESTIMONIAL_VIDEOS,
  INITIAL_MUTED_STATE,
  toggleVideoPlay,
  toggleVideoMute
} from "./VideoTestimonials.helper"
import { scrollToContact } from "../hero/Hero.helper"
import { Button } from "../ui/button"

export function VideoTestimonials({ className }: VideoTestimonialsProps) {
  const [playingVideo, setPlayingVideo] = useState<number | null>(null)
  const [mutedVideos, setMutedVideos] = useState<MutedState>(INITIAL_MUTED_STATE)
  const [loadedVideos, setLoadedVideos] = useState<Set<number>>(new Set())
  const videoRefs = useRef<VideoRefs>({})

  const handleTogglePlay = (index: number) => {
    const newPlayingVideo = toggleVideoPlay(videoRefs.current, playingVideo, index)
    setPlayingVideo(newPlayingVideo)
  }

  const handleToggleMute = (index: number) => {
    const newMutedState = toggleVideoMute(videoRefs.current, mutedVideos, index)
    setMutedVideos(newMutedState)
  }

  const handleVideoEnd = () => {
    setPlayingVideo(null)
  }

  const handleVideoIntersect = (index: number, entry: IntersectionObserverEntry) => {
    if (entry.isIntersecting && !loadedVideos.has(index)) {
      const video = videoRefs.current[index]
      if (video) {
        video.load()
        setLoadedVideos((prev) => new Set([...prev, index]))
      }
    }
  }

  useEffect(() => {
    const observers: IntersectionObserver[] = []

    TESTIMONIAL_VIDEOS.forEach((_, index) => {
      const video = videoRefs.current[index]
      if (!video) return

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => handleVideoIntersect(index, entry))
        },
        {
          rootMargin: "100px",
          threshold: 0.1,
        }
      )

      observer.observe(video)
      observers.push(observer)
    })

    return () => {
      observers.forEach((observer) => observer.disconnect())
    }
  }, [])

  return (
    <section className={`pt-20 md:pt-32 pb-12 md:pb-16 bg-gradient-to-b from-muted/30 via-background to-muted/30 overflow-hidden ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Quote className="h-4 w-4" />
            Experiencias reales
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-balance leading-tight">
            Lo que dicen nuestras{" "}
            <span className="text-primary relative">
              familias
              <Image
                src="/underline-wave-large.svg"
                alt=""
                width={200}
                height={12}
                className="absolute -bottom-2 left-0 w-full h-3"
                style={{ filter: "opacity(0.3)" }}
              />
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Escucha de primera mano las experiencias de quienes han confiado en nosotros para el cuidado de sus seres queridos
          </p>
        </div>

        {/* Videos Grid: 3 en una misma fila en desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {TESTIMONIAL_VIDEOS.map((video, index) => (
            <div
              key={index}
              className="group relative"
            >
              {/* Video Card */}
              <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-primary/5 to-accent/5 p-2 shadow-2xl shadow-primary/10">
                <div className="relative aspect-[9/16] md:aspect-[9/14] rounded-2xl overflow-hidden bg-black">
                  <video
                    ref={(el) => { videoRefs.current[index] = el }}
                    preload={loadedVideos.has(index) ? "metadata" : "none"}
                    className="w-full h-full object-cover"
                    playsInline
                    muted={mutedVideos[index]}
                    onEnded={handleVideoEnd}
                    loop={false}
                  >
                    {loadedVideos.has(index) && (
                      <source src={video.webm} type="video/webm" />
                    )}
                  </video>

                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-black/20 pointer-events-none" />

                  {/* Play/Pause button */}
                  <button
                    onClick={() => handleTogglePlay(index)}
                    className="absolute inset-0 flex items-center justify-center z-10"
                    aria-label={playingVideo === index ? "Pausar video" : "Reproducir video"}
                  >
                    <div
                      className={`
                        w-20 h-20 md:w-24 md:h-24 rounded-full 
                        bg-white/20 backdrop-blur-md border border-white/30
                        flex items-center justify-center 
                        transition-all duration-500 
                        ${playingVideo === index ? "opacity-0 scale-75" : "opacity-100 scale-100"}
                        group-hover:opacity-100 group-hover:scale-100
                        hover:bg-white/30 hover:scale-110
                        shadow-2xl
                      `}
                    >
                      {playingVideo === index ? (
                        <Pause className="h-10 w-10 md:h-12 md:w-12 text-white" />
                      ) : (
                        <Play className="h-10 w-10 md:h-12 md:w-12 text-white ml-1" />
                      )}
                    </div>
                  </button>

                  {/* Volume control */}
                  <button
                    onClick={() => handleToggleMute(index)}
                    className="absolute bottom-4 right-4 z-20 w-12 h-12 rounded-full bg-black/40 backdrop-blur-sm flex items-center justify-center hover:bg-black/60 transition-colors"
                    aria-label={mutedVideos[index] ? "Activar sonido" : "Silenciar"}
                  >
                    {mutedVideos[index] ? (
                      <VolumeX className="h-5 w-5 text-white" />
                    ) : (
                      <Volume2 className="h-5 w-5 text-white" />
                    )}
                  </button>

                  {/* Quote overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <div className="flex items-start gap-3">
                      <Quote className="h-6 w-6 text-primary shrink-0 mt-1" />
                      <p className="text-white/90 text-sm md:text-base leading-relaxed font-medium">
                        {video.quote}
                      </p>
                    </div>
                  </div>

                  {/* Top badge */}
                  <div className="absolute top-4 left-4 z-10">
                    <span className="px-3 py-1.5 rounded-full bg-primary/90 text-white text-xs font-semibold backdrop-blur-sm">
                      {video.name}
                    </span>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -z-10 -top-4 -right-4 w-32 h-32 bg-primary/20 rounded-full blur-3xl" />
              <div className="absolute -z-10 -bottom-4 -left-4 w-24 h-24 bg-accent/20 rounded-full blur-2xl" />
            </div>
          ))}
        </div>

      </div>
    </section >
  )
}
