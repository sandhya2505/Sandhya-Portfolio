function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}

// script.js
document.getElementById("theme-toggle").addEventListener("click", () => {
  document.body.classList.toggle("night-theme");
  document.body.classList.toggle("day-theme");
});

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
}

toggleButton.addEventListener("click", () => {
  // Toggle between light and dark themes
  if (body.classList.contains("light-theme")) {
    body.classList.replace("light-theme", "dark-theme");
    localStorage.setItem("theme", "dark-theme");
  } else {
    body.classList.replace("dark-theme", "light-theme");
    localStorage.setItem("theme", "light-theme");
  }
});
