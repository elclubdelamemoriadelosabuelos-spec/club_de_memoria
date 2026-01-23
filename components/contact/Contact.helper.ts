import type { ContactFormData, ContactInfo } from "./Contact.types"
import { CONTACT, COMPANY, FORM } from "@/lib/constants"

/**
 * Contact information
 */
export const CONTACT_INFO: ContactInfo = {
  phone: CONTACT.phone,
  phoneDisplay: CONTACT.phoneDisplay,
  location: COMPANY.location,
  locationUrl: COMPANY.locationUrl,
  schedule: CONTACT.schedule,
}

/**
 * Initial form state
 */
export const INITIAL_FORM_DATA: ContactFormData = FORM.initialContactForm

/**
 * Success message timeout in milliseconds
 */
export const SUCCESS_MESSAGE_TIMEOUT = FORM.successMessageTimeout

/**
 * Generates a WhatsApp URL with the form data
 */
export function generateWhatsAppUrl(formData: ContactFormData): string {
  const message = `*Nueva consulta desde el sitio web*%0A%0A*Nombre:* ${formData.nombre}%0A*Email:* ${formData.email}%0A*Teléfono:* ${formData.telefono}%0A*Mensaje:* ${formData.mensaje || "Sin mensaje adicional"}`

  return `https://wa.me/${CONTACT.whatsapp.number}?text=${message}`
}

/**
 * Opens WhatsApp in a new tab
 */
export function openWhatsApp(formData: ContactFormData): void {
  const url = generateWhatsAppUrl(formData)
  window.open(url, "_blank")
}
