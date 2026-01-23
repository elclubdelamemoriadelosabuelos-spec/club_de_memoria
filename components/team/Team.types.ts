/**
 * Types for Team component
 */

export interface Director {
  name: string
  role: string
  image: string
  bio: string
}

export interface TeamMember {
  name: string
  role: string
  image: string
  description: string
}

export interface TeamProps {
  className?: string
}
