import type { LucideIcon } from "lucide-react"

/**
 * Types for Method component
 */

export interface Pillar {
  icon: LucideIcon
  title: string
  color: string
  description: string
}

export interface MethodProps {
  className?: string
}
