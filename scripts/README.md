# Scripts de Optimización

## Optimización de Videos

### Requisitos

Antes de ejecutar el script, asegúrate de tener `ffmpeg` instalado:

**macOS:**
```bash
brew install ffmpeg
```

**Linux (Ubuntu/Debian):**
```bash
sudo apt-get update
sudo apt-get install ffmpeg
```

**Windows:**
Descarga e instala desde: https://ffmpeg.org/download.html

### Uso

Ejecuta el script para convertir todos los videos MP4 a WebM optimizado:

```bash
npm run optimize-videos
```

O directamente:

```bash
node scripts/optimize-videos.js
```

### ¿Qué hace el script?

1. **Verifica que ffmpeg esté instalado**
2. **Convierte cada video MP4 a WebM** usando el codec VP9 con las siguientes optimizaciones:
   - Compresión VP9 (mejor que H.264)
   - Audio Opus (mejor compresión que AAC)
   - Escalado automático si el video es muy grande
   - Optimización de velocidad de codificación
   - Multi-threading para procesamiento más rápido

3. **Mantiene los archivos MP4 originales** como fallback para navegadores que no soporten WebM

4. **Muestra estadísticas** de reducción de tamaño

### Videos que se optimizan

- `/public/video-hero.mp4` → `video-hero.webm`
- `/public/about_video.mp4` → `about_video.webm`
- `/public/testimonials/testimonio_1.MP4` → `testimonio_1.webm`
- `/public/testimonials/testimonio_2.MP4` → `testimonio_2.webm`

### Resultados esperados

- **Reducción de tamaño**: 30-60% menos que el MP4 original
- **Mejor calidad**: VP9 ofrece mejor calidad a menor bitrate
- **Compatibilidad**: Los navegadores modernos usarán WebM, los antiguos usarán MP4

### Notas

- El proceso puede tardar varios minutos dependiendo del tamaño de los videos
- Los archivos MP4 originales se mantienen intactos
- El script muestra el progreso y estadísticas de cada conversión
