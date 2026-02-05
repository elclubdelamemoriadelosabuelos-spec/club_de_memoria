"use client"

import Image from "next/image"
import { useState } from "react"
import type { TeamMember } from "./Team.types"

const DEFAULT_IMAGE = "/club_memoria_negativo.webp"

const getImageSrc = (image: string | undefined | null): string => {
  if (!image || image.trim() === "") {
    return DEFAULT_IMAGE
  }
  return image
}

interface TeamMemberCardProps {
  member: TeamMember
  index: number
}

/**
 * Card de miembro del equipo - Solo la interactividad es cliente
 */
export function TeamMemberCard({ member, index }: TeamMemberCardProps) {
  const [isExpanded, setIsExpanded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [imageSrc, setImageSrc] = useState(() => getImageSrc(member.image))

  const handleClick = () => {
    setIsExpanded(!isExpanded)
  }

  const handleImageError = () => {
    if (!imageError && !imageSrc.includes('club_memoria_negativo')) {
      setImageError(true)
      setImageSrc(DEFAULT_IMAGE)
    }
  }

  return (
    <div
      className="flex flex-col items-center text-center group cursor-pointer"
      onClick={handleClick}
    >
      <div className="relative w-32 h-32 md:w-44 md:h-44 mb-4 rounded-full overflow-hidden border-4 border-muted group-hover:border-primary transition-colors duration-300">
        <Image
          src={imageSrc}
          alt={member.name}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
          loading={index < 6 ? "eager" : "lazy"}
          decoding={index < 6 ? "sync" : "async"}
          onError={handleImageError}
          unoptimized
        />
      </div>

      <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{member.name}</h3>
      <p className="text-sm md:text-base text-primary font-medium mb-2">{member.role}</p>

      {/* Description - shows on click */}
      {isExpanded && (
        <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-2 px-2 animate-in fade-in slide-in-from-top-2 duration-300">
          {member.description}
        </p>
      )}
    </div>
  )
}
