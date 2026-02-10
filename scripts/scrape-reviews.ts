/**
 * Script para extraer reseñas de Google Maps usando Puppeteer.
 *
 * Uso:
 *   npm run scrape-reviews
 *
 * El script:
 *  1. Abre la página de Google Maps del negocio.
 *  2. Hace clic en la pestaña de reseñas.
 *  3. Hace scroll para cargar todas las reseñas.
 *  4. Expande los textos truncados ("Más").
 *  5. Extrae los datos de cada reseña.
 *  6. Genera lib/google-reviews-data.ts con los datos.
 */

import puppeteer from "puppeteer"
import * as fs from "fs"
import * as path from "path"

// ── Configuración ──────────────────────────────────────────────────────────
const GOOGLE_MAPS_URL =
  "https://maps.app.goo.gl/JZaoAsgJLUtvN9VU6?g_st=ic"

/** Tiempo máximo de espera (ms) para scroll de reseñas */
const MAX_SCROLL_TIME = 60_000
/** Pausa entre scrolls (ms) */
const SCROLL_PAUSE = 1_500

// ── Tipos ──────────────────────────────────────────────────────────────────
interface ScrapedReview {
  author: string
  rating: number
  text: string
  relativeDate: string
  profilePhoto: string
}

// ── Funciones auxiliares ───────────────────────────────────────────────────

function sleep(ms: number) {
  return new Promise((resolve) => setTimeout(resolve, ms))
}

/**
 * Genera el contenido del archivo TypeScript con los datos de las reseñas.
 */
function buildOutput(
  reviews: ScrapedReview[],
  averageRating: number,
  totalReviews: number,
): string {
  const today = new Date().toISOString().slice(0, 10)

  const reviewsJson = JSON.stringify(reviews, null, 2)
    // Indentar 2 niveles dentro del objeto
    .split("\n")
    .map((line, i) => (i === 0 ? line : `  ${line}`))
    .join("\n")

  return `/**
 * Datos de reseñas de Google Maps – generados automáticamente.
 * Última actualización: ${today}
 *
 * Para regenerar, ejecuta:  npm run scrape-reviews
 */

// ── Tipos ──────────────────────────────────────────────────────────────────

export interface GoogleReview {
  /** Nombre del autor de la reseña */
  author: string
  /** Rating (1-5 estrellas) */
  rating: number
  /** Texto de la reseña */
  text: string
  /** Fecha relativa ("hace 2 meses", etc.) */
  relativeDate: string
  /** URL de la foto de perfil del autor */
  profilePhoto: string
}

export interface GoogleReviewsData {
  /** Fecha en que se realizó el scraping (YYYY-MM-DD) */
  scrapedAt: string
  /** Rating promedio */
  averageRating: number
  /** Número total de reseñas */
  totalReviews: number
  /** Lista de reseñas extraídas */
  reviews: GoogleReview[]
}

// ── Datos ──────────────────────────────────────────────────────────────────

export const GOOGLE_REVIEWS_DATA: GoogleReviewsData = {
  scrapedAt: "${today}",
  averageRating: ${averageRating},
  totalReviews: ${totalReviews},
  reviews: ${reviewsJson},
}
`
}

// ── Main ───────────────────────────────────────────────────────────────────

async function main() {
  console.log("🔍 Iniciando scraping de reseñas de Google Maps…\n")

  const browser = await puppeteer.launch({
    headless: true,
    args: [
      "--no-sandbox",
      "--disable-setuid-sandbox",
      "--disable-dev-shm-usage",
      "--lang=es",
    ],
  })

  const page = await browser.newPage()

  // Configurar idioma español
  await page.setExtraHTTPHeaders({ "Accept-Language": "es-ES,es;q=0.9" })
  await page.setViewport({ width: 1280, height: 900 })

  // ── 1. Navegar a Google Maps ─────────────────────────────────────────
  console.log("  → Navegando a Google Maps…")
  await page.goto(GOOGLE_MAPS_URL, { waitUntil: "networkidle2", timeout: 30_000 })

  // Aceptar cookies si aparece el diálogo
  try {
    const acceptBtn = await page.waitForSelector(
      'button[aria-label="Aceptar todo"], form[action*="consent"] button',
      { timeout: 5_000 },
    )
    if (acceptBtn) {
      await acceptBtn.click()
      await sleep(2_000)
    }
  } catch {
    // No apareció el diálogo de cookies – continuar
  }

  // ── 2. Extraer rating general y total de reseñas ─────────────────────
  console.log("  → Extrayendo datos generales…")
  await sleep(3_000)

  const generalData = await page.evaluate(() => {
    // Rating promedio: buscar el elemento con la calificación
    let averageRating = 5
    let totalReviews = 0

    // Buscar el rating general (ej: "5,0" o "5.0")
    const ratingEl = document.querySelector('div.fontDisplayLarge, span.fontDisplayLarge')
    if (ratingEl) {
      const raw = ratingEl.textContent?.replace(",", ".").trim()
      if (raw) averageRating = parseFloat(raw) || 5
    }

    // Buscar total de reseñas
    const allButtons = Array.from(document.querySelectorAll('button'))
    for (const btn of allButtons) {
      const text = btn.textContent || ""
      const match = text.match(/(\d[\d.]*)\s*reseñas?/i) || text.match(/(\d[\d.]*)\s*reviews?/i)
      if (match) {
        totalReviews = parseInt(match[1].replace(/\./g, ""), 10)
        break
      }
    }

    return { averageRating, totalReviews }
  })

  console.log(`  → Rating: ${generalData.averageRating} — Total reseñas: ${generalData.totalReviews}`)

  // ── 3. Abrir pestaña de reseñas ──────────────────────────────────────
  console.log("  → Abriendo pestaña de reseñas…")

  // Buscar y hacer clic en la pestaña/botón de reseñas
  const reviewsTabClicked = await page.evaluate(() => {
    // Intentar pestaña "Reseñas" o "Reviews"
    const tabs = Array.from(document.querySelectorAll('button[role="tab"], button'))
    for (const tab of tabs) {
      const text = tab.textContent?.toLowerCase() || ""
      if (text.includes("reseñas") || text.includes("reviews") || text.includes("opiniones")) {
        ;(tab as HTMLElement).click()
        return true
      }
    }
    return false
  })

  if (!reviewsTabClicked) {
    // Intentar con el link que contiene el número de reseñas
    const reviewLink = await page.$('button[jsaction*="review"]')
    if (reviewLink) await reviewLink.click()
  }

  await sleep(3_000)

  // ── 4. Scroll para cargar todas las reseñas ──────────────────────────
  console.log("  → Cargando reseñas (scroll)…")

  const scrollableSelector = 'div.m6QErb.DxyBCb'

  let previousCount = 0
  const startTime = Date.now()

  while (Date.now() - startTime < MAX_SCROLL_TIME) {
    const currentCount = await page.evaluate((sel) => {
      const container = document.querySelector(sel)
      if (container) container.scrollTop = container.scrollHeight
      return document.querySelectorAll('div[data-review-id], div.jftiEf').length
    }, scrollableSelector)

    console.log(`     Reseñas cargadas: ${currentCount}`)

    if (currentCount > 0 && currentCount === previousCount) {
      // No se cargaron más – esperamos un poco más por si acaso
      await sleep(2_000)
      const finalCheck = await page.evaluate(
        () => document.querySelectorAll('div[data-review-id], div.jftiEf').length,
      )
      if (finalCheck === previousCount) break
    }

    previousCount = currentCount
    await sleep(SCROLL_PAUSE)
  }

  // ── 5. Expandir textos truncados ─────────────────────────────────────
  console.log("  → Expandiendo textos de reseñas…")

  await page.evaluate(() => {
    const moreButtons = document.querySelectorAll(
      'button.w8nwRe, button.M77dve, button[aria-label="Ver más"], button[jsaction*="expand"]',
    )
    moreButtons.forEach((btn) => (btn as HTMLElement).click())
  })
  await sleep(2_000)

  // ── 6. Extraer datos de cada reseña ──────────────────────────────────
  console.log("  → Extrayendo datos de las reseñas…")

  const reviews: ScrapedReview[] = await page.evaluate(() => {
    const reviewElements = document.querySelectorAll('div[data-review-id], div.jftiEf')
    const results: ScrapedReview[] = []

    reviewElements.forEach((el) => {
      // Autor
      const authorEl = el.querySelector('div.d4r55, button.WEBjve div, a.WNxzHc d4r55')
      const author = authorEl?.textContent?.trim() || "Anónimo"

      // Rating (número de estrellas llenas)
      const starsEl = el.querySelector('span.kvMYJc')
      let rating = 5
      if (starsEl) {
        const ariaLabel = starsEl.getAttribute("aria-label") || ""
        const match = ariaLabel.match(/(\d)/)
        if (match) rating = parseInt(match[1], 10)
      }

      // Texto
      const textEl = el.querySelector('span.wiI7pd, div.MyEned span')
      const text = textEl?.textContent?.trim() || ""

      // Fecha relativa
      const dateEl = el.querySelector('span.rsqaWe, span.dehysf')
      const relativeDate = dateEl?.textContent?.trim() || ""

      // Foto de perfil
      const photoEl = el.querySelector('img.NBa7we, a.WNxzHc img')
      const profilePhoto = photoEl?.getAttribute("src") || ""

      if (author !== "Anónimo" || text) {
        results.push({ author, rating, text, relativeDate, profilePhoto })
      }
    })

    return results
  })

  console.log(`\n  ✅ Se extrajeron ${reviews.length} reseñas.`)

  await browser.close()

  // ── 7. Generar archivo de datos ──────────────────────────────────────
  const outputPath = path.resolve(__dirname, "..", "lib", "google-reviews-data.ts")
  const content = buildOutput(
    reviews,
    generalData.averageRating,
    generalData.totalReviews || reviews.length,
  )

  fs.writeFileSync(outputPath, content, "utf-8")
  console.log(`\n  📄 Archivo generado: ${outputPath}`)
  console.log("  🎉 ¡Scraping completado!\n")
}

main().catch((err) => {
  console.error("❌ Error durante el scraping:", err)
  process.exit(1)
})
