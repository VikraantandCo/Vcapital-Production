/* ═══════════════════════════════════════════════════════════
   V Capital — homepage.js
   Page-specific JavaScript for index.html.
   Contains: scroll reveals, nav behavior, AI FAQ, deal cards,
             zone toggles, capital flow tabs, session tracker,
             mobile nav, sticky CTA, founder video player.
   Schema JSON-LD and GA4 config remain inline in index.html.
   ═══════════════════════════════════════════════════════════ */

// Block 1: Font preload observer
window.addEventListener('load',function(){var l=document.createElement('link');l.rel='stylesheet';l.href='https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&family=DM+Sans:wght@300;400;500&family=DM+Mono:wght@300;400&&family=Montserrat:wght@300;400;500&display=swap';document.head.appendChild(l);});

/* ─────────────────────────────────────────── */

// Block 7
window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-Z6BT42076R');

/* ─────────────────────────────────────────── */

// Block 8: Founder video player
function playFounderVideo() {
  var frame = document.getElementById('vc-video-frame');
  var poster = document.getElementById('vc-video-poster');
  if (!frame.src) { frame.src = frame.dataset.src; }
  poster.style.opacity = '0';
  poster.style.pointerEvents = 'none';
  frame.style.opacity = '1';
}

/* ─────────────────────────────────────────── */

// Block 9: Main app — scroll reveals, nav, forms, FAQ, cards
// ── SCROLL REVEALS ──
const reveals = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      setTimeout(() => entry.target.classList.add('visible'), 80);
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.05, rootMargin: '0px 0px 0px 0px' });
reveals.forEach(el => observer.observe(el));

// ── NAV SCROLL ──
window.addEventListener('scroll', () => {
  var _mn=document.getElementById('main-nav');if(_mn)_mn.classList.toggle('scrolled', window.scrollY > 60);
  var _sc=document.getElementById('sticky-cta');if(_sc)_sc.classList.toggle('show', window.scrollY > 600);
});

// ── MOBILE MENU ──

// ── ARTICLES DATA ──
const articles = {
  a1: {
    meta: 'Market Outlook · 2,200 words · January 2026 · Vikraant K Parcha',
    content: `
<h1>Dubai Real Estate Market Outlook 2026: Where Smart Money Is Moving</h1>
<div class="article-meta">Market Outlook · January 2026 · By Vikraant K Parcha, Strategic Wealth Advisor</div>

<p>Dubai's real estate market entered 2026 not as a market recovering from excess, but as a market operating above its long-run sustainable growth rate — and showing few signs of reverting. Prices in prime segments are up 20–25% year-on-year. Transaction volumes are at historic highs. Developer launches are being absorbed faster than at any point in the last decade.</p>
<p>The question serious investors are asking is not whether Dubai is performing. It clearly is. The question is: <strong>which segments offer the most compelling risk-adjusted entry in 2026</strong>, and where is capital being mispriced in both directions?</p>
<p>This is the analysis. It is data-first and asset-class-specific. There is no cheerleading here.</p>

<h2>Supply vs Demand: The Structural Story</h2>
<p>Dubai's population reached approximately 3.8 million in early 2026, growing at roughly 5–6% annually. New resident inflows — particularly from India, Russia, the UK, Egypt, and China — are sustaining rental demand across all price tiers. The city's 2040 Urban Master Plan targets a population of 5.8 million, requiring a substantial and sustained housing pipeline.</p>
<p>On the supply side, completions in 2025 came in at approximately 38,000 units — meaningful, but insufficient to meet total demand when factoring in household formation from new residents. Developers have approximately 70,000–85,000 units scheduled for completion between 2026 and 2028. However, historical completion rates in Dubai average 60–70% of scheduled delivery. Effective supply is materially lower than headline numbers suggest.</p>
<div class="data-callout"><p><strong>Key Insight:</strong> Dubai's effective supply-demand balance remains in moderate undersupply through 2026–2027, particularly in the 1–3 bedroom apartment segment and villa/townhouse categories in emerging master communities. The mid-range glut of 2018–2020 has not returned.</p></div>

<h2>Capital Inflow Trends</h2>
<p>Globally mobile capital has been flowing into Dubai at rates that structural Dubai bears consistently underestimate. Three primary flows are worth tracking:</p>
<p><strong>European HNI Capital:</strong> Continued migration of European wealth — particularly from the UK, France, and Germany — driven by tax uncertainty in home markets and UAE's zero capital gains and zero inheritance tax environment. High-end apartments and villa product in established areas are primary targets.</p>
<p><strong>Indian Entrepreneur Capital:</strong> Dubai remains the investment destination of choice for Indian HNIs and NRIs. Off-plan from developers like Emaar and Sobha with Indian-facing marketing continues to attract substantial pre-launch capital. JVC, Dubai Hills, and Creek Harbour are primary absorbers.</p>
<p><strong>CIS & Eastern European Capital:</strong> Post-2022, capital repositioning from Russia and neighbouring countries created substantial demand in the AED 1–5M range. This flow has moderated from 2022–2023 peaks but remains elevated historically.</p>

<h2>Segment Performance Breakdown</h2>
<h3>Apartments</h3>
<p>The most liquid and volume-heavy segment. Prime apartments (Downtown, Dubai Marina, Business Bay) have appreciated 18–26% year-on-year in 2025 with 2026 stabilisation expected in the 8–14% range. Mid-market apartments (JVC, Arjan, Al Furjan) show higher yield but slower appreciation — suitable for income-focused mandates. Studios deliver the highest gross yields (9–13%) but require active management.</p>
<h3>Villas & Townhouses</h3>
<p>The stand-out performers of 2023–2025. Dubai Hills Estate, Damac Hills 2, Arabian Ranches III, and The Valley delivered 25–45% capital appreciation over 24 months. The market has priced in significant growth — entry now requires more surgical selection. New supply from Aldar, Emaar, and Nakheel master plans creates both risk (additional supply) and opportunity (first-mover on new phases).</p>
<h3>Luxury & Ultra-Luxury (AED 10M+)</h3>
<p>Palm Jumeirah, Emirates Hills, and Jumeirah Islands continue to be globally benchmarked against Monaco, London prime, and Singapore. Price growth has been exceptional — Palm villas up 30–40% over 24 months — but liquidity at these ticket sizes is thinner. Ultra-luxury is a capital appreciation play, not a yield play.</p>

<div class="data-callout"><p><strong>12-Month Forecast (2026):</strong> Prime apartments: +8–12% price growth. Villa/townhouse in established communities: +5–9%. Off-plan from Grade A developers: +15–30% paper gains to completion (market-dependent). Yield compression in core areas will continue as prices outpace rent growth.</p></div>

<h2>The Risk Landscape</h2>
<p>Any analysis that does not address risk is either ignorant or dishonest. Here are the material risks in 2026's market:</p>
<ul>
<li><strong>Developer Concentration Risk:</strong> Off-plan volumes are dominated by a small number of large developers. If one mid-tier developer fails, it creates sentiment contagion even for sound projects. Stick to RERA-registered, escrow-compliant developers with delivery track records.</li>
<li><strong>Global Macro Risk:</strong> A global recession scenario, oil price collapse, or Fed-driven USD strength would impact Dubai's capital inflow thesis. AED-USD peg limits local monetary response. Dubai has weathered previous cycles (2009, 2016, 2020) — but not without price corrections.</li>
<li><strong>Oversupply in Specific Corridors:</strong> JVC, Arjan, and Dubai Silicon Oasis carry medium-term supply risk from aggressive developer pipelines. Rental yield compression is possible in these micro-markets over 24–36 months.</li>
<li><strong>Regulatory Change:</strong> Dubai's regulatory environment has historically been investor-friendly. Short-term rental regulation is an evolving area — investors running Airbnb strategies should monitor DTCM licensing changes.</li>
</ul>

<h2>Strategic Entry Points for 2026</h2>
<p>Given the above, the highest-conviction opportunities in 2026 fall into three categories:</p>
<p><strong>Category 1: Off-plan in infrastructure-backed emerging zones.</strong> Areas where government infrastructure commitments (metro extensions, road upgrades, new malls) are announced but not yet priced in. First-mover advantage is significant — 12–24 months ahead of broader market recognition.</p>
<p><strong>Category 2: Below-market resale in prime locations.</strong> Motivated sellers exist in every market. A 15–20% below-market entry in a location with strong fundamentals is worth more than any off-plan discount. These opportunities require a deal sourcing network, not portal browsing.</p>
<p><strong>Category 3: High-yield tenanted studio portfolios.</strong> For income-focused investors, a portfolio of tenanted studios in high-demand rental corridors delivers immediate cash flow without construction risk. The best portfolio-level yields in 2026 are achievable through bulk acquisition at negotiated pricing.</p>

<div class="cta-block">
<h3>Request a Personalised Market Brief</h3>
<p>Every investor has a different capital objective. Get a tailored assessment of where your specific capital should be positioned in Dubai's 2026 market.</p>
<a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>WhatsApp Vikraant Directly →</span></a>
</div>

<h2>Frequently Asked Questions</h2>
<div class="faq-item"><div class="faq-q">Will Dubai property prices crash in 2026?</div><div class="faq-a">A major price correction is unlikely in 2026 given sustained population growth and supply-demand imbalance. A moderation (5–8% price growth vs 20%+ in 2025) is the more probable scenario. Selective oversupply in specific corridors may see flat or declining prices.</div></div>
<div class="faq-item"><div class="faq-q">What is the best area to invest in Dubai in 2026?</div><div class="faq-a">It depends entirely on your objective. For yield: JVC, Business Bay, Dubai Marina. For capital growth: Dubai Creek Harbour, Dubai Hills (new phases), Meydan. For ultra-luxury appreciation: Palm Jumeirah, Jumeirah Bay Island. There is no universal "best area."</div></div>
<div class="faq-item"><div class="faq-q">Is Dubai real estate safe from global recession?</div><div class="faq-a">Not fully. A severe global recession would slow capital inflows and could trigger a 10–20% correction in premium segments, as seen in 2009. However, Dubai's non-oil economy, fiscal reserves, and government responsiveness have historically shortened correction cycles significantly.</div></div>
<div class="faq-item"><div class="faq-q">What rental yield can I expect in Dubai in 2026?</div><div class="faq-a">Gross yields: 5–13% depending on asset class and management strategy. Net of service charges and management: typically 1.5–2.5% lower. Best net yields in 2026: well-managed studios in high-demand corridors, 8–11% net.</div></div>
<div class="faq-item"><div class="faq-q">Is the Dubai property market oversupplied?</div><div class="faq-a">Not in aggregate. Certain micro-markets (JVC, Arjan, Silicon Oasis apartment segment) face meaningful pipeline supply through 2027–2028. Premium villa and townhouse segments, and prime waterfront apartments, remain structurally undersupplied.</div></div>
`
  },
  a2: {
    meta: 'Asset Comparison · 1,900 words · February 2026 · Vikraant K Parcha',
    content: `
<h1>Townhouses vs Villas in Dubai: Where Investors Are Making the Most Money</h1>
<div class="article-meta">Asset Comparison · February 2026 · By Vikraant K Parcha, Strategic Wealth Advisor</div>

<p>Both are residential. Both target family buyers. Both have delivered exceptional returns in 2023–2025. But townhouses and villas in Dubai are fundamentally different investment propositions — with different capital efficiency profiles, yield characteristics, and liquidity dynamics.</p>
<p>If you are choosing between them with investment capital, the answer is not emotional. It is mathematical.</p>

<h2>The Case for Townhouses</h2>
<p>Townhouses — typically 3 to 4 bedrooms, 2,000–3,000 sq ft, in master-planned communities — have been the standout performer in Dubai's residential market since 2021. The reasons are structural, not accidental.</p>
<p><strong>Affordability premium.</strong> Townhouses offer a price-per-square-foot entry point that is 20–35% lower than standalone villas in the same community. A 3BR townhouse in Dubai Hills Estate or Damac Hills 2 that transacts at AED 1.8–2.4M delivers a community lifestyle experience that an equivalent villa would price at AED 3.5M+. This accessibility drives a significantly larger buyer pool — which means faster exit liquidity when you are ready to sell.</p>
<p><strong>Undersupply relative to demand.</strong> Master community developers have historically over-indexed on apartments. Townhouse supply in established communities is genuinely constrained. Waitlists at launch — not marketing hype — are a real feature of well-located townhouse releases.</p>
<p><strong>Rental demand is strong and growing.</strong> Families relocating to Dubai — the fastest-growing residential tenant demographic — actively seek 3–4BR townhouse product with community amenities, schools, and retail within walking distance. Vacancy rates in established townhouse communities run materially below the market average.</p>

<h2>The Case for Villas</h2>
<p>Villas have always been the aspirational product of Dubai's residential market. The 2022–2025 supercycle in villa pricing was driven by a specific confluence: post-COVID space demand, HNI migration seeking primary residences, and a supply drought that took years to address.</p>
<p><strong>Ultra-luxury villas are a globally benchmarked asset.</strong> Palm Jumeirah villas, Emirates Hills mansions, Jumeirah Bay Island, and Sobha Hartland Estates are traded against London prime, Monaco, and Singapore. A buyer pool that is globally mobile and currency-agnostic supports pricing disconnected from UAE economic cycles.</p>
<p><strong>Capital appreciation multiples are exceptional at the top end.</strong> Palm Jumeirah garden homes that transacted at AED 8–10M in 2021 are now being offered at AED 14–18M. That is a 60–80% capital return in under 36 months — with additional rental income if let.</p>
<p><strong>Brand and uniqueness create a liquidity premium.</strong> A villa on an identifiable address — Palm Frond, Emirates Hills Sector, Jumeirah Bay — carries a scarcity premium that no amount of new supply can replicate. These addresses are finite. The universe of globally mobile ultra-HNIs is not.</p>

<h2>Head-to-Head ROI Comparison</h2>
<table class="roi-table">
<tr><th>Metric</th><th>Townhouse (3BR)</th><th>Villa (5BR)</th></tr>
<tr><td>Typical Entry Price</td><td>AED 1.5M – AED 3M</td><td>AED 3.5M – AED 20M+</td></tr>
<tr><td>Gross Rental Yield</td><td>5.5% – 8%</td><td>3.5% – 5.5%</td></tr>
<tr><td>Net Rental Yield</td><td>4% – 6.5%</td><td>2.5% – 4%</td></tr>
<tr><td>24-Month Capital Growth (2023–2025)</td><td>30% – 55%</td><td>40% – 80%</td></tr>
<tr><td>Liquidity (days to sell)</td><td>30 – 60 days</td><td>60 – 180+ days</td></tr>
<tr><td>Entry Capital Efficiency</td><td>High (accessible to more investors)</td><td>Lower (large capital requirement)</td></tr>
<tr><td>Service Charge / sqft</td><td>AED 3.5 – AED 5</td><td>AED 3 – AED 6</td></tr>
<tr><td>Best Suited For</td><td>Yield + Growth balanced</td><td>Capital appreciation priority</td></tr>
</table>

<h2>Yield vs Appreciation: The Trade-Off</h2>
<p>Townhouses offer a more balanced return profile: credible yield (5–7% net in well-managed communities) with solid appreciation. They are the institutional residential product — the type of asset a multi-family REIT would hold if Dubai had mature REIT structures.</p>
<p>Villas — particularly at the luxury and ultra-luxury end — are primarily appreciation vehicles. Rental yields at AED 8M+ price points rarely exceed 4–4.5% gross. The return thesis is capital growth, not income. If you need the asset to generate income, a villa at this ticket size is not your product.</p>

<h2>Liquidity Differences</h2>
<p>This is the most underappreciated distinction and the most important at point of exit.</p>
<p>A well-priced 3BR townhouse in Dubai Hills, Arabian Ranches III, or The Valley will transact within 30–60 days in a normal market. The buyer pool is deep: families relocating to Dubai, end-users with AECB-approved mortgages, second-home buyers from India and Europe. Pricing at 5% below market clears in days.</p>
<p>A villa at AED 10M+ is a different transaction. The buyer pool is global but thin. Marketing timelines run 90–180 days. Transaction costs are identical percentage-wise but massive in absolute terms. This illiquidity is the tax on the superior appreciation — and it is real.</p>

<h2>Case-Style Insights</h2>
<p><strong>Townhouse Case:</strong> A 3BR townhouse in Damac Hills 2 acquired off-plan in Q3 2022 at AED 1.6M. Completed Q2 2024. Market value at time of writing: AED 2.35M. Net yield from Q4 2024 tenant: 6.2%. Total 30-month return including yield: approximately 53% on invested equity.</p>
<p><strong>Villa Case:</strong> A 5BR villa on Palm Jumeirah Frond K acquired in 2022 at AED 9.2M. Current market: AED 15.5M. No rental income (owner-occupied). Total capital return: 68% over 36 months. Exceptional — but illiquid, high-maintenance, and requiring substantial additional capital outlay (service charges, maintenance, furnishing).</p>

<h2>The Final Verdict by Investor Type</h2>
<p><strong>Income-Focused Investor (yield priority):</strong> Townhouse, clearly. A 3–4BR townhouse in a well-managed community with strong school and retail catchment delivers 5–7% net yield with a manageable service charge load. Liquidity at exit is credible.</p>
<p><strong>Capital Growth Investor (medium-term, AED 2–8M budget):</strong> Townhouse again. The appreciation case is almost as strong as villas in 2026's supply-constrained environment, but capital efficiency is dramatically superior. A AED 4M townhouse in the right location outperforms a AED 4M villa by capital deployed.</p>
<p><strong>Ultra-HNI / Family Office (AED 10M+, long-term hold):</strong> Villa, specifically on branded island or waterfront addresses. The globally benchmarked scarcity and aspirational demand support a uniquely resilient price floor in downturns and exceptional upside in cycles.</p>
<p><strong>First-Time Dubai Investor (AED 1.5–3M):</strong> Townhouse. Lower entry risk, higher liquidity, credible yield, strong appreciation track record, and a market dynamic that is still in your favour in 2026.</p>

<div class="cta-block">
<h3>Discuss Your Specific Mandate</h3>
<p>Every capital objective maps to a different asset class decision. Let's build the right analysis for your situation.</p>
<a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Request Personalised Analysis via WhatsApp →</span></a>
</div>

<h2>Frequently Asked Questions</h2>
<div class="faq-item"><div class="faq-q">Do townhouses or villas have better ROI in Dubai?</div><div class="faq-a">On a capital-efficiency basis, townhouses have delivered superior risk-adjusted ROI for mid-market investors in 2021–2025. Villas have delivered higher absolute percentage returns at the ultra-luxury end — but at significantly higher capital entry and holding costs.</div></div>
<div class="faq-item"><div class="faq-q">Which Dubai areas have the best townhouse ROI?</div><div class="faq-a">Dubai Hills Estate, Arabian Ranches III, Damac Hills 2, The Valley by Emaar, and Mudon have delivered the strongest 2023–2025 townhouse performance. In 2026, emerging master communities with announced infrastructure anchors are the next opportunity set.</div></div>
<div class="faq-item"><div class="faq-q">Are Dubai villas a good investment in 2026?</div><div class="faq-a">Selectively yes. New villa product in mature master communities offers credible appreciation potential, especially off-plan at Phase 1 pricing. Ultra-luxury waterfront villas remain globally competitive. Mid-market villa product at AED 4–7M in oversupplied areas carries more risk in 2026.</div></div>
`
  },
  a3: {
    meta: 'Off-Plan Strategy · 2,100 words · March 2026 · Vikraant K Parcha',
    content: `
<h1>Top Off-Plan Investment Opportunities in Dubai Right Now (High ROI Picks)</h1>
<div class="article-meta">Off-Plan Strategy · March 2026 · By Vikraant K Parcha, Strategic Wealth Advisor</div>

<p>Dubai's off-plan market in 2026 is both the best and worst place to deploy capital — simultaneously. The best off-plan deals are exceptional: pre-completion capital appreciation of 25–50%, flexible payment structures that engineer returns on equity far beyond total price gains, and access to developer pricing that the secondary market cannot replicate.</p>
<p>The worst off-plan deals are genuine capital traps: developers with no track record, fantasy ROI projections, locations with no demand drivers, and payment structures that mask true capital commitments. The market does not advertise which is which. That is the advisory's job.</p>
<p>This analysis defines what makes a strong off-plan deal — and identifies the categories of opportunity that meet that standard today.</p>

<h2>What Defines a Strong Off-Plan Deal?</h2>
<p>Before any specific project is evaluated, five criteria determine whether an off-plan deal is worth serious consideration:</p>
<p><strong>1. Developer Delivery Track Record.</strong> Has this developer delivered projects on time and to specification before? RERA registration and escrow compliance are baseline — not differentiators. True evaluation requires analysing actual delivery versus announced timelines across their portfolio. Grade A developers (Emaar, Sobha, Nakheel, Meraas) set the standard. Emerging developers must be scrutinised project-by-project.</p>
<p><strong>2. Location Demand Fundamentals.</strong> Is there organic tenant demand in this location today, or only projected demand? A project in a location with no existing rental history requires a demand thesis — not a hope. Infrastructure anchors (metro, schools, malls) with confirmed development timelines are credible demand signals. Marketing presentations are not.</p>
<p><strong>3. Entry Pricing vs Secondary Market.</strong> What is the current secondary market price for comparable ready units in the same location? The off-plan discount — the margin of safety — must be meaningful. In 2026's hot market, many developers are launching at or above secondary market comparable pricing. This eliminates the off-plan investment case immediately.</p>
<p><strong>4. Payment Plan Capital Efficiency.</strong> A 20/80 payment plan (20% during construction, 80% at handover) dramatically increases return on equity if the asset appreciates during the construction period. A 60/40 plan reduces this leverage. Evaluate the payment plan as a financial structure, not just a convenience.</p>
<p><strong>5. Exit Liquidity at Completion.</strong> Who is your buyer at handover? Is there a credible secondary market for this specific asset type in this specific location? Trophy products in prime locations have deep buyer pools. Niche products in emerging areas may face a thin market at exactly the moment you want to exit.</p>

<h2>Entry Strategy: How to Position for Maximum Upside</h2>
<p>The best off-plan entry is pre-launch. Developer sales teams begin releasing units to a preferred buyer network — brokers with proven investor relationships — 2–6 weeks before any public marketing. At this stage, pricing is at its most aggressive and unit selection is unrestricted.</p>
<p>The second-best entry is at launch. Pricing holds but unit selection is increasingly competitive. The worst position to be in is entering post-launch marketing on secondary portal platforms — this is typically 10–20% above the pricing available at launch.</p>
<div class="data-callout"><p><strong>Advisory Advantage:</strong> The primary value of working with an embedded Dubai advisor is pre-launch access. Units available to the open market are, by definition, units that more sophisticated investors did not want. Our pre-launch network gives clients first access to allocation at developer-direct pricing.</p></div>

<h2>Payment Plan Architecture</h2>
<p>Payment plans in Dubai off-plan are not standardised. They vary by developer and project, and the structure has a meaningful impact on return calculations. Three structures dominate the 2026 market:</p>
<p><strong>20/80 (Construction-Linked):</strong> 20% down payment, remaining 80% at handover. Maximum return-on-equity leverage. If a AED 1M unit appreciates 30% during construction, your AED 200K equity has made AED 300K — a 150% return on equity before paying the balance. Risk: full balance required at handover, requiring either cash or mortgage approval at that future date.</p>
<p><strong>50/50 or 60/40 (Balanced Construction):</strong> Instalments spread across construction milestones, with a meaningful percentage at handover. Lower return-on-equity leverage than 20/80, but lower liquidity pressure at completion. Better for investors who may not have the full balance liquid at handover.</p>
<p><strong>Post-Handover Payment Plans:</strong> Increasingly common from mid-tier developers — often 1% per month over 3–5 years post-completion. This is effectively developer financing and allows investors to generate rental income while paying down the balance. Valuable for yield-focused investors who do not want to leverage with bank mortgages.</p>

<h2>Risk Analysis: What Can Go Wrong</h2>
<p>Off-plan investment in Dubai is not risk-free. The risks are manageable — but only if they are identified and addressed before commitment.</p>
<p><strong>Construction Delay:</strong> The most common risk. Even Grade A developers run 3–12 month delays. This does not destroy the investment thesis but it affects cash-flow planning, especially for investors relying on handover to trigger rental income or resale.</p>
<p><strong>Market Correction at Handover:</strong> If the broader market corrects between purchase and completion, units may be delivered into a weaker pricing environment. This is most dangerous for investors who have bought at elevated pricing on thin off-plan discounts. The margin of safety at entry is your protection.</p>
<p><strong>Developer Financial Distress:</strong> Rare with RERA-compliant developers, but not zero. Escrow accounts mean construction funds are legally ring-fenced from developer operating capital — but project completion still depends on the developer's ability to manage the build. Stick to developers with strong balance sheets.</p>

<h2>Exit Strategy: Designing the Return Before You Buy</h2>
<p>There are three off-plan exit routes, and the decision must be made at purchase — not at handover.</p>
<p><strong>Pre-Handover Transfer (Flip):</strong> Sell the SPA (Sales Purchase Agreement) to another buyer before the unit is completed. No mortgage required. No service charges. Maximum return-on-equity if the market has appreciated. Requires a liquid secondary market for that specific project — confirm this before buying.</p>
<p><strong>Post-Handover Resale:</strong> Take handover, pay the remaining balance, and sell immediately or within 6–12 months. The post-handover premium is real in strong markets — buyers who want ready units will pay 5–15% above off-plan pricing for the certainty of immediate possession. Requires capital at handover.</p>
<p><strong>Hold and Yield:</strong> Retain the unit, tenant it, and generate income while the market continues to appreciate. The optimal strategy for 2026's market in locations where yield supports the carry cost (mortgage or opportunity cost of equity). Requires a property management infrastructure.</p>

<h2>Current High-Conviction Opportunities (March 2026)</h2>
<p><em>Note: Specific unit availability and pricing are subject to real-time change. Contact Vikraant for current allocation status and private pricing.</em></p>

<table class="roi-table">
<tr><th>Location</th><th>Type</th><th>Starting Price</th><th>Payment Plan</th><th>ROI Projection</th><th>Completion</th></tr>
<tr><td>Dubai Creek Harbour</td><td>1BR Apartment</td><td>AED 950K</td><td>60/40</td><td>8–12% yield / 25–35% cap growth</td><td>Q4 2027</td></tr>
<tr><td>Dubai Hills Estate (New Phase)</td><td>3BR Townhouse</td><td>AED 2.4M</td><td>80/20 PHH</td><td>6–8% yield / 30–40% cap growth</td><td>Q2 2027</td></tr>
<tr><td>Sobha Hartland II</td><td>2BR Apartment</td><td>AED 1.8M</td><td>60/40</td><td>7–9% yield / 20–30% cap growth</td><td>Q3 2026</td></tr>
<tr><td>MBR City (Meydan)</td><td>4BR Villa</td><td>AED 4.8M</td><td>70/30</td><td>4–5% yield / 35–50% cap growth</td><td>Q1 2028</td></tr>
<tr><td>JVC (Boutique Developer)</td><td>Studio / 1BR</td><td>AED 420K</td><td>1% Monthly PHH</td><td>10–13% yield / 15–20% cap growth</td><td>Q3 2026</td></tr>
</table>

<div class="data-callout"><p><strong>PHH = Post-Handover Payment Plan.</strong> These figures are indicative projections based on current market conditions and comparable historical performance. They are not guaranteed returns. Market conditions can and do change. All investments carry risk.</p></div>

<h2>The Advisor's Mandate</h2>
<p>Every off-plan deal presented through this advisory has been evaluated against all five criteria above. Projects that fail on developer track record, location demand fundamentals, entry pricing logic, or exit liquidity are not presented — regardless of commission structure or developer relationship pressure.</p>
<p>The best off-plan deals in Dubai in 2026 are not on any public portal. They are in advisory networks. The question is whether you are inside or outside that network when the pre-launch allocation opens.</p>

<div class="cta-block">
<h3>Request Full Deal Breakdown via WhatsApp</h3>
<p>Current inventory, exact payment plan terms, and independent ROI modelling — for qualified investors only. No public availability.</p>
<a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Request Full Deal Breakdown via WhatsApp →</span></a>
</div>

<h2>Frequently Asked Questions</h2>
<div class="faq-item"><div class="faq-q">Is off-plan property safe in Dubai?</div><div class="faq-a">Off-plan property in Dubai is regulated by RERA, which requires developers to hold buyer funds in escrow accounts that can only be released at verified construction milestones. This substantially reduces developer fraud risk. Completion risk (delays) remains. Mitigate it by selecting developers with proven track records.</div></div>
<div class="faq-item"><div class="faq-q">What is the best off-plan area in Dubai in 2026?</div><div class="faq-a">Creek Harbour, Dubai Hills (new phases), Sobha Hartland II, and MBR City (Meydan) offer the strongest combination of developer credibility, location fundamentals, and entry pricing in 2026. Each suits different capital objectives and budget levels.</div></div>
<div class="faq-item"><div class="faq-q">Can I sell an off-plan property before completion?</div><div class="faq-a">Yes. This is called a pre-handover transfer or SPA assignment. After 30–40% of the purchase price is paid (developer-dependent), you can sell your SPA to another buyer. This is the basis of the "flip" strategy and how many investors crystallise off-plan capital gains without taking full handover.</div></div>
<div class="faq-item"><div class="faq-q">What is a good ROI for off-plan property in Dubai?</div><div class="faq-a">For a strong off-plan deal in 2026: 20–40% total return to completion (capital appreciation), with an additional 6–10% annual yield post-handover if held for rental. Return on equity with leveraged payment plans can be multiples of total price appreciation. All projections are subject to market conditions.</div></div>
`
  },
  a4: {
    meta: 'Luxury Strategy · Capital Preservation · V Capital Intelligence',
    content: `
<h1>Capital Preservation Through Dubai Trophy Assets</h1>
<div class="article-meta">Luxury Investment Strategy · V Capital · 2026</div>
<p>Capital preservation is the most underappreciated objective in real estate investment. Every investor talks about returns. The ones who sustain wealth across decades start from a different question: <em>how do I ensure this asset is worth at least as much in ten years as it is today?</em></p>
<p>In Dubai, the answer leads consistently to a small number of addresses: Palm Jumeirah. Emirates Hills. Palm Jebel Ali. The Oasis. These are not simply expensive properties — they are structurally engineered capital stores, protected by permanent supply constraints, globally recognised addresses, and buyer pools that transcend any single economic cycle.</p>
<h2>What Makes a Trophy Asset?</h2>
<p>A trophy asset has three non-negotiable characteristics: <strong>permanent supply constraint</strong> (no new Palm fronds will ever exist); <strong>global address recognition</strong> (legible to wealthy buyers worldwide without context); and a <strong>structurally deep buyer pool</strong> that spans Europe, Asia, Gulf, and increasingly Africa. These three properties in combination create an asset that holds value through cycles — not because of sentiment, but because the structural conditions for demand permanence are built into the asset itself.</p>
<h2>The UAE Tax Advantage</h2>
<div class="data-callout"><p><strong>Critical Context:</strong> No capital gains tax. No inheritance tax. No annual property tax. A Palm Jebel Ali villa that appreciates from AED 20M to AED 40M delivers AED 20M of net capital growth to the investor. The equivalent appreciation on a UK property would face CGT of 28% — leaving AED 14.4M net. The effective yield advantage of Dubai trophy assets over comparable European assets is 30–40% on any appreciation quantum.</p></div>
<h2>Historical Performance</h2>
<p>Palm Jumeirah frond villas launched at AED 2–5M in 2001. By 2025, comparable units transact at AED 18–55M. Emirates Hills mansions that were AED 8–12M in 2010 now command AED 25–200M+. The growth is not linear — there are plateaus and modest corrections — but the direction over any five-year period has been consistently positive. And in a zero-tax jurisdiction, every dirham of appreciation belongs to the investor.</p>
<div class="cta-block"><h3>Trophy Asset Advisory</h3><p>V Capital curates access to Palm Jumeirah, Palm Jebel Ali, Emirates Hills, and Jumeirah Bay Island for qualified investors with AED 10M+ mandates.</p><a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Connect with V Capital →</span></a></div>
`
  },
  a5: {
    meta: 'Hotspot Intelligence · Palm Jebel Ali · V Capital',
    content: `
<h1>Why Palm Jebel Ali Could Become Dubai's Next Ultra-Luxury Wealth Corridor</h1>
<div class="article-meta">Hotspot Intelligence · V Capital · 2026</div>
<p>The argument for Palm Jebel Ali as Dubai's next ultra-luxury wealth corridor is not speculative. It is historical: every major Dubai waterfront development that Nakheel has anchored with government infrastructure has appreciated beyond its initial pricing assumptions. The mechanics at Palm Jebel Ali are structurally superior to any previous waterfront release.</p>
<h2>The Scarcity Calculation</h2>
<p>Palm Jebel Ali is larger than Palm Jumeirah — yet will house fewer than 1,200 villas. This is a design decision. Every villa will have water frontage superior to comparable Palm Jumeirah plots, yet is currently priced at a discount. That pricing anomaly has a time limit.</p>
<div class="data-callout"><p><strong>The Palm Jumeirah Comparison:</strong> Garden homes on Palm Jumeirah transact at AED 18–28M. Comparable Palm Jebel Ali frond villas launched at AED 20M+. The pricing parity — despite superior frond geometry and newer infrastructure — is the anomaly. History suggests this gap closes within 5 years of handover.</p></div>
<h2>Why the Ultra-Wealthy Are Buying</h2>
<ul><li><strong>Global address recognition</strong> — Palm Jebel Ali will be globally identifiable within a decade, as Palm Jumeirah is today.</li><li><strong>Zero-tax advantage</strong> — No CGT, no inheritance tax, no annual property tax. AED 2M+ qualifies for UAE Golden Visa.</li><li><strong>Government infrastructure guarantee</strong> — Nakheel is government-owned. Infrastructure commitment is not subject to developer insolvency risk.</li><li><strong>Legacy family asset</strong> — Ultra-luxury real estate purchased with a generational lens. These assets are passed within families, not liquidated.</li></ul>
<div class="cta-block"><h3>Palm Jebel Ali Investment Brief</h3><p>V Capital has active Nakheel relationships. Qualified investors receive current pricing, payment structure, and exit scenario analysis.</p><a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Request Palm Jebel Ali Brief →</span></a></div>
`
  },
  a6: {
    meta: 'Branded Residences · Dubai Luxury Market · V Capital',
    content: `
<h1>The Rise of Branded Residences in Dubai: Why the Premium Is Justified</h1>
<div class="article-meta">Luxury Market Intelligence · V Capital · 2026</div>
<p>When Binghatti announced a residential tower branded by Mercedes-Benz, the initial reaction was scepticism. By the time the launch closed — every unit sold at a 2× premium to comparable non-branded towers in the same location — the scepticism had evaporated. Mercedes-Benz Places is now one of the defining transactions in Dubai's luxury residential market.</p>
<h2>The Data Behind the Premium</h2>
<p>Branded residences (W Hotels, The Address, Bulgari, Armani, Mercedes-Benz) trade at an average <strong>2.1× price premium</strong> over non-branded comparable assets in the same location. This premium has <em>widened</em>, not narrowed, as the branded market has matured. Three structural drivers:</p>
<ul><li><strong>Managed hospitality services</strong> — hotel concierge, housekeeping, and amenity infrastructure creates an STR premium: branded inventory commands 40–60% higher ADR than non-branded comparable at equivalent locations.</li><li><strong>Global brand recognition</strong> — A buyer in Singapore or London knows what a W Residences represents. This reduces buyer friction at resale and expands the international pool.</li><li><strong>Artificial supply constraint</strong> — Brand partnerships are limited by the brands' own positioning. A Bugatti tower cannot have 5,000 units without diluting the Bugatti brand. Supply is permanently constrained in a way that commodity residential cannot replicate.</li></ul>
<div class="data-callout"><p><strong>V Capital View:</strong> Branded residences are the most compelling convergence of trophy asset mechanics, yield potential, and capital appreciation currently available in Dubai. At the right entry price with the right brand partner, the risk-return profile is exceptional.</p></div>
<div class="cta-block"><h3>Branded Residence Opportunities</h3><p>V Capital has current access to branded residence allocations across Downtown Dubai, Dubai Marina, and Palm Jumeirah.</p><a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Request Branded Residence Brief →</span></a></div>
`
  },
  hs1: {
    meta: 'Capital Preservation Hotspot · Palm Jebel Ali · V Capital',
    content: `
<h1>Palm Jebel Ali: Capital Preservation Intelligence</h1>
<div class="article-meta">Private Wealth Intelligence · V Capital · 2026</div>
<p>Palm Jebel Ali represents Dubai's most significant ultra-luxury land release since Palm Jumeirah. Fewer than 1,200 frond villas. 16 fronds. Government-backed Nakheel infrastructure. No further supply possible. The scarcity mechanics are permanently built in — and they are superior, in land geometry and infrastructure quality, to the original Palm Jumeirah.</p>
<h2>Historical Context</h2>
<p>Palm Jumeirah frond villas launched at AED 2–5M in 2001. By 2025, they transact at AED 18–55M. The 10x+ appreciation over 24 years was not speculative — it was the logical consequence of finite supply meeting growing global UHNWI demand for a recognised address. Palm Jebel Ali is priced today at a discount to current Palm Jumeirah rates, despite being a newer, larger, and arguably superior product. That discount has a limited duration.</p>
<h2>The Infrastructure Investment Thesis</h2>
<p>Confirmed infrastructure commitments not yet priced into off-plan valuations: marina and yacht club, five-star resort partnerships, retail destination planning, and direct connectivity to the Jebel Ali Free Zone — Dubai's industrial and logistics hub. Each milestone creates a re-pricing event, exactly as each Palm Jumeirah milestone did between 2006 and 2018.</p>
<div class="data-callout"><p><strong>V Capital View:</strong> Palm Jebel Ali is a 7–12 year capital preservation vehicle with asymmetric upside. The risk of overpaying at today's entry pricing is low relative to the risk of waiting — as every purchaser of Palm Jumeirah frond villas below AED 10M between 2012 and 2018 now understands.</p></div>
<div class="cta-block"><h3>Request Palm Jebel Ali Private Brief</h3><p>V Capital has active Nakheel relationships. Qualified investors receive the current pricing matrix and detailed exit scenario analysis.</p><a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>WhatsApp Vikraant →</span></a></div>
`
  },
  hs2: {
    meta: 'Capital Preservation Hotspot · Palm Jumeirah · V Capital',
    content: `
<h1>Palm Jumeirah: Dubai's Permanent Capital Storage Vehicle</h1>
<div class="article-meta">Private Wealth Intelligence · V Capital · 2026</div>
<p>Palm Jumeirah is the only Dubai address that is simultaneously a globally recognised landmark, a finite-supply constrained asset, and a functioning luxury residential community at scale. These three properties in combination create structural conditions for permanent capital storage.</p>
<h2>Why Values Have Never Truly Corrected</h2>
<p>Palm Jumeirah experienced price softness in 2009 and 2016. But the correction was materially shallower than elsewhere, and recovery was faster. The reason: the global buyer pool that absorbs Palm Jumeirah supply does not disappear in a UAE correction. A European or Asian UHNWI purchasing a Palm frond villa as a legacy asset is a structural buyer, not a cyclical one.</p>
<h2>Current Market</h2>
<p>As of 2026: frond garden homes AED 18–38M, signature villas AED 55–80M+. Price-per-sqft for frond villas: up 28% year-on-year. Supply permanently constrained: fewer than 1,500 frond villas across all fronds, no new frond inventory ever possible. Rental: AED 800K–1.8M per year long-term; AED 150–350K/month peak STR.</p>
<div class="cta-block"><h3>Palm Jumeirah Advisory</h3><p>V Capital has access to off-market Palm Jumeirah mandates. Qualified investors receive an updated pricing matrix and available inventory briefing.</p><a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Connect with V Capital →</span></a></div>
`
  },
  hs3: {
    meta: 'Capital Preservation Hotspot · Emirates Hills · V Capital',
    content: `
<h1>Emirates Hills: The Mathematics of Absolute Scarcity</h1>
<div class="article-meta">Private Wealth Intelligence · V Capital · 2026</div>
<p>There are exactly 508 mansions in Emirates Hills. There will never be more. Fully built, fully gated, permanently closed to new development. This absolute supply constraint — combined with a globally recognised address and an exclusively ultra-HNWI buyer pool — creates one of the world's most reliable wealth preservation mechanics in a residential format.</p>
<h2>Global Benchmark</h2>
<p>Emirates Hills is benchmarked not against other Dubai communities, but against Bel Air (Los Angeles), The Peak (Hong Kong), and Bishops Avenue (London). This benchmarking reflects actual buyer demographics. When a technology billionaire or Gulf royal family member needs a primary residence in Dubai, Emirates Hills is the correct address. Supply is finite. Demand from this demographic is secular.</p>
<h2>Transaction Profile</h2>
<p>Recent transactions: AED 25M (smaller golf-facing plots) to AED 200M+ (signature lake-view mansions). Median transaction up 33% over 24 months. Turnover is very low — most owners are long-term holders. This genuine scarcity in the secondary market further supports pricing. Yields: 2–3% gross — this is not a yield investment. It is a capital preservation and intergenerational wealth transfer vehicle. Time horizon: 10+ years.</p>
<div class="cta-block"><h3>Emirates Hills Off-Market Advisory</h3><p>V Capital has access to off-market Emirates Hills mandates not publicly listed. Available exclusively to qualified clients with appropriate investment horizons.</p><a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Request Emirates Hills Brief →</span></a></div>
`
  },
  hs4: {
    meta: 'Capital Preservation Hotspot · The Oasis · Emaar · V Capital',
    content: `
<h1>The Oasis by Emaar: Generational Capital in Dubai's Newest Trophy Community</h1>
<div class="article-meta">Private Wealth Intelligence · V Capital · 2026</div>
<p>The Oasis is Emaar's most ambitious community project — 7,000 acres of luxury plots and villas built around one of the world's largest crystal lagoon systems. For investors who cannot access Palm Jebel Ali at current pricing, The Oasis represents the equivalent structural opportunity at the community villa level: Emaar brand guarantee, master-planned scarcity, and genuine long-term demand infrastructure.</p>
<h2>Why Emaar Brand Matters</h2>
<p>Emaar's delivery record — zero failed completions across 25 years and 100,000+ delivered units — functions as a warranty. For investors accustomed to the uncertainty of mid-tier developer off-plan risk, The Oasis offers the capital appreciation potential of an emerging luxury community with the delivery certainty of the UAE's most trusted developer.</p>
<div class="data-callout"><p><strong>Entry Window:</strong> Current off-plan pricing for The Oasis villas represents 20–30% below the anticipated resale value at handover, based on comparable Emaar community performance at Beach Vista, Dubai Hills, and Creek Harbour. Entry now captures the Emaar brand premium before it is fully priced in.</p></div>
<div class="cta-block"><h3>The Oasis Investment Brief</h3><p>V Capital has direct access to Emaar The Oasis allocations. Request current availability and payment structure.</p><a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Request Oasis Brief →</span></a></div>
`
  },
  hs5: {
    meta: 'Capital Preservation Hotspot · Grand Polo Club · Dubai Holding · V Capital',
    content: `
<h1>Grand Polo Club & Resort: Dubai's Most Exclusive Lifestyle Community</h1>
<div class="article-meta">Private Wealth Intelligence · V Capital · 2026</div>
<p>Grand Polo Club & Resort is Dubai Holding's most ambitious project — and potentially Dubai's most exclusive residential address when completed. Anchored by international polo fields, an equestrian centre, and resort-grade amenities, it targets a buyer for whom sport, lifestyle, and trophy real estate intersect.</p>
<h2>A Globally Unique Asset Class</h2>
<p>Polo communities of this calibre are rare globally — comparable: Sotogrande (Spain), Hurlingham (Argentina), Rutland (UK). Dubai's version adds UAE's political stability, zero-tax advantage, and strategic global connectivity. The Grand Polo Club will function as both a premier lifestyle address and a globally marketable investment asset.</p>
<h2>Investment Profile</h2>
<p>Grand Polo Club is a long-term hold (10+ years) for a client who values lifestyle alongside capital preservation. Dubai Holding's government backing eliminates project risk. Liquidity is more specialised than Palm Jumeirah — the buyer pool is specifically equestrian-lifestyle UHNWI — which is both a risk (thinner market) and an advantage (motivated buyers willing to pay a premium). Best suited for clients with existing UAE property exposure seeking a genuinely unique allocation.</p>
<div class="cta-block"><h3>Grand Polo Club Private Advisory</h3><p>V Capital has early access to Dubai Holding's Grand Polo Club allocations. Available to qualified clients with 10+ year investment horizons.</p><a href="https://wa.me/971555540762?text=Hi%20Vikraant%2C%20I%27d%20like%20to%20explore%20investment%20opportunities%20with%20V%20Capital." target="_blank" class="btn-primary"><span>Request Private Briefing →</span></a></div>
`
  },
  a7: {
    meta: 'Market Analysis · 2,800 words · May 2026 · Vikraant K Parcha',
    content: `
<h1>How Rising Raw Material Costs Are Reshaping Dubai Real Estate in 2026</h1>
<div class="article-meta">Market Analysis · May 2026 · By Vikraant K Parcha, V Capital</div>

<p class="article-lead">Construction material costs in the UAE have risen 22–38% since 2021. Far from dampening the Dubai real estate market, this structural shift is accelerating a flight to quality — and creating one of the most asymmetric investment opportunities in a decade for investors who understand the mechanics.</p>

<h2>The Numbers: What Has Increased and By How Much</h2>
<p>Between 2021 and Q1 2026, core construction material costs in the UAE have risen materially across every category. <strong>Structural steel</strong> is up 31% — driven by global supply disruptions, Red Sea shipping constraints, and sustained demand from UAE government infrastructure programs. <strong>Cement and concrete</strong> have increased 18–24%, partly due to energy cost pass-through from the Russia-Ukraine disruption and partly from domestic demand pressure driven by the UAE's AED 120B+ infrastructure pipeline. <strong>Aluminium and glass</strong> — critical for Dubai's tower construction — are up 28%. Premium finishes, marble, and branded hardware specified in ultra-luxury projects have risen 35–42%.</p>

<p>The aggregate effect: the cost to construct a comparable building in Dubai today is 22–28% higher than it was in 2021. For branded and ultra-luxury developments with premium material specifications, the increase is closer to 35–40%.</p>

<h2>Why This Is Structurally Bullish for Dubai Property Values</h2>
<p>Rising construction costs do not damage property values in a market with structural demand excess. They do something more powerful for existing owners: they build a permanent floor under replacement cost that makes existing inventory more valuable by comparison.</p>

<p>Here is the logic. A developer completing a Palm Jebel Ali frond villa in 2026 is doing so at a construction cost that is 35% higher than an equivalent project completed in 2020. The developer must price the completed unit to recover that cost and generate a return. This forces asking prices higher. When asking prices on new completions rise, the resale value of existing comparable inventory is pulled upward — because buyers compare new vs existing and price the gap.</p>

<p>The result: owners of already-built trophy inventory — Palm Jumeirah frond villas, Emirates Hills mansions, early-phase Downtown branded residences — are sitting on an asset whose replacement cost has risen materially while their acquisition cost has not. This is a structural appreciation driver that is independent of demand sentiment.</p>

<h2>The Supply Constraint Amplifier</h2>
<p>Dubai's ultra-luxury and trophy market is uniquely positioned to benefit from the cost escalation because supply is already permanently constrained. There are no new Palm Jumeirah fronds. Emirates Hills has 508 mansions and no land for more. The finite supply of these addresses means that rising construction costs cannot be resolved by simply building more — the land does not exist.</p>

<p>In markets where supply can respond to cost increases, developers simply delay launches until the economics recover. In Palm Jebel Ali and Palm Jumeirah, the product is finite. Every cost-driven reduction in feasibility for alternative trophy product increases the relative scarcity value of the existing stock.</p>

<h2>Which Developers Are Absorbing Costs — and Which Are Passing Them Through</h2>
<p>Not all developers are responding to material cost inflation in the same way. Understanding which developers absorb cost increases (protecting buyers) versus which pass them through (reducing buyer returns) is critical due diligence for 2026 off-plan investment.</p>

<p><strong>Emaar</strong> has absorbed a significant portion of cost escalation through vertically integrated procurement and long-term material contracts established before the 2021 spike. This is why Emaar's pricing remains competitive despite the quality level — they locked supply chains early. This is a structural advantage of scale that smaller developers cannot replicate.</p>

<p><strong>Sobha Realty</strong> is the clearest beneficiary of this dynamic. Sobha manufactures its own tiles, finishes, and building materials — completely insulating the buyer from third-party material cost pass-through. When comparable non-Sobha developers raise prices 28% to reflect steel and cement costs, Sobha's vertically integrated structure means buyers see a fraction of that increase. The result: Sobha's resale premium (already 12–18% above comparable non-Sobha product) widens further as the market adjusts.</p>

<p><strong>Smaller private developers</strong> have limited negotiating power with material suppliers and are fully exposed to spot pricing. Many have delayed launches, reduced floor plate counts, or substituted material specifications downward — all of which reduce the quality of the delivered product and, therefore, the resale value and tenant premium. Buyers choosing off-plan from smaller developers should carefully scrutinise the construction specification and compare it against 2021 launches — substitutions are common and often undisclosed.</p>

<h2>The Branded Residence Premium Is Widening</h2>
<p>Branded residences — Bulgari, W Hotels, Mercedes-Benz Places, Armani — are seeing their structural premium over non-branded comparable assets widen as a direct result of material cost inflation. The mechanism: branded developments must meet the brand partner's construction and finish specifications, which are non-negotiable. A Bulgari residence cannot substitute Turkish marble for Italian Calacatta. A W Residences tower cannot use generic aluminium curtain walling. The material specification is contractually locked.</p>

<p>This means branded developers absorb the full market-rate material cost increase — and must price accordingly. The gap between branded and non-branded asking prices is therefore growing. But crucially, the resale premium on branded product is also growing — because buyers understand that replacing the specification is impossible at the original price. The 2.1× branded residence premium measured in 2024 is now trending toward 2.3–2.5× in 2026 for the highest-specification products.</p>

<h2>What This Means for Your Investment Decision in 2026</h2>
<p>The practical implication for investors is a clear hierarchy of exposure to material cost risk:</p>

<p><strong>Lowest risk (cost already absorbed, value locked):</strong> Completed trophy inventory — Palm Jumeirah frond villas, Emirates Hills mansions, Downtown branded residences delivered pre-2024. These were built at 2020–2022 cost levels. Their resale value is rising because replacement cost has risen. You own an asset that is becoming relatively cheaper to replace impossible.</p>

<p><strong>Moderate risk (government-backed absorption):</strong> Nakheel off-plan (Palm Jebel Ali, Dubai Islands). Government-owned developers have access to procurement infrastructure and financing that insulates buyers from full cost pass-through. The delivery guarantee from a government entity eliminates the scenario where a developer pauses or abandons a project due to cost escalation — the most dangerous outcome in privately-developed off-plan.</p>

<p><strong>Higher risk (full exposure):</strong> Off-plan from smaller private developers who have not locked material costs and have limited balance sheet to absorb escalation. These projects carry a real risk of specification downgrade, timeline extension, or — in extreme cases — launch cancellation. The ROI projections at launch do not typically account for this risk.</p>

<h2>The V Capital Framework for Material-Cost-Aware Investment</h2>
<p>V Capital assesses every off-plan opportunity against construction cost exposure as a standard underwriting criterion. Key questions: Has the developer locked material contracts? What is the construction stage at launch — foundation-stage developers have already absorbed the primary cost risk, while pre-construction launches have full exposure to 2026–2028 commodity pricing. Does the developer have a track record of on-specification delivery, or is there evidence of material substitution on past projects?</p>

<p>The current environment is not a reason to avoid off-plan investment — it is a reason to be more selective about which developer you back and which completed inventory represents compelling value relative to its rising replacement cost.</p>

<p>For clients currently evaluating Palm Jebel Ali, Dubai Islands, or Emaar's The Oasis, the material cost dynamic is one of the clearest structural arguments for entry now rather than waiting for "better pricing" — because the trajectory of replacement cost makes waiting mathematically expensive.</p>

<p><em>Vikraant K Parcha — V Capital, Dubai. For a personalised analysis of how the material cost dynamic affects a specific opportunity you are evaluating, contact V Capital directly.</em></p>
`
  },  a10: {
    meta: 'Market Intelligence · June 2026 · V Capital Intelligence Desk',
    content: `
<h1>Emaar Unveils AED 200 Billion 20-Minute City: Full Investor Analysis</h1>
<div class="article-meta-bar" style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.5rem;letter-spacing:.1em;color:rgba(245,242,236,.3);text-transform:uppercase;margin-bottom:2rem;padding-bottom:1rem;border-bottom:1px solid rgba(255,255,255,.06)">
  Market Intelligence &nbsp;·&nbsp; June 2026 &nbsp;·&nbsp; V Capital Intelligence Desk &nbsp;·&nbsp; 5 min read
</div>

<div style="background:rgba(201,168,71,.04);border:1px solid rgba(201,168,71,.15);padding:1.25rem 1.5rem;margin-bottom:2rem;border-left:3px solid #C9A847">
  <div style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.42rem;letter-spacing:.16em;text-transform:uppercase;color:rgba(201,168,71,.6);margin-bottom:.5rem">Headline</div>
  <p style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.15rem;font-weight:300;color:rgba(245,242,236,.85);line-height:1.55;margin:0">150,000 Residents. AED 200 Billion Investment. One New Urban Landmark.</p>
</div>

<h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.35rem;font-weight:300;color:#F5F2EC;border-bottom:1px solid rgba(255,255,255,.07);padding-bottom:.75rem;margin-bottom:1.25rem">01 &nbsp;— Headline Insight</h2>
<p>Dubai's largest developer, Emaar Properties, has announced a landmark <strong>AED 200 Billion master-planned city</strong> designed around the globally recognised 20-Minute City concept — an urban planning framework where residents can access all essential services within a 20-minute walk, cycle, or short transit journey.</p>
<p>The development is expected to accommodate approximately <strong>150,000 residents</strong> and create one of the most significant urban expansion zones in Dubai's next growth cycle. The project represents a structural step-change in Dubai's residential geography rather than an incremental addition to the existing supply pipeline.</p>

<h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.35rem;font-weight:300;color:#F5F2EC;border-bottom:1px solid rgba(255,255,255,.07);padding-bottom:.75rem;margin-bottom:1.25rem;margin-top:2rem">02 &nbsp;— Key Development Metrics</h2>
<div style="display:grid;grid-template-columns:1fr 1fr;gap:1px;background:rgba(255,255,255,.06);margin-bottom:1.5rem">
  <div style="background:#09090c;padding:1.125rem 1.25rem"><div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.5rem;color:#C9A847;line-height:1">AED 200B</div><div style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(245,242,236,.28);margin-top:.3rem">Total Development Value</div></div>
  <div style="background:#09090c;padding:1.125rem 1.25rem"><div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.5rem;color:#C9A847;line-height:1">150,000</div><div style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(245,242,236,.28);margin-top:.3rem">Future Residents</div></div>
  <div style="background:#09090c;padding:1.125rem 1.25rem"><div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.5rem;color:#C9A847;line-height:1">4.5M Sq.m</div><div style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(245,242,236,.28);margin-top:.3rem">Built-Up Area</div></div>
  <div style="background:#09090c;padding:1.125rem 1.25rem"><div style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.5rem;color:#C9A847;line-height:1">5</div><div style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.1em;text-transform:uppercase;color:rgba(245,242,236,.28);margin-top:.3rem">Integrated Urban Districts</div></div>
</div>
<div style="display:flex;flex-wrap:wrap;gap:.4rem;margin-bottom:1.5rem">
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Metro &amp; Smart Mobility</span>
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Green Corridors</span>
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Cycling Networks</span>
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Lagoons &amp; Parks</span>
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Lifestyle Destinations</span>
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Premium Villa Enclaves</span>
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Mixed-Use Residential</span>
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Commercial &amp; Hospitality</span>
  <span style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.07em;padding:4px 10px;border:1px solid rgba(255,255,255,.08);color:rgba(245,242,236,.38)">Retail Components</span>
</div>

<h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.35rem;font-weight:300;color:#F5F2EC;border-bottom:1px solid rgba(255,255,255,.07);padding-bottom:.75rem;margin-bottom:1.25rem;margin-top:2rem">03 &nbsp;— Why This Matters</h2>
<p>Major master-planned communities have historically generated long-term capital appreciation due to infrastructure-led growth, population inflows, and increasing demand from end-users and investors. The trajectory of Palm Jumeirah, Emirates Hills, and Dubai Hills Estate — all Emaar-anchored or Emaar-adjacent developments — demonstrates the developer's ability to create sustained value ecosystems rather than simple residential blocks.</p>
<p>This project reinforces Dubai's commitment to the <strong>Dubai 2040 Urban Master Plan</strong> while expanding future residential supply in a highly structured and sustainable format. The 20-Minute City framework is increasingly cited by global urban planners as the gold standard for post-pandemic urban development, with successful implementations in Paris, Melbourne, and Singapore influencing the approach.</p>
<p>For investors, the key dynamic is timing. Master-planned communities of this scale typically move through distinct phases: <em>announcement premium, construction lag, handover catalyst, maturity appreciation</em>. Early-stage positioning — particularly in well-located product within the development — has historically produced the highest compound returns across comparable schemes.</p>

<h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.35rem;font-weight:300;color:#F5F2EC;border-bottom:1px solid rgba(255,255,255,.07);padding-bottom:.75rem;margin-bottom:1.25rem;margin-top:2rem">04 &nbsp;— V Capital Market Intelligence</h2>
<div style="background:rgba(255,255,255,.03);border-left:2px solid rgba(201,168,71,.35);padding:1.25rem 1.5rem;margin-bottom:1.5rem;font-family:'Cormorant Garamond',Georgia,serif;font-size:1.05rem;font-style:italic;color:rgba(245,242,236,.6);line-height:1.65">
  "Large-scale master developments often become future investment ecosystems rather than standalone communities. The combination of infrastructure, lifestyle integration, and long-term population growth can create sustained demand over multiple market cycles. The Emaar brand premium, combined with a 20-Minute City framework and AED 200B commitment, positions this development as a potentially defining addition to Dubai's residential investment landscape."
  <div style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.42rem;letter-spacing:.12em;text-transform:uppercase;color:rgba(201,168,71,.5);margin-top:.875rem;font-style:normal">— V Capital Intelligence Desk, June 2026</div>
</div>

<h2 style="font-family:'Cormorant Garamond',Georgia,serif;font-size:1.35rem;font-weight:300;color:#F5F2EC;border-bottom:1px solid rgba(255,255,255,.07);padding-bottom:.75rem;margin-bottom:1.25rem;margin-top:2rem">05 &nbsp;— Investor Takeaway</h2>
<div style="display:flex;flex-direction:column;gap:.6rem;margin-bottom:2rem">
  <div style="display:flex;align-items:flex-start;gap:.75rem;font-size:.85rem;color:rgba(245,242,236,.55);line-height:1.6"><span style="color:#C9A847;flex-shrink:0;font-weight:bold;margin-top:.05rem">&#10003;</span><span style="padding-left:.75rem">Long-term growth corridor with infrastructure-led appreciation potential</span></div>
  <div style="display:flex;align-items:flex-start;gap:.75rem;font-size:.85rem;color:rgba(245,242,236,.55);line-height:1.6"><span style="color:#C9A847;flex-shrink:0;font-weight:bold;margin-top:.05rem">&#10003;</span><span style="padding-left:.75rem">Institutional-grade master development anchored by Emaar — Dubai&#39;s largest developer</span></div>
  <div style="display:flex;align-items:flex-start;gap:.75rem;font-size:.85rem;color:rgba(245,242,236,.55);line-height:1.6"><span style="color:#C9A847;flex-shrink:0;font-weight:bold;margin-top:.05rem">&#10003;</span><span style="padding-left:.75rem">Strong alignment with Dubai 2040 Urban Master Plan and sustainable urbanism objectives</span></div>
  <div style="display:flex;align-items:flex-start;gap:.75rem;font-size:.85rem;color:rgba(245,242,236,.55);line-height:1.6"><span style="color:#C9A847;flex-shrink:0;font-weight:bold;margin-top:.05rem">&#10003;</span><span style="padding-left:.75rem">Population inflow driver creating sustained multi-cycle demand</span></div>
  <div style="display:flex;align-items:flex-start;gap:.75rem;font-size:.85rem;color:rgba(245,242,236,.55);line-height:1.6"><span style="color:#C9A847;flex-shrink:0;font-weight:bold;margin-top:.05rem">&#10003;</span><span style="padding-left:.75rem">Premium Villa and Mansion Enclaves positioned for trophy asset appreciation</span></div>
  <div style="display:flex;align-items:flex-start;gap:.75rem;font-size:.85rem;color:rgba(245,242,236,.55);line-height:1.6"><span style="color:#C9A847;flex-shrink:0;font-weight:bold;margin-top:.05rem">&#10003;</span><span style="padding-left:.75rem">Mixed-use integration reducing vacancy risk and improving yield stability</span></div>
  <div style="display:flex;align-items:flex-start;gap:.75rem;font-size:.85rem;color:rgba(245,242,236,.55);line-height:1.6"><span style="color:#C9A847;flex-shrink:0;font-weight:bold;margin-top:.05rem">&#10003;</span><span style="padding-left:.75rem">Potential future investment hotspot — early-stage due diligence opportunity</span></div>
</div>

<div style="margin-top:2rem;padding-top:1.25rem;border-top:1px solid rgba(255,255,255,.06)">
  <div style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.4rem;letter-spacing:.14em;text-transform:uppercase;color:rgba(245,242,236,.2);margin-bottom:.4rem">Sources</div>
  <p style="font-family:var(--font-mono,'DM Mono',monospace);font-size:.46rem;letter-spacing:.05em;color:rgba(245,242,236,.2);line-height:1.9;margin:0">
    Emaar Properties Official Announcement (June 2026) &nbsp;·&nbsp; Gulf News &nbsp;·&nbsp; Khaleej Times &nbsp;·&nbsp; Reuters &nbsp;·&nbsp; Bloomberg Real Assets &nbsp;·&nbsp; Dubai Land Department &nbsp;·&nbsp; Dubai 2040 Urban Master Plan (Government of Dubai)
  </p>
</div>
`
  },
};

function openArticle(id) {
  const art = articles[id];
  document.getElementById('article-body').innerHTML = `<div class="article-full">${art.content}</div>`;
  (document.getElementById('article-modal')||{}).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeArticle() {
  (document.getElementById('article-modal')||{}).classList.remove('open');
  document.body.style.overflow = '';
}

// ── LEGAL CONTENT ──
const legalContent = {
  privacy: `
<h1>Privacy Policy</h1>
<div class="legal-date">EFFECTIVE DATE: 1 January 2026 · LAST UPDATED: 1 March 2026</div>
<h2>1. Introduction</h2>
<p>V Capital and its principal advisor Vikraant K Parcha ("we," "us," "our", "V Capital") is committed to protecting the personal information of visitors to this website and clients of our advisory services. This Privacy Policy explains how we collect, use, store, and share your personal data in accordance with applicable data protection laws, including GDPR where applicable to EU/EEA residents.</p>
<h2>2. Information We Collect</h2>
<p>We collect personal information you provide voluntarily through forms on this website, including:</p>
<ul><li>Full name and email address</li><li>WhatsApp/telephone number</li><li>Investment budget range and investment goals</li><li>Communication history and enquiry details</li></ul>
<p>We also collect technical data automatically, including IP addresses, browser type, pages visited, and time on site, via Google Analytics and Meta Pixel (subject to cookie consent).</p>
<h2>3. How We Use Your Information</h2>
<p>Your personal data is used to: respond to investment enquiries; deliver requested research reports and market briefs; provide personalised advisory services; improve website performance; and comply with legal obligations. We do not sell your personal data to third parties.</p>
<h2>4. Legal Basis for Processing</h2>
<p>We process personal data under the following legal bases: (a) your explicit consent, where obtained via form submission consent checkboxes; (b) legitimate interests in providing advisory services and responding to enquiries; (c) compliance with legal obligations where applicable.</p>
<h2>5. Cookie Usage</h2>
<p>This website uses cookies for: essential functionality (always active); analytics (Google Analytics — requires consent); and marketing tracking (Meta Pixel — requires consent). You may accept, reject, or customise cookie preferences at any time via the cookie consent banner.</p>
<h2>6. Data Sharing</h2>
<p>We share data only with: Google (Analytics); Meta (Pixel, where consented); and email service providers used for delivering reports. All processors are GDPR-compliant where applicable.</p>
<h2>7. Data Retention</h2>
<p>Enquiry data is retained for 7 years for business record purposes. Analytics data is retained per Google's standard policy (26 months). You may request deletion at any time.</p>
<h2>8. Your Rights</h2>
<p>You have the right to: access your personal data; correct inaccurate data; request deletion ("right to be forgotten"); object to processing; withdraw consent at any time; and lodge a complaint with your relevant data protection authority.</p>
<h2>9. Contact</h2>
<p>For privacy-related requests: privacy@vcapital.ae. Response within 30 days.</p>
<br><button onclick="closeLegal()" class="btn-primary" style="cursor:pointer;"><span>Close</span></button>
`,
  terms: `
<h1>Terms of Service</h1>
<div class="legal-date">EFFECTIVE DATE: 1 January 2026</div>
<h2>1. Nature of Services</h2>
<p>Vikraant K Parcha provides real estate investment advisory services. Information provided on this website, including market analysis, ROI projections, and investment insights, is for informational purposes only and does not constitute regulated financial advice. Past performance of real estate assets is not a guarantee of future results.</p>
<h2>2. No Financial Advice</h2>
<p>Content on this website, including articles, market outlooks, and investment opportunity summaries, does not constitute financial, tax, or legal advice. You should consult appropriate professional advisors before making any investment decision. All real estate investments carry risk, including the risk of partial or total capital loss.</p>
<h2>3. No Guarantee of Returns</h2>
<p>Any ROI estimates, yield projections, or capital appreciation forecasts presented on this website are illustrative projections based on historical data and current market conditions. They are not guarantees of future performance. Market conditions can and do change materially.</p>
<h2>4. Use of Website</h2>
<p>This website is intended for informational use by prospective investors. Unauthorised commercial use, reproduction of content, or scraping of data without written permission is prohibited.</p>
<h2>5. RERA Compliance</h2>
<p>All real estate transaction services provided through this advisory operate in compliance with applicable UAE Real Estate Regulatory Authority (RERA) regulations.</p>
<h2>6. Intellectual Property</h2>
<p>All content on this website, including articles, analysis, and brand assets, is the intellectual property of Vikraant K Parcha. Reproduction without attribution and written consent is prohibited.</p>
<h2>7. Governing Law</h2>
<p>These Terms are governed by the laws of the United Arab Emirates, with Dubai as the jurisdiction for dispute resolution.</p>
<h2>8. Contact</h2>
<p>Legal enquiries: legal@vcapital.ae</p>
<br><button onclick="closeLegal()" class="btn-primary" style="cursor:pointer;"><span>Close</span></button>
`
};

function openLegal(type) {
  document.getElementById('legal-body').innerHTML = legalContent[type];
  (document.getElementById('legal-modal')||{}).classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLegal() {
  (document.getElementById('legal-modal')||{}).classList.remove('open');
  document.body.style.overflow = '';
}

// ── FORMS ──
function submitLeadForm() {
  var name   = (document.getElementById('lead-name')  ||{}).value || '';
  var email  = (document.getElementById('lead-email') ||{}).value || '';
  var phone  = (document.getElementById('lead-phone') ||{}).value || '';
  var msg    = (document.getElementById('lead-message')||{}).value|| '';
  var budget = (document.getElementById('lead-budget') ||{}).value || '';
  var url   = 'https://script.google.com/macros/s/AKfycbyVX7dQUh3q0O2zLmOOEbOaVV0DK2CD6j2ZsW3ZAaJDL85fwS0x8n8mIeJB8KuNvQTY/exec';
  var payload = {
    name:name.trim(), email:email.trim(), phone:phone.trim(),
    message:msg.trim(), budget:budget, source:'lead-form',
    page:window.location.pathname||'/', ts:new Date().toISOString()
  };
  fetch(url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).catch(function(){});
  var qs=Object.keys(payload).map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(payload[k]||'');}).join('&');
  new Image().src=url+'?'+qs;
  var _lf=document.getElementById('lead-form-container');if(_lf)_lf.style.display='none';
  var _ls=document.getElementById('lead-success');if(_ls)_ls.classList.add('show');
}
function submitContactForm() {
  var name  = (document.getElementById('contact-name') ||{}).value  || '';
  var email = (document.getElementById('contact-email')||{}).value  || '';
  var phone = (document.getElementById('contact-phone')||{}).value  || '';
  var msg   = (document.getElementById('contact-message')||{}).value|| '';
  var url   = 'https://script.google.com/macros/s/AKfycbyVX7dQUh3q0O2zLmOOEbOaVV0DK2CD6j2ZsW3ZAaJDL85fwS0x8n8mIeJB8KuNvQTY/exec';
  var payload = {
    name:name.trim(), email:email.trim(), phone:phone.trim(),
    message:msg.trim(), source:'contact-form',
    page:window.location.pathname||'/', ts:new Date().toISOString()
  };
  fetch(url,{method:'POST',mode:'no-cors',headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)}).catch(function(){});
  var qs=Object.keys(payload).map(function(k){return encodeURIComponent(k)+'='+encodeURIComponent(payload[k]||'');}).join('&');
  new Image().src=url+'?'+qs;
  var _cf=document.getElementById('contact-form-container');if(_cf)_cf.style.display='none';
  var _cs=document.getElementById('contact-success');if(_cs)_cs.classList.add('show');
}
function submitExitPopup() { vcExitSubmit(); }

// ── FAQ TOGGLE ──
function toggleFaq(el) {
  el.classList.toggle('open');
}

function vcExitClose() {
  /* exit-popup removed */
}

// ── COOKIES ──
document.addEventListener('DOMContentLoaded', function() {
  var consent = localStorage.getItem('vc_cookie_consent');
  if(!consent) {
    setTimeout(function() {
      var b = document.getElementById('cookie-banner');
      if(b) b.classList.add('show');
    }, 3000);
  }
});
function acceptCookies() {
  localStorage.setItem('vc_cookie_consent','all');
  var b=document.getElementById('cookie-banner');
  if(b)b.classList.remove('show');
  // Analytics can now be activated here
}
function rejectCookies() {
  localStorage.setItem('vc_cookie_consent','essential');
  var b=document.getElementById('cookie-banner');
  if(b)b.classList.remove('show');
}
function showCookiePrefs() {
  alert('Cookie preferences panel — integrate with consent management platform (OneTrust, Cookiebot) in production for full GDPR compliance.');
  var _cb=document.getElementById('cookie-banner');if(_cb)_cb.classList.remove('show');
}

// ── INTEL TABS (decorative) ──
document.querySelectorAll('.intel-tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.intel-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});
document.querySelectorAll('.opp-tab, [data-opp-tab]').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.opp-tab').forEach(t => t.classList.remove('active'));
    tab.classList.add('active');
  });
});

// ── STAGGER REVEALS ──
document.querySelectorAll('.strategy-pillars .strategy-pillar, .pillar').forEach((el, i) => {
  el.style.transitionDelay = `${i * 80}ms`;
  el.classList.add('reveal');
  observer.observe(el);
});

/* ─────────────────────────────────────────── */

// Block 11: Capital flow tabs, zone toggles, interactive sections
// ── WHERE CAPITAL IS MOVING — TOGGLE ────────────────────────────────────
function toggleCF(id) {
  const panels = document.querySelectorAll('.cf-detail');
  const target = document.getElementById(id);
  panels.forEach(p => { if (p !== target) p.classList.remove('open'); });
  if (target) target.classList.toggle('open');
  if (target && target.classList.contains('open')) {
    setTimeout(() => target.scrollIntoView({behavior:'smooth',block:'nearest'}), 100);
  }
}
// ── ARTICLE CATEGORY FILTER ────────────────────────────────────────────────
function filterArticles(cat, btn) {
  document.querySelectorAll('.intel-tab').forEach(b => b.classList.remove('active'));
  if (btn) btn.classList.add('active');
  document.querySelectorAll('.article-card').forEach(card => {
    if (cat === 'all' || card.dataset.cat === cat) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}
// ── NAV SMOOTH SCROLL FOR NEW SECTIONS ─────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(a => {
  a.addEventListener('click', function(e) {
    const id = this.getAttribute('href').substring(1);
    const target = document.getElementById(id);
    if (target) { e.preventDefault(); target.scrollIntoView({behavior:'smooth'}); }
  });
});




// ══════════════════════════════════════════════════════════════════════════
// V CAPITAL INVESTMENT PLATFORM ENGINE v2
// ══════════════════════════════════════════════════════════════════════════

const VC = {
  SHEET_ID: localStorage.getItem('vc_sheet_id') || '',
  PER_PAGE: 9,
  currentPage: 1,
  activeFilter: 'all',
  activeSearch: '',
  activeSort: 'featured',
  allListings: [],
  filteredListings: [],
  isLive: false,
  WA_BASE: 'https://wa.me/971555540762?text=',
};

const SEED_LISTINGS = [
  { projectName:'Sobha City Abu Dhabi', location:'Abu Dhabi', propertyType:'Townhouses / Villas', unitSizes:'2,500 – 5,500 sq ft', startingPrice:'AED 4.95M', priceRange:'AED 4.95M – AED 18M+', paymentPlan:'60/40', estimatedROI:'7.2', status:'Hot Launch', developer:'Sobha Realty', strategicPositioning:'Integrated master-planned city aligned with Abu Dhabi 2030 expansion. Government-backed infrastructure underpins long-term capital case.', investorAngle:'Long-term capital appreciation (5–7 year hold). Abu Dhabi urban master plan is the structural demand driver.', description:'Sobha City Abu Dhabi is a landmark 1,000-acre integrated city development set against Abu Dhabi\'s rapid urban expansion. Offering premium townhouses and villas built to Sobha\'s industry-leading quality standard, this project represents a decade-long capital appreciation thesis anchored by government infrastructure commitments.', imageURL:'/images/deal-sobha-city-abudhabi.jpg', whatsAppMessage:'Hi Vikraant, I\'m interested in Sobha City Abu Dhabi. Please share the full deal breakdown.', featured:'Yes', featuredPriority:'1', roiScore:'82', priceSegment:'Luxury', autoSlug:'sobha-city-abu-dhabi', liveStatus:'Live' },
  { projectName:'Palm Jebel Ali', location:'Dubai Waterfront', propertyType:'Ultra Luxury Villas', unitSizes:'7,000 – 13,000 sq ft', startingPrice:'AED 20M+', priceRange:'AED 20M – AED 55M', paymentPlan:'20/80', estimatedROI:'9.5', status:'Hot Launch', developer:'Nakheel', strategicPositioning:'Ultra-prime waterfront revival project. Palm Jebel Ali Phase 2 redefines Dubai\'s luxury waterfront. Fewer than 1,200 villas across 16 fronds. Government-backed.', investorAngle:'Scarcity-driven appreciation + legacy family asset. Comparable Palm Jumeirah villas are up 60–80% in 36 months. Entry now captures the infrastructure premium before it is priced in.', description:'Palm Jebel Ali is Nakheel\'s most ambitious waterfront revival — larger than Palm Jumeirah with superior infrastructure, and positioned as Dubai\'s next ultra-prime address. With fewer than 1,200 villas across 16 fronds, the scarcity economics are structurally superior to any other waterfront product in the UAE. A once-in-a-decade entry.', imageURL:'/images/deal-palm-jebel-ali.jpg', whatsAppMessage:'Hi Vikraant, I want to discuss Palm Jebel Ali villas. Please send the investment brief.', featured:'Yes', featuredPriority:'2', roiScore:'95', priceSegment:'Ultra Luxury', autoSlug:'palm-jebel-ali', liveStatus:'Live' },
  { projectName:'Beyond – Maritime City', location:'Dubai Maritime City', propertyType:'Apartments', unitSizes:'750 – 2,000 sq ft', startingPrice:'AED 1.8M', priceRange:'AED 1.8M – AED 2.5M', paymentPlan:'40/60 Post-Handover', estimatedROI:'9.8', status:'Live', developer:'Beyond', strategicPositioning:'Waterfront apartments adjacent to DIFC and Business Bay. Maritime City is Dubai\'s most underdiscovered waterfront micro-market.', investorAngle:'High rental yield + mid-term capital ROI. Proximity to financial district drives premium tenancy.', description:'Beyond at Maritime City offers institutionally designed apartments on Dubai\'s most overlooked waterfront corridor — directly adjacent to the region\'s financial capital.', imageURL:'/images/deal-beyond-maritime-city.jpg', whatsAppMessage:'Hi Vikraant, I\'m interested in Beyond Maritime City. Please share full investment details.', featured:'Yes', featuredPriority:'3', roiScore:'88', priceSegment:'Mid', autoSlug:'beyond-maritime-city', liveStatus:'Live' },
  { projectName:'Dubai Islands', location:'Deira Waterfront', propertyType:'Apartments / Villas', unitSizes:'800 – 4,500 sq ft', startingPrice:'AED 2M+', priceRange:'AED 2M – AED 22M', paymentPlan:'50/50', estimatedROI:'10.2', status:'Hot Launch', developer:'Nakheel', strategicPositioning:'Tourism-driven coastal expansion. Dubai Islands is a five-island cluster with confirmed resort, retail, and hospitality master plan.', investorAngle:'Short-term rental upside. Tourism-anchored demand creates best-in-class STR economics.', description:'Dubai Islands (formerly Deira Islands) is Nakheel\'s waterfront city within a city — five islands with confirmed five-star hotel, resort, and retail pipelines.', imageURL:'/images/deal-dubai-islands.jpg', whatsAppMessage:'Hi Vikraant, I want to learn more about Dubai Islands. Please send the investment overview.', featured:'No', featuredPriority:'4', roiScore:'84', priceSegment:'Mid', autoSlug:'dubai-islands', liveStatus:'Live' },
  { projectName:'Damac Islands Phase 2', location:'Dubailand', propertyType:'Townhouses', unitSizes:'2,200 – 3,500 sq ft', startingPrice:'AED 2.2M+', priceRange:'AED 2.2M – AED 4.8M', paymentPlan:'65/35 PHH', estimatedROI:'8.4', status:'Live', developer:'Damac Properties', strategicPositioning:'Lifestyle water community in Dubailand. Phase 1 sold out in 48 hours.', investorAngle:'Flip + rental hybrid. Phase 1 buyers are sitting on 28–35% paper gains pre-handover.', description:'Damac Islands Phase 2 is the continuation of one of Dubai\'s most successful lifestyle community launches.', imageURL:'/images/deal-damac-islands.jpg', whatsAppMessage:'Hi Vikraant, I\'d like the Damac Islands Phase 2 investment breakdown.', featured:'No', featuredPriority:'5', roiScore:'79', priceSegment:'Mid', autoSlug:'damac-islands-phase-2', liveStatus:'Live' },
  { projectName:'Mercedes-Benz Places by Binghatti', location:'Downtown Dubai', propertyType:'Branded Residences', unitSizes:'1,800 – 6,000 sq ft', startingPrice:'AED 8.8M+', priceRange:'AED 8.8M – AED 30M', paymentPlan:'30/70', estimatedROI:'6.8', status:'Hot Launch', developer:'Binghatti', strategicPositioning:'Ultra-luxury branded tower anchored by the world\'s most recognized automotive brand. In the heart of Downtown Dubai.', investorAngle:'HNI global demand + prestige scarcity. Branded residences trade at a 2.1× structural premium over non-branded comparable assets.', description:'Mercedes-Benz Places by Binghatti is the most awaited branded residence launch in Dubai\'s recent history. The convergence of automotive luxury brand prestige, Binghatti\'s architectural identity, and Downtown Dubai\'s global address creates an asset class that cannot be replicated.', imageURL:'/images/deal-mercedes-benz-places.jpg', whatsAppMessage:'Hi Vikraant, I\'m interested in Mercedes-Benz Places by Binghatti. Please share the private brief.', featured:'Yes', featuredPriority:'1', roiScore:'91', priceSegment:'Luxury', autoSlug:'mercedes-benz-places-binghatti', liveStatus:'Live' },
  { projectName:'Sobha Skyparks', location:'Dubai', propertyType:'Apartments', unitSizes:'550 – 1,500 sq ft', startingPrice:'AED 1.3M+', priceRange:'AED 1.3M – AED 3.2M', paymentPlan:'60/40', estimatedROI:'8.9', status:'Live', developer:'Sobha Realty', strategicPositioning:'Green-integrated vertical living. Sobha brand premium commands 12–18% higher resale values vs comparable non-branded product.', investorAngle:'Rental yield + brand premium appreciation. Sobha delivery track record is the strongest in the market.', description:'Sobha Skyparks integrates expansive park and green corridor access into vertical apartment living — a design philosophy demonstrably commanding rental and resale premiums.', imageURL:'/images/deal-sobha-skyparks.jpg', whatsAppMessage:'Hi Vikraant, I want details on Sobha Skyparks investment opportunity.', featured:'No', featuredPriority:'4', roiScore:'80', priceSegment:'Entry', autoSlug:'sobha-skyparks', liveStatus:'Live' },
  { projectName:'W Residences Downtown', location:'Downtown Dubai · Sheikh Zayed Road', propertyType:'Branded Residences', unitSizes:'900 – 7,500 sq ft', startingPrice:'AED 4.14M', priceRange:'AED 4.14M – AED 39M+', paymentPlan:'60/40', estimatedROI:'6.5', status:'Live', developer:'Dar Al Arkan', strategicPositioning:'W Hotels branded residences in the heart of Downtown Dubai. 384 units managed by Marriot International. Direct Burj Khalifa views. Ras Al Khor and Sheikh Zayed Road connectivity. One of only three W-branded residential addresses in the UAE.', investorAngle:'Branded residence premium sustains value through market cycles. W management drives STR yield above standard Downtown apartments. Global buyer pool from Marriot\'s loyalty network supports resale liquidity.', description:'W Residences Downtown Dubai by Dar Al Arkan is a 384-home luxury development managed by Marriot International under the W Hotels brand. 1–3 bedroom apartments and signature penthouses. Burj Khalifa views. Handover December 2025. The only W-branded residential tower in Downtown Dubai.', imageURL:'/images/deal-w-residences.jpg', whatsAppMessage:'Hi Vikraant, I want to know more about W Residences Downtown. Please share the investment brief.', featured:'No', featuredPriority:'8', roiScore:'78', priceSegment:'Luxury', autoSlug:'w-residences-downtown', liveStatus:'Live' },
  { projectName:'Akala by Arada', location:'Dubai / Sharjah Corridor', propertyType:'Apartments', unitSizes:'500 – 1,800 sq ft', startingPrice:'AED 1.2M+', priceRange:'AED 1.2M – AED 3.8M', paymentPlan:'50/50 PHH', estimatedROI:'9.1', status:'Live', developer:'Arada', strategicPositioning:'Design-led mid-market community in the high-growth Dubai–Sharjah corridor.', investorAngle:'Early-stage growth + growing rental demand from young professional demographic.', description:'Akala by Arada is a design-forward community positioned at the inflection point of the Dubai–Sharjah growth corridor.', imageURL:'/images/deal-akala-arada.jpg', whatsAppMessage:'Hi Vikraant, I want to understand the Akala by Arada investment case.', featured:'No', featuredPriority:'6', roiScore:'75', priceSegment:'Entry', autoSlug:'akala-by-arada', liveStatus:'Live' },
  { projectName:'Tilal Binghatti', location:'Al Rowaiyah · Dubailand Academic City Corridor', propertyType:'Villas / Townhouses', unitSizes:'2,300 – 7,200 sq ft', startingPrice:'AED 2.8M', priceRange:'AED 2.8M – AED 8M+', paymentPlan:'70/30', estimatedROI:'8.5', status:'Hot Launch', developer:'Binghatti Developers', strategicPositioning:'Binghatti\'s inaugural villa community — a category pivot from the branded high-rise towers that made Binghatti Dubai\'s #1 developer by volume in 2024. 10M+ sqft masterplan. Blue Line Metro expansion planned for corridor.', investorAngle:'First-mover on Binghatti\'s villa category entry. Developer has delivered 14,000+ units on time since 2012 without a single delay. 70/30 plan with Golden Visa eligibility from AED 3M+.', description:'Tilal Binghatti is Binghatti Developers\' first-ever master-planned villa community, spanning over 10 million square feet in Al Rowaiyah, Dubailand. Gated, low-density community with private villas, swimmable water features, landscaped green spaces, and 50+ lifestyle amenities. 3–5BR units. Handover December 2029.', imageURL:'/images/deal-tilal-binghatti.jpg', whatsAppMessage:'Hi Vikraant, I want to discuss Tilal Binghatti. Please share the investment brief.', featured:'Yes', featuredPriority:'5', roiScore:'84', priceSegment:'Mid', autoSlug:'tilal-binghatti', liveStatus:'Live' },
  { projectName:'Greenz by Danube', location:'Academic City · Dubai Silicon Oasis Corridor', propertyType:'Townhouses / Villas', unitSizes:'2,300 – 5,500 sq ft', startingPrice:'AED 3.5M', priceRange:'AED 3.5M – AED 8M+', paymentPlan:'1% monthly', estimatedROI:'7.5', status:'Hot Launch', developer:'Danube Properties', strategicPositioning:'First large-scale Danube master community. Academic City corridor is emerging as Dubai\'s university-driven residential hub with 100,000+ residents. District IO technology hub under development adjacent to site.', investorAngle:'Early-mover advantage on Danube\'s first villa community. Low entry vs comparable Dubailand villa projects. 1% payment plan reduces capital outlay burden through 2029 handover.', description:'Greenz by Danube is a low-density, nature-integrated master community of 3–5 bedroom townhouses and villas in Dubai International Academic City. Danube\'s first villa-format launch after a decade of apartment delivery. 50+ lifestyle amenities. Fully furnished, Dolce Vita-curated interiors. Handover Q4 2029.', imageURL:'/images/deal-greenz-danube.jpg', whatsAppMessage:'Hi Vikraant, I am interested in Greenz by Danube. Please share the investment brief and payment schedule.', featured:'Yes', featuredPriority:'4', roiScore:'79', priceSegment:'Mid', autoSlug:'greenz-by-danube', liveStatus:'Live' },
,
  { projectName:'Palm Central Private Residences', location:'Palm Jebel Ali · Spine Between Fronds M&N', propertyType:'Apartments / Penthouses / Townhouses', unitSizes:'801 – 9,797 sq ft', startingPrice:'AED 2.5M', priceRange:'AED 2.5M – AED 22M+', paymentPlan:'20/50/30', estimatedROI:'8.5', status:'Hot Launch', developer:'Nakheel', strategicPositioning:'Palm Central is the first and only apartment community on Palm Jebel Ali — a product category that does not exist anywhere else on the island. 212 residences across 3 mid-rise towers on the Palm spine with direct private beach access and sea views across the Cove. Analysts project 35–45% capital appreciation by handover (Q3 2029).', investorAngle:'Entry point for Palm Jebel Ali island living at AED 2.5M — 85% below comparable Palm Jumeirah frond villa entry. Nakheel track record across Palm Jumeirah and Dubai Islands confirms delivery credibility. First-mover on Palm apartment category before hospitality islands open.', description:'Palm Central Private Residences by Nakheel is the first luxury apartment development on Palm Jebel Ali, located on the spine between Fronds M and N. 212 contemporary residences — 1 to 5 bedrooms plus duplex townhouses and signature penthouses — with private beach access, resort-style amenities, and uninterrupted Arabian Gulf views. Construction commenced October 2025. Handover Q3 2029.', imageURL:'/images/deal-palm-central.jpg', whatsAppMessage:'Hi Vikraant, I am interested in Palm Central on Palm Jebel Ali. Please share the investment brief and payment schedule.', featured:'Yes', featuredPriority:'3', roiScore:'92', priceSegment:'Luxury', autoSlug:'palm-central-jebel-ali', liveStatus:'Hot Launch' }
];

// ── HELPERS ────────────────────────────────────────────────────────────────
function parsePrice(str){ if(!str)return 0; const m=str.replace(/,/g,'').match(/[\d.]+/); const n=m?parseFloat(m[0]):0; if(/B/i.test(str))return n*1e9; if(/M/i.test(str))return n*1e6; if(/K/i.test(str))return n*1e3; return n; }
function parseROI(str){ return parseFloat(str)||0; }
function parsePriority(str){ return parseInt(str)||99; }
function parseRoiScore(str){ return parseInt(str)||50; }
function slugify(str){ return str.toLowerCase().replace(/[^a-z0-9]+/g,'-').replace(/(^-|-$)/g,''); }
function waURL(msg,custom){ const txt=custom||msg||"Hi Vikraant, I'd like to explore investment opportunities with V Capital."; return 'https://wa.me/971555540762?text='+encodeURIComponent(txt); }
function typeFilter(type){ const t=(type||'').toLowerCase(); if(t.includes('villa'))return 'Villa'; if(t.includes('townhouse'))return 'Townhouse'; if(t.includes('branded'))return 'Branded'; return 'Apartments'; }
function segFilter(seg,price){ if(seg){ const s=seg.toLowerCase(); if(s.includes('entry')||s.includes('budget'))return 'Entry'; if(s.includes('ultra')||s.includes('premium'))return 'Luxury'; return 'Mid'; } const p=parsePrice(price); if(p<2e6)return 'Entry'; if(p>=8e6)return 'Luxury'; return 'Mid'; }
function badgeClass(status){ const s=(status||'').toLowerCase(); if(s.includes('hot'))return 'status-hot'; if(s.includes('sold'))return 'status-sold'; if(s.includes('featured'))return 'status-featured'; if(s.includes('coming'))return 'status-coming'; return 'status-live'; }
function waIcon(){ return '<svg width="14" height="14" viewBox="0 0 24 24" fill="white"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/><path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.115 1.524 5.843L0 24l6.344-1.524A11.957 11.957 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.007-1.368l-.36-.214-3.727.977.994-3.638-.235-.374A9.818 9.818 0 1112 21.818z"/></svg>'; }

// ── GOOGLE SHEETS LOADER ───────────────────────────────────────────────────
async function loadFromSheets(sheetId){
  const url=`https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=Investment%20Listings`;
  const resp=await fetch(url);
  const text=await resp.text();
  const json=JSON.parse(text.substring(47).slice(0,-2));
  const cols=json.table.cols.map(c=>c.label.trim());
  return json.table.rows.map(row=>{ const obj={}; cols.forEach((col,i)=>{ obj[camelize(col)]=row.c[i]?(row.c[i].v!==null?String(row.c[i].v):''):''; }); return obj; });
}
function camelize(str){ return str.replace(/(?:^\w|[A-Z]|\b\w|\s+)/g,(m,i)=>i===0?m.toLowerCase():m.toUpperCase()).replace(/\s+/g,''); }

// ── INIT ───────────────────────────────────────────────────────────────────
async function initPlatform(){
  let data=[];
  if(VC.SHEET_ID){
    try{
      data=await loadFromSheets(VC.SHEET_ID);
      VC.isLive=true;
      console.log('[V Capital] '+data.length+' listings loaded from Google Sheets');
    }catch(e){
      console.warn('[V Capital] Sheet unavailable, using built-in inventory');
      data=SEED_LISTINGS;
    }
  } else {
    data=SEED_LISTINGS;
  }
  VC.allListings=data.filter(d=>(d.liveStatus||'').toLowerCase()!=='sold'&&(d.liveStatus||'live')!=='hidden').map((d,i)=>({
    ...d,
    _price:parsePrice(d.startingPrice),
    _roi:parseROI(d.estimatedROI),
    _priority:parsePriority(d.featuredPriority),
    _score:parseRoiScore(d.roiScore),
    _slug:d.autoSlug||slugify(d.projectName||'listing-'+i),
    _typeFilter:typeFilter(d.propertyType),
    _segFilter:segFilter(d.priceSegment,d.startingPrice),
    _isFeatured:(d.featured||'').toLowerCase()==='yes',
  }));
  updateCount(); applyAll(); buildSmartMoney();
}

function updateCount(){ const el=document.getElementById('countDisplay'); if(el)el.textContent=VC.allListings.length+' Active Opportunities'; }

// ── FILTERS ────────────────────────────────────────────────────────────────
function applyFilter(f,btn){ VC.activeFilter=f; VC.currentPage=1; document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active')); if(btn)btn.classList.add('active'); applyAll(); }
function doSearch(v){ VC.activeSearch=v.toLowerCase(); VC.currentPage=1; applyAll(); }
function doSort(v){ VC.activeSort=v; VC.currentPage=1; applyAll(); }
function applyAll(){
  let list=[...VC.allListings];
  if(VC.activeFilter==='featured')list=list.filter(d=>d._isFeatured);
  else if(VC.activeFilter.startsWith('type:')){ const t=VC.activeFilter.split(':')[1]; list=list.filter(d=>d._typeFilter===t||(d.propertyType||'').toLowerCase().includes(t.toLowerCase())); }
  else if(VC.activeFilter.startsWith('seg:')){ const s=VC.activeFilter.split(':')[1]; list=list.filter(d=>d._segFilter===s); }
  if(VC.activeSearch)list=list.filter(d=>(d.projectName||'').toLowerCase().includes(VC.activeSearch)||(d.location||'').toLowerCase().includes(VC.activeSearch)||(d.developer||'').toLowerCase().includes(VC.activeSearch));
  list=list.filter(d=>(d.liveStatus||'').toLowerCase()!=='sold');
  if(VC.activeSort==='price_asc')list.sort((a,b)=>a._price-b._price);
  else if(VC.activeSort==='price_desc')list.sort((a,b)=>b._price-a._price);
  else if(VC.activeSort==='roi_desc')list.sort((a,b)=>b._roi-a._roi);
  else if(VC.activeSort==='name_asc')list.sort((a,b)=>(a.projectName||'').localeCompare(b.projectName||''));
  else list.sort((a,b)=>{ if(a._isFeatured!==b._isFeatured)return a._isFeatured?-1:1; return a._priority-b._priority; });
  VC.filteredListings=list; renderGrid(); renderPagination();
}

// ── RENDER GRID ────────────────────────────────────────────────────────────
function renderGrid(){
  const grid=document.getElementById('platformGrid'); if(!grid)return;
  const start=(VC.currentPage-1)*VC.PER_PAGE; const page=VC.filteredListings.slice(start,start+VC.PER_PAGE);
  if(page.length===0){ grid.innerHTML='<div class="platform-grid-empty"><p style="font-family:var(--font-mono);font-size:0.68rem;letter-spacing:0.14em;color:var(--white-dim);text-transform:uppercase;">No opportunities match your filter.<br>Try adjusting your search.</p></div>'; return; }
  grid.innerHTML=page.map(buildCard).join('');
}
function buildCard(d){
  const img=d.imageURL?`<img src="${d.imageURL}" alt="${d.projectName}" loading="lazy" onerror="this.parentNode.innerHTML='<div class=pcard-img-placeholder><div class=pcard-img-placeholder-text>${d.propertyType||''}<br>${d.developer||''}</div></div>'">`:`<div class="pcard-img-placeholder"><div class="pcard-img-placeholder-text">${d.propertyType||'Premium Residence'}<br>${d.location||''}</div></div>`;
  const status=d.status||d.liveStatus||'Live'; const roi=d.estimatedROI?d.estimatedROI+'%':'On Request'; const score=d._score||70; const scoreWidth=Math.min(100,score);
  return `<div class="pcard" onclick="openDetailModal('${d._slug}')"><div class="pcard-img">${img}<div class="pcard-badges"><div class="pcard-badge ${badgeClass(status)}">${status}</div>${d._isFeatured?'<div class="pcard-badge status-featured">V Capital Pick</div>':''}</div></div><div class="pcard-body"><div class="pcard-dev">${d.developer||'Private Listing'}</div><div class="pcard-loc">${d.location||'Dubai, UAE'}</div><div class="pcard-name">${d.projectName||'Investment Opportunity'}</div><div class="pcard-type">${d.propertyType||''} · ${d.unitSizes||''}</div><div class="pcard-metrics"><div class="pcard-metric"><div class="pcard-metric-val">${d.startingPrice||'On Request'}</div><div class="pcard-metric-label">From</div></div><div class="pcard-metric"><div class="pcard-metric-val g">${roi}</div><div class="pcard-metric-label">ROI Est.</div></div><div class="pcard-metric"><div class="pcard-metric-val">${d.paymentPlan||'TBC'}</div><div class="pcard-metric-label">Payment</div></div></div><div class="pcard-angle">"${d.investorAngle||d.strategicPositioning||''}"</div><div class="pcard-score"><span class="pcard-score-label">V Capital Score</span><div class="pcard-score-bar"><div class="pcard-score-fill" style="width:${scoreWidth}%"></div></div><span class="pcard-score-num">${score}/100</span></div><div class="pcard-actions"><a class="pcard-wa" href="${waURL(d.whatsAppMessage)}" target="_blank" onclick="event.stopPropagation()">${waIcon()} WhatsApp</a><button class="pcard-detail" onclick="event.stopPropagation();openDetailModal('${d._slug}')">Full Analysis →</button></div><div class="pcard-slug">/investment/${d._slug}</div></div></div>`;
}

// ── PAGINATION ─────────────────────────────────────────────────────────────
function renderPagination(){
  const total=Math.ceil(VC.filteredListings.length/VC.PER_PAGE); const pag=document.getElementById('pagination'); if(!pag)return;
  if(total<=1){pag.innerHTML='';return;}
  let h=`<button class="page-btn ${VC.currentPage===1?'disabled':''}" onclick="goPage(${VC.currentPage-1})">‹</button>`;
  for(let i=1;i<=total;i++){ if(total>7&&i>2&&i<total-1&&Math.abs(i-VC.currentPage)>1){if(i===3||i===total-2)h+='<span class="page-info">…</span>';continue;} h+=`<button class="page-btn ${i===VC.currentPage?'active':''}" onclick="goPage(${i})">${i}</button>`; }
  h+=`<button class="page-btn ${VC.currentPage===total?'disabled':''}" onclick="goPage(${VC.currentPage+1})">›</button><span class="page-info">${VC.filteredListings.length} results · Page ${VC.currentPage} of ${total}</span>`;
  pag.innerHTML=h;
}
function goPage(p){ const total=Math.ceil(VC.filteredListings.length/VC.PER_PAGE); if(p<1||p>total)return; VC.currentPage=p; renderGrid(); renderPagination(); document.getElementById('opportunities').scrollIntoView({behavior:'smooth',block:'start'}); }

// ── SMART MONEY ────────────────────────────────────────────────────────────
function buildSmartMoney(){
  const grid=document.getElementById('smartMoneyGrid'); if(!grid)return;
  const featured=[...VC.allListings].filter(d=>d._isFeatured).sort((a,b)=>a._priority-b._priority||b._score-a._score).slice(0,3);
  const top3=featured.length>=3?featured:[...featured,...[...VC.allListings].sort((a,b)=>b._score-a._score).filter(d=>!featured.includes(d)).slice(0,3-featured.length)];
  grid.innerHTML=top3.map((d,i)=>`<div class="sm-feat-card" onclick="openDetailModal('${d._slug}')"><div class="sm-feat-rank">${['01','02','03'][i]}</div><div class="sm-feat-type">${d.propertyType||''} · ${d.location||''}</div><div class="sm-feat-name">${d.projectName||''}</div><div class="sm-feat-loc">${d.developer||''}</div><div class="sm-feat-angle">${d.investorAngle||d.strategicPositioning||''}</div><div class="sm-feat-metrics"><div><div class="sm-feat-metric-val">${d.startingPrice||'On Request'}</div><div class="pcard-metric-label">Starting</div></div><div><div class="sm-feat-metric-val g">${d.estimatedROI?d.estimatedROI+'%':'—'}</div><div class="pcard-metric-label">ROI Est.</div></div><div><div class="sm-feat-metric-val" style="font-size:1.1rem;">${d._score}/100</div><div class="pcard-metric-label">VC Score</div></div></div></div>`).join('');
}

// ── DETAIL MODAL ───────────────────────────────────────────────────────────
function openDetailModal(slug){
  window.history.replaceState(null,'','#/investment/'+slug);
  const d=VC.allListings.find(x=>x._slug===slug); if(!d)return;
  const modal=document.getElementById('detailModal'); const panel=document.getElementById('detailPanel');
  const imgHTML=d.imageURL?`<img loading="lazy" src="${d.imageURL}" alt="${d.projectName}" onerror="this.parentNode.innerHTML='<div class=detail-hero-placeholder></div>'">`:'<div class="detail-hero-placeholder"></div>';
  const roi=d.estimatedROI?d.estimatedROI+'%':'On Request'; const score=d._score||70;
  const metrics=[{val:d.startingPrice||'On Request',label:'Starting Price',gold:false},{val:roi,label:'Estimated ROI',gold:true},{val:d.paymentPlan||'TBC',label:'Payment Plan',gold:false},{val:d.unitSizes||'Various',label:'Unit Sizes',gold:false}];
  const tags=[d.propertyType,d.location,d.developer,d._segFilter+' Segment',d.status].filter(Boolean);
  document.getElementById('detailContent').innerHTML=`<div class="detail-hero">${imgHTML}<div class="detail-hero-overlay"></div><div class="detail-hero-content"><div class="detail-hero-dev">${d.developer||'Private Listing'} · V Capital Verified</div><div class="detail-hero-name">${d.projectName||'Investment Opportunity'}</div><div class="detail-hero-loc"> ${d.location||'Dubai, UAE'} · ${d.propertyType||''}</div></div></div><div class="detail-body"><div class="detail-metrics-row">${metrics.map(m=>`<div class="detail-metric"><div class="detail-metric-val${m.gold?' g':''}">${m.val}</div><div class="detail-metric-label">${m.label}</div></div>`).join('')}</div><div class="detail-grid"><div class="detail-main"><h2 class="detail-section-title">About This Opportunity</h2><p class="detail-text">${d.description||d.strategicPositioning||'Full investment brief available on request.'}</p><div class="detail-pillar"><div class="detail-pillar-title">Strategic Positioning</div><div class="detail-pillar-text">${d.strategicPositioning||'Available on request.'}</div></div><div class="detail-pillar"><div class="detail-pillar-title">Investor Angle</div><div class="detail-pillar-text">${d.investorAngle||'Contact V Capital for the investment thesis.'}</div></div><div class="detail-pillar"><div class="detail-pillar-title">Exit Strategy</div><div class="detail-pillar-text">Pre-handover assignment, post-handover resale, or hold-for-yield. V Capital maps the optimal exit path at entry — not improvised at completion.</div></div></div><div class="detail-sidebar"><div class="detail-cta-card"><div class="detail-cta-card-title">Request Full Deal Brief</div><p class="detail-cta-card-sub">Receive the complete investment analysis, payment structure, and exit scenario from Vikraant personally.</p><a class="detail-cta-wa" href="${waURL(d.whatsAppMessage)}" target="_blank">${waIcon()} WhatsApp Vikraant</a><button class="detail-cta-full" onclick="(document.getElementById('detailModal')||{}).classList.remove('open');document.body.style.overflow='';document.getElementById('contact').scrollIntoView({behavior:'smooth'})">Book Private Consultation</button><div class="detail-verified"><div class="detail-verified-icon"></div><div class="detail-verified-text">V Capital Verified Opportunity</div></div><div class="detail-roi-bar"><div class="detail-roi-bar-label">V Capital ROI Score</div><div class="detail-roi-track"><div class="detail-roi-fill" style="width:${score}%"></div></div></div><div class="detail-tags">${tags.map(t=>`<div class="detail-tag">${t}</div>`).join('')}</div></div></div></div></div>`;
  modal.classList.add('open'); document.body.style.overflow='hidden'; panel.scrollTop=0;
}
function closeDetailModal(){ window.history.replaceState(null,'','#'); (document.getElementById('detailModal')||{}).classList.remove('open'); document.body.style.overflow=''; }

// ── SHEETS SETUP ───────────────────────────────────────────────────────────

// ── DEEP LINK ──────────────────────────────────────────────────────────────
function checkDeepLink(){ const hash=window.location.hash; if(hash.startsWith('#/investment/')){ const slug=hash.replace('#/investment/',''); setTimeout(()=>openDetailModal(slug),400); } }
window.addEventListener('hashchange',()=>{ const hash=window.location.hash; if(hash.startsWith('#/investment/'))openDetailModal(hash.replace('#/investment/','')); });

// ── BOOT ───────────────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded',()=>{ initPlatform().then(()=>checkDeepLink()); });






/* ── V CAPITAL MOBILE NAVIGATION ───────────────────────────── */


/* Close on ESC */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMobileNav();
});
/* Close on resize to desktop */
window.addEventListener('resize', function() {
  if (window.innerWidth > 1024) closeMobileNav();
});
/* Swipe right to close drawer */
(function() {
  var startX = 0;
  var drawer  = document.getElementById('mobileNavDrawer');
  if (!drawer) return;
  drawer.addEventListener('touchstart', function(e) {
    startX = e.touches[0].clientX;
  }, { passive: true });
  drawer.addEventListener('touchend', function(e) {
    if (e.changedTouches[0].clientX - startX > 60) closeMobileNav();
  }, { passive: true });
})();

/* ─────────────────────────────────────────── */

// Block 12: vc-connect floating menu
function toggleVCConnect(){var m=document.getElementById('vc-connect-menu');if(!m)return;m.style.display=m.style.display==='flex'?'none':'flex';}
document.addEventListener('click',function(e){var el=document.getElementById('vc-connect');var m=document.getElementById('vc-connect-menu');if(el&&m&&!el.contains(e.target))m.style.display='none';});
function openBookingModal(){var m=document.getElementById('vc-booking-modal');if(m){m.style.display='flex';document.body.style.overflow='hidden';}var mn=document.getElementById('vc-connect-menu');if(mn)mn.style.display='none';}
function closeBookingModal(){var m=document.getElementById('vc-booking-modal');if(m){m.style.display='none';document.body.style.overflow='';}}
window.addEventListener('scroll',function(){var el=document.getElementById('vc-connect');if(el)el.classList.toggle('vis',window.scrollY>400);},{passive:true});

/* ─────────────────────────────────────────── */

// Block 13
/* ═══════════════════════════════════════════════════════════
   V CAPITAL — LEAD CAPTURE
   Fires ONLY when: page open ≥15s AND user engaged (scroll/move)
   Triggers: exit-intent · idle · mobile-timer
   Never fires: before 15s · on first page view · if already seen
═══════════════════════════════════════════════════════════ */
(function(){
  var SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyVX7dQUh3q0O2zLmOOEbOaVV0DK2CD6j2ZsW3ZAaJDL85fwS0x8n8mIeJB8KuNvQTY/exec';
  if(sessionStorage.getItem('vc_popup_done'))return;

  var _shown    = false;
  var _dismissed= false;
  var _engaged  = false;
  var _pageOpen = Date.now();
  var MIN_TIME  = 15000; // 15 seconds minimum on page before ANY trigger fires
  var _moveCount= 0;
  var _idleTimer= null;

  function canShow(){
    return !_shown && !_dismissed && _engaged &&
           (Date.now() - _pageOpen) >= MIN_TIME &&
           !sessionStorage.getItem('vc_popup_done');
  }

  function showPopup(){
    if(!canShow()) return;
    _shown = true;
    clearTimeout(_idleTimer);
    var p = document.getElementById('vc-exit-popup');
    if(p){
      p.classList.add('active');
      document.body.style.overflow='hidden';
    }
  }

  window.vcExitClose = function(){
    _dismissed = true;
    var p = document.getElementById('vc-exit-popup');
    if(p){
      p.classList.remove('active');
      document.body.style.overflow='';
    }
    sessionStorage.setItem('vc_popup_done','1');
  };

  window.vcExitSubmit = function(){
    var name  = (document.getElementById('vc-exit-name')||{}).value||'';
    var phone = (document.getElementById('vc-exit-phone')||{}).value||'';
    if(!name.trim()&&!phone.trim()){
      var n=document.getElementById('vc-exit-name'); if(n)n.focus(); return;
    }
    var btn = document.getElementById('vc-exit-submit');
    if(btn){btn.disabled=true;btn.textContent='Sending…';}
    var payload={name:name.trim(),phone:phone.trim(),
      source:'exit-popup',page:window.location.pathname||'/',
      ts:new Date().toISOString()};
    fetch(SHEETS_URL,{method:'POST',mode:'no-cors',
      headers:{'Content-Type':'application/json'},body:JSON.stringify(payload)
    }).catch(function(){});
    var qs=Object.keys(payload).map(function(k){
      return encodeURIComponent(k)+'='+encodeURIComponent(payload[k]);
    }).join('&');
    new Image().src=SHEETS_URL+'?'+qs;
    setTimeout(function(){
      var fw=document.getElementById('vc-exit-form-wrap');
      var sc=document.getElementById('vc-exit-success');
      if(fw)fw.style.display='none';
      if(sc)sc.style.display='block';
      sessionStorage.setItem('vc_popup_done','1');
      setTimeout(function(){vcExitClose();},3200);
    },600);
  };

  /* ── Engagement: user scrolls 35% ─────────────────────── */
  document.addEventListener('scroll',function(){
    if(_engaged)return;
    var pct=(window.scrollY||0)/(document.documentElement.scrollHeight-window.innerHeight||1);
    if(pct>0.35)_engaged=true;
  },{passive:true});

  /* ── Mouse movement tracking ──────────────────────────── */
  document.addEventListener('mousemove',function(){
    _moveCount++;
    if(_moveCount>=5)_engaged=true; // engaged after 5 real mouse moves
    // Reset idle timer only after engagement
    if(!_engaged)return;
    clearTimeout(_idleTimer);
    _idleTimer=setTimeout(function(){showPopup();},60000); // 60s idle
  });

  /* ── Exit intent: mouse leaves top of viewport ────────── */
  document.addEventListener('mouseleave',function(e){
    if(e.clientY<20)showPopup();
  });

  /* ── Mobile: first real touch starts 45s timer ─────────── */
  var _isMobile=/Mobi|Android|iPhone|iPad/i.test(navigator.userAgent);
  if(_isMobile){
    document.addEventListener('touchstart',function(){
      _engaged=true;
      setTimeout(function(){showPopup();},45000); // 45s after first touch
    },{passive:true,once:true});
  }

  /* ── Page hide (back button) ──────────────────────────── */
  window.addEventListener('pagehide',function(){
    if(_engaged&&(Date.now()-_pageOpen)>=MIN_TIME)showPopup();
  });

  /* ── ESC + backdrop ───────────────────────────────────── */
  document.addEventListener('keydown',function(e){if(e.key==='Escape')vcExitClose();});
  var popup=document.getElementById('vc-exit-popup');
  if(popup)popup.addEventListener('click',function(e){if(e.target===popup)vcExitClose();});

})();

/* ─────────────────────────────────────────── */

// Block 14: Session intelligence tracker
/* V Capital — Session Intelligence
   Collects anonymised engagement data for UX optimisation.
   Single send on page exit via sendBeacon. No cookies. No PII beyond
   what the user voluntarily submits in forms. */
(function(){
  var _sid  = Math.random().toString(36).slice(2,10)+Date.now().toString(36);
  var _t0   = Date.now();
  var _page = window.location.pathname;
  var _ref  = document.referrer || 'direct';
  var _ua   = navigator.userAgent;
  var _w    = window.innerWidth;
  var _h    = window.innerHeight;

  // Engagement metrics (all computed locally)
  var _maxScroll = 0;
  var _clicks    = 0;
  var _sections  = [];
  var _lastActive= Date.now();
  var _idle      = 0;
  var _exits     = 'stay';

  /* ── Scroll depth ─────────────────────────────────────── */
  document.addEventListener('scroll', function(){
    var pct = Math.round(
      100*(window.scrollY/(document.documentElement.scrollHeight-window.innerHeight||1))
    );
    if(pct > _maxScroll) _maxScroll = pct;
    _lastActive = Date.now();
  },{passive:true});

  /* ── Section visibility (IntersectionObserver) ────────── */
  if('IntersectionObserver' in window){
    var _io = new IntersectionObserver(function(entries){
      entries.forEach(function(e){
        if(e.isIntersecting && e.target.id && _sections.indexOf(e.target.id)<0){
          _sections.push(e.target.id);
        }
      });
    },{threshold:0.4});
    // Observe all main sections
    ['hero','about','intelligence','capital-flow','opportunities',
     'hotspots','strategy','contact','insights'].forEach(function(id){
      var el=document.getElementById(id);
      if(el)_io.observe(el);
    });
  }

  /* ── Click count (not position — privacy safe) ─────────── */
  document.addEventListener('click',function(e){
    _clicks++;
    _lastActive = Date.now();
    // Track CTA clicks by label
    var t = e.target.closest('a,button');
    if(t){
      var label=(t.textContent||'').trim().slice(0,40);
      if(label && label !== '') {
        if(!window._vcClicks) window._vcClicks=[];
        window._vcClicks.push(label);
      }
    }
  },{passive:true});

  /* ── Mouse activity (just for idle calculation) ────────── */
  document.addEventListener('mousemove',function(){_lastActive=Date.now();},{passive:true});
  document.addEventListener('keydown', function(){_lastActive=Date.now();},{passive:true});
  document.addEventListener('touchstart',function(){_lastActive=Date.now();},{passive:true});

  /* ── UTM parameters ───────────────────────────────────── */
  var _params = {};
  try{
    var sp = new URLSearchParams(window.location.search);
    ['utm_source','utm_medium','utm_campaign','utm_content'].forEach(function(k){
      if(sp.get(k)) _params[k]=sp.get(k);
    });
  }catch(e){}

  /* ── Compile and send on exit ──────────────────────────── */
  function _send(exitType){
    _exits = exitType||'navigate';
    var now  = Date.now();
    var dwell= Math.round((now-_t0)/1000);
    var idle = Math.round((now-_lastActive)/1000);

    var payload = {
      sid:       _sid,
      page:      _page,
      referrer:  _ref,
      dwell_s:   dwell,
      idle_s:    idle,
      scroll_pct:_maxScroll,
      clicks:    _clicks,
      cta_clicks:(window._vcClicks||[]).join('|').slice(0,200),
      sections:  _sections.join(','),
      exit_type: _exits,
      viewport:  _w+'x'+_h,
      ts:        new Date().toISOString(),
      source:    'session-intel'
    };

    // Merge UTM params
    Object.assign(payload, _params);

    var url = 'https://script.google.com/macros/s/AKfycbyVX7dQUh3q0O2zLmOOEbOaVV0DK2CD6j2ZsW3ZAaJDL85fwS0x8n8mIeJB8KuNvQTY/exec';
    var body= JSON.stringify(payload);

    // sendBeacon: designed for analytics, survives page close, not blocked
    if(navigator.sendBeacon){
      var blob = new Blob([body],{type:'application/json'});
      navigator.sendBeacon(url, blob);
    } else {
      // Fallback: img beacon (no CORS issues)
      var qs = Object.keys(payload).map(function(k){
        return encodeURIComponent(k)+'='+encodeURIComponent(payload[k]||'');
      }).join('&');
      new Image().src = url+'?'+qs;
    }
  }

  /* ── Unload events — fires on tab close, navigate, back ── */
  window.addEventListener('pagehide', function(){_send('pagehide');});
  window.addEventListener('beforeunload', function(){_send('beforeunload');});

  /* ── Visibility change (tab switch, phone lock) ─────────── */
  document.addEventListener('visibilitychange', function(){
    if(document.visibilityState==='hidden') _send('hidden');
  });

})();

/* ─────────────────────────────────────────── */

// Block 15: Mobile nav initialisation
/* ── V Capital Mobile Nav ─────────────────────────────────────────────
   Drawer: full-width, drops below navbar, transform:translateY(-100%)→0
   State: tracked by CSS class 'open' on #mobileNavDrawer
──────────────────────────────────────────────────────────────────── */
function toggleMobileNav() {
  var d = document.getElementById('mobileNavDrawer');
  var o = document.getElementById('mobileNavOverlay');
  var b = document.getElementById('navHamburger');
  if (!d) return;
  var isOpen = d.classList.contains('open');
  if (isOpen) {
    d.classList.remove('open');
    d.classList.remove('is-open');
    if (o) o.classList.remove('open');
    if (b) b.classList.remove('open');
    document.body.style.overflow = '';
  } else {
    d.classList.add('open');
    d.classList.add('is-open');
    if (o) o.classList.add('open');
    if (b) b.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function openMobileNav() {
  var d = document.getElementById('mobileNavDrawer');
  if (d && !d.classList.contains('open')) toggleMobileNav();
}

function closeMobileNav() {
  var d = document.getElementById('mobileNavDrawer');
  if (d && d.classList.contains('open')) toggleMobileNav();
}

/* ESC to close */
document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') closeMobileNav();
});

/* ─────────────────────────────────────────── */

// Block 16: Sticky mobile CTA
(function(){
  var bar = document.getElementById('vc-sticky-mobile');
  var shown = false;
  window.addEventListener('scroll', function(){
    if(window.scrollY > 400 && !shown){ bar.classList.add('visible'); shown=true; }
  }, {passive:true});
})();