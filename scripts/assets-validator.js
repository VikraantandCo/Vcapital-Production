/**
 * V Capital — Assets Validator
 * Run: node assets-validator.js
 * Checks CSS, JS, font, and image references across all HTML.
 * Diagnostic only — does NOT modify files.
 */
const fs   = require('fs');
const path = require('path');

const ROOT     = path.resolve(__dirname);
const FONTS_DIR = path.join(ROOT, 'fonts');

const rootFiles = new Set(
  fs.readdirSync(ROOT).filter(f => fs.statSync(path.join(ROOT, f)).isFile())
);
const fontFiles = fs.existsSync(FONTS_DIR)
  ? new Set(fs.readdirSync(FONTS_DIR)) : new Set();

const index = fs.readFileSync(path.join(ROOT, 'index.html'), 'utf8');
let issues = 0;

console.log('\nV Capital Assets Validator');
console.log('='.repeat(60));

// CSS links
const cssRefs = [...index.matchAll(/href=["']([^"']+\.css)["']/g)].map(m => m[1]);
console.log('\nCSS FILES:');
for (const ref of cssRefs) {
  if (ref.includes('googleapis')) continue;
  const file     = ref.replace(/^\//, '');
  const basename = path.basename(file);
  const exists   = rootFiles.has(file) || rootFiles.has(basename);
  console.log(`  ${exists ? '✓' : '✗'} ${ref} → ${exists ? 'OK' : '404 — file not at this path'}`);
  if (!exists) issues++;
}

// JS files
const jsRefs = [...index.matchAll(/src=["']([^"']+\.js)["']/g)].map(m => m[1]);
console.log('\nJS FILES:');
for (const ref of jsRefs) {
  if (ref.includes('googletagmanager')) continue;
  const file  = ref.replace(/^\//, '');
  const bname = path.basename(file);
  const exists = rootFiles.has(file) || rootFiles.has(bname);
  console.log(`  ${exists ? '✓' : '✗'} ${ref}`);
  if (!exists) issues++;
}

// Fonts in homepage.css
const homeCss = fs.existsSync(path.join(ROOT, 'homepage.css'))
  ? fs.readFileSync(path.join(ROOT, 'homepage.css'), 'utf8') : '';
const fontRefs = [...homeCss.matchAll(/url\(['"]?([^'")?]+\.woff2)['"]?\)/g)].map(m => m[1]);
console.log('\nFONT FILES:');
for (const ref of [...new Set(fontRefs)]) {
  const bname = path.basename(ref);
  const exists = fontFiles.has(bname);
  console.log(`  ${exists ? '✓' : '✗'} ${ref} → ${exists ? 'found in /fonts/' : 'NOT FOUND'}`);
  if (!exists) issues++;
}

// GA4
const ga4     = index.includes('G-Z6BT42076R');
const gasUrl  = fs.existsSync(path.join(ROOT,'homepage.js'))
  && fs.readFileSync(path.join(ROOT,'homepage.js'),'utf8').includes('script.google.com/macros/s/');
console.log(`\nGA4 (G-Z6BT42076R): ${ga4 ? '✓ ACTIVE' : '✗ MISSING'}`);
console.log(`Google Apps Script: ${gasUrl ? '✓ ACTIVE' : '✗ MISSING'}`);

// Image
const imgRef = index.includes('/vikraant-parcha.jpeg');
const imgFile = rootFiles.has('vikraant-parcha.jpeg');
console.log(`\nFounder image (/vikraant-parcha.jpeg):`);
console.log(`  In HTML: ${imgRef ? '✓' : '✗'}  |  File exists: ${imgFile ? '✓' : '✗'}`);

console.log(`\n${'='.repeat(60)}`);
console.log(`Total issues: ${issues}`);
