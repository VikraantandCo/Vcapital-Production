/* ═══════════════════════════════════════════════════════════
   V Capital — navigation.js
   Required by index.html.
   Provides: navDD, openMobNav, closeMobNav, mobAccordion,
             openBooking, closeBooking, scroll reveal.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Sticky nav ──────────────────────────────────────────── */
  var nav = document.getElementById('nav');
  if (nav) {
    function onScroll() {
      nav.classList.toggle('scrolled', window.scrollY > 60);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
  }

  /* ── Desktop dropdown ────────────────────────────────────── */
  window.navDD = function (id, open) {
    var el = document.getElementById(id);
    if (!el) return;
    if (open) {
      el.classList.add('visible');
      el.setAttribute('aria-hidden', 'false');
    } else {
      el.classList.remove('visible');
      el.setAttribute('aria-hidden', 'true');
    }
  };

  /* ── Mobile nav open ────────────────────────────────────── */
  window.openMobNav = function () {
    var dr  = document.getElementById('mobDr');
    var ov  = document.getElementById('mobOv');
    var hbg = document.getElementById('navHbg');
    if (dr)  { dr.classList.add('open');  dr.setAttribute('aria-hidden', 'false'); }
    if (ov)  { ov.classList.add('open'); }
    if (hbg) { hbg.setAttribute('aria-expanded', 'true'); }
    document.documentElement.style.overflow = 'hidden';
  };

  /* ── Mobile nav close ───────────────────────────────────── */
  window.closeMobNav = function () {
    var dr  = document.getElementById('mobDr');
    var ov  = document.getElementById('mobOv');
    var hbg = document.getElementById('navHbg');
    if (dr)  { dr.classList.remove('open');  dr.setAttribute('aria-hidden', 'true'); }
    if (ov)  { ov.classList.remove('open'); }
    if (hbg) { hbg.setAttribute('aria-expanded', 'false'); }
    document.documentElement.style.overflow = '';
  };

  /* ── Mobile accordion ───────────────────────────────────── */
  window.mobAccordion = function (id) {
    var body = document.getElementById(id);
    if (!body) return;
    var isOpen = body.style.maxHeight && body.style.maxHeight !== '0px';
    body.style.maxHeight = isOpen ? '0px' : body.scrollHeight + 'px';
    /* Update the trigger button aria + icon */
    var btn = body.previousElementSibling;
    if (btn) {
      btn.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
      var icon = btn.querySelector('span[aria-hidden]');
      if (icon) icon.textContent = isOpen ? '+' : '×';
    }
  };

  /* ── Booking modal ──────────────────────────────────────── */
  window.openBooking = function () {
    var m = document.getElementById('vc-booking-modal');
    if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
  };
  window.closeBooking = function () {
    var m = document.getElementById('vc-booking-modal');
    if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
  };

  /* ── Escape key closes both ─────────────────────────────── */
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') {
      window.closeMobNav();
      window.closeBooking();
    }
  });

  /* ── Close mobile nav on resize to desktop ──────────────── */
  window.addEventListener('resize', function () {
    if (window.innerWidth >= 1024) {
      window.closeMobNav();
    }
  }, { passive: true });

})();
