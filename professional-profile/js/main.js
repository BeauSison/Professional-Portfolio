// Main JavaScript for Professional Profile Website

// Mobile Menu Toggle
document.addEventListener("DOMContentLoaded", () => {
  const mobileMenuToggle = document.querySelector(".mobile-menu-toggle")
  const navMenu = document.querySelector(".nav-menu")

  if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener("click", function () {
      navMenu.classList.toggle("active")
      this.classList.toggle("active")
    })
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", (event) => {
    const isClickInsideNav = event.target.closest(".navbar")
    if (!isClickInsideNav && navMenu && navMenu.classList.contains("active")) {
      navMenu.classList.remove("active")
      if (mobileMenuToggle) {
        mobileMenuToggle.classList.remove("active")
      }
    }
  })

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      const href = this.getAttribute("href")
      if (href !== "#" && href !== "#!") {
        e.preventDefault()
        const target = document.querySelector(href)
        if (target) {
          target.scrollIntoView({
            behavior: "smooth",
            block: "start",
          })
        }
      }
    })
  })

  // Add scroll effect to navbar
  let lastScroll = 0
  const navbar = document.querySelector(".navbar")

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset

    if (currentScroll > 100) {
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.8)"
    } else {
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.5)"
    }

    lastScroll = currentScroll
  })

  // Fade in elements on scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px",
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = "1"
        entry.target.style.transform = "translateY(0)"
      }
    })
  }, observerOptions)

  // Observe elements with fade-in class
  document
    .querySelectorAll(
      ".fade-in-up, .timeline-item, .experience-item, .highlight-card, .achievement-card, .certification-card",
    )
    .forEach((el) => {
      el.style.opacity = "0"
      el.style.transform = "translateY(30px)"
      el.style.transition = "opacity 0.6s ease, transform 0.6s ease"
      observer.observe(el)
    })
})
