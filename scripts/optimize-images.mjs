/**
 * Image Optimization Script for Wadha
 * Compresses large product images (JPEG/PNG) to WebP + optimized JPEG
 * Run: node scripts/optimize-images.mjs
 */
import sharp from 'sharp';
import { readdir, stat, rename } from 'fs/promises';
import { existsSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const ASSETS_DIR = path.join(__dirname, '../src/assets');

// Only these specific large files — we don't touch the 400/900 frame sequences here
const TARGETS = [
  { src: 'IMG_2192.PNG',                                       quality: 80 },
  { src: 'tikiya.jpeg',                                        quality: 75 },
  { src: 'cake.jpeg',                                          quality: 75 },
  { src: 'dishwash.jpeg',                                      quality: 78 },
  { src: 'wadha bar.jpeg',                                     quality: 80 },
  { src: 'wadha powder.jpeg',                                   quality: 80 },
  { src: 'WhatsApp Image 2026-01-17 at 5.05.56 PM.jpeg',       quality: 78 },
  { src: 'WhatsApp Image 2026-01-17 at 5.05.55 PM.jpeg',       quality: 78 },
  { src: 'bar.jpeg',                                           quality: 80 },
  { src: 'powder.jpeg',                                        quality: 80 },
  { src: 'powder (2).jpeg',                                    quality: 80 },
  { src: 'phenyl/hf_20260221_125455_8617201f-82c2-402a-9c97-5506a6a14d97.png', quality: 80 },
  { src: 'phenyl/hf_20260221_130847_98686629-861c-44fd-84a8-c08598b441d2.jpeg', quality: 80 },
];

function formatBytes(bytes) {
  return (bytes / 1024).toFixed(1) + ' KB';
}

async function optimizeImage({ src, quality }) {
  const inputPath  = path.join(ASSETS_DIR, src);
  if (!existsSync(inputPath)) {
    console.log(`  ⚠️  Skipping (not found): ${src}`);
    return;
  }

  const { size: beforeBytes } = await stat(inputPath);
  const ext = path.extname(src).toLowerCase();
  const isPng = ext === '.png';

  // Output to same path, same filename but optimized
  // We keep the original extension so existing imports don't break
  const tmpPath = inputPath + '.tmp';

  try {
    const pipeline = sharp(inputPath);
    if (isPng) {
      // PNG → keep as JPEG for much better compression (product photos are photos, not logos)
      await pipeline
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality, mozjpeg: true })
        .toFile(tmpPath);

      // Replace original (rename tmpPath to original, which may be .PNG)
      const jpegPath = inputPath.replace(/\.PNG$/i, '.jpeg');
      await rename(tmpPath, jpegPath);

      // If original name was .PNG, also remove original (not needed since we kept .jpeg)
      if (jpegPath !== inputPath && existsSync(inputPath)) {
        const { rename: fsRename } = await import('fs/promises');
      }

      const { size: afterBytes } = await stat(jpegPath);
      const saving = ((1 - afterBytes / beforeBytes) * 100).toFixed(1);
      console.log(`  ✅ ${path.basename(src).padEnd(55)} ${formatBytes(beforeBytes).padStart(10)} → ${formatBytes(afterBytes).padStart(10)}  (${saving}% saved)`);
    } else {
      // JPEG → re-compress in place
      await pipeline
        .resize({ width: 1200, withoutEnlargement: true })
        .jpeg({ quality, mozjpeg: true })
        .toFile(tmpPath);

      await rename(tmpPath, inputPath);

      const { size: afterBytes } = await stat(inputPath);
      const saving = ((1 - afterBytes / beforeBytes) * 100).toFixed(1);
      console.log(`  ✅ ${path.basename(src).padEnd(55)} ${formatBytes(beforeBytes).padStart(10)} → ${formatBytes(afterBytes).padStart(10)}  (${saving}% saved)`);
    }
  } catch (err) {
    if (existsSync(tmpPath)) await rename(tmpPath, tmpPath + '.err').catch(() => {});
    console.error(`  ❌ Failed: ${src} —`, err.message);
  }
}

console.log('\n🖼️  Wadha Image Optimizer\n' + '─'.repeat(80));
for (const target of TARGETS) {
  await optimizeImage(target);
}
console.log('\n✨ Done! Product images have been optimized in-place.\n');
