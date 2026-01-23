import { Hero } from "@/components/hero/Hero"
import { About } from "@/components/about/About"
import { Program } from "@/components/program/Program"
import { Method } from "@/components/method/Method"
import { VideoTestimonials } from "@/components/video-testimonials/VideoTestimonials"
import { GoogleReviews } from "@/components/google-reviews/GoogleReviews"
import { Contact } from "@/components/contact/Contact"
import { Footer } from "@/components/footer/Footer"
import { Header } from "@/components/header/Header"
import { WhatsAppButton } from "@/components/whatsapp-button/WhatsAppButton"
import { VideoHero } from "@/components/video-hero/VideoHero"
import { InstagramFeed } from "@/components/instagram-feed/InstagramFeed"
import { Team } from "@/components/team/Team"

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <VideoHero />
      <Hero />
      <About />
      <Program />
      <Method />
      <VideoTestimonials />
      <GoogleReviews />
      <InstagramFeed />
      <Team />
      <Contact />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
