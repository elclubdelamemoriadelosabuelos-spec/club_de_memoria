import type { MetadataRoute } from "next"

export const revalidate = 0

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://clubdelamemoria.com/",
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
  ]
}
