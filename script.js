document.addEventListener("DOMContentLoaded", () => {
  const yearEl = document.getElementById("year");
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear().toString();
  }

  // Smooth scroll for buttons using data-scroll-target
  document.querySelectorAll("[data-scroll-target]").forEach((button) => {
    button.addEventListener("click", () => {
      const target = button.getAttribute("data-scroll-target");
      if (!target) return;
      const el = document.querySelector(target);
      if (!el) return;

      const rect = el.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 70; // header offset
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    });
  });

  // Smooth scroll for nav links
  document.querySelectorAll(".nav-links a[href^='#']").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault();
      const href = link.getAttribute("href");
      if (!href) return;
      const target = document.querySelector(href);
      if (!target) return;

      const rect = target.getBoundingClientRect();
      const offsetTop = window.pageYOffset + rect.top - 70;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });

      // Close mobile nav after click
      const navLinks = document.querySelector(".nav-links");
      if (navLinks && navLinks.classList.contains("open")) {
        navLinks.classList.remove("open");
      }
    });
  });

  // Mobile nav toggle
  const navToggle = document.querySelector(".nav-toggle");
  const navLinks = document.querySelector(".nav-links");
  if (navToggle && navLinks) {
    navToggle.addEventListener("click", () => {
      navLinks.classList.toggle("open");
    });
  }

  // Simple contact form handling (frontend only)
  const contactForm = document.getElementById("contact-form");
  const statusEl = document.getElementById("form-status");

  if (contactForm && statusEl) {
    contactForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const formData = new FormData(contactForm);
      const name = formData.get("name");

      statusEl.textContent =
        "Thanks" +
        (name ? `, ${String(name).trim()}` : "") +
        "! Your message has been captured locally. Connect this form to your backend or email service to receive submissions.";

      contactForm.reset();
    });
  }
});

