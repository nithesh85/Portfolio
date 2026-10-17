/**
 * NITHESH DEVELOPER PORTFOLIO - CORE JAVASCRIPT
 * Accessible, Vanilla ES6+ Interactive Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  'use strict';

  // -------------------------------------------------------------------------
  // 1. Theme Management (Light Theme Default with LocalStorage Persistence)
  // -------------------------------------------------------------------------
  const themeToggleBtn = document.getElementById('theme-toggle');
  const htmlRoot = document.documentElement;

  // Retrieve saved theme or fallback to 'light' (default specification)
  const savedTheme = localStorage.getItem('nithesh-portfolio-theme') || 'light';
  applyTheme(savedTheme);

  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      const currentTheme = htmlRoot.getAttribute('data-theme') || 'light';
      const newTheme = currentTheme === 'light' ? 'dark' : 'light';
      applyTheme(newTheme);
      showToast(`Switched to ${newTheme === 'dark' ? 'Dark' : 'Light'} theme`);
    });
  }

  function applyTheme(theme) {
    htmlRoot.setAttribute('data-theme', theme);
    localStorage.setItem('nithesh-portfolio-theme', theme);
    if (themeToggleBtn) {
      themeToggleBtn.setAttribute(
        'aria-label',
        `Switch to ${theme === 'light' ? 'dark' : 'light'} theme`
      );
    }
  }

  // -------------------------------------------------------------------------
  // 2. Mobile Drawer Navigation
  // -------------------------------------------------------------------------
  const mobileMenuToggle = document.getElementById('mobile-menu-toggle');
  const mobileDrawer = document.getElementById('mobile-drawer');
  const drawerCloseBtn = document.getElementById('drawer-close');
  const drawerBackdrop = document.getElementById('drawer-backdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');
  const mobileResumeBtn = document.getElementById('mobile-resume-btn');

  function openMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.add('open');
    mobileDrawer.setAttribute('aria-hidden', 'false');
    if (drawerBackdrop) drawerBackdrop.classList.add('active');
    if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'true');
    document.body.style.overflow = 'hidden';
  }

  function closeMobileMenu() {
    if (!mobileDrawer) return;
    mobileDrawer.classList.remove('open');
    mobileDrawer.setAttribute('aria-hidden', 'true');
    if (drawerBackdrop) drawerBackdrop.classList.remove('active');
    if (mobileMenuToggle) mobileMenuToggle.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  }

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      isOpen ? closeMobileMenu() : openMobileMenu();
    });
  }

  if (drawerCloseBtn) drawerCloseBtn.addEventListener('click', closeMobileMenu);
  if (drawerBackdrop) drawerBackdrop.addEventListener('click', closeMobileMenu);

  mobileNavLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeMobileMenu();
    });
  });

  // -------------------------------------------------------------------------
  // 3. Active Navigation Link Highlighting on Scroll
  // -------------------------------------------------------------------------
  const sections = document.querySelectorAll('section[id], header[id="hero"]');
  const navLinks = document.querySelectorAll('.nav-link');

  const observerOptions = {
    root: null,
    rootMargin: '-20% 0px -70% 0px',
    threshold: 0
  };

  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        updateActiveLink(id);
      }
    });
  }, observerOptions);

  sections.forEach((section) => sectionObserver.observe(section));

  function updateActiveLink(activeId) {
    navLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });

    mobileNavLinks.forEach((link) => {
      const href = link.getAttribute('href');
      if (href === `#${activeId}`) {
        link.classList.add('active');
      } else {
        link.classList.remove('active');
      }
    });
  }

  // -------------------------------------------------------------------------
  // 4. Learning Journey Category Tabs Filter
  // -------------------------------------------------------------------------
  const filterBtns = document.querySelectorAll('.filter-btn');
  const journeyCards = document.querySelectorAll('.journey-card');

  filterBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      filterBtns.forEach((b) => {
        b.classList.remove('active');
        b.setAttribute('aria-selected', 'false');
      });
      btn.classList.add('active');
      btn.setAttribute('aria-selected', 'true');

      const filterValue = btn.getAttribute('data-filter');

      journeyCards.forEach((card) => {
        const cardCategory = card.getAttribute('data-category');
        if (filterValue === 'all' || cardCategory === filterValue) {
          card.style.display = 'flex';
          card.style.opacity = '0';
          setTimeout(() => {
            card.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
            card.style.opacity = '1';
          }, 10);
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // -------------------------------------------------------------------------
  // 5. Resume Preview & Download Modal
  // -------------------------------------------------------------------------
  const resumeModal = document.getElementById('resume-modal');
  const openResumeBtn = document.getElementById('open-resume-btn');
  const heroResumeTrigger = document.getElementById('hero-resume-trigger');
  const modalCloseBtn = document.getElementById('modal-close-btn');
  const modalPrintBtn = document.getElementById('modal-print-btn');

  function openResume() {
    if (!resumeModal) return;
    resumeModal.classList.add('open');
    resumeModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    if (modalCloseBtn) modalCloseBtn.focus();
  }

  function closeResume() {
    if (!resumeModal) return;
    resumeModal.classList.remove('open');
    resumeModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  if (openResumeBtn) openResumeBtn.addEventListener('click', openResume);
  if (heroResumeTrigger) heroResumeTrigger.addEventListener('click', openResume);
  if (mobileResumeBtn) {
    mobileResumeBtn.addEventListener('click', () => {
      closeMobileMenu();
      openResume();
    });
  }
  if (modalCloseBtn) modalCloseBtn.addEventListener('click', closeResume);

  // Close modal when clicking outside dialog window
  if (resumeModal) {
    resumeModal.addEventListener('click', (e) => {
      if (e.target === resumeModal) {
        closeResume();
      }
    });
  }

  // Print / Save as PDF
  if (modalPrintBtn) {
    modalPrintBtn.addEventListener('click', () => {
      window.print();
    });
  }

  // Escape key listener for modal and mobile menu
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      if (resumeModal && resumeModal.classList.contains('open')) {
        closeResume();
      }
      if (mobileDrawer && mobileDrawer.classList.contains('open')) {
        closeMobileMenu();
      }
    }
  });

  // -------------------------------------------------------------------------
  // 6. Copy to Clipboard Functionality
  // -------------------------------------------------------------------------
  const copyBtns = document.querySelectorAll('.copy-btn');

  copyBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
      const textToCopy = btn.getAttribute('data-copy');
      if (!textToCopy) return;

      if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(textToCopy).then(() => {
          showToast(`Copied to clipboard: ${textToCopy}`);
        }).catch(() => {
          fallbackCopyText(textToCopy);
        });
      } else {
        fallbackCopyText(textToCopy);
      }
    });
  });

  function fallbackCopyText(text) {
    const tempInput = document.createElement('input');
    tempInput.value = text;
    document.body.appendChild(tempInput);
    tempInput.select();
    try {
      document.execCommand('copy');
      showToast(`Copied to clipboard: ${text}`);
    } catch (err) {
      showToast('Could not copy automatically');
    }
    document.body.removeChild(tempInput);
  }

  // -------------------------------------------------------------------------
  // 7. Interactive Contact Form with Validation & Formatted Mailto Trigger
  // -------------------------------------------------------------------------
  const contactForm = document.getElementById('contact-form');
  const nameInput = document.getElementById('sender-name');
  const emailInput = document.getElementById('sender-email');
  const subjectInput = document.getElementById('sender-subject');
  const messageInput = document.getElementById('sender-message');

  const nameError = document.getElementById('name-error');
  const emailError = document.getElementById('email-error');
  const subjectError = document.getElementById('subject-error');
  const messageError = document.getElementById('message-error');

  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      let isValid = true;

      // Validate Name
      if (!nameInput.value.trim()) {
        nameInput.classList.add('is-invalid');
        nameError.classList.add('visible');
        isValid = false;
      } else {
        nameInput.classList.remove('is-invalid');
        nameError.classList.remove('visible');
      }

      // Validate Email
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailInput.value.trim() || !emailRegex.test(emailInput.value.trim())) {
        emailInput.classList.add('is-invalid');
        emailError.classList.add('visible');
        isValid = false;
      } else {
        emailInput.classList.remove('is-invalid');
        emailError.classList.remove('visible');
      }

      // Validate Subject
      if (!subjectInput.value) {
        subjectInput.classList.add('is-invalid');
        subjectError.classList.add('visible');
        isValid = false;
      } else {
        subjectInput.classList.remove('is-invalid');
        subjectError.classList.remove('visible');
      }

      // Validate Message (min 10 characters)
      if (!messageInput.value.trim() || messageInput.value.trim().length < 10) {
        messageInput.classList.add('is-invalid');
        messageError.classList.add('visible');
        isValid = false;
      } else {
        messageInput.classList.remove('is-invalid');
        messageError.classList.remove('visible');
      }

      if (isValid) {
        const senderName = encodeURIComponent(nameInput.value.trim());
        const senderEmail = encodeURIComponent(emailInput.value.trim());
        const subject = encodeURIComponent(`[Portfolio Inquiry] ${subjectInput.value} - from ${nameInput.value.trim()}`);
        const bodyContent = encodeURIComponent(
          `Hello Nithesh,\n\n${messageInput.value.trim()}\n\n---\nSender: ${nameInput.value.trim()}\nEmail: ${emailInput.value.trim()}\nInquiry Type: ${subjectInput.value}`
        );

        const mailtoUrl = `mailto:nitheshmca@gmail.com?subject=${subject}&body=${bodyContent}`;

        showToast('Message validated! Opening your email client...');

        // Trigger default email client after brief visual feedback
        setTimeout(() => {
          window.location.href = mailtoUrl;
        }, 350);

        // Reset form
        contactForm.reset();
      }
    });

    // Clear validation feedback on input
    [nameInput, emailInput, subjectInput, messageInput].forEach((input) => {
      if (input) {
        input.addEventListener('input', () => {
          input.classList.remove('is-invalid');
          const err = document.getElementById(`${input.id.replace('sender-', '')}-error`);
          if (err) err.classList.remove('visible');
        });
      }
    });
  }

  // -------------------------------------------------------------------------
  // 8. Toast Feedback Utility
  // -------------------------------------------------------------------------
  let toastTimeout;
  const toastEl = document.getElementById('toast');

  function showToast(message) {
    if (!toastEl) return;
    toastEl.textContent = message;
    toastEl.classList.add('show');

    clearTimeout(toastTimeout);
    toastTimeout = setTimeout(() => {
      toastEl.classList.remove('show');
    }, 3800);
  }

  // -------------------------------------------------------------------------
  // 9. Dynamic Year Update
  // -------------------------------------------------------------------------
  const currentYearSpan = document.getElementById('current-year');
  if (currentYearSpan) {
    const year = new Date().getFullYear();
    if (year >= 2026) {
      currentYearSpan.textContent = year;
    }
  }

});
