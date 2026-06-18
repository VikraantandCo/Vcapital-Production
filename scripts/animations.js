/* ═══════════════════════════════════════════════════════════
   V Capital — animations.js
   Exit popup, floating elements, miscellaneous animations.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  /* ── Exit intent popup ──────────────────────────────────── */
  var _shown = false;
  var _dismissed = sessionStorage.getItem('vc_popup_done') === '1';

  window.vcExitClose = function () {
    var el = document.getElementById('vc-exit-popup');
    if (el) { el.style.opacity = '0'; setTimeout(function () { el.style.display = 'none'; }, 350); }
    _dismissed = true;
    sessionStorage.setItem('vc_popup_done', '1');
  };

  function showPopup() {
    if (_shown || _dismissed) return;
    var el = document.getElementById('vc-exit-popup');
    if (!el) return;
    _shown = true;
    el.style.display = 'flex';
    requestAnimationFrame(function () { el.style.opacity = '1'; });
  }

  // Desktop: mouse leaves viewport upward
  document.addEventListener('mouseleave', function (e) { if (e.clientY < 30) showPopup(); });
  // Mobile: show after 45s
  setTimeout(function () { if (!_shown && !_dismissed) showPopup(); }, 45000);
  // Back button intent
  window.addEventListener('pagehide', function () { if (!_shown && !_dismissed) showPopup(); });
  // Close on backdrop
  document.addEventListener('click', function (e) {
    var el = document.getElementById('vc-exit-popup');
    if (el && e.target === el) window.vcExitClose();
  });
  // Close on ESC
  document.addEventListener('keydown', function (e) { if (e.key === 'Escape') window.vcExitClose && window.vcExitClose(); });

  /* ── vc-connect fade-in ─────────────────────────────────── */
  window.addEventListener('scroll', function () {
    var el = document.getElementById('vc-connect');
    if (el) {
      el.style.opacity = window.scrollY > 300 ? '1' : '0';
      el.style.pointerEvents = window.scrollY > 300 ? 'auto' : 'none';
    }
  }, { passive: true });

})();
