/* ═══════════════════════════════════════════════════════════
   V Capital — load-navbar.js
   Fetches /components/navbar.html and injects into
   #navbar-container on every zone/capital page.
   ═══════════════════════════════════════════════════════════ */
(function () {
  var container = document.getElementById('navbar-container');
  if (!container) return;

  fetch('/components/navbar.html')
    .then(function (response) {
      if (!response.ok) throw new Error('navbar fetch failed: ' + response.status);
      return response.text();
    })
    .then(function (html) {
      container.innerHTML = html;

      /* ── After injection: initialise nav behaviour ── */

      /* 1. Scroll → solid background */
      var nav = document.getElementById('main-nav');
      if (nav) {
        function onScroll() {
          nav.classList.toggle('is-scrolled', window.scrollY > 60);
        }
        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();
      }

      /* 2. Desktop dropdown toggles */
      document.querySelectorAll('.nav-dropdown').forEach(function (item) {
        var toggle = item.querySelector('.nav-dropdown-toggle, a');
        var menu   = item.querySelector('.nav-dropdown-menu');
        if (!toggle || !menu) return;

        item.addEventListener('mouseenter', function () { item.classList.add('is-open'); });
        item.addEventListener('mouseleave', function () { item.classList.remove('is-open'); });

        toggle.addEventListener('click', function (e) {
          e.preventDefault();
          var open = item.classList.toggle('is-open');
          document.querySelectorAll('.nav-dropdown').forEach(function (other) {
            if (other !== item) other.classList.remove('is-open');
          });
        });
      });

      document.addEventListener('click', function (e) {
        if (!e.target.closest('.nav-dropdown')) {
          document.querySelectorAll('.nav-dropdown').forEach(function (d) {
            d.classList.remove('is-open');
          });
        }
      });

      /* 3. Mobile drawer — homepage uses toggleMobileNav / closeMobileNav */
      /* Re-attach since the functions are defined in homepage.js which
         may not be loaded on zone pages. Bind them here. */
      var overlay  = document.getElementById('mobileNavOverlay');
      var drawer   = document.getElementById('mobileNavDrawer');
      var hamburger = document.getElementById('navHamburger');

      window.toggleMobileNav = function () {
        if (!drawer) return;
        var open = drawer.classList.toggle('is-open');
        if (overlay) overlay.classList.toggle('is-open', open);
        if (hamburger) hamburger.setAttribute('aria-expanded', open ? 'true' : 'false');
        document.body.classList.toggle('drawer-open', open);
      };

      window.closeMobileNav = function () {
        if (drawer)   { drawer.classList.remove('is-open'); }
        if (overlay)  { overlay.classList.remove('is-open'); }
        if (hamburger){ hamburger.setAttribute('aria-expanded', 'false'); }
        document.body.classList.remove('drawer-open');
      };

      if (overlay)  overlay.addEventListener('click', window.closeMobileNav);
      document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') window.closeMobileNav();
      });
    })
    .catch(function (err) {
      console.error('[V Capital] Navbar load error:', err);
    });
})();
