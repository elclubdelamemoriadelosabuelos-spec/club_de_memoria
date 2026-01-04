"use client"

import Image from "next/image"

export function Team() {
  const teamMembers = [
    {
      name: "Dr. [Nombre]",
      role: "Director General",
      image: "/professional-doctor-portrait.jpg",
    },
    {
      name: "[Nombre]",
      role: "Psicóloga",
      image: "/female-psychologist-professional.jpg",
    },
    {
      name: "[Nombre]",
      role: "Enfermera",
      image: "/female-nurse-professional.jpg",
    },
    {
      name: "[Nombre]",
      role: "Administradora",
      image: "/female-administrator-professional.jpg",
    },
    {
      name: "[Nombre]",
      role: "Secretaria",
      image: "/female-secretary-professional.jpg",
    },
    {
      name: "[Nombre]",
      role: "Animadora",
      image: "/female-activity-coordinator-elderly.jpg",
    },
    {
      name: "[Nombre]",
      role: "Profesora de Arte",
      image: "/female-art-teacher-elderly.jpg",
    },
    {
      name: "[Nombre]",
      role: "Musicoterapeuta",
      image: "/music-therapist-professional.jpg",
    },
    {
      name: "[Nombre]",
      role: "Instructor de Gimnasia",
      image: "/physical-education-instructor-elderly.jpg",
    },
    {
      name: "[Nombre]",
      role: "Profesora",
      image: "/female-teacher-elderly-activities.jpg",
    },
    {
      name: "[Nombre]",
      role: "Profesora",
      image: "/female-teacher-professional-portrait.jpg",
    },
  ]

  return (
    <section id="equipo" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-[400px_1fr] gap-12 md:gap-16 lg:gap-24 items-start">
          {/* Left side - Title and description */}
          <div className="lg:sticky lg:top-24">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-balance leading-tight">
              Conoce a nuestro equipo
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Un grupo dinámico de profesionales apasionados por el bienestar integral, dedicados a brindar el mejor
              cuidado, alegría y acompañamiento a nuestros adultos mayores.
            </p>
          </div>

          {/* Right side - Team members in bento grid */}
          <div className="grid grid-cols-2 gap-x-8 md:gap-x-12 gap-y-8 md:gap-y-12">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center text-center group">
                {/* Circular image */}
                <div className="relative w-24 h-24 md:w-32 md:h-32 mb-4 rounded-full overflow-hidden border-4 border-muted group-hover:border-primary transition-colors duration-300">
                  <Image
                    src={member.image || "/placeholder.svg"}
                    alt={member.name}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>

                {/* Name and role */}
                <h3 className="text-base md:text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm md:text-base text-primary font-medium">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
