import { Instagram } from "lucide-react"
import { Button } from "@/components/ui/button"

const instagramPosts = [
  {
    id: 1,
    url: "https://www.instagram.com/reel/DQVdX8UDYd6/",
  },
  {
    id: 2,
    url: "https://www.instagram.com/p/DOZsKP2jR4e/",
  },
  {
    id: 3,
    url: "https://www.instagram.com/reel/DOH8QO5DbQD/",
  },
  {
    id: 4,
    url: "https://www.instagram.com/p/DSqgS47DUZ0/",
  },
  {
    id: 5,
    url: "https://www.instagram.com/reel/DSl0jndDfOv/",
  },
  {
    id: 6,
    url: "https://www.instagram.com/reel/DSTnbjZjYvB/",
  },
]

export function InstagramFeed() {
  const instagramUrl = "https://www.instagram.com/clubdelamemoria"

  return (
    <section className="py-16 md:py-24 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Instagram className="w-5 h-5" />
            <span className="font-medium">@clubdelamemoria</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">Síguenos en Instagram</h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Descubre momentos de alegría, actividades y la vida en el Club de la Memoria
          </p>
        </div>

        {/* Instagram Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-10">
          {instagramPosts.map((post) => (
            <div key={post.id} className="relative aspect-square overflow-hidden rounded-xl bg-muted">
              <iframe
                src={`${post.url}embed/`}
                className="w-full h-full border-0"
                scrolling="no"
                allowTransparency={true}
                allow="encrypted-media"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button
            asChild
            size="lg"
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 hover:from-purple-600 hover:via-pink-600 hover:to-orange-600 text-white text-lg px-8 py-6 rounded-full"
          >
            <a href={instagramUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-3">
              <Instagram className="w-6 h-6" />
              Seguir en Instagram
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
