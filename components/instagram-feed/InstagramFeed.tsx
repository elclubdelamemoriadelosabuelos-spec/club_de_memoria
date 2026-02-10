"use client"

import { useState } from "react"
import { Instagram } from "lucide-react"
import { INSTAGRAM, SOCIAL_MEDIA } from "@/lib/constants"
import type { InstagramFeedProps } from "./InstagramFeed.types"

/**
 * Convierte una URL de post/reel de Instagram a su URL de embed.
 * Ej: https://www.instagram.com/reel/DQVdX8UDYd6/ → https://www.instagram.com/reel/DQVdX8UDYd6/embed/
 */
function toEmbedUrl(url: string): string {
  const clean = url.endsWith("/") ? url : `${url}/`
  return `${clean}embed/`
}

export function InstagramFeed({ className }: InstagramFeedProps) {
  const [loadedIframes, setLoadedIframes] = useState<Set<number>>(new Set())

  const handleIframeLoad = (index: number) => {
    setLoadedIframes((prev) => new Set([...prev, index]))
  }

  return (
    <section
      className={`pt-16 md:pt-24 pb-20 md:pb-32 bg-linear-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden ${className ?? ""}`}
    >
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Instagram className="h-4 w-4" />
            Síguenos
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
            Nuestro día a día en{" "}
            <span className="text-primary">Instagram</span>
          </h2>

          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Mira cómo nuestros miembros disfrutan cada jornada llena de actividades, risas y bienestar
          </p>
        </div>

        {/* Grid de posts embebidos */}
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {INSTAGRAM.posts.map((post, index) => (
            <div
              key={post.id}
              className="relative rounded-2xl overflow-hidden border border-border bg-card shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
            >
              {/* Skeleton mientras carga */}
              {!loadedIframes.has(index) && (
                <div className="absolute inset-0 z-10 flex items-center justify-center bg-muted animate-pulse">
                  <Instagram className="h-8 w-8 text-muted-foreground/40" />
                </div>
              )}

              <iframe
                src={toEmbedUrl(post.url)}
                className="w-full border-0"
                style={{ minHeight: 480 }}
                loading="lazy"
                allowTransparency
                scrolling="no"
                title={`Instagram post ${post.id}`}
                onLoad={() => handleIframeLoad(index)}
              />
            </div>
          ))}
        </div>

        {/* Enlace al perfil */}
        <div className="text-center mt-10">
          <a
            href={SOCIAL_MEDIA.instagram.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-primary/10 text-primary font-medium hover:bg-primary/20 transition-colors"
          >
            <Instagram className="h-5 w-5" />
            @clubdelamemoria
          </a>
        </div>
      </div>
    </section>
  )
}
