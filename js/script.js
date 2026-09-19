/* ===================================================================
   Surya & Jyothika — Nikkah Invitation
   =================================================================== */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- Envelope open ---------- */
  var overlay = document.getElementById('envelopeOverlay');
  var sealButton = document.getElementById('sealButton');
  var bgMusic = document.getElementById('bgMusic');

  document.body.classList.add('locked');

  function openEnvelope() {
    if (overlay.classList.contains('opened')) return;
    overlay.classList.add('opened');
    document.body.classList.remove('locked');

    // Reveal happens after the flap + fade animation finishes.
    window.setTimeout(function () {
      overlay.style.display = 'none';
    }, 750);
  }

  sealButton.addEventListener('click', openEnvelope);
  sealButton.addEventListener('keyup', function (e) {
    if (e.key === 'Enter' || e.key === ' ') openEnvelope();
  });

  /* ---------- Date reveal cards ---------- */
  var overlays = document.querySelectorAll('.date-card-overlay');

  overlays.forEach(function (el) {
    function reveal(clientX, clientY) {
      if (el.classList.contains('revealed')) return;
      var rect = el.getBoundingClientRect();
      var px = ((clientX - rect.left) / rect.width) * 100;
      var py = ((clientY - rect.top) / rect.height) * 100;
      el.style.setProperty('--px', px + '%');
      el.style.setProperty('--py', py + '%');
      el.classList.add('revealed');
    }

    el.addEventListener('pointerdown', function (e) {
      reveal(e.clientX, e.clientY);
    });

    el.addEventListener('keyup', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        var rect = el.getBoundingClientRect();
        reveal(rect.left + rect.width / 2, rect.top + rect.height / 2);
      }
    });
  });

  /* ---------- Countdown ---------- */
  // Target: 14th December 2026, 9:00 AM IST (Chennai, +05:30)
  var targetDate = new Date('2026-12-14T09:00:00+05:30').getTime();

  var elDays = document.getElementById('cd-days');
  var elHours = document.getElementById('cd-hours');
  var elMins = document.getElementById('cd-mins');
  var elSecs = document.getElementById('cd-secs');

  function pad(n) {
    return String(n).padStart(2, '0');
  }

  function updateCountdown() {
    var now = new Date().getTime();
    var diff = targetDate - now;

    if (diff <= 0) {
      elDays.textContent = '00';
      elHours.textContent = '00';
      elMins.textContent = '00';
      elSecs.textContent = '00';
      return;
    }

    var days = Math.floor(diff / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    var mins = Math.floor((diff / (1000 * 60)) % 60);
    var secs = Math.floor((diff / 1000) % 60);

    elDays.textContent = pad(days);
    elHours.textContent = pad(hours);
    elMins.textContent = pad(mins);
    elSecs.textContent = pad(secs);
  }

  updateCountdown();
  window.setInterval(updateCountdown, 1000);

  /* ---------- Music toggle (off by default) ---------- */
  var musicToggle = document.getElementById('musicToggle');
  var musicIcon = document.getElementById('musicIcon');
  var isPlaying = false;

  musicToggle.addEventListener('click', function () {
    if (!bgMusic) return;

    if (isPlaying) {
      bgMusic.pause();
      isPlaying = false;
      musicToggle.setAttribute('aria-pressed', 'false');
      musicToggle.setAttribute('aria-label', 'Play background music');
      musicIcon.textContent = '♪';
    } else {
      bgMusic.play().catch(function () {
        /* Autoplay/interaction restrictions — ignore silently. */
      });
      isPlaying = true;
      musicToggle.setAttribute('aria-pressed', 'true');
      musicToggle.setAttribute('aria-label', 'Pause background music');
      musicIcon.textContent = '❚❚';
    }
  });

});
