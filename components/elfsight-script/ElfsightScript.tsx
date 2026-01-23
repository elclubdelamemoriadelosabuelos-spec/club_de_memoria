"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

/**
 * Componente que carga el script de Elfsight solo una vez al día
 * Evita llamadas constantes a la API de Elfsight
 */
export function ElfsightScript() {
  const [shouldLoad, setShouldLoad] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const STORAGE_KEY = "elfsight_script_loaded_date"
    const SCRIPT_URL = "https://elfsightcdn.com/platform.js"
    const today = new Date().toDateString()

    // Verificar si el script ya está cargado en el DOM
    const existingScript = document.querySelector(`script[src="${SCRIPT_URL}"]`)
    if (existingScript) {
      // El script ya está cargado, no hacer nada
      return
    }

    // Verificar si ya se cargó hoy
    const lastLoadedDate = localStorage.getItem(STORAGE_KEY)

    if (lastLoadedDate !== today) {
      // No se ha cargado hoy, cargar el script
      setShouldLoad(true)
      // Guardar la fecha de hoy
      localStorage.setItem(STORAGE_KEY, today)
    } else {
      // Ya se cargó hoy, pero verificar si el script realmente existe
      // Si no existe (por ejemplo, después de limpiar caché), cargarlo
      if (!existingScript) {
        setShouldLoad(true)
      }
    }
  }, [])

  if (!shouldLoad) {
    return null
  }

  return (
    <Script
      src="https://elfsightcdn.com/platform.js"
      strategy="afterInteractive"
      async
      onLoad={() => {
        // Marcar que el script se cargó exitosamente
        if (typeof window !== "undefined") {
          const today = new Date().toDateString()
          localStorage.setItem("elfsight_script_loaded_date", today)
        }
      }}
    />
  )
}
