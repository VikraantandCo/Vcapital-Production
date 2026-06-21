/**
 * V Capital — Navbar Validator
 * Run: node navbar-validator.js
 * Checks all HTML pages for consistent navigation.
 * Diagnostic only — does NOT modify files.
 */
const fs   = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname);
const REQUIRED_NAVLINKS = [
  '/newsroom',
  '/investment-guide',
  '/capital-structuring',
  '/#contact',
];
const REQUIRED_ZONE_LINKS = [
  '/palm-jumeirah-investment',
  '/business-bay-investment',
  '/jvc-investment',
];
const REQUIRED_FOOTER = ['privacy', 'disclaimer'];

const htmlFiles = fs.readdirSync(ROOT)
  .filter(f => f.endsWith('.html') && !['index.html','404.html'].includes(f));

let issues = 0;
console.log(`\nV Capital Navbar Validator`);
console.log(`${'='.repeat(60)}`);
console.log(`Checking ${htmlFiles.length} HTML pages...\n`);

for (const file of htmlFiles.sort()) {
  const content = fs.readFileSync(path.join(ROOT, file), 'utf8');
  const fileIssues = [];

  const navStart = content.indexOf('<nav');
  const navEnd   = content.indexOf('</nav>') + 6;
  const navHtml  = navStart > -1 ? content.slice(navStart, navEnd) : '';

  for (const link of REQUIRED_NAVLINKS) {
    if (!navHtml.includes(link)) fileIssues.push(`Missing nav link: ${link}`);
  }
  if (!content.includes('mobileNavDrawer') && !content.includes('mobDr')) {
    fileIssues.push('Missing mobile nav drawer');
  }
  for (const footerWord of REQUIRED_FOOTER) {
    if (!content.includes(footerWord)) fileIssues.push(`Footer missing: ${footerWord}`);
  }

  if (fileIssues.length) {
    issues++;
    console.log(`  ✗ ${file}`);
    for (const i of fileIssues) console.log(`      ${i}`);
  } else {
    console.log(`  ✓ ${file}`);
  }
}

console.log(`\n${'='.repeat(60)}`);
console.log(`Files with issues: ${issues} / ${htmlFiles.length}`);
