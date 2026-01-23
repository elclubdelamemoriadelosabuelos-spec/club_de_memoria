import { DIRECTOR, TEAM_MEMBERS } from "./Team.helper"
import type { TeamProps } from "./Team.types"
import { TeamMemberCard } from "./TeamMemberCard"
import { DirectorImage } from "./DirectorImage"

/**
 * Team component - Optimizado: estructura en servidor, interactividad en cliente
 */
export function Team({ className }: TeamProps) {
  return (
    <section id="equipo" className={`py-16 md:py-24 bg-background ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        {/* Director section */}
        <div className="max-w-4xl mx-auto mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
            <div className="relative w-72 h-72 md:w-96 md:h-96 shrink-0 rounded-full overflow-hidden border-8 border-primary/20 shadow-2xl">
              <DirectorImage src={DIRECTOR.image} alt={DIRECTOR.name} />
            </div>

            <div className="flex-1 text-center md:text-left">
              <h2 className="text-4xl md:text-5xl font-bold mb-3 text-foreground">Nuestro director</h2>
              <h3 className="text-2xl md:text-3xl font-semibold text-primary mb-4">{DIRECTOR.name}</h3>
              <p className="text-lg text-muted-foreground mb-4">{DIRECTOR.role}</p>
              <p className="text-base text-muted-foreground leading-relaxed">{DIRECTOR.bio}</p>
            </div>
          </div>
        </div>

        {/* Team section */}
        <div className="grid lg:grid-cols-[350px_1fr] gap-12 md:gap-16 items-start">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-balance leading-tight">
              Conoce a nuestro equipo
            </h2>
            <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
              Un grupo dinámico de profesionales apasionados por el bienestar integral
            </p>
          </div>

          {/* Team members grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8 md:gap-y-10">
            {TEAM_MEMBERS.map((member, index) => (
              <TeamMemberCard key={member.name} member={member} index={index} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
