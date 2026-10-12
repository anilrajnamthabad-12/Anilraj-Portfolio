/**
 * ANIL RAJ - DEVELOPER PORTFOLIO JAVASCRIPT
 * Features:
 * - Accessible Mobile Navigation with ARIA synchronization
 * - ScrollSpy Active Navigation Link Tracking
 * - Client-Side Validated Contact Form with Mailto Fallback
 * - 1-Click Copy Email to Clipboard with UI Feedback
 * - Smooth Back to Top Scroll Control
 * - Dynamic Year Updater
 * - Recruiter Console Greeting
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Mobile Navigation & ARIA State Management
  // -------------------------------------------------------------------------
  const navToggle = document.getElementById('nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (navToggle && navMenu) {
    const toggleMenu = (open) => {
      const isExpanded = open !== undefined ? open : navToggle.getAttribute('aria-expanded') === 'true';
      const newState = !isExpanded;

      navToggle.setAttribute('aria-expanded', String(newState));
      navToggle.classList.toggle('open', newState);
      navMenu.classList.toggle('open', newState);

      // Lock body scroll on small screens when menu is open
      if (window.innerWidth <= 768) {
        document.body.style.overflow = newState ? 'hidden' : '';
      }
    };

    navToggle.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu();
    });

    // Close menu when a navigation link is clicked
    navLinks.forEach((link) => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('open')) {
          toggleMenu(true); // Close it
        }
      });
    });

    // Close menu if clicking outside of the header/menu
    document.addEventListener('click', (e) => {
      if (
        navMenu.classList.contains('open') &&
        !navMenu.contains(e.target) &&
        !navToggle.contains(e.target)
      ) {
        toggleMenu(true);
      }
    });

    // Reset state on window resize
    window.addEventListener('resize', () => {
      if (window.innerWidth > 768 && navMenu.classList.contains('open')) {
        navToggle.setAttribute('aria-expanded', 'false');
        navToggle.classList.remove('open');
        navMenu.classList.remove('open');
        document.body.style.overflow = '';
      }
    });
  }

  // -------------------------------------------------------------------------
  // 2. Active Navigation Link Highlighting (ScrollSpy)
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id]');

  const highlightNavOnScroll = () => {
    const scrollPosition = window.scrollY + 120; // Offset for header

    sections.forEach((section) => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      const sectionId = section.getAttribute('id');
      const targetNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

      if (targetNavLink) {
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          navLinks.forEach((l) => l.classList.remove('active'));
          targetNavLink.classList.add('active');
        }
      }
    });
  };

  window.addEventListener('scroll', highlightNavOnScroll, { passive: true });

  // -------------------------------------------------------------------------
  // 3. Back to Top Button Control
  // -------------------------------------------------------------------------
  const backToTopBtn = document.getElementById('back-to-top');

  if (backToTopBtn) {
    backToTopBtn.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // -------------------------------------------------------------------------
  // 4. Copy Email to Clipboard Functionality
  // -------------------------------------------------------------------------
  const copyEmailBtn = document.getElementById('copy-email-btn');
  const copyText = document.getElementById('copy-text');
  const emailTextEl = document.getElementById('email-text');

  if (copyEmailBtn && copyText && emailTextEl) {
    copyEmailBtn.addEventListener('click', async () => {
      const emailToCopy = emailTextEl.innerText.trim();

      try {
        if (navigator.clipboard && window.isSecureContext) {
          await navigator.clipboard.writeText(emailToCopy);
        } else {
          // Fallback for non-https or older browsers
          const tempInput = document.createElement('input');
          tempInput.value = emailToCopy;
          document.body.appendChild(tempInput);
          tempInput.select();
          document.execCommand('copy');
          document.body.removeChild(tempInput);
        }

        const originalText = copyText.innerText;
        copyText.innerText = 'Copied!';
        copyEmailBtn.classList.add('btn-primary');

        setTimeout(() => {
          copyText.innerText = originalText;
          copyEmailBtn.classList.remove('btn-primary');
        }, 2200);
      } catch (err) {
        console.warn('Unable to copy email automatically:', err);
        // Direct fallback: prompt user
        prompt('Copy email manually:', emailToCopy);
      }
    });
  }

  // -------------------------------------------------------------------------
  // 5. Contact Form Validation & Submission Handler
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const formStatus = document.getElementById('form-status');

  if (contactForm && formStatus) {
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const subjectInput = document.getElementById('subject');
    const messageInput = document.getElementById('message');

    // Email regex validator (RFC 5322 compliant subset)
    const isValidEmail = (email) => {
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

    const validateField = (input, condition) => {
      const parent = input.closest('.form-group');
      if (!condition) {
        parent.classList.add('has-error');
        return false;
      } else {
        parent.classList.remove('has-error');
        return true;
      }
    };

    // Live validation feedback on blur
    nameInput.addEventListener('blur', () => validateField(nameInput, nameInput.value.trim().length > 1));
    emailInput.addEventListener('blur', () => validateField(emailInput, isValidEmail(emailInput.value.trim())));
    subjectInput.addEventListener('blur', () => validateField(subjectInput, subjectInput.value.trim().length > 1));
    messageInput.addEventListener('blur', () => validateField(messageInput, messageInput.value.trim().length > 5));

    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const isNameValid = validateField(nameInput, nameInput.value.trim().length > 1);
      const isEmailValid = validateField(emailInput, isValidEmail(emailInput.value.trim()));
      const isSubjectValid = validateField(subjectInput, subjectInput.value.trim().length > 1);
      const isMessageValid = validateField(messageInput, messageInput.value.trim().length > 5);

      if (!isNameValid || !isEmailValid || !isSubjectValid || !isMessageValid) {
        formStatus.className = 'form-status error';
        formStatus.textContent = 'Please fill out all required fields correctly before submitting.';
        return;
      }

      // Read values
      const name = encodeURIComponent(nameInput.value.trim());
      const email = encodeURIComponent(emailInput.value.trim());
      const subject = encodeURIComponent(subjectInput.value.trim());
      const messageBody = encodeURIComponent(
        `Name: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\n\nMessage:\n${messageInput.value.trim()}`
      );

      // Create fallback mailto link that opens recruiter's default mail client pre-filled
      const recipient = emailTextEl.innerText.trim();
      const mailtoUrl = `mailto:${recipient}?subject=${subject}&body=${messageBody}`;

      // User feedback
      formStatus.className = 'form-status success';
      formStatus.innerHTML = `
        <strong>Thank you, ${nameInput.value.trim()}!</strong><br />
        Opening your email client to dispatch the message to <code>${recipient}</code>...<br />
        <em>(If no window opened automatically, you can send an email directly using the buttons on the left.)</em>
      `;

      // Trigger mail client
      setTimeout(() => {
        window.location.href = mailtoUrl;
      }, 500);

      // Reset form
      contactForm.reset();
    });
  }

  // -------------------------------------------------------------------------
  // 6. Dynamic Copyright Year
  // -------------------------------------------------------------------------
  const currentYearEl = document.getElementById('current-year');
  if (currentYearEl) {
    currentYearEl.textContent = new Date().getFullYear();
  }

  // -------------------------------------------------------------------------
  // 7. Recruiter Console Greeting & Information
  // -------------------------------------------------------------------------
  const consoleGreetingStyle = `
    color: #6366f1;
    font-size: 14px;
    font-weight: 800;
    padding: 6px 0;
  `;
  const consoleBodyStyle = `
    color: #38bdf8;
    font-size: 12px;
    font-weight: 500;
  `;

  console.log('%c👋 Hi there! Thanks for inspecting my portfolio code.', consoleGreetingStyle);
  console.log('%c🚀 I am Anil Raj, an aspiring Python Full Stack Developer & Graduate Fresher.', consoleBodyStyle);
  console.log('%c📂 Source code: 100% vanilla HTML5, CSS3, & Modern JS with zero external framework bloat.', consoleBodyStyle);
  console.log('%c📫 Looking to discuss an entry-level software opportunity? Feel free to reach out!', consoleGreetingStyle);
});
