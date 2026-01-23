/**
 * Types for Footer component
 */

export interface SocialLink {
  name: string
  url: string
  icon: "facebook" | "instagram" | "tiktok"
}

export interface FooterProps {
  className?: string
}
