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
