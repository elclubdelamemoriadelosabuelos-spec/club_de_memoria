import { Facebook, Instagram } from "lucide-react"
import Image from "next/image"
import type { FooterProps } from "./Footer.types"
import { COMPANY_INFO, CONTACT_INFO, SOCIAL_LINKS, getCurrentYear } from "./Footer.helper"
import { TikTokIcon } from "@/components/ui/tiktok-icon"

function getSocialIcon(icon: string) {
  switch (icon) {
    case "facebook":
      return <Facebook className="h-5 w-5" />
    case "instagram":
      return <Instagram className="h-5 w-5" />
    case "tiktok":
      return <TikTokIcon className="h-5 w-5" />
    default:
      return null
  }
}

export function Footer({ className }: FooterProps) {
  return (
    <footer className={`bg-foreground/5 border-t border-border py-12 ${className ?? ""}`}>
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <Image
              src={COMPANY_INFO.logo}
              alt={COMPANY_INFO.name}
              width={200}
              height={67}
              className="h-14 w-auto mb-4"
            />
            <p className="text-muted-foreground leading-relaxed">
              {COMPANY_INFO.description}
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>{CONTACT_INFO.phone}</p>
              <p>{CONTACT_INFO.location}</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              {SOCIAL_LINKS.map((link) => (
                <a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-primary/10 hover:bg-[#F87229] hover:text-white w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                  aria-label={link.name}
                >
                  {getSocialIcon(link.icon)}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {getCurrentYear()} {COMPANY_INFO.name}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
