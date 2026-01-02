import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function Testimonials() {
  const testimonials = [
    {
      name: "María González",
      relation: "Hija de socia",
      text: "Mi madre ha cambiado completamente desde que asiste al Club. La veo más feliz, activa y con ganas de compartir. El trato es tan cercano que nos sentimos parte de una gran familia.",
    },
    {
      name: "Carlos Ramírez",
      relation: "Familiar",
      text: "La profesionalidad y calidez del equipo es excepcional. Cada vez que visitamos, vemos a nuestro padre sonriendo y participando activamente. Es el mejor lugar para su bienestar.",
    },
    {
      name: "Ana Martínez",
      relation: "Familiar de socia",
      text: "Busqué muchas opciones y el Club de la Memoria superó todas nuestras expectativas. Las actividades tienen propósito real y el ambiente es genuinamente familiar y acogedor.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Lo que dicen las <span className="text-primary">familias</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            La confianza de nuestras familias es lo que más valoramos
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-2">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-4 text-pretty">"{testimonial.text}"</p>
                <div className="border-t border-border pt-4">
                  <p className="font-bold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
