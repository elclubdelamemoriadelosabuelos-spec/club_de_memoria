import { Clock, Utensils, Music, Smile, Calendar, PartyPopper } from "lucide-react"
import type { ScheduleItem } from "./Program.types"

/**
 * Schedule data for the program
 */
export const SCHEDULE: ScheduleItem[] = [
  {
    icon: Smile,
    time: "10:00 - 11:30",
    title: "Mañanas activas y conectadas",
    activities: [
      {
        name: "Socialización guiada",
        description: "Espacios de encuentro grupal donde se promueve la conversación, la escucha activa y el vínculo social, fortaleciendo el autoestima y el sentido de pertenencia."
      },
      {
        name: "Entrenamiento de memoria",
        description: "Ejercicios prácticos para estimular la atención, la concentración y la memoria, adaptados a las capacidades de cada participante."
      },
      {
        name: "Movimiento y baile",
        description: "Actividades físicas suaves y coordinadas que activan el cuerpo, mejoran la movilidad y favorecen la conexión mente–cuerpo."
      }
    ],
    footer: "Comenzamos el día activando la mente y el cuerpo, siempre en grupo y acompañados.",
    images: [
      "/galeria/mananas_activas/mananas_activas1.webp", 
      "/galeria/mananas_activas/mananas_activas3.webp",
      "/galeria/mananas_activas/mananas_activas4.webp",
      "/galeria/mananas_activas/mananas_activas5.webp",
      "/galeria/mananas_activas/mananas_activas6.webp",
      "/galeria/mananas_activas/mananas_activas7.webp",
      "/galeria/mananas_activas/mananas_activas8.webp",
      "/galeria/mananas_activas/mananas_activas9.webp",
      "/galeria/mananas_activas/mananas_activas10.webp",
    ],
  },
  {
    icon: Music,
    time: "11:30 - 13:00",
    title: "Talleres con propósito",
    activities: [
      {
        name: "Arte y pintura",
        description: "Espacios de expresión creativa que estimulan la motricidad fina, la imaginación y la expresión emocional."
      },
      {
        name: "Musicoterapia",
        description: "Uso de la música como herramienta terapéutica para activar recuerdos, emociones positivas y favorecer la relajación."
      },
      {
        name: "Talleres de memoria",
        description: "Actividades estructuradas que refuerzan habilidades cognitivas a través de juegos, dinámicas y ejercicios mentales."
      },
      {
        name: "Actividades creativas",
        description: "Propuestas variadas que fomentan la creatividad, la autonomía y la participación activa en un entorno estimulante."
      }
    ],
    footer: "Cada día una experiencia distinta que estimula la creatividad y la expresión emocional.",
    images: [
      "/galeria/talleres/talleres1.webp",
      "/galeria/talleres/talleres2.webp",
      "/galeria/talleres/talleres4.webp",
      "/galeria/talleres/talleres5.webp",
      "/galeria/talleres/talleres6.webp",
      "/galeria/talleres/talleres7.webp",
      "/galeria/talleres/talleres8.webp",
      "/galeria/talleres/talleres9.webp",
      "/galeria/talleres/talleres10.webp",
      "/galeria/talleres/talleres11.webp",
    ],
  },
  {
    icon: Utensils,
    time: "13:00 - 14:00",
    title: "Alimentación cuidada",
    activities: [
      {
        name: "Breaks saludables",
        description: "Pausas con alimentos balanceados que aportan energía y promueven hábitos de alimentación consciente."
      },
      {
        name: "Almuerzo completo y acompañado",
        description: "Comidas nutritivas compartidas en un ambiente cálido, que refuerzan la rutina, el acompañamiento y la socialización."
      }
    ],
    footer: "La alimentación también forma parte del bienestar integral.",
    images: [
      "/galeria/alimentacion/alimentacion1.webp",
      "/galeria/alimentacion/alimentacion2.webp",
      "/galeria/alimentacion/alimentacion3.webp",
      "/galeria/alimentacion/alimentacion4.webp",
      "/galeria/alimentacion/alimentacion5.webp",
    ],
  },
  {
    icon: Calendar,
    time: "14:00 - 16:00",
    title: "Tardes de disfrute y movimiento",
    activities: [
      {
        name: "Juegos de mesa y dinámicas grupales",
        description: "Actividades lúdicas que estimulan la memoria, la estrategia y la interacción social."
      },
      {
        name: "Gimnasia vital adaptada",
        description: "Ejercicios físicos diseñados para mantener la movilidad, el equilibrio y el bienestar corporal."
      }
    ],
    footer: "Terminamos el día activos, relajados y acompañados.",
    images: [
      "/galeria/tardes_disfute/tardes_disfute1.webp",
      "/galeria/tardes_disfute/tardes_disfute2.webp",
      "/galeria/tardes_disfute/tardes_disfute3.webp",
      "/galeria/tardes_disfute/tardes_disfute4.webp",
      "/galeria/tardes_disfute/tardes_disfute5.webp",
      "/galeria/tardes_disfute/tardes_disfute6.webp",
      "/galeria/tardes_disfute/tardes_disfute7.webp",
      "/galeria/tardes_disfute/tardes_disfute8.webp",
    ],
  },
  {
    icon: PartyPopper,
    time: "Mensual",
    title: "Experiencias especiales",
    activities: [
      {
        name: "Celebraciones",
        description: "Momentos de encuentro para compartir cumpleaños y fechas especiales para fortalecer el vínculo emocional."
      },
      {
        name: "Salidas mensuales",
        description: "Actividades fuera del club que promueven la autonomía, la recreación y la conexión con el entorno."
      },
      {
        name: "Fechas importantes",
        description: "Conmemoraciones que dan sentido al calendario y refuerzan la identidad y la memoria emocional."
      }
    ],
    footer: "Momentos memorables que fortalecen vínculos y crean recuerdos.",
    images: [
      "/galeria/experiencias/experiencias1.webp",
      "/galeria/experiencias/experiencias2.webp",
      "/galeria/experiencias/experiencias3.webp",
      "/galeria/experiencias/experiencias4.webp",
      "/galeria/experiencias/experiencias5.webp",
      "/galeria/experiencias/experiencias6.webp",
      "/galeria/experiencias/experiencias7.webp",
      "/galeria/experiencias/experiencias8.webp",
      "/galeria/experiencias/experiencias9.webp",
      "/galeria/experiencias/experiencias10.webp",
      "/galeria/experiencias/experiencias11.webp",
    ],
  },
  {
    icon: PartyPopper,
    time: "",
    title: "Adicionales",
    activities: [
      {
        name: "Transporte puerta a puerta",
        description: "Ofrecemos el servicio de transporte desde el domicilio del socio hasta el Club y de regreso a casa, garantizando comodidad, puntualidad y seguridad en cada traslado."
      },
      {
        name: "Seguimiento de enfermería",
        description: "Incluido para todos nuestros socios. Nuestro equipo de enfermería realiza un acompañamiento cercano, apoyando en la toma de medicación y en el seguimiento diario del bienestar general."
      },
      {
        name: "Consulta médica",
        description: "Nuestros socios acceden a consultas médicas con un precio preferencial, como parte de nuestro compromiso con el cuidado continuo de la salud."
      },
    ],
    footer: "Adicionales que complementan el programa y mejoran la calidad de vida de los participantes.",
    images: [
      "/galeria/extras/extras1.webp",
      "/galeria/extras/extras2.webp",
      "/galeria/extras/extras3.webp",
      "/galeria/extras/extras4.webp",
    ],
  },
]
