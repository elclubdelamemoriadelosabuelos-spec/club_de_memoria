"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import type { HeaderProps } from "./Header.types"
import { NAV_ITEMS, CTA_BUTTON, COMPANY_LOGO, scrollToSection } from "./Header.helper"
import { SECTIONS } from "@/lib/constants"

function Logo() {
  return (
    <Image
      src={COMPANY_LOGO.src}
      alt={COMPANY_LOGO.alt}
      width={200}
      height={67}
      className="h-12 md:h-16 w-auto"
      priority
    />
  )
}

export function Header({ className }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false)

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId, () => setIsOpen(false))
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm border-b border-border ${className ?? ""}`}>
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => handleNavClick(SECTIONS.videoHero)}>
            <Logo />
          </div>

          <nav className="hidden md:flex items-center gap-6">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.sectionId}
                variant="ghost"
                onClick={() => handleNavClick(item.sectionId)}
                className="text-base font-medium text-foreground hover:text-primary hover:bg-transparent transition-colors"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => handleNavClick(CTA_BUTTON.sectionId)}
              size="lg"
              className="bg-primary hover:bg-[#F87229] text-primary-foreground font-semibold"
            >
              {CTA_BUTTON.label}
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
          </Button>
        </div>

        {isOpen && (
          <nav className="md:hidden pt-4 pb-2 flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Button
                key={item.sectionId}
                variant="ghost"
                onClick={() => handleNavClick(item.sectionId)}
                className="text-left text-base font-medium text-foreground hover:text-primary hover:bg-transparent transition-colors py-2 justify-start"
              >
                {item.label}
              </Button>
            ))}
            <Button
              onClick={() => handleNavClick(CTA_BUTTON.sectionId)}
              size="lg"
              className="bg-primary hover:bg-[#F87229] hover:text-white text-primary-foreground font-semibold w-full"
            >
              {CTA_BUTTON.label}
            </Button>
          </nav>
        )}
      </div>
    </header>
  )
}
