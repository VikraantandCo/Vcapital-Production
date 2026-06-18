/* ═══════════════════════════════════════════════════════════
   V Capital — forms.js
   Handles: contact form, newsletter signup, exit popup form.
   All forms submit to Google Sheets via Apps Script.
   ═══════════════════════════════════════════════════════════ */
(function () {
  'use strict';

  var SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyVX7dQUh3q0O2zLmOOEbOaVV0DK2CD6j2ZsW3ZAaJDL85fwS0x8n8mIeJB8KuNvQTY/exec';

  /* ── Generic submit helper ──────────────────────────────── */
  function submitToSheets(payload, onSuccess, onError) {
    payload.page = window.location.pathname;
    payload.ts   = new Date().toISOString();

    // Primary: fetch (no-cors, fire-and-forget)
    fetch(SHEETS_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    }).then(onSuccess).catch(onError || function () {});

    // Fallback: img beacon (always fires)
    var qs = Object.keys(payload).map(function (k) {
      return encodeURIComponent(k) + '=' + encodeURIComponent(payload[k]);
    }).join('&');
    new Image().src = SHEETS_URL + '?' + qs;
  }

  /* ── Contact form ───────────────────────────────────────── */
  window.vcContactSubmit = function (e) {
    e.preventDefault();
    var form = e.target;
    var btn  = form.querySelector('button[type=submit]');
    if (btn) { btn.disabled = true; btn.textContent = 'Sending…'; }

    var name    = form.name    ? form.name.value.trim()    : '';
    var phone   = form.phone   ? form.phone.value.trim()   : '';
    var email   = form.email   ? form.email.value.trim()   : '';
    var message = form.message ? form.message.value.trim() : '';

    submitToSheets(
      { type: 'contact', name: name, phone: phone, email: email, message: message },
      function () {
        var fw = form.querySelector('.form-wrap');
        var sc = form.querySelector('.form-success');
        if (fw) fw.style.display = 'none';
        if (sc) sc.style.display = 'block';
        if (btn) btn.textContent = 'Sent ✓';
      }
    );
  };

  /* ── Newsletter signup ──────────────────────────────────── */
  window.submitNewsroomSub = function (e) {
    e.preventDefault();
    var form = e.target;
    var btn  = form.querySelector('.nr-submit') || form.querySelector('button[type=submit]');
    var msg  = document.getElementById('nr-sub-msg');

    if (btn) { btn.disabled = true; btn.textContent = 'Submitting…'; }

    var payload = {
      type:         'newsletter-subscription',
      source:       'newsroom-subscribe',
      firstName:    (document.getElementById('nr-fn')  || {}).value || '',
      lastName:     (document.getElementById('nr-ln')  || {}).value || '',
      email:        (document.getElementById('nr-em')  || {}).value || '',
      country:      (document.getElementById('nr-co')  || {}).value || '',
      investorType: (document.getElementById('nr-inv') || {}).value || '',
    };

    submitToSheets(payload,
      function () {
        if (msg) { msg.textContent = 'Thank you. First edition arrives this month.'; msg.style.display = 'block'; }
        form.reset();
        if (btn) { btn.disabled = false; btn.textContent = 'Subscribed ✓'; }
      },
      function () {
        if (msg) { msg.textContent = 'Please try WhatsApp instead.'; msg.style.display = 'block'; }
        if (btn) { btn.disabled = false; btn.textContent = 'Subscribe →'; }
      }
    );
  };

  /* ── Exit popup form ────────────────────────────────────── */
  window.vcExitSubmit = function (e) {
    e.preventDefault();
    var form = e.target;
    var name  = form.name  ? form.name.value.trim()  : '';
    var phone = form.phone ? form.phone.value.trim()  : '';
    var email = form.email ? form.email.value.trim()  : '';

    submitToSheets({ type: 'exit-intent', name: name, phone: phone, email: email },
      function () {
        var fw = document.getElementById('vc-exit-form-wrap');
        var sc = document.getElementById('vc-exit-success');
        if (fw) fw.style.display = 'none';
        if (sc) sc.style.display = 'block';
        sessionStorage.setItem('vc_popup_done', '1');
        setTimeout(function () { window.vcExitClose && window.vcExitClose(); }, 3200);
      }
    );
  };

})();
