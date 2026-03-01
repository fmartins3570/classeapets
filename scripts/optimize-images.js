/**
 * Script de otimização de imagens com Sharp
 * Classe A Pets — uso: npm run optimize-images
 *
 * Convenção:
 * - Originais: coloque em public/images/
 * - Otimizadas: geradas em public/images/optimized/ (WebP)
 * - Responsivas: também gera variantes `-<largura>w.webp` para uso com srcset
 */

import sharp from 'sharp'
import { readdir, mkdir } from 'fs/promises'
import { join, dirname, extname, basename } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const ROOT = join(__dirname, '..')

const INPUT_DIR = join(ROOT, 'public', 'images')
const OUTPUT_DIR = join(ROOT, 'public', 'images', 'optimized')
const MAX_WIDTH = 1920
const WEBP_QUALITY = 72
const RESPONSIVE_WIDTHS = [320, 480, 640, 768, 960, 1200, 1600, 1920]
const IMG_EXT = new Set(['.jpg', '.jpeg', '.png'])

async function findImages(dir, list = []) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch (err) {
    if (err.code === 'ENOENT') {
      console.warn('Pasta de imagens não encontrada:', dir)
      return list
    }
    throw err
  }
  for (const entry of entries) {
    const full = join(dir, entry.name)
    if (entry.isDirectory() && entry.name !== 'optimized') {
      await findImages(full, list)
    } else if (entry.isFile() && IMG_EXT.has(extname(entry.name).toLowerCase())) {
      list.push(full)
    }
  }
  return list
}

async function optimizeImage(inputPath) {
  const rel = inputPath.slice(INPUT_DIR.length + 1)
  const basePath = join(OUTPUT_DIR, rel.replace(/\.[a-z]+$/i, '.webp'))
  await mkdir(dirname(basePath), { recursive: true })

  const image = sharp(inputPath)
  const metadata = await image.metadata()
  const inputWidth = metadata.width || MAX_WIDTH
  const maxTargetWidth = Math.min(inputWidth, MAX_WIDTH)
  const responsiveWidths = RESPONSIVE_WIDTHS.filter((w) => w <= maxTargetWidth)
  const widthsToGenerate =
    responsiveWidths.length > 0 ? responsiveWidths : [maxTargetWidth]

  await sharp(inputPath)
    .resize(maxTargetWidth, null, { withoutEnlargement: true })
    .webp({ quality: WEBP_QUALITY, effort: 5 })
    .toFile(basePath)

  for (const width of widthsToGenerate) {
    const variantPath = basePath.replace(/\.webp$/i, `-${width}w.webp`)
    await sharp(inputPath)
      .resize(width, null, { withoutEnlargement: true })
      .webp({ quality: WEBP_QUALITY, effort: 5 })
      .toFile(variantPath)
  }

  console.log(
    'Otimizada:',
    rel,
    '->',
    join('optimized', basename(basePath)),
    `(+${widthsToGenerate.length} variantes)`
  )
}

async function main() {
  const images = await findImages(INPUT_DIR)
  if (images.length === 0) {
    console.log('Nenhuma imagem em public/images/ para otimizar.')
    return
  }
  await mkdir(OUTPUT_DIR, { recursive: true })
  for (const img of images) {
    await optimizeImage(img)
  }
  console.log('Total:', images.length, 'imagem(ns) otimizada(s).')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
