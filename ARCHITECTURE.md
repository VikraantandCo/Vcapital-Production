# V Capital — Platform Architecture
**Version:** 2.0 · **Date:** 2026-06-18 · **Architect:** Senior Frontend / Deployment

---

## Repository Structure

```
/
├── index.html                   ← Homepage (single-page with anchor sections)
├── vercel.json                  ← Routing, headers, URL preservation
├── robots.txt
├── sitemap.xml
├── favicon.ico / favicon.svg / apple-touch-icon.png
├── site.webmanifest / web-app-manifest-*.png
│
├── /pages/                      ← Utility & advisory pages
│   ├── how-we-work.html
│   ├── why-advisor.html
│   ├── risks.html
│   ├── market-comparison.html
│   ├── investment-guide.html
│   ├── privacy.html
│   ├── disclaimer.html
│   ├── contact.html
│   └── research-methodology.html
│
├── /newsroom/                   ← Intelligence Desk editions
│   ├── index.html               ← Archive + subscribe
│   ├── june-2026.html
│   ├── march-2026.html
│   ├── april-2026.html
│   └── hormuz-effect.html
│
├── /zones/                      ← Investment zone pages (35 communities)
│   ├── palm-jumeirah.html       ← serves /palm-jumeirah-investment (preserved)
│   ├── palm-jebel-ali.html
│   ├── jvc.html
│   └── ... (all 35 zones)
│
├── /zone-analysis/              ← Deep-dive zone intelligence
│   ├── palm-jumeirah-analysis.html
│   ├── palm-jebel-ali-analysis.html
│   └── ...
│
├── /Capital-structuring/                   ← Capital structuring
│   ├── capital-structuring-overview.html
│   ├── capital-structuring-10m.html
│   └── ...
│
├── /communities/                ← Community intelligence profiles
│   ├── district-one.html
│   ├── dubai-hills-estate.html
│   └── ...
│
├── /developers/                 ← Developer research profiles
│   ├── emaar.html
│   ├── nakheel.html
│   ├── sobha.html
│   └── ...
│
├── /research/                   ← Long-form research & guides
│   ├── capital-preservation.html
│   ├── family-office-guide.html
│   ├── hni-guide.html
│   └── ...
│
├── /portfolio/                  ← Vikraant portfolio pages
│   └── v-capital-portfolio.html
│
├── /data/                       ← Structured JSON data
│   ├── projects.json
│   ├── developers.json
│   ├── articles.json
│   ├── market-data.json
│   ├── zone-intelligence.json
│   └── communities.json
│
├── /assets/                     ← Static assets
│   ├── /fonts/                  ← 11 WOFF2 files
│   ├── /images/
│   ├── /icons/
│   └── /logos/
│
├── /styles/                     ← Modular CSS
│   ├── global.css               ← Design tokens, reset, utilities (IMPORT FIRST)
│   ├── homepage.css
│   ├── article.css
│   ├── zone.css
│   ├── project.css
│   ├── developer.css
│   └── community.css
│
├── /scripts/                    ← Modular JavaScript
│   ├── navigation.js            ← Nav, mobile drawer, scroll, reveal
│   ├── forms.js                 ← Google Sheets form submissions
│   ├── analytics.js             ← GA4 event tracking
│   ├── animations.js            ← Exit popup, floating elements
│   └── search.js                ← Search functionality
│
├── /components/                 ← Reusable HTML fragments
│   ├── navbar.html              ← Copy-paste nav block
│   ├── footer.html              ← Copy-paste footer block
│   ├── newsletter.html          ← Newsletter signup widget
│   ├── whatsapp-button.html     ← Floating WhatsApp CTA
│   └── booking-modal.html       ← Consultation booking modal
│
└── /OLD_ARCHIVE/                ← Pre-migration backups
    └── ... (flat .html files from root)
```

---

## URL Preservation Map

All old URLs → new file locations (handled by vercel.json rewrites):

| Old URL (preserved) | New File Location |
|---|---|
| `/palm-jumeirah-investment` | `/zones/palm-jumeirah.html` |
| `/jvc-investment` | `/zones/jvc.html` |
| `/newsroom-march-2026` | `/newsroom/march-2026.html` |
| `/capital-structuring/10m-20m` | `/capital-structuring/capital-structuring-10m.html` |
| `/dubai-south-upside-analysis` | `/research/dubai-south-analysis.html` |

---

## CSS Architecture

Every page includes:
```html
<link rel="stylesheet" href="/styles/global.css">
<link rel="stylesheet" href="/styles/[page-type].css">
```

**global.css** provides:
- @font-face declarations (11 fonts)
- CSS custom properties (design tokens)
- Reset
- Utility classes (.container, .reveal, .label, .btn, etc.)
- Shared components (cards, tables, KPIs, forms)

**Page-specific CSS** provides:
- Only layout/structure unique to that page type
- No duplication of global tokens

---

## JavaScript Architecture

Every page includes (in this order):
```html
<script src="/scripts/navigation.js" defer></script>
<script src="/scripts/forms.js" defer></script>
<script src="/scripts/analytics.js" defer></script>
<script src="/scripts/animations.js" defer></script>
```

- **navigation.js**: nav scroll, mobile drawer, dropdowns, reveal animations
- **forms.js**: all Google Sheets form submissions
- **analytics.js**: GA4 event tracking
- **animations.js**: exit popup, floating button

---

## Data Layer

JSON files in `/data/` serve as the single source of truth:
- `projects.json` — all zone/community data
- `developers.json` — developer profiles and ratings
- `articles.json` — newsroom edition metadata
- `market-data.json` — H1 2026 market statistics

Pages can fetch these via `fetch('/data/projects.json')` for dynamic filtering.

---

## Vercel Configuration

```
Framework Preset:  Other
Root Directory:    (blank — defaults to ./)
Build Command:     (blank)
Output Directory:  (blank)
Install Command:   (blank)
```

vercel.json handles:
- 88 URL rewrites (backward-compatible + new clean URLs)
- Font caching headers (1 year immutable)
- JSON content-type headers
- Manifest and sitemap content-type

---

## Adding New Pages

### New zone page:
1. Create `/zones/[community].html`
2. Add rewrite to `vercel.json`: `{"source":"/zones/[community]","destination":"/zones/[community].html"}`
3. If old URL exists, add preservation rewrite too
4. Add to `sitemap.xml`
5. Update `projects.json` with zone data

### New newsroom edition:
1. Create `/newsroom/[month]-[year].html`
2. Add rewrite: `{"source":"/newsroom/[month]-[year]","destination":"/newsroom/[month]-[year].html"}`
3. Also add old flat URL: `{"source":"/newsroom-[month]-[year]","destination":"/newsroom/[month]-[year].html"}`
4. Update `/newsroom/index.html` with new card
5. Update `articles.json`

### New developer page:
1. Create `/developers/[name].html`
2. Add rewrite: `{"source":"/developers/[name]","destination":"/developers/[name].html"}`
3. Update `developers.json`

---

## Migration Checklist (from flat root)

- [ ] Move all `*-investment.html` files from root → `/zones/`
- [ ] Move all `newsroom-*.html` files → `/newsroom/`
- [ ] Move `privacy.html`, `disclaimer.html` etc. → `/pages/`
- [ ] Move `capital-structuring*.html` → `/projects/`
- [ ] Move research pages → `/research/`
- [ ] Move portfolio pages → `/portfolio/`
- [ ] Backup all flat root files → `/OLD_ARCHIVE/`
- [ ] Verify every rewrite in `vercel.json` resolves
- [ ] Run link audit (no broken internal hrefs)
- [ ] Submit new sitemap to Google Search Console
- [ ] Verify canonical tags updated to match new paths
- [ ] Test all old URLs still serve correct content
