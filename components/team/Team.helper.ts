import type { Director, TeamMember } from "./Team.types"

/**
 * Director data
 */
export const DIRECTOR: Director = {
  name: "Dr. Fabián Orellana",
  role: "Director del Club de la Memoria",
  image: "/equip/dr_fabian_orellana.png",
  bio: "Médico con más de 20 años de experiencia acompañando a adultos mayores desde una mirada humana e integral. Es fundador del Club de la Memoria para los Abuelos, un espacio creado para cuidar la mente, el cuerpo y las emociones en esta etapa de la vida.\n\nSu formación en geriatría, psiquiatría, estimulación cognitiva y manejo de enfermedades crónicas respalda un enfoque cercano, respetuoso y enfocado en la calidad de vida.\n\nMiembro de la Sociedad Americana de Geriatría y Psiquiatría.",
}

/**
 * Team members data
 */
export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "MBA. Kleber Huilcapi",
    role: "Administrador",
    image: "/equip/kleber_huilcapi.jpeg",
    description:
      "Administrador del Club de la Memoria. Gestiona todo el cuidado y logística para que los Adultos Mayores tengan las mejores de sus experiencias cada día.",
  },

  {
    name: "LIC. Wendy Peralta",
    role: "Asistente Administrativa",
    image: "/equip/wendy_peralta.jpeg",
    description:
      "Asistente Administrativa del Club de la Memoria, cuida de los adultos mayores y sus familias dándoles la mejor información y servicios necesarios acompañándoles en todo el proceso que requieran hacia nuestro Club.",
  },
  {
    name: "Alexandra Cárdenas",
    role: "Profesora",
    image: "/equip/alexandra_cardenas.jpeg",
    description:
      "Más de 10 años de experiencia en televisión, danza, entretenimiento y animación, desarrollo de actividades lúdicas y de movimiento, participación activa y bienestar integral.",
  },
  {
    name: "Shalom Carrasco",
    role: "Psicóloga y Pianista",
    image: "/equip/shalom_carrasco.jpeg",
    description:
      "Con experiencia en la integración de la psicología y la música en procesos de estimulación cognitiva y acompañamiento.",
  },
  {
    name: "Estefanía Betancourt",
    role: "Enfermería",
    image: "/equip/estefania_betancourt.jpeg",
    description:
      "Enfermera con más de seis años de experiencia en el cuidado del adulto mayor. Brinda atención integral con enfoque humano, responsabilidad y compromiso.",
  },
  {
    name: "Karol Goyes",
    role: "Gimnasia Física",
    image: "/equip/karol_goyes.jpeg",
    description:
      "Licenciada en Educación Física, entrenadora especializada en el adulto mayor. Mas de diez años de experiencia en actividad física, promoviendo el movimiento funcional y seguro en cada intervención.",
  },
  {
    name: "Katherine Muñoz",
    role: "Musicoterapeuta",
    image: "/equip/katherine_munoz.jpeg",
    description:
      "Magíster en Musicoterapia, psicóloga con formación clínica y amplia experiencia en adultos mayores y niños con neurodiversidades.",
  },
  {
    name: "Lucy E.",
    role: "Arte",
    image: "/equip/lucy_e.jpeg",
    description:
      "Artista visual (formada por el Artista Endara) con experiencia en el desarrollo de proyectos artísticos y participación en exposiciones culturales. Contribuye al Club de la Memoria mediante propuestas creativas que fomentan la expresión artística para el adulto mayor.",
  },
  {
    name: "Angie E.",
    role: "Arte",
    image: "/equip/angie_e.jpeg",
    description:
      "Diseñadora Gráfica y publicitaria/artista plástica (Formada en la escuela de arte Endara) con experiencia en proyectos creativos, ilustrativos y exposiciones culturales.",
  },
  {
    name: "Julio Bravo",
    role: "Mantenimiento",
    image: "/equip/julio_bravo.jpeg",
    description:
      "Mantenimiento del Club de la Memoria. Cuida de todos los espacios para que nuestros Socios se sientan agustos en un ambiente limpio, desinfectado y cuidado.",
  },
  {
    name: "Servicio de Catering",
    role: "3 Chefs Profesionales",
    image: "/equip/equipo_catering.jpeg",
    description:
      "Equipo conformado por 3 Chefs Profesionales. Empresa de catering DA&LIZ especializada en servicios gastronómicos para adultos mayores. Provee de menús personalizados y estrictos estándares de higiene y seguridad alimentaria y excelencia al servicio del Club de la Memoria.",
  },
]

/**
 * Toggle member selection
 */
export function toggleMemberSelection(
  currentSelection: number | null,
  index: number
): number | null {
  return currentSelection === index ? null : index
}
