import dynamic from "next/dynamic"
import { Hero } from "@/components/hero/Hero"
import { About } from "@/components/about/About"
import { Program } from "@/components/program/Program"
import { Method } from "@/components/method/Method"
import { Header } from "@/components/header/Header"
import { VideoHero } from "@/components/video-hero/VideoHero"
import { Contact } from "@/components/contact/Contact"
import { Footer } from "@/components/footer/Footer"
import { WhatsAppButton } from "@/components/whatsapp-button/WhatsAppButton"

// Componentes pesados cargados de forma diferida
const VideoTestimonials = dynamic(() => import("@/components/video-testimonials/VideoTestimonials").then(mod => ({ default: mod.VideoTestimonials })), {
  loading: () => <div className="min-h-[400px]" />,
})

// Componentes pesados cargados de forma diferida
const GoogleReviews = dynamic(() => import("@/components/google-reviews/GoogleReviews").then(mod => ({ default: mod.GoogleReviews })), {
  loading: () => <div className="min-h-[400px]" />,
})

const InstagramFeed = dynamic(() => import("@/components/instagram-feed/InstagramFeed").then(mod => ({ default: mod.InstagramFeed })), {
  loading: () => <div className="min-h-[400px]" />,
})

const Team = dynamic(() => import("@/components/team/Team").then(mod => ({ default: mod.Team })), {
  loading: () => <div className="min-h-[400px]" />,
})

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
