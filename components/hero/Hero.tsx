import type { HeroProps } from "./Hero.types"
import { HeroContent } from "./HeroContent"

/**
 * Hero component - Optimizado: contenido en servidor, acciones en cliente
 */
export function Hero({ className }: HeroProps) {
  return <HeroContent className={className} />
}
