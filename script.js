// Mobile menu toggle
function toggleMenu() {
  const menu = document.getElementById("nav-menu")
  menu.classList.toggle("active")
}

// Close mobile menu when clicking outside
document.addEventListener("click", (event) => {
  const menu = document.getElementById("nav-menu")
  const toggle = document.querySelector(".menu-toggle")

  if (menu && toggle && !menu.contains(event.target) && !toggle.contains(event.target)) {
    menu.classList.remove("active")
  }
})

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})
