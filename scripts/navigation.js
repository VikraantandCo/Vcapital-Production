/**
 * V Capital — navigation.js
 * Handles: sticky header, scroll behaviour, desktop dropdowns,
 *          mobile drawer accordion, reveal animations.
 *
 * REPAIR NOTES (Step 7):
 *  - Header starts transparent on homepage hero; scrolled class adds
 *    solid background. No position:fixed quirks — header is position:sticky.
 *  - Dropdown menus use aria-expanded toggling (keyboard + mouse).
 *  - Mobile drawer: toggle open/close, close on overlay click or ESC.
 *  - Accordion items in mobile nav: toggle hidden attribute on <ul>.
 */

(function () {
  'use strict';

  /* ── 1. STICKY HEADER ──────────────────────────────────────────────────── */
  const header = document.getElementById('site-header');

  if (header) {
    // Ensure sticky positioning is enforced in JS in case CSS was overridden
    header.style.position  = 'sticky';
    header.style.top       = '0';
    header.style.zIndex    = '9000';
    header.style.width     = '100%';

    const SCROLL_THRESHOLD = 60; // px before "scrolled" state kicks in

    function onScroll() {
      if (window.scrollY > SCROLL_THRESHOLD) {
        header.classList.add('is-scrolled');
      } else {
        header.classList.remove('is-scrolled');
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // run once on load
  }

  /* ── 2. DESKTOP DROPDOWNS ──────────────────────────────────────────────── */
  const dropdownItems = document.querySelectorAll('.nav-item--dropdown');

  dropdownItems.forEach(function (item) {
    const toggle   = item.querySelector('.nav-dropdown-toggle');
    const dropdown = item.querySelector('.nav-dropdown');
    if (!toggle || !dropdown) return;

    function openDropdown() {
      toggle.setAttribute('aria-expanded', 'true');
      dropdown.classList.add('is-open');
    }

    function closeDropdown() {
      toggle.setAttribute('aria-expanded', 'false');
      dropdown.classList.remove('is-open');
    }

    // Hover (desktop)
    item.addEventListener('mouseenter', openDropdown);
    item.addEventListener('mouseleave', closeDropdown);

    // Click/keyboard toggle
    toggle.addEventListener('click', function () {
      const isOpen = toggle.getAttribute('aria-expanded') === 'true';
      // Close all others first
      dropdownItems.forEach(function (other) {
        if (other !== item) {
          const otherToggle   = other.querySelector('.nav-dropdown-toggle');
          const otherDropdown = other.querySelector('.nav-dropdown');
          if (otherToggle) otherToggle.setAttribute('aria-expanded', 'false');
          if (otherDropdown) otherDropdown.classList.remove('is-open');
        }
      });
      if (isOpen) {
        closeDropdown();
      } else {
        openDropdown();
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', function (e) {
    if (!e.target.closest('.nav-item--dropdown')) {
      dropdownItems.forEach(function (item) {
        const toggle   = item.querySelector('.nav-dropdown-toggle');
        const dropdown = item.querySelector('.nav-dropdown');
        if (toggle) toggle.setAttribute('aria-expanded', 'false');
        if (dropdown) dropdown.classList.remove('is-open');
      });
    }
  });

  /* ── 3. MOBILE DRAWER ──────────────────────────────────────────────────── */
  const drawer        = document.getElementById('mobileDrawer');
  const overlay       = document.getElementById('mobileOverlay');
  const openBtn       = document.getElementById('mobileMenuToggle');
  const closeBtn      = document.getElementById('mobileMenuClose');

  function openDrawer() {
    if (!drawer) return;
    drawer.classList.add('is-open');
    drawer.setAttribute('aria-hidden', 'false');
    if (overlay) {
      overlay.classList.add('is-visible');
      overlay.setAttribute('aria-hidden', 'false');
    }
    if (openBtn) openBtn.setAttribute('aria-expanded', 'true');
    document.body.classList.add('drawer-open');
    // Trap focus
    const firstFocusable = drawer.querySelector('button, a');
    if (firstFocusable) firstFocusable.focus();
  }

  function closeDrawer() {
    if (!drawer) return;
    drawer.classList.remove('is-open');
    drawer.setAttribute('aria-hidden', 'true');
    if (overlay) {
      overlay.classList.remove('is-visible');
      overlay.setAttribute('aria-hidden', 'true');
    }
    if (openBtn) {
      openBtn.setAttribute('aria-expanded', 'false');
      openBtn.focus(); // Return focus to toggle
    }
    document.body.classList.remove('drawer-open');
  }

  if (openBtn)  openBtn.addEventListener('click',  openDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeDrawer);
  if (overlay)  overlay.addEventListener('click',  closeDrawer);

  // ESC key closes drawer
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && drawer && drawer.classList.contains('is-open')) {
      closeDrawer();
    }
  });

  /* ── 4. MOBILE ACCORDION ───────────────────────────────────────────────── */
  const accordions = document.querySelectorAll('.mobile-nav__accordion');

  accordions.forEach(function (btn) {
    btn.addEventListener('click', function () {
      const isExpanded = btn.getAttribute('aria-expanded') === 'true';
      const sub        = btn.nextElementSibling; // the <ul hidden>
      const icon       = btn.querySelector('span');

      // Close all others
      accordions.forEach(function (other) {
        if (other !== btn) {
          other.setAttribute('aria-expanded', 'false');
          const otherSub  = other.nextElementSibling;
          const otherIcon = other.querySelector('span');
          if (otherSub)  otherSub.hidden = true;
          if (otherIcon) otherIcon.textContent = '+';
        }
      });

      if (isExpanded) {
        btn.setAttribute('aria-expanded', 'false');
        if (sub)  sub.hidden = true;
        if (icon) icon.textContent = '+';
      } else {
        btn.setAttribute('aria-expanded', 'true');
        if (sub)  sub.hidden = false;
        if (icon) icon.textContent = '−';
      }
    });
  });

  /* ── 5. REVEAL ANIMATIONS ──────────────────────────────────────────────── */
  const reveals = document.querySelectorAll('.reveal');

  if (reveals.length > 0 && 'IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-revealed');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    reveals.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: show all immediately
    reveals.forEach(function (el) {
      el.classList.add('is-revealed');
    });
  }

  /* ── 6. ACTIVE NAV LINK ─────────────────────────────────────────────────── */
  // Highlight the current section in nav
  var currentPath = window.location.pathname.replace(/\/$/, '') || '/';

  document.querySelectorAll('.nav-link, .footer-col__link').forEach(function (link) {
    try {
      var linkPath = new URL(link.href).pathname.replace(/\/$/, '') || '/';
      if (linkPath === currentPath) {
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'page');
      }
    } catch (e) { /* ignore invalid hrefs */ }
  });

})();
