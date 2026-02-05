import type { HeroProps } from "./Hero.types"
import { HERO_STATS, HERO_IMAGE } from "./Hero.helper"
import { HERO, SECTIONS } from "@/lib/constants"
import { HeroActions } from "./HeroActions"
import Image from "next/image"

/**
 * Contenido estático del Hero - Renderizado en servidor
 */
export function HeroContent({ className }: HeroProps) {
  return (
    <section
      id={SECTIONS.inicio}
      className={`pt-12 md:pt-32 pb-16 md:pb-24 bg-linear-to-br from-primary/5 via-background to-accent/5 ${className ?? ""}`}
    >
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6 md:space-y-8">
            <div className="inline-block">
              <span className="bg-primary/10 text-primary px-4 py-2 rounded-full text-sm md:text-2xl font-semibold">
                {HERO.badge}
              </span>
            </div>
            <h1 className="text-5xl md:text-5xl lg:text-6xl font-bold leading-tight text-balance">
              El primer club de <span className="text-primary">adultos mayores</span> en Quito
            </h1>
            <p className="text-lg md:text-2xl text-muted-foreground leading-relaxed text-pretty">
              Espacio de vitalidad para reconectar con la vida, donde son acompañados con actividades, amistad y alegría, promoviendo su bienestar y calidad de vida.
            </p>
            <HeroActions />
          </div>

          <div className="relative">
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src={HERO_IMAGE}
                alt="Adultos mayores felices participando en actividades del Club de la Memoria"
                width={1200}
                height={800}
                className="w-full h-auto object-cover"
                priority
                quality={85}
                sizes="(max-width: 1024px) 100vw, 50vw"
                unoptimized
              />
            </div>
            <div className="absolute -bottom-8 -left-8 bg-secondary text-secondary-foreground rounded-2xl p-6 shadow-xl max-w-[350px]">
              <p className="text-4xl font-bold">{HERO_STATS.value}</p>
              <p className="text-2xl font-bold">{HERO_STATS.label}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
