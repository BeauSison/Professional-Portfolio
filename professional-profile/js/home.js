// Home Page Specific JavaScript

document.addEventListener("DOMContentLoaded", () => {
  // Parallax effect for hero section
  const hero = document.querySelector(".hero")

  if (hero) {
    window.addEventListener("scroll", () => {
      const scrolled = window.pageYOffset
      const parallaxSpeed = 0.5
      hero.style.transform = `translateY(${scrolled * parallaxSpeed}px)`
    })
  }

  // Animate stats on scroll
  const stats = document.querySelectorAll(".stat-number")
  let animated = false

  function animateStats() {
    if (animated) return

    const statsSection = document.querySelector(".bio-stats")
    if (!statsSection) return

    const rect = statsSection.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

    if (isVisible) {
      animated = true
      stats.forEach((stat) => {
        const target = stat.textContent
        const isNumber = target.match(/\d+/)

        if (isNumber) {
          const number = Number.parseInt(isNumber[0])
          const suffix = target.replace(/\d+/, "")
          let current = 0
          const increment = number / 50
          const timer = setInterval(() => {
            current += increment
            if (current >= number) {
              stat.textContent = number + suffix
              clearInterval(timer)
            } else {
              stat.textContent = Math.floor(current) + suffix
            }
          }, 30)
        }
      })
    }
  }

  window.addEventListener("scroll", animateStats)
  animateStats() // Check on load

  // Highlight cards hover effect
  const highlightCards = document.querySelectorAll(".highlight-card")
  highlightCards.forEach((card) => {
    card.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-10px) scale(1.02)"
    })

    card.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0) scale(1)"
    })
  })
})
