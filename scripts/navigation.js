/* ═══════════════════════════════════════════════════════════
   V Capital — navigation.js
   Handles: sticky nav, mobile drawer, dropdowns, smooth scroll,
   booking modal trigger, reveal animations.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Scroll-based nav solid background ─────────────────── */
  var nav = document.getElementById('nav') || document.getElementById('main-nav');
  if (nav) {
    var SCROLL_CLASS = nav.id === 'main-nav' ? 'scrolled' : 's';
    window.addEventListener('scroll', function () {
      nav.classList.toggle(SCROLL_CLASS, window.scrollY > 40);
    }, { passive: true });
  }

  /* ── Mobile nav open/close ──────────────────────────────── */
  function openMobNav() {
    var dr = document.getElementById('mobDr');
    var ov = document.getElementById('mobOv');
    var hb = document.getElementById('navHbg');
    if (dr) { dr.classList.add('open'); document.body.style.overflow = 'hidden'; }
    if (ov) { ov.style.opacity = '1'; ov.style.pointerEvents = 'auto'; }
    if (hb) hb.setAttribute('aria-expanded', 'true');
  }
  function closeMobNav() {
    var dr = document.getElementById('mobDr');
    var ov = document.getElementById('mobOv');
    var hb = document.getElementById('navHbg');
    if (dr) { dr.classList.remove('open'); document.body.style.overflow = ''; }
    if (ov) { ov.style.opacity = '0'; ov.style.pointerEvents = 'none'; }
    if (hb) hb.setAttribute('aria-expanded', 'false');
  }

  // Expose globally (inline onclick handlers need these)
  window.openMobNav  = openMobNav;
  window.closeMobNav = closeMobNav;

  // Close on overlay click
  var ov = document.getElementById('mobOv');
  if (ov) ov.addEventListener('click', closeMobNav);

  /* ── Mobile accordion for nested nav groups ─────────────── */
  window.mobAccordion = function (id) {
    var el = document.getElementById(id);
    if (!el) return;
    var isOpen = el.style.maxHeight && el.style.maxHeight !== '0px';
    el.style.maxHeight = isOpen ? '0px' : el.scrollHeight + 'px';
    el.style.overflow  = 'hidden';
    el.style.transition = 'max-height 0.3s ease';
  };

  /* ── Desktop dropdown hover ─────────────────────────────── */
  window.navDD = function (id, open) {
    var dd = document.getElementById(id);
    if (!dd) return;
    dd.style.opacity    = open ? '1' : '0';
    dd.style.visibility = open ? 'visible' : 'hidden';
    dd.style.transform  = open ? 'translateY(0)' : 'translateY(-8px)';
  };

  /* ── Smooth scroll for anchor links ─────────────────────── */
  document.addEventListener('click', function (e) {
    var link = e.target.closest('a[href^="#"]');
    if (!link) return;
    var id = link.getAttribute('href').slice(1);
    if (!id) return;
    var target = document.getElementById(id);
    if (!target) return;
    e.preventDefault();
    closeMobNav();
    var navH = nav ? nav.offsetHeight : 0;
    var top  = target.getBoundingClientRect().top + window.scrollY - navH - 16;
    window.scrollTo({ top: top, behavior: 'smooth' });
  });

  /* ── Booking modal ──────────────────────────────────────── */
  window.openBooking = function () {
    var m = document.getElementById('vc-booking-modal');
    if (m) { m.style.display = 'flex'; document.body.style.overflow = 'hidden'; }
  };
  window.closeBooking = function () {
    var m = document.getElementById('vc-booking-modal');
    if (m) { m.style.display = 'none'; document.body.style.overflow = ''; }
  };
  // Close booking modal on backdrop
  document.addEventListener('click', function (e) {
    var m = document.getElementById('vc-booking-modal');
    if (m && e.target === m) window.closeBooking();
  });

  /* ── vc-connect floating menu ───────────────────────────── */
  window.toggleConnect = function () {
    var menu = document.getElementById('vc-connect-menu');
    if (!menu) return;
    var isOpen = menu.style.display === 'flex';
    menu.style.display = isOpen ? 'none' : 'flex';
  };
  document.addEventListener('click', function (e) {
    if (e.target.closest('#vc-connect')) return;
    var menu = document.getElementById('vc-connect-menu');
    if (menu) menu.style.display = 'none';
  });

  /* ── Reveal on scroll ───────────────────────────────────── */
  var reveals = document.querySelectorAll('.reveal');
  if (reveals.length) {
    var io = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
    reveals.forEach(function (el) { io.observe(el); });
  }

  /* ── Active nav link highlighting ───────────────────────── */
  (function () {
    var path = window.location.pathname.replace(/\/$/, '');
    var links = document.querySelectorAll('.nav-links a, .mob-link');
    links.forEach(function (a) {
      var href = a.getAttribute('href') || '';
      if (!href.startsWith('#') && href !== '/' && path.startsWith(href.replace(/\/$/, ''))) {
        a.classList.add('nav-active');
      }
    });
  })();

})();
