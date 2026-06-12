import sharp from 'sharp';
import { stat, rename } from 'fs/promises';

const dir = 'src/assets/family';
const files = [
    'Screenshot 2026-02-21 181747.png',
    'Screenshot 2026-02-21 181803.png',
    'Screenshot 2026-02-21 181815.png',
    'Screenshot 2026-02-21 181831.png',
];

for (const f of files) {
    const inp = `${dir}/${f}`;
    const out = inp.replace('.png', '.jpeg');
    const { size: before } = await stat(inp);
    await sharp(inp)
        .resize({ width: 800, withoutEnlargement: true })
        .jpeg({ quality: 78, mozjpeg: true })
        .toFile(out);
    const { size: after } = await stat(out);
    console.log(
        f.padEnd(42),
        `${Math.round(before / 1024)}KB → ${Math.round(after / 1024)}KB`,
        `(${Math.round((1 - after / before) * 100)}% saved)`
    );
}
console.log('Done!');
