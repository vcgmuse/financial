/**
 * Green Ink Financial Wellness — Vanilla JS
 * Lead form handling, hamburger menu, and scroll effects
 */

(function () {
  'use strict';

  var hamburgerBtn = document.getElementById('hamburger-btn');
  var navMenu = document.getElementById('nav-menu');
  var header = document.querySelector('.header');

  // ==========================================
  // 1. Transparent Header Scroll Effect
  // ==========================================
  window.addEventListener('scroll', function () {
    if (header) {
      // Trigger the frosted glass effect after scrolling 50px down
      if (window.scrollY > 50) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  });

  // ==========================================
  // 2. Mobile Hamburger Menu
  // ==========================================
  function isNavOpen() {
    return header && header.classList.contains('nav-open');
  }

  function closeNav() {
    if (!header) return;
    header.classList.remove('nav-open');
    document.documentElement.style.overflow = '';
    document.body.style.overflow = '';
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'false');
      hamburgerBtn.setAttribute('aria-label', 'Open menu');
      hamburgerBtn.blur();
    }
  }

  function openNav() {
    if (!header) return;
    header.classList.add('nav-open');
    document.documentElement.style.overflow = 'hidden';
    document.body.style.overflow = 'hidden';
    if (hamburgerBtn) {
      hamburgerBtn.setAttribute('aria-expanded', 'true');
      hamburgerBtn.setAttribute('aria-label', 'Close menu');
    }
  }

  if (hamburgerBtn && header) {
    hamburgerBtn.addEventListener('click', function () {
      if (isNavOpen()) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close when clicking a nav link (for same-page anchors)
    if (navMenu) {
      navMenu.querySelectorAll('.nav a').forEach(function (link) {
        link.addEventListener('click', function () {
          closeNav();
        });
      });
      navMenu.querySelectorAll('.btn-accent').forEach(function (btn) {
        btn.addEventListener('click', function () {
          closeNav();
        });
      });
    }

    document.addEventListener('keydown', function (e) {
      if (e.key === 'Escape' && isNavOpen()) {
        closeNav();
      }
    });

    // Close when resizing to desktop so we don't get stuck
    window.addEventListener('resize', function () {
      if (window.matchMedia('(min-width: 768px)').matches && isNavOpen()) {
        closeNav();
      }
    });
  }

  // ==========================================
  // 3. Lead Magnet Form (Mockup)
  // ==========================================
  var leadForm = document.getElementById('lead-form');
  var leadMessage = document.getElementById('lead-message');

  if (leadForm && leadMessage) {
    leadForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var input = leadForm.querySelector('#email');
      var email = input && input.value ? input.value.trim() : '';

      if (!email) {
        leadMessage.textContent = 'Please enter your email address.';
        leadMessage.classList.add('error');
        leadMessage.hidden = false;
        return;
      }

      // Basic email format check
      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        leadMessage.textContent = 'Please enter a valid email address.';
        leadMessage.classList.add('error');
        leadMessage.hidden = false;
        return;
      }

      // Wireframe: no backend — show success message.
      leadMessage.textContent = 'Thanks! Check your email for the free guide.';
      leadMessage.classList.remove('error');
      leadMessage.hidden = false;
      input.value = '';
    });
  }

  // ==========================================
  // 4. Schedule Consultation Form (Mockup)
  // ==========================================
  var scheduleForm = document.getElementById('schedule-form');
  var scheduleMessage = document.getElementById('schedule-message');
  var scheduleDateInput = document.getElementById('schedule-date');

  if (scheduleDateInput) {
    var today = new Date();
    var y = today.getFullYear();
    var m = String(today.getMonth() + 1).padStart(2, '0');
    var d = String(today.getDate()).padStart(2, '0');
    scheduleDateInput.min = y + '-' + m + '-' + d;
  }

  if (scheduleForm && scheduleMessage) {
    scheduleForm.addEventListener('submit', function (e) {
      e.preventDefault();

      var dateEl = scheduleForm.querySelector('#schedule-date');
      var timeEl = scheduleForm.querySelector('input[name="time"]:checked');
      var nameEl = scheduleForm.querySelector('#schedule-name');
      var emailEl = scheduleForm.querySelector('#schedule-email');

      var date = dateEl && dateEl.value ? dateEl.value.trim() : '';
      var time = timeEl ? timeEl.value : '';
      var name = nameEl && nameEl.value ? nameEl.value.trim() : '';
      var email = emailEl && emailEl.value ? emailEl.value.trim() : '';

      if (!date) {
        scheduleMessage.textContent = 'Please select a date.';
        scheduleMessage.classList.add('error');
        scheduleMessage.hidden = false;
        return;
      }
      if (!time) {
        scheduleMessage.textContent = 'Please select a time.';
        scheduleMessage.classList.add('error');
        scheduleMessage.hidden = false;
        return;
      }
      if (!name) {
        scheduleMessage.textContent = 'Please enter your name.';
        scheduleMessage.classList.add('error');
        scheduleMessage.hidden = false;
        return;
      }
      if (!email) {
        scheduleMessage.textContent = 'Please enter your email.';
        scheduleMessage.classList.add('error');
        scheduleMessage.hidden = false;
        return;
      }

      var re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!re.test(email)) {
        scheduleMessage.textContent = 'Please enter a valid email address.';
        scheduleMessage.classList.add('error');
        scheduleMessage.hidden = false;
        return;
      }

      // Mockup: show confirmation. 
      scheduleMessage.textContent = 'Request received! (Demo only—replace with Calendly or your booking tool for real scheduling.)';
      scheduleMessage.classList.remove('error');
      scheduleMessage.hidden = false;
      scheduleForm.reset();
      
      if (scheduleDateInput) {
        var t = new Date();
        scheduleDateInput.min = t.getFullYear() + '-' + String(t.getMonth() + 1).padStart(2, '0') + '-' + String(t.getDate()).padStart(2, '0');
      }
    });
  }
})();