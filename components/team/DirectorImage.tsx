"use client"

import Image from "next/image"
import { getOptimizedImagePath } from "@/lib/image-utils"

const DEFAULT_IMAGE = "/club_memoria_negativo.png"

const getImageSrc = (image: string | undefined | null): string => {
  if (!image || image.trim() === "") {
    return DEFAULT_IMAGE
  }
  return getOptimizedImagePath(image)
}

interface DirectorImageProps {
  src: string
  alt: string
}

/**
 * Director Image - Componente cliente para manejar onError
 */
export function DirectorImage({ src, alt }: DirectorImageProps) {
  return (
    <Image 
      src={getImageSrc(src)} 
      alt={alt} 
      fill 
      className="object-cover"
      loading="eager"
      priority
      onError={(e) => {
        const target = e.target as HTMLImageElement
        const currentSrc = target.src
        const defaultSrc = new URL(DEFAULT_IMAGE, window.location.origin).href
        if (!currentSrc.includes('club_memoria_negativo')) {
          target.src = DEFAULT_IMAGE
        }
      }}
    />
  )
}
