#!/usr/bin/env node

/**
 * Script para convertir videos MP4 a WebM y optimizarlos
 * Requiere ffmpeg instalado: brew install ffmpeg (macOS) o apt-get install ffmpeg (Linux)
 * 
 * Uso: node scripts/optimize-videos.js
 */

const { execSync, spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

// Colores para la consola
const colors = {
  reset: '\x1b[0m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  red: '\x1b[31m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message, color = 'reset') {
  console.log(`${colors[color]}${message}${colors.reset}`);
}

// Verificar si ffmpeg está instalado
function checkFFmpeg() {
  try {
    execSync('ffmpeg -version', { stdio: 'ignore' });
    return true;
  } catch (error) {
    return false;
  }
}

// Obtener información del video
function getVideoInfo(inputPath) {
  try {
    const output = execSync(
      `ffprobe -v quiet -print_format json -show_format -show_streams "${inputPath}"`,
      { encoding: 'utf-8' }
    );
    return JSON.parse(output);
  } catch (error) {
    log(`Error al obtener información del video: ${inputPath}`, 'red');
    return null;
  }
}

// Calcular el tamaño del archivo
function getFileSize(filePath) {
  try {
    const stats = fs.statSync(filePath);
    return stats.size;
  } catch (error) {
    return 0;
  }
}

// Formatear tamaño en bytes a formato legible
function formatBytes(bytes) {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round((bytes / Math.pow(k, i)) * 100) / 100 + ' ' + sizes[i];
}

// Convertir video MP4 a WebM optimizado
function convertToWebM(inputPath, outputPath, options = {}) {
  const {
    quality = 28, // Calidad VP9 (0-63, menor = mejor calidad)
    speed = 4, // Velocidad de codificación (0-5, más alto = más rápido, menos compresión)
    crf = 35, // Constant Rate Factor para VP9 (más alto = más compresión, menos calidad)
    maxWidth = 1920, // Ancho máximo
    maxHeight = 1080, // Alto máximo
    fps = 30, // FPS máximo
  } = options;

  log(`\n🎬 Convirtiendo: ${path.basename(inputPath)}`, 'cyan');
  
  const inputSize = getFileSize(inputPath);
  log(`   Tamaño original: ${formatBytes(inputSize)}`, 'yellow');

  // Obtener dimensiones del video para decidir si escalar
  const videoInfo = getVideoInfo(inputPath);
  let scaleFilter = '';
  let targetBitrate = '0'; // Variable por defecto (CRF mode)
  
  if (videoInfo && videoInfo.streams) {
    const videoStream = videoInfo.streams.find(s => s.codec_type === 'video');
    if (videoStream) {
      const width = parseInt(videoStream.width);
      const height = parseInt(videoStream.height);
      
      // Solo escalar si el video es más grande que los límites
      if (width > maxWidth || height > maxHeight) {
        // Calcular nuevas dimensiones manteniendo aspect ratio
        const aspectRatio = width / height;
        let newWidth = width;
        let newHeight = height;
        
        if (width > maxWidth) {
          newWidth = maxWidth;
          newHeight = Math.round(maxWidth / aspectRatio);
        }
        if (newHeight > maxHeight) {
          newHeight = maxHeight;
          newWidth = Math.round(maxHeight * aspectRatio);
        }
        
        // Asegurar que sean números pares (requerido por algunos codecs)
        newWidth = newWidth % 2 === 0 ? newWidth : newWidth - 1;
        newHeight = newHeight % 2 === 0 ? newHeight : newHeight - 1;
        
        scaleFilter = `scale=${newWidth}:${newHeight}`;
        log(`   Escalando a: ${newWidth}x${newHeight}`, 'yellow');
      }
    }
  }

  // Calcular bitrate objetivo basado en el original (opcional, para limitar tamaño)
  // Si no se calcula, se usa CRF mode que es más eficiente

  // Comando ffmpeg optimizado para WebM con mejor compresión
  // Usa VP9 codec con opus audio para mejor compresión
  const ffmpegArgs = [
    '-i', inputPath,
    '-c:v', 'libvpx-vp9', // Codec de video VP9
    '-crf', crf.toString(), // Calidad constante (más alto = más compresión, menos calidad)
    '-b:v', '0', // Bitrate variable (CRF mode es más eficiente)
    '-cpu-used', speed.toString(), // Velocidad de codificación (más alto = más rápido, menos compresión)
    '-row-mt', '1', // Multi-threading
    '-deadline', 'good', // Calidad de codificación (good balance)
    '-tile-columns', '2', // Tiles para mejor paralelización
    '-tile-rows', '1', // Tiles para mejor paralelización
    '-frame-parallel', '1', // Frame parallel decoding
    '-auto-alt-ref', '1', // Mejora la compresión
    '-lag-in-frames', '16', // Más frames de referencia = mejor compresión
    '-c:a', 'libopus', // Codec de audio Opus
    '-b:a', '64k', // Bitrate de audio reducido (de 128k a 64k)
    '-compression_level', '10', // Máximo nivel de compresión Opus
  ];
  
  // Agregar filtro de escala solo si es necesario
  if (scaleFilter) {
    ffmpegArgs.push('-vf', scaleFilter);
  }
  
  // Agregar FPS y otros parámetros finales
  ffmpegArgs.push(
    '-r', fps.toString(), // FPS máximo
    '-threads', '0', // Usar todos los cores disponibles
    '-y', // Sobrescribir archivo si existe
    outputPath
  );
  
  // Construir comando escapando correctamente las rutas
  const ffmpegCommand = ffmpegArgs.map(arg => {
    // Escapar espacios y caracteres especiales en rutas
    if (arg.includes(' ') || arg.includes('(') || arg.includes(')')) {
      return `"${arg}"`;
    }
    return arg;
  }).join(' ');
  
  const fullCommand = `ffmpeg ${ffmpegCommand}`;

  return new Promise((resolve) => {
    log(`   Procesando... (esto puede tardar varios minutos)`, 'yellow');
    
    const ffmpeg = spawn('ffmpeg', ffmpegArgs);
    
    let errorOutput = '';
    
    ffmpeg.stderr.on('data', (data) => {
      // ffmpeg escribe progreso en stderr, no es necesariamente un error
      process.stderr.write(data);
    });
    
    ffmpeg.on('error', (error) => {
      log(`   ❌ Error al ejecutar ffmpeg: ${error.message}`, 'red');
      resolve({ success: false, error: error.message });
    });
    
    ffmpeg.on('close', (code) => {
      if (code !== 0) {
        log(`   ❌ Error al convertir (código de salida: ${code})`, 'red');
        resolve({ success: false, error: `ffmpeg exited with code ${code}` });
        return;
      }
      
      const outputSize = getFileSize(outputPath);
      if (outputSize === 0) {
        log(`   ❌ El archivo de salida está vacío`, 'red');
        resolve({ success: false, error: 'Output file is empty' });
        return;
      }
      
      const reduction = ((inputSize - outputSize) / inputSize * 100).toFixed(1);
      
      log(`   ✅ Completado!`, 'green');
      log(`   Tamaño optimizado: ${formatBytes(outputSize)}`, 'green');
      log(`   Reducción: ${reduction}%`, 'green');
      
      resolve({ success: true, originalSize: inputSize, newSize: outputSize });
    });
  });
}

// Lista de videos a convertir
const videos = [
  {
    input: path.join(__dirname, '../public/video-hero.mp4'),
    output: path.join(__dirname, '../public/video-hero.webm'),
    options: {
      crf: 35, // Mayor compresión para video principal
      speed: 4, // Más rápido
      maxWidth: 1920,
      maxHeight: 1080,
      fps: 30,
    }
  },
  {
    input: path.join(__dirname, '../public/about_video.mp4'),
    output: path.join(__dirname, '../public/about_video.webm'),
    options: {
      crf: 36, // Mayor compresión para video largo
      speed: 4,
      maxWidth: 1920,
      maxHeight: 1080,
      fps: 30,
    }
  },
  {
    input: path.join(__dirname, '../public/testimonials/testimonio_1.MP4'),
    output: path.join(__dirname, '../public/testimonials/testimonio_1.webm'),
    options: {
      crf: 37, // Mayor compresión para testimonios (vertical)
      speed: 4,
      maxWidth: 1080,
      maxHeight: 1920,
      fps: 30,
    }
  },
  {
    input: path.join(__dirname, '../public/testimonials/testimonio_2.MP4'),
    output: path.join(__dirname, '../public/testimonials/testimonio_2.webm'),
    options: {
      crf: 37, // Mayor compresión para testimonios (vertical)
      speed: 4,
      maxWidth: 1080,
      maxHeight: 1920,
      fps: 30,
    }
  },
];

// Función principal
function main() {
  log('\n🚀 Iniciando optimización de videos MP4 a WebM\n', 'blue');

  // Verificar ffmpeg
  if (!checkFFmpeg()) {
    log('❌ Error: ffmpeg no está instalado', 'red');
    log('   Instala ffmpeg con:', 'yellow');
    log('   macOS: brew install ffmpeg', 'yellow');
    log('   Linux: sudo apt-get install ffmpeg', 'yellow');
    log('   Windows: https://ffmpeg.org/download.html', 'yellow');
    process.exit(1);
  }

  log('✅ ffmpeg encontrado\n', 'green');

  let totalOriginalSize = 0;
  let totalNewSize = 0;
  let successCount = 0;
  let failCount = 0;

  // Procesar cada video de forma secuencial (async)
  async function processVideos() {
    for (let index = 0; index < videos.length; index++) {
      const video = videos[index];
      
      // Verificar que el archivo de entrada existe
      if (!fs.existsSync(video.input)) {
        log(`⚠️  Archivo no encontrado: ${video.input}`, 'yellow');
        failCount++;
        continue;
      }

      log(`\n[${index + 1}/${videos.length}]`, 'blue');
      
      const result = await convertToWebM(video.input, video.output, video.options);
      
      if (result.success) {
        totalOriginalSize += result.originalSize;
        totalNewSize += result.newSize;
        successCount++;
      } else {
        failCount++;
      }
    }
    
    // Mostrar resumen después de procesar todos
    showSummary();
  }
  
  function showSummary() {

    // Resumen final
    log('\n' + '='.repeat(50), 'cyan');
    log('📊 Resumen de conversión', 'blue');
    log('='.repeat(50), 'cyan');
    log(`✅ Videos convertidos: ${successCount}`, 'green');
    if (failCount > 0) {
      log(`❌ Videos con errores: ${failCount}`, 'red');
    }
    log(`📦 Tamaño total original: ${formatBytes(totalOriginalSize)}`, 'yellow');
    log(`📦 Tamaño total optimizado: ${formatBytes(totalNewSize)}`, 'green');
    const totalReduction = totalOriginalSize > 0 
      ? ((totalOriginalSize - totalNewSize) / totalOriginalSize * 100).toFixed(1)
      : 0;
    log(`💾 Reducción total: ${totalReduction}%`, 'green');
    log('\n✨ ¡Conversión completada!', 'green');
    log('\n📝 Nota: Los archivos MP4 originales se mantienen como fallback.', 'yellow');
    log('   Actualiza los componentes para usar WebM primero, MP4 como fallback.\n', 'yellow');
  }
  
  // Iniciar procesamiento
  processVideos();
}

// Ejecutar
main();
