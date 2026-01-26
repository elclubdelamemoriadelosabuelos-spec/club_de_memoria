import { useEffect, useRef, useState, useCallback } from "react"

/**
 * Hook para lazy loading de videos usando Intersection Observer
 * Solo carga el video cuando está visible en el viewport
 * Optimizado para mejor rendimiento
 */
export function useLazyVideo(options?: IntersectionObserverInit) {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isIntersecting, setIsIntersecting] = useState(false)
  const [shouldLoad, setShouldLoad] = useState(false)
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect()
    }

    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsIntersecting(true)
            setShouldLoad(true)
            // Disconnect after first intersection for better performance
            if (observerRef.current) {
              observerRef.current.disconnect()
              observerRef.current = null
            }
          }
        })
      },
      {
        rootMargin: "50px",
        threshold: 0.1,
        ...options,
      }
    )

    observerRef.current.observe(video)

    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect()
        observerRef.current = null
      }
    }
  }, [options])

  return { videoRef, isIntersecting, shouldLoad }
}

/**
 * Hook para detectar conexión lenta
 * Retorna true si la conexión es lenta (2G, slow-2G, o save-data activo)
 * Optimizado con mejor detección y caché
 */
export function useSlowConnection() {
  const [isSlow, setIsSlow] = useState(false)

  useEffect(() => {
    if (typeof window === "undefined") return

    const connection = (navigator as any).connection || 
                      (navigator as any).mozConnection || 
                      (navigator as any).webkitConnection ||
                      (navigator as any).networkInformation

    if (connection) {
      const updateConnection = () => {
        const effectiveType = connection.effectiveType
        const saveData = connection.saveData
        const downlink = connection.downlink || 0

        setIsSlow(
          saveData ||
          effectiveType === "2g" ||
          effectiveType === "slow-2g" ||
          (effectiveType === "3g" && downlink < 1.5) ||
          (effectiveType === "4g" && downlink < 0.5) // Muy lento incluso en 4G
        )
      }

      updateConnection()
      
      // Listen for connection changes
      if (connection.addEventListener) {
        connection.addEventListener("change", updateConnection)
      } else if (connection.onchange) {
        connection.onchange = updateConnection
      }

      return () => {
        if (connection.removeEventListener) {
          connection.removeEventListener("change", updateConnection)
        } else if (connection.onchange) {
          connection.onchange = null
        }
      }
    } else {
      // Fallback: check for save-data header
      if ('connection' in navigator && (navigator as any).connection?.saveData) {
        setIsSlow(true)
      }
    }
  }, [])

  return isSlow
}

/**
 * Hook para precargar videos de forma inteligente
 * Solo precarga metadatos cuando el video está cerca del viewport
 */
export function useVideoPreload(videoRef: React.RefObject<HTMLVideoElement>, shouldPreload: boolean) {
  useEffect(() => {
    const video = videoRef.current
    if (!video || !shouldPreload) return

    // Precargar solo metadatos para mejor rendimiento
    if (video.readyState === 0) {
      video.load()
    }
  }, [videoRef, shouldPreload])
}
