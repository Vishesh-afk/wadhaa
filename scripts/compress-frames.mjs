/**
 * Compress the scroll-animation frame sequences in /public/400/ and /public/900/
 * Uses mozjpeg for ~60-70% size reduction with minimal visible quality loss.
 * Run: node scripts/compress-frames.mjs
 */
import sharp from 'sharp';
import { readdir, stat } from 'fs/promises';
import path from 'path';

const SEQUENCES = [
  { dir: 'public/400', quality: 65, label: 'Desktop (16:9)' },
  { dir: 'public/900', quality: 68, label: 'Mobile (9:16)' },
];

async function compressSequence({ dir, quality, label }) {
  const files = (await readdir(dir))
    .filter(f => f.endsWith('.jpg') || f.endsWith('.jpeg'))
    .sort();

  if (files.length === 0) { console.log(`  ⚠️  No JPEGs found in ${dir}`); return; }

  console.log(`\n📁 ${label}  (${dir})  —  ${files.length} frames  quality=${quality}`);
  let totalBefore = 0, totalAfter = 0;

  for (const file of files) {
    const fp = path.join(dir, file);
    const tmp = fp + '.tmp';
    const { size: before } = await stat(fp);
    totalBefore += before;

    try {
      await sharp(fp)
        .jpeg({ quality, mozjpeg: true })
        .toFile(tmp);

      const { size: after } = await stat(tmp);
      totalAfter += after;

      // Overwrite original in-place
      const { rename } = await import('fs/promises');
      await rename(tmp, fp);
    } catch (e) {
      console.error(`  ❌ ${file}: ${e.message}`);
      try { const { unlink } = await import('fs/promises'); await unlink(tmp); } catch {}
    }
  }

  const pct = ((1 - totalAfter / totalBefore) * 100).toFixed(1);
  console.log(`  ✅ ${(totalBefore/1024/1024).toFixed(1)} MB  →  ${(totalAfter/1024/1024).toFixed(1)} MB  (${pct}% saved)`);
}

console.log('\n🎞️  Frame Sequence Compressor\n' + '─'.repeat(60));
for (const seq of SEQUENCES) await compressSequence(seq);
console.log('\n✨ Done!\n');
