import type { TestimonialVideo, VideoRefs, MutedState } from "./VideoTestimonials.types"

/**
 * Testimonial videos data
 */
export const TESTIMONIAL_VIDEOS: TestimonialVideo[] = [
  {
    webm: "/testimonials/testimonio_1.webm",
    name: "Testimonio familiar",
    quote: "El Club de la Memoria ha transformado la vida de nuestra familia. Ver a mi madre tan feliz y activa no tiene precio.",
  },
  {
    webm: "/testimonials/testimonio_2.webm",
    name: "Testimonio familiar",
    quote: "La dedicación y el cariño del equipo se nota en cada detalle. Recomendamos el Club con todo el corazón.",
  },
  {
    webm: "/testimonials/testimonio_3.webm",
    name: "Testimonio",
    quote: "Yo desde el primer dia que llegue me siento muy bien y de ahi aca me siento muy bien.",
  },
]

/**
 * Initial muted state for videos (los 3 visibles en la misma vista)
 */
export const INITIAL_MUTED_STATE: MutedState = { 0: true, 1: true, 2: true }

/**
 * Toggle play state for a video
 */
export function toggleVideoPlay(
  videoRefs: VideoRefs,
  playingVideo: number | null,
  index: number
): number | null {
  const video = videoRefs[index]
  if (!video) return playingVideo

  if (playingVideo === index) {
    video.pause()
    return null
  } else {
    // Pause other videos
    Object.values(videoRefs).forEach((v) => v?.pause())
    video.play()
    return index
  }
}

/**
 * Toggle mute state for a video
 */
export function toggleVideoMute(
  videoRefs: VideoRefs,
  mutedVideos: MutedState,
  index: number
): MutedState {
  const video = videoRefs[index]
  if (!video) return mutedVideos

  video.muted = !video.muted
  return { ...mutedVideos, [index]: video.muted }
}
