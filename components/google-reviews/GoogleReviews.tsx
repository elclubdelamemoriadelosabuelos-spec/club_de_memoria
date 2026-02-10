"use client"

import { useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { GOOGLE_REVIEWS_DATA } from "@/lib/google-reviews-data"
import type { GoogleReviewsProps } from "./GoogleReviews.types"

/**
 * Componente de reseñas de Google – muestra datos cacheados localmente.
 * Los datos se generan con: npm run scrape-reviews
 */
export function GoogleReviews({ className }: GoogleReviewsProps) {
  const { reviews, averageRating, totalReviews, scrapedAt } = GOOGLE_REVIEWS_DATA
  const [currentPage, setCurrentPage] = useState(0)

  // Mostrar 3 reseñas por página en desktop, 1 en mobile (controlado por CSS)
  const reviewsPerPage = 3
  const totalPages = Math.ceil(reviews.length / reviewsPerPage)

  const nextPage = () => setCurrentPage((prev) => (prev + 1) % totalPages)
  const prevPage = () => setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages)

  const currentReviews = reviews.slice(
    currentPage * reviewsPerPage,
    currentPage * reviewsPerPage + reviewsPerPage,
  )

  return (
    <section
      className={`pt-16 md:pt-24 pb-20 md:pb-32 bg-linear-to-b from-muted/30 via-background to-muted/30 relative overflow-hidden ${className ?? ""}`}
    >
      <div className="container mx-auto px-4">
        {/* ── Header ──────────────────────────────────────────── */}
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <Star className="h-4 w-4 fill-current" />
            Reseñas de Google
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
            Lo que opinan de{" "}
            <span className="text-primary">nosotros</span>
          </h2>

          {/* Rating resumen */}
          <div className="flex flex-col items-center gap-3">
            <div className="flex items-center gap-1">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-6 w-6 md:h-7 md:w-7 ${
                    i < Math.round(averageRating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "fill-muted text-muted"
                  }`}
                />
              ))}
            </div>
            <p className="text-muted-foreground text-sm md:text-base">
              <span className="font-bold text-foreground text-lg">{averageRating}</span> de 5
              {" · "}
              <span className="font-semibold">{totalReviews}</span> reseñas en Google
            </p>
          </div>
        </div>

        {/* ── Grid de reseñas ─────────────────────────────────── */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentReviews.map((review, index) => (
              <div
                key={`${currentPage}-${index}`}
                className="group relative bg-card rounded-2xl border border-border p-6 md:p-8 shadow-sm hover:shadow-lg hover:border-primary/30 transition-all duration-300"
              >
                {/* Icono de comillas */}
                <Quote className="h-8 w-8 text-primary/20 mb-4" />

                {/* Estrellas */}
                <div className="flex items-center gap-0.5 mb-4">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${
                        i < review.rating
                          ? "fill-yellow-400 text-yellow-400"
                          : "fill-muted text-muted"
                      }`}
                    />
                  ))}
                </div>

                {/* Texto de la reseña */}
                <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6 line-clamp-5">
                  {review.text || "⭐⭐⭐⭐⭐"}
                </p>

                {/* Autor y fecha */}
                <div className="flex items-center gap-3 mt-auto pt-4 border-t border-border/50">
                  {/* Avatar */}
                  <div className="shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                    {review.profilePhoto ? (
                      <img
                        src={review.profilePhoto}
                        alt={review.author}
                        className="w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                        loading="lazy"
                      />
                    ) : (
                      <span className="text-primary font-bold text-sm">
                        {review.author
                          .split(" ")
                          .map((n) => n[0])
                          .join("")
                          .slice(0, 2)
                          .toUpperCase()}
                      </span>
                    )}
                  </div>

                  <div className="min-w-0">
                    <p className="font-semibold text-foreground text-sm truncate">
                      {review.author}
                    </p>
                    {review.relativeDate && (
                      <p className="text-muted-foreground text-xs">
                        {review.relativeDate}
                      </p>
                    )}
                  </div>
                </div>

                {/* Decoración sutil */}
                <div className="absolute -z-10 top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
            ))}
          </div>

          {/* ── Paginación ──────────────────────────────────── */}
          {totalPages > 1 && (
            <div className="flex items-center justify-center gap-4 mt-10">
              <button
                onClick={prevPage}
                className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                aria-label="Reseñas anteriores"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-2">
                {Array.from({ length: totalPages }).map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                      i === currentPage
                        ? "bg-primary w-8"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                    }`}
                    aria-label={`Página ${i + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={nextPage}
                className="p-2 rounded-full border border-border hover:border-primary hover:bg-primary/5 transition-colors"
                aria-label="Siguientes reseñas"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          )}

          {/* ── Footer con enlace a Google ──────────────────── */}
          <div className="text-center mt-8">
            <a
              href="https://maps.app.goo.gl/JZaoAsgJLUtvN9VU6"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Ver todas las reseñas en Google Maps
              <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6M15 3h6v6M10 14L21 3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
