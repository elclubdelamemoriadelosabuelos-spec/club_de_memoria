"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, Clock, Send, CheckCircle2, User, Mail, MessageSquare } from "lucide-react"
import type { ContactProps, ContactFormData, SubmitStatus } from "./Contact.types"
import { CONTACT_INFO, INITIAL_FORM_DATA } from "./Contact.helper"
import { SUCCESS_MESSAGE_TIMEOUT, openWhatsApp } from "./Contact.helper"

export function Contact({ className }: ContactProps) {
  const [formData, setFormData] = useState<ContactFormData>(INITIAL_FORM_DATA)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<SubmitStatus>("idle")

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    openWhatsApp(formData)

    setIsSubmitting(false)
    setSubmitStatus("success")
    setFormData(INITIAL_FORM_DATA)

    setTimeout(() => setSubmitStatus("idle"), SUCCESS_MESSAGE_TIMEOUT)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contacto" className={`py-16 md:py-24 bg-gradient-to-b from-background to-muted/30 ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
            <MessageSquare className="h-4 w-4" />
            Estamos para ayudarte
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-balance">
            Agenda tu <span className="text-primary">visita</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Te invitamos a conocer nuestro espacio y descubrir cómo podemos ser parte del bienestar de tu ser querido
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-2 shadow-xl shadow-primary/5 overflow-hidden">
            <CardHeader className="pb-2 pt-6 px-6 md:px-8">
              <CardTitle className="text-2xl md:text-3xl flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Send className="h-5 w-5 text-primary" />
                </div>
                Solicita información
              </CardTitle>
              <p className="text-muted-foreground mt-2">Completa el formulario y te contactaremos por WhatsApp</p>
            </CardHeader>
            <CardContent className="px-6 md:px-8 pb-8">
              {submitStatus === "success" ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-20 h-20 rounded-full bg-green-100 flex items-center justify-center mb-6">
                    <CheckCircle2 className="h-10 w-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-2">¡Mensaje enviado!</h3>
                  <p className="text-muted-foreground max-w-sm">
                    Gracias por contactarnos. Te responderemos lo antes posible.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-semibold mb-2 text-foreground">
                      Nombre completo <span className="text-primary">*</span>
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                      <Input
                        id="nombre"
                        name="nombre"
                        value={formData.nombre}
                        onChange={handleChange}
                        required
                        placeholder="Tu nombre completo"
                        className="text-base pl-10 h-12 border-2 focus:border-primary"
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold mb-2 text-foreground">
                        Correo electrónico <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          placeholder="tu@email.com"
                          className="text-base pl-10 h-12 border-2 focus:border-primary"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="telefono" className="block text-sm font-semibold mb-2 text-foreground">
                        Teléfono / WhatsApp <span className="text-primary">*</span>
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                        <Input
                          id="telefono"
                          name="telefono"
                          type="tel"
                          value={formData.telefono}
                          onChange={handleChange}
                          required
                          placeholder="0999999999"
                          className="text-base pl-10 h-12 border-2 focus:border-primary"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="mensaje" className="block text-sm font-semibold mb-2 text-foreground">
                      Mensaje <span className="text-muted-foreground font-normal">(opcional)</span>
                    </label>
                    <Textarea
                      id="mensaje"
                      name="mensaje"
                      value={formData.mensaje}
                      onChange={handleChange}
                      placeholder="Cuéntanos qué te gustaría saber sobre el Club de la Memoria..."
                      rows={4}
                      className="text-base resize-none border-2 focus:border-primary"
                    />
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-[#F87229] text-primary-foreground font-semibold text-base h-14 text-lg shadow-lg shadow-primary/20 transition-all hover:shadow-xl hover:shadow-[#F87229]/30"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="animate-spin mr-2">⏳</span>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <Send className="mr-2 h-5 w-5" />
                        Enviar mensaje por WhatsApp
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>

          {/* Contact Info */}
          <div className="space-y-4">
            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Teléfono</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.phoneDisplay}</p>
                    <a href={`tel:${CONTACT_INFO.phone}`} className="text-primary hover:underline text-sm font-medium">
                      Llamar ahora
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Ubicación</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.location}</p>
                    <a
                      href={CONTACT_INFO.locationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:underline text-sm font-medium"
                    >
                      Ver en mapa
                    </a>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-2 bg-primary/5">
              <CardContent className="p-6">
                <div className="flex gap-4">
                  <div className="bg-primary/10 w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Clock className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-1">Horario</h3>
                    <p className="text-muted-foreground">{CONTACT_INFO.schedule.days}</p>
                    <p className="font-semibold text-primary">{CONTACT_INFO.schedule.hours}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
