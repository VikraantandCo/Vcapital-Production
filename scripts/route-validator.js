/**
 * V Capital — Route Validator
 * Run: node route-validator.js
 * Reads vercel.json, checks every destination file exists,
 * and reports broken routes without modifying any files.
 */
const fs   = require('fs');
const path = require('path');

const ROOT      = path.resolve(__dirname);
const VJ_PATH   = path.join(ROOT, 'vercel.json');

if (!fs.existsSync(VJ_PATH)) { console.error('vercel.json not found'); process.exit(1); }

const vj       = JSON.parse(fs.readFileSync(VJ_PATH, 'utf8'));
const rewrites = vj.rewrites || [];
const rootFiles = new Set(fs.readdirSync(ROOT).filter(f => fs.statSync(path.join(ROOT, f)).isFile()));

let pass = 0, fail = 0;
const broken = [], ok = [];

for (const r of rewrites) {
  const dest     = r.destination.replace(/^\//, '');
  const isCatch  = r.source === '/(.*)';
  if (isCatch) { pass++; continue; }

  const exists = rootFiles.has(dest) ||
    (dest.includes('/') && fs.existsSync(path.join(ROOT, dest)));

  if (exists) { pass++; ok.push(r.source); }
  else        { fail++; broken.push({ source: r.source, destination: r.destination }); }
}

console.log(`\nV Capital Route Validator`);
console.log(`${'='.repeat(60)}`);
console.log(`Total routes: ${rewrites.length}`);
console.log(`PASS:         ${pass}`);
console.log(`FAIL:         ${fail}\n`);

if (broken.length) {
  console.log('BROKEN ROUTES:');
  for (const b of broken) {
    console.log(`  ✗ ${b.source.padEnd(45)} → ${b.destination}`);
  }
} else {
  console.log('✓ All routes resolve to existing files.');
}

// Duplicate source detection
const sources = rewrites.map(r => r.source);
const dupes   = sources.filter((s, i) => sources.indexOf(s) !== i);
if (dupes.length) {
  console.log(`\nDUPLICATE SOURCES: ${[...new Set(dupes)].join(', ')}`);
} else {
  console.log('\n✓ No duplicate source routes.');
}
