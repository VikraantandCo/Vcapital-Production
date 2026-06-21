/* ═══════════════════════════════════════════════════════════
   V Capital — nav-init.js
   Universal nav scroll behaviour + mobile drawer.
   Load on ALL pages (zones, capital-structuring, etc.)
   after nav.css. Extracted from homepage.js — no changes to
   homepage.js required.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* 1. Scroll → .scrolled on #main-nav */
  var mn = document.getElementById('main-nav');
  if (mn) {
    window.addEventListener('scroll', function () {
      mn.classList.toggle('scrolled', window.scrollY > 60);
    }, { passive: true });
    // Run once on load (page may already be scrolled)
    mn.classList.toggle('scrolled', window.scrollY > 60);
  }

  /* 2. Mobile drawer toggle */
  var drawer  = document.getElementById('mobileNavDrawer');
  var overlay = document.getElementById('mobileNavOverlay');
  var hamburger = document.getElementById('navHamburger');

  function openDrawer() {
    if (drawer)    { drawer.classList.add('open');    drawer.setAttribute('aria-hidden', 'false'); }
    if (overlay)   { overlay.classList.add('open'); }
    if (hamburger) { hamburger.classList.add('open'); hamburger.setAttribute('aria-expanded', 'true'); }
    document.body.classList.add('nav-open');
  }

  function closeDrawer() {
    if (drawer)    { drawer.classList.remove('open');  drawer.setAttribute('aria-hidden', 'true'); }
    if (overlay)   { overlay.classList.remove('open'); }
    if (hamburger) { hamburger.classList.remove('open'); hamburger.setAttribute('aria-expanded', 'false'); }
    document.body.classList.remove('nav-open');
  }

  if (hamburger) {
    hamburger.addEventListener('click', function () {
      if (drawer && drawer.classList.contains('open')) { closeDrawer(); } else { openDrawer(); }
    });
  }
  if (overlay) {
    overlay.addEventListener('click', closeDrawer);
  }
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') closeDrawer();
  });

  /* 3. Desktop dropdown hover/click */
  document.querySelectorAll('.nav-dropdown').forEach(function (item) {
    item.addEventListener('mouseenter', function () { item.classList.add('open'); });
    item.addEventListener('mouseleave', function () { item.classList.remove('open'); });
    var toggle = item.querySelector('a, button');
    if (toggle) {
  toggle.addEventListener('click', function (e) {
    if (window.innerWidth <= 1024) return;

    // Only intercept the top-level menu item
    if (e.currentTarget.classList.contains('nav-link')) {
      e.preventDefault();
      item.classList.toggle('open');
    }
  });
}

  // Close dropdowns on outside click
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(function (d) {
        d.classList.remove('open');
      });
    }
  });

})();
