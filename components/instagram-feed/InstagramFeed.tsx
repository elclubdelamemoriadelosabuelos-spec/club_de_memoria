import { Instagram } from "lucide-react"
import type { InstagramFeedProps } from "./InstagramFeed.types"
import { INSTAGRAM_URL } from "./InstagramFeed.helper"

export function InstagramFeed({ className }: InstagramFeedProps) {

  return (
    <section className={`py-20 md:py-32 bg-linear-to-b from-background via-muted/20 to-background relative overflow-hidden ${className ?? ""}`}>
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-linear-to-br from-pink-500/10 to-purple-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-linear-to-br from-orange-500/10 to-pink-500/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-14 md:mb-20">
          {/* Instagram badge */}
          <a
            href={INSTAGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-linear-to-r from-purple-500 via-pink-500 to-orange-500 text-white text-sm font-semibold mb-6 hover:shadow-lg hover:shadow-pink-500/25 transition-all hover:scale-105"
          >
            <Instagram className="h-4 w-4" />
            @clubdelamemoria
          </a>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-5">
            Síguenos en{" "}
            <span className="bg-linear-to-r from-purple-600 via-pink-500 to-orange-500 bg-clip-text text-transparent">
              Instagram
            </span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Descubre momentos de alegría, actividades y la vida cotidiana en el Club de la Memoria
          </p>
        </div>

        {/* Elfsight Instagram Feed Widget */}
        <div className="max-w-6xl mx-auto mb-12">
          <div 
            className="elfsight-app-b002cc61-b804-4c3b-9bf5-e1d3e7275218" 
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  )
}
