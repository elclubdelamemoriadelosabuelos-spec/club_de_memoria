import { Facebook, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground/5 border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Club de la Memoria</h3>
            <p className="text-muted-foreground leading-relaxed">
              El primer club de adultos mayores activos del Ecuador. Creando bienestar, propósito y comunidad desde
              2004.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contacto</h4>
            <div className="space-y-2 text-muted-foreground">
              <p>+593 99 567 1600</p>
              <p>Quito, Ecuador</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com/profile.php?id=61565484248833"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://www.instagram.com/clubdelamemoria/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://www.tiktok.com/@clubdelamemoriauio"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="TikTok"
              >
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 text-center text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Club de la Memoria. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
