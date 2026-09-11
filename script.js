***********************************************
// Mobile navigation toggle
***********************************************
const navToggle = document.getElementById('navToggle');
const primaryNav = document.getElementById('primaryNav');

if (navToggle && primaryNav) {
  navToggle.addEventListener('click', () => {
    const isOpen = primaryNav.classList.toggle('is-open');
    navToggle.setAttribute('aria-expanded', String(isOpen));
    navToggle.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');
  });

  // Close the menu after choosing a link (mobile)
  primaryNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    });
  });

  // Reset menu state if the viewport grows back to desktop width
  window.addEventListener('resize', () => {
    if (window.innerWidth > 640) {
      primaryNav.classList.remove('is-open');
      navToggle.setAttribute('aria-expanded', 'false');
      navToggle.setAttribute('aria-label', 'Open menu');
    }
  });
}

***********************************************
// Footer contact form (client-side only demo)
***********************************************
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

if (contactForm && formNote) {
  contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const email = contactForm.email.value.trim();
    const isValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!isValid) {
      formNote.textContent = 'That email address does not look quite right \u2014 mind checking it?';
      formNote.style.color = '#C97B63';
      return;
    }

    formNote.textContent = 'Thanks \u2014 I\u2019ll write back within a couple of days.';
    formNote.style.color = '#7C8B6F';
    contactForm.reset();
  });
}

***********************************************
// Footer year
***********************************************
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}
