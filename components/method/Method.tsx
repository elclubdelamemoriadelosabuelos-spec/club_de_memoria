import type { MethodProps } from "./Method.types"
import { PILLARS } from "./Method.helper"

export function Method({ className }: MethodProps) {
  return (
    <section id="metodo" className={`py-16 md:py-24 bg-background ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Nuestro <span className="text-primary">Método RESTOR</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            Un enfoque integral y único que une mente, cuerpo y emoción para promover el bienestar completo de cada
            persona.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8 md:gap-12 max-w-6xl mx-auto">
          {PILLARS.map((pillar, index) => (
            <div key={index} className="text-center space-y-4 w-full md:w-[calc(33.333%-2rem)] md:max-w-[300px]">
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
      </div>
    </section>
  )
}
