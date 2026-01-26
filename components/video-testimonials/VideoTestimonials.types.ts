/**
 * Types for VideoTestimonials component
 */

export interface TestimonialVideo {
  webm: string
  mp4: string // Fallback
  name: string
  quote: string
}

export interface VideoTestimonialsProps {
  className?: string
}

export interface VideoRefs {
  [key: number]: HTMLVideoElement | null
}

export interface MutedState {
  [key: number]: boolean
}
