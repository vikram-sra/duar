#!/usr/bin/env node
// Turn the camera originals in portfolio/ into web-sized assets plus a manifest.
//
// The originals are ~104 MB (up to 15.9 MB each) and must never be served. This
// downscales them into public/portfolio/ and records each painting's true pixel
// dimensions, so the 3D layout can build every frame at the correct width before
// a single image byte has downloaded.
//
// Uses sips, which ships with macOS — no image dependency to install.
//
//   npm run portfolio

import { execFileSync } from 'node:child_process';
import { readdirSync, mkdirSync, writeFileSync, statSync } from 'node:fs';
import { join, extname, basename } from 'node:path';

const SRC = 'portfolio';
const OUT = join('public', 'portfolio');
// 1400 @ q60 was chosen by inspection: brush texture, canvas weave and the smooth
// tonal passages all survive with no visible blocking, at roughly half the weight of
// 1600 @ q78 (15.4 MB → ~7.6 MB across the set). A painting is 3.5 m tall and only
// fills the viewport when focused, so 1400 px is about one screen-height of detail.
const MAX_EDGE = 1400;   // longest side, px
const QUALITY = 60;      // JPEG quality

function dimensions(file) {
    const out = execFileSync('sips', ['-g', 'pixelWidth', '-g', 'pixelHeight', file], { encoding: 'utf8' });
    const width = Number(out.match(/pixelWidth:\s*(\d+)/)?.[1]);
    const height = Number(out.match(/pixelHeight:\s*(\d+)/)?.[1]);
    if (!width || !height) throw new Error(`Could not read dimensions of ${file}`);
    return { width, height };
}

mkdirSync(OUT, { recursive: true });

const sources = readdirSync(SRC)
    .filter(f => /\.(jpe?g|png)$/i.test(f))
    .sort();

if (!sources.length) {
    console.error(`No images found in ${SRC}/`);
    process.exit(1);
}

const paintings = [];
let totalBytes = 0;

for (const file of sources) {
    const srcPath = join(SRC, file);
    const id = basename(file, extname(file));
    const outName = `${id}.jpg`;
    const outPath = join(OUT, outName);

    const { width, height } = dimensions(srcPath);

    // Resize the longest edge; sips preserves aspect ratio, so the panel's shape
    // is exactly the painting's shape.
    execFileSync('sips', [
        '-Z', String(MAX_EDGE),
        '-s', 'format', 'jpeg',
        '-s', 'formatOptions', String(QUALITY),
        srcPath, '--out', outPath
    ], { stdio: 'ignore' });

    const bytes = statSync(outPath).size;
    totalBytes += bytes;

    paintings.push({
        id,
        file: outName,
        width,                                   // original pixels — drives panel aspect
        height,
        aspect: Number((width / height).toFixed(4)),
        title: ''                                // fill these in by hand later
    });

    const kb = String(Math.round(bytes / 1024)).padStart(5);
    console.log(`  ${kb} KB  ${outName}  ${width}×${height}  aspect ${(width / height).toFixed(3)}`);
}

writeFileSync(
    join(OUT, 'manifest.json'),
    JSON.stringify({ maxEdge: MAX_EDGE, paintings }, null, 2) + '\n'
);

console.log(`\n${paintings.length} paintings → ${OUT}/  (${(totalBytes / 1024 / 1024).toFixed(1)} MB total)`);
console.log('Titles are blank in manifest.json — edit that file to name them.');
