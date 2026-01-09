"use client"

import Image from "next/image"
import { useState } from "react"

export function Team() {
  const [selectedMember, setSelectedMember] = useState<number | null>(null)

  const director = {
    name: "MBA. Kleber Huilcapi",
    role: "Administrador del Club de la Memoria",
    image: "/professional-doctor-portrait.jpg",
    bio: "Gestiona todo el cuidado y logística para que los Adultos Mayores tengan las mejores de sus experiencias cada día.",
  }

  const teamMembers = [
    {
      name: "Alexandra Cárdenas",
      role: "Profesora",
      image: "/female-activity-coordinator-elderly.jpg",
      description:
        "Más de 10 años de experiencia en televisión, danza, entretenimiento y animación, desarrollo de actividades lúdicas y de movimiento, participación activa y bienestar integral.",
    },
    {
      name: "Shalom Carrasco",
      role: "Psicóloga y Pianista",
      image: "/female-psychologist-professional.jpg",
      description:
        "Con experiencia en la integración de la psicología y la música en procesos de estimulación cognitiva y acompañamiento.",
    },
    {
      name: "Estefanía Betancourt",
      role: "Enfermería",
      image: "/female-nurse-professional.jpg",
      description:
        "Enfermera con más de seis años de experiencia en el cuidado del adulto mayor. Brinda atención integral con enfoque humano, responsabilidad y compromiso.",
    },
    {
      name: "Katherine Muñoz",
      role: "Musicoterapeuta",
      image: "/music-therapist-professional.jpg",
      description:
        "Magíster en Musicoterapia, psicóloga con formación clínica y amplia experiencia en adultos mayores y niños con neurodiversidades.",
    },
    {
      name: "Karol Goyes",
      role: "Gimnasia Física",
      image: "/physical-education-instructor-elderly.jpg",
      description:
        "Licenciada en Educación Física, entrenadora especializada en el adulto mayor. Mas de diez años de experiencia en actividad física, promoviendo el movimiento funcional y seguro en cada intervención.",
    },
    {
      name: "Angie E.",
      role: "Arte",
      image: "/female-administrator-professional.jpg",
      description:
        "Diseñadora Gráfica y publicitaria/artista plástica (Formada en la escuela de arte Endara) con experiencia en proyectos creativos, ilustrativos y exposiciones culturales.",
    },
    {
      name: "Lucy E.",
      role: "Arte",
      image: "/female-art-teacher-professional.jpg",
      description:
        "Artista visual (formada por el Artista Endara) con experiencia en el desarrollo de proyectos artísticos y participación en exposiciones culturales. Contribuye al Club de la Memoria mediante propuestas creativas que fomentan la expresión artística para el adulto mayor.",
    },
    {
      name: "Lic. Wendy Peralta",
      role: "Asistente Administrativa",
      image: "/female-secretary-professional.jpg",
      description:
        "Asistente Administrativa del Club de la Memoria, cuida de los adultos mayores y sus familias dándoles la mejor información y servicios necesarios acompañándoles en todo el proceso que requieran hacia nuestro Club.",
    },
    {
      name: "Julio Bravo",
      role: "Mantenimiento",
      image: "/male-maintenance-professional.jpg",
      description:
        "Mantenimiento del Club de la Memoria. Cuida de todos los espacios para que nuestros Socios se sientan agusto en un ambiente limpio, desinfectado y cuidado.",
    },
  ]

  const catering = {
    name: "Equipo de Catering DA&LIZ",
    role: "3 Chefs Profesionales",
    image: "/chefs-professional-team.jpg",
    description:
      "Empresa de catering DA&LIZ especializada en servicios gastronómicos para adultos mayores. Provee de menús personalizados y estrictos estándares de higiene y seguridad alimentaria y excelencia al servicio del Club de la Memoria.",
  }

  return (
    <section id="equipo" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        {/* Director section */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="relative w-64 h-64 md:w-80 md:h-80 shrink-0 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl">
              <Image src={director.image || "/placeholder.svg"} alt={director.name} fill className="object-cover" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">Nuestro director</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{director.name}</h3>
              <p className="text-lg text-muted-foreground mb-4">{director.role}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{director.bio}</p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance leading-tight">Conoce a nuestro equipo</h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Un grupo dinámico de profesionales apasionados por el bienestar integral
            </p>
          </div>

          {/* Team members grid: 3 columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="flex flex-col items-center text-center group cursor-pointer"
                onClick={() => setSelectedMember(selectedMember === index ? null : index)}
              >
                <div className="relative w-28 h-28 md:w-36 md:h-36 mb-4 rounded-full overflow-hidden border-4 border-muted group-hover:border-primary transition-colors duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm md:text-base text-primary font-medium mb-2">{member.role}</p>

                {/* Description - shows on click */}
                {selectedMember === index && (
                  <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mt-2 px-2 animate-in fade-in slide-in-from-top-2 duration-300">
                    {member.description}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Catering section */}
        <div className="mt-16 md:mt-24 max-w-3xl mx-auto">
          <div className="flex flex-col md:flex-row items-center gap-8 p-6 md:p-8 bg-muted/30 rounded-2xl border border-muted">
            <div className="relative w-40 h-40 md:w-48 md:h-48 shrink-0 rounded-full overflow-hidden border-4 border-primary/30">
              <Image src={catering.image || "/placeholder.svg"} alt={catering.name} fill className="object-cover" />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-2">{catering.name}</h3>
              <p className="text-base text-primary font-medium mb-3">{catering.role}</p>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">{catering.description}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
