"use client"

import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsOpen(false)
    }
  }

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="text-2xl md:text-3xl font-bold text-primary">Club de la Memoria</div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button
              onClick={() => scrollToSection("video-hero")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("programa")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Programa
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-base font-medium text-foreground hover:text-primary transition-colors"
            >
              Método 3E
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
            >
              Contáctanos
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden p-2" aria-label="Toggle menu">
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            <button
              onClick={() => scrollToSection("video-hero")}
              className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Inicio
            </button>
            <button
              onClick={() => scrollToSection("nosotros")}
              className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Nosotros
            </button>
            <button
              onClick={() => scrollToSection("programa")}
              className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Programa
            </button>
            <button
              onClick={() => scrollToSection("metodo")}
              className="text-left text-base font-medium text-foreground hover:text-primary transition-colors py-2"
            >
              Método 3E
            </button>
            <Button
              onClick={() => scrollToSection("contacto")}
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold w-full"
            >
              Contáctanos
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
