/**
 * Types for Contact component
 */

export interface ContactFormData {
  nombre: string
  email: string
  telefono: string
  mensaje: string
}

export type SubmitStatus = "idle" | "success" | "error"

export interface ContactInfo {
  phone: string
  phoneDisplay: string
  location: string
  locationUrl: string
  schedule: {
    days: string
    hours: string
  }
}

export interface ContactProps {
  className?: string
}
