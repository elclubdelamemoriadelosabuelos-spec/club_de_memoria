import { Hero } from "@/components/hero"
import { About } from "@/components/about"
import { Program } from "@/components/program"
import { Method } from "@/components/method"
import { Testimonials } from "@/components/testimonials"
import { VideoTestimonials } from "@/components/video-testimonials"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { WhatsAppButton } from "@/components/whatsapp-button"
import { VideoHero } from "@/components/video-hero"
import { InstagramFeed } from "@/components/instagram-feed"
import { Gallery } from "@/components/gallery"
import { Team } from "@/components/team"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoHero />
      <Hero />
      <About />
      <Program />
      <Method />
      <Testimonials />
      <VideoTestimonials />
      <InstagramFeed />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
