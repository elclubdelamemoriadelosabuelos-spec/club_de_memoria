import type React from "react"
import type { Metadata } from "next"
import { Lato, Open_Sans } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { ElfsightScript } from "@/components/elfsight-script/ElfsightScript"
import "./globals.css"

const lato = Lato({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-lato",
})

const openSans = Open_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || "https://clubdelamemoria.com"),
  title: "Club de la Memoria | Adultos Mayores Quito | Desde 2004",
  description:
    "Primer club de adultos mayores en Quito desde 2004. Bienestar integral con actividades físicas, cognitivas y creativas. Programa de día completo.",
  keywords: [
    "club de la memoria",
    "club de la memoria quito",
    "club adultos mayores quito",
    "actividades para adultos mayores",
    "actividades para adultos mayores quito",
    "adultos mayores quito",
    "bienestar integral adultos mayores",
    "actividades para la memoria",
    "reconexión social adultos mayores",
    "estimulación cognitiva quito",
    "centro día adultos mayores quito",
    "club tercera edad quito",
    "actividades tercera edad",
    "programa adultos mayores",
    "cuidado integral adultos mayores",
    "mejor club adultos mayores quito",
    "club envejecimiento activo quito",
    "atención centrada en la persona quito",
    "actividades físicas adultos mayores",
    "actividades cognitivas adultos mayores",
    "actividades creativas adultos mayores",
    "club día adultos mayores quito",
    "centro bienestar adultos mayores quito",
    "mejor club tercera edad quito",
    "club adultos mayores cumbayá",
    "club adultos mayores valle de los chillos",
  ],
  authors: [{ name: "Club de la Memoria" }],
  creator: "Club de la Memoria",
  publisher: "Club de la Memoria",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "es_EC",
    url: "https://clubdelamemoria.com",
    siteName: "Club de la Memoria",
    title: "Club de la Memoria | Adultos Mayores Quito | Desde 2004",
    description:
      "Primer club de adultos mayores en Quito desde 2004. Bienestar integral con actividades físicas, cognitivas y creativas. Programa de día completo.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Club de la Memoria - Adultos mayoredisfrutando actividades en Quito",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Club de la Memoria | Adultos Mayores Quito",
    description:
      "Primer club de adultos mayores en Quito desde 2004. Actividades físicas, cognitivas y creativas.",
    images: ["/og-image.jpg"],
    creator: "@clubdelamemoria",
  },
  alternates: {
    canonical: "https://clubdelamemoria.com",
  },
  generator: "v0.app",
  icons: {
    icon: [
      { url: "/clubmemoria/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/clubmemoria/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/clubmemoria/favicon-96x96.png", sizes: "96x96", type: "image/png" },
      { url: "/clubmemoria/android-icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    shortcut: "/clubmemoria/favicon.ico",
    apple: [
      { url: "/clubmemoria/apple-icon-57x57.png", sizes: "57x57" },
      { url: "/clubmemoria/apple-icon-60x60.png", sizes: "60x60" },
      { url: "/clubmemoria/apple-icon-72x72.png", sizes: "72x72" },
      { url: "/clubmemoria/apple-icon-76x76.png", sizes: "76x76" },
      { url: "/clubmemoria/apple-icon-114x114.png", sizes: "114x114" },
      { url: "/clubmemoria/apple-icon-120x120.png", sizes: "120x120" },
      { url: "/clubmemoria/apple-icon-144x144.png", sizes: "144x144" },
      { url: "/clubmemoria/apple-icon-152x152.png", sizes: "152x152" },
      { url: "/clubmemoria/apple-icon-180x180.png", sizes: "180x180" },
    ],
    other: [
      { rel: "mask-icon", url: "/clubmemoria/apple-icon.png" },
    ],
  },
  other: {
    "msapplication-TileColor": "#2EB9BE",
    "msapplication-TileImage": "/clubmemoria/ms-icon-144x144.png",
  },
}

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#2EB9BE",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es">
      <head>
        {/* Preload recursos críticos */}
        <link
          rel="preload"
          href="/video-hero.webm"
          as="video"
          type="video/webm"
        />
        <link
          rel="preload"
          href="/hero_image.webp"
          as="image"
          type="image/webp"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://clubdelamemoria.com",
              name: "Club de la Memoria",
              alternateName: "Club de la Memoria Quito",
              description:
                "El primer club de adultos mayores en Quito desde 2004. Ofrecemos bienestar integral con actividades físicas, cognitivas y creativas. Programa de día completo con atención centrada en la persona.",
              url: "https://clubdelamemoria.com",
              logo: "https://clubdelamemoria.com/logo_club_memoria.webp",
              image: "https://clubdelamemoria.com/logo_club_memoria.webp",
              foundingDate: "2004",
              priceRange: "$$",
              address: {
                "@type": "PostalAddress",
                streetAddress: "José Prta N39-164",
                addressLocality: "Quito",
                addressRegion: "Pichincha",
                postalCode: "170124",
                addressCountry: "EC",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: "-0.1807",
                longitude: "-78.4678",
              },
              telephone: "+593963596624",
              contactPoint: [
                {
                  "@type": "ContactPoint",
                  telephone: "+593963596624",
                  contactType: "customer service",
                  availableLanguage: ["es", "Spanish"],
                  areaServed: "EC",
                },
                {
                  "@type": "ContactPoint",
                  telephone: "+593963596624",
                  contactType: "sales",
                  availableLanguage: ["es", "Spanish"],
                },
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
                  opens: "10:00",
                  closes: "16:00",
                },
              ],
              areaServed: {
                "@type": "City",
                name: "Quito",
                "@id": "https://www.wikidata.org/wiki/Q2900",
              },
              sameAs: [
                "https://www.instagram.com/clubdelamemoria",
                "https://www.facebook.com/profile.php?id=61565484248833",
                "https://www.tiktok.com/@clubdelamemoriauio",
              ],
              aggregateRating: {
                "@type": "AggregateRating",
                ratingValue: "5",
                reviewCount: "50",
                bestRating: "5",
                worstRating: "1",
              },
              hasOfferCatalog: {
                "@type": "OfferCatalog",
                name: "Servicios Club de la Memoria",
                itemListElement: [
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Programa de Día Completo",
                      description: "Programa integral de 10:00 a 16:00 con actividades físicas, cognitivas y creativas",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Mañanas Activas y Conectadas",
                      description: "Socialización guiada, entrenamiento de memoria y movimiento",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Talleres Creativos",
                      description: "Arte, música, manualidades y expresión creativa",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Alimentación Cuidada",
                      description: "Almuerzo completo y breaks saludables",
                    },
                  },
                  {
                    "@type": "Offer",
                    itemOffered: {
                      "@type": "Service",
                      name: "Tardes de Disfrute",
                      description: "Juegos de mesa, gimnasia vital adaptada y dinámicas grupales",
                    },
                  },
                ],
              },
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              mainEntity: [
                {
                  "@type": "Question",
                  name: "¿Qué es el Club de la Memoria?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El Club de la Memoria es el primer club de adultos mayores en Quito, Ecuador, desde 2004. Ofrecemos un programa integral de bienestar con actividades físicas, cognitivas y creativas diseñadas para mejorar la calidad de vida de los adultos mayores.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Qué actividades ofrece el Club de la Memoria?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Ofrecemos un programa completo que incluye: mañanas activas con socialización y entrenamiento de memoria, talleres creativos (arte, música, manualidades), alimentación cuidada con almuerzo completo, y tardes de disfrute con juegos y gimnasia adaptada.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cuál es el horario del Club de la Memoria?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "El programa funciona de lunes a viernes de 10:00 a 16:00 horas, ofreciendo actividades continuas durante toda la jornada.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Dónde está ubicado el Club de la Memoria?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Estamos ubicados en José Prta N39-164, Quito, Ecuador. Ofrecemos un espacio cálido y seguro para nuestros socios.",
                  },
                },
                {
                  "@type": "Question",
                  name: "¿Cómo me contacto con el Club de la Memoria?",
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: "Puedes contactarnos al teléfono +593 96 359 6624, por WhatsApp al mismo número, o visitar nuestra página web para más información.",
                  },
                },
              ],
            }),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Inicio",
                  item: "https://clubdelamemoria.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Conócenos",
                  item: "https://clubdelamemoria.com#nosotros",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  name: "Programa",
                  item: "https://clubdelamemoria.com#programa",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  name: "Nuestro Equipo",
                  item: "https://clubdelamemoria.com#equipo",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  name: "Contacto",
                  item: "https://clubdelamemoria.com#contacto",
                },
              ],
            }),
          }}
        />
      </head>
      <body className={`${lato.variable} ${openSans.variable} font-sans antialiased`} style={{ fontFamily: 'var(--font-lato), var(--font-open-sans), system-ui, sans-serif' }}>
        {children}
        <Analytics />
        <ElfsightScript />
      </body>
    </html>
  )
}
