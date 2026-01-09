"use client"

import { Clock, Utensils, Music, Smile, Calendar, PartyPopper } from "lucide-react"

export function Program() {
  const schedule = [
    {
      icon: Smile,
      time: "10:00 - 11:30",
      title: "Mañanas activas y conectadas",
      emoji: "",
      activities: ["Socialización guiada", "Entrenamiento de memoria", "Movimiento, baile y Brain Gym"],
      footer: "Comenzamos el día activando la mente y el cuerpo, siempre en grupo y acompañados.",
      image: "/elderly-morning-exercise-group-stretching.jpg",
    },
    {
      icon: Music,
      time: "11:30 - 13:00",
      title: "Talleres con propósito",
      emoji: "",
      activities: ["Arte y pintura", "Musicoterapia", "Talleres de memoria", "Actividades creativas"],
      footer: "Cada día una experiencia distinta que estimula la creatividad y la expresión emocional.",
      image: "/elderly-people-doing-art-therapy-painting-together.jpg",
    },
    {
      icon: Utensils,
      time: "13:00 - 14:00",
      title: "Alimentación cuidada",
      emoji: "",
      activities: ["Breaks saludables", "Almuerzo completo y acompañado"],
      footer: "La alimentación también forma parte del bienestar integral.",
      image: "/seniors-enjoying-healthy-lunch-together-dining.jpg",
    },
    {
      icon: Calendar,
      time: "14:00 - 16:00",
      title: "Tardes de disfrute y movimiento",
      emoji: "",
      activities: ["Juegos de mesa y dinámicas grupales", "Gimnasia vital adaptada"],
      footer: "Terminamos el día activos, relajados y acompañados.",
      image: "/seniors-playing-board-games-memory-activities.jpg",
    },
    {
      icon: PartyPopper,
      time: "Mensual",
      title: "Experiencias especiales",
      emoji: "",
      activities: ["Celebraciones", "Salidas mensuales", "Fechas importantes"],
      footer: "Momentos memorables que fortalecen vínculos y crean recuerdos.",
      image: "/elderly-group-celebrating-birthday-party.jpg",
    },
     {
      icon: PartyPopper,
      time: "",
      title: "Otros",
      emoji: "",
      activities: ["Seguimiento medico", "Transporte puerta a puerta"],
      footer: "Cambiar este texto.",
      image: "/elderly-group-celebrating-birthday-party.jpg", /* CAMBIAR ESTA IMAGEN */
    },
  ]

  return (
    <section id="programa" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 text-balance">
            Nuestro <span className="text-primary">Programa de Día</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty">
            De 10:00 a 16:00, un programa integral diseñado para acompañar a los adultos mayores a lo largo de toda la
            jornada en un entorno seguro, activo y humano.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
          {schedule.map((item, index) => (
            <div
              key={index}
              className="group relative bg-card rounded-3xl border border-border overflow-hidden hover:shadow-2xl hover:shadow-primary/10 transition-all duration-500 hover:-translate-y-2"
            >
              {/* Image section */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />

                {/* Time badge */}
                { item.time &&(
                <div className="absolute top-4 right-4 bg-primary/90 backdrop-blur-sm text-white px-3 py-1.5 rounded-full flex gap-1.5 text-sm font-semibold shadow-lg flex-row items-center leading-7 tracking-normal">
                  <Clock className="h-3.5 w-3.5" />
                  {item.time}
                </div>
                )} 
              </div>

              {/* Content section */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-primary transition-colors">
                  {item.title}
                </h3>

                <ul className="space-y-2 mb-4">
                  {item.activities.map((activity, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="text-primary mt-0.5 font-bold">•</span>
                      <span className="leading-relaxed">{activity}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-border">
                  <p className="text-sm text-primary font-medium leading-relaxed flex items-start gap-2">
                    {/* <span className="shrink-0">👉</span> */}
                    <span>{item.footer}</span>
                  </p>
                </div>
              </div>
            {/* Accent line at bottom 
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />*/}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
