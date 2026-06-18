/* ═══════════════════════════════════════════════════════════
   V Capital — analytics.js
   GA4 event tracking helpers.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  function track(eventName, params) {
    if (typeof gtag !== 'function') return;
    gtag('event', eventName, params || {});
  }

  // WhatsApp CTA clicks
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href*="wa.me"]');
    if (!a) return;
    track('whatsapp_click', {
      event_category: 'CTA',
      event_label: a.textContent.trim().slice(0, 50) || 'whatsapp',
      page_location: window.location.pathname
    });
  });

  // Booking modal open
  window.trackBookingOpen = function (source) {
    track('booking_modal_open', { event_category: 'Conversion', source: source || 'unknown' });
  };

  // Scroll depth
  var depths = [25, 50, 75, 90];
  var fired  = {};
  window.addEventListener('scroll', function () {
    var pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
    depths.forEach(function (d) {
      if (pct >= d && !fired[d]) {
        fired[d] = true;
        track('scroll_depth', { depth: d, page: window.location.pathname });
      }
    });
  }, { passive: true });

  // Newsletter form start
  document.addEventListener('focusin', function (e) {
    if (e.target.id === 'nr-em') {
      track('newsletter_form_start', { page: window.location.pathname });
    }
  });

  // Outbound links
  document.addEventListener('click', function (e) {
    var a = e.target.closest('a[href^="http"]');
    if (!a || a.href.includes('vcapital.ae')) return;
    track('outbound_click', { url: a.href });
  });

})();
