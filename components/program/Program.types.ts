import type React from "react"

/**
 * Types for Program component
 */

export interface Activity {
  name: string
  description: string
}

export interface ScheduleItem {
  icon: React.ComponentType<{ className?: string }>
  time: string
  title: string
  activities: Activity[]
  footer: string
  images: string[]
}

export interface ProgramProps {
  className?: string
}

export interface ProgramCardProps {
  item: ScheduleItem
  index: number
  onClick: () => void
}

export interface DialogCarouselProps {
  images: string[]
}
