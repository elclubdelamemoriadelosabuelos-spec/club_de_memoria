import { Brain, Heart, Users2 } from "lucide-react"

export function Method() {
  const pillars = [
    {
      icon: Brain,
      title: "Estimulación cognitiva",
      color: "bg-primary",
      description: "Entrenamiento de memoria y actividades que mantienen la mente activa y alerta.",
    },
    {
      icon: Heart,
      title: "Expresión emocional",
      color: "bg-secondary",
      description: "Espacios seguros para compartir sentimientos y conectar desde la autenticidad.",
    },
    {
      icon: Users2,
      title: "Encuentro social",
      color: "bg-accent",
      description: "Construcción de amistades y lazos significativos en un ambiente familiar.",
    },
  ]

  return (
    <section id="metodo" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Nuestro <span className="text-primary">Método 3E</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Un enfoque integral y único que une mente, cuerpo y emoción para promover el bienestar completo de cada
            persona.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12 max-w-6xl mx-auto">
          {pillars.map((pillar, index) => (
            <div key={index} className="text-center space-y-4">
              <div
                className={`${pillar.color} w-20 h-20 rounded-2xl flex items-center justify-center mx-auto shadow-lg`}
              >
                <pillar.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="text-2xl font-bold">{pillar.title}</h3>
              <p className="text-muted-foreground leading-relaxed text-pretty">{pillar.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 max-w-4xl mx-auto text-center">
          <div className="bg-primary/5 border-2 border-primary/20 rounded-3xl p-8 md:p-12">
            <p className="text-xl md:text-2xl font-semibold text-primary mb-4">
              "Aquí no vienen a pasar el tiempo, vienen a vivirlo"
            </p>
            <p className="text-muted-foreground text-lg">
              Un espacio donde cada día es una oportunidad para reconectar con lo esencial: la vida.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
