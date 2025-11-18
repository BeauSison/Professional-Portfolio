// Skills Page JavaScript - Animate skill bars

document.addEventListener("DOMContentLoaded", () => {
  const skillBars = document.querySelectorAll(".skill-progress")
  let animated = false

  function animateSkillBars() {
    if (animated) return

    const skillsSection = document.querySelector(".skills-section")
    if (!skillsSection) return

    const rect = skillsSection.getBoundingClientRect()
    const isVisible = rect.top < window.innerHeight && rect.bottom >= 0

    if (isVisible) {
      animated = true
      skillBars.forEach((bar, index) => {
        setTimeout(() => {
          const progress = bar.getAttribute("data-progress")
          bar.style.width = progress + "%"
        }, index * 100)
      })
    }
  }

  window.addEventListener("scroll", animateSkillBars)
  animateSkillBars() // Check on load

  // Add hover effect to skill categories
  const skillCategories = document.querySelectorAll(".skill-category")
  skillCategories.forEach((category) => {
    category.addEventListener("mouseenter", function () {
      this.style.transform = "translateY(-5px)"
    })

    category.addEventListener("mouseleave", function () {
      this.style.transform = "translateY(0)"
    })
  })

  // Soft skill cards animation
  const softSkillCards = document.querySelectorAll(".soft-skill-card")
  softSkillCards.forEach((card, index) => {
    card.style.animationDelay = `${index * 0.1}s`
  })
})
