import { Facebook, Instagram, Youtube } from "lucide-react"

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
              <p>+593 99 999 9999</p>
              <p>Quito, Ecuador</p>
            </div>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Síguenos</h4>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary/10 hover:bg-primary hover:text-primary-foreground w-10 h-10 rounded-lg flex items-center justify-center transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="h-5 w-5" />
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
