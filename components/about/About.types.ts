import type { LucideIcon } from "lucide-react"

/**
 * Types for About component
 */

export interface Feature {
  icon: LucideIcon
  title: string
  description: string
  color: string
  accentColor: string
}

export interface AboutProps {
  className?: string
}
