/**
 * Utilidades para manejo de imágenes optimizadas
 */

/**
 * Convierte una ruta de imagen PNG/JPG a WebP si está disponible
 * Si no existe WebP, devuelve la ruta original
 */
export function getOptimizedImagePath(originalPath: string): string {
  // Si ya es WebP, devolver tal cual
  if (originalPath.endsWith('.webp')) {
    return originalPath
  }

  // Si es una imagen de la galería o del equipo, intentar usar WebP
  if (originalPath.includes('/galeria/') || originalPath.includes('/equip/')) {
    // Remover la extensión original (PNG, png, JPG, jpg, etc.)
    // y reemplazar con .webp
    const webpPath = originalPath.replace(/\.(png|PNG|jpg|JPG|jpeg|JPEG|heic|HEIC)$/i, '.webp')
    return webpPath
  }

  // Para otras imágenes, devolver la original
  return originalPath
}
