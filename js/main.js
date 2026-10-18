// Mobile menu
const menuToggle = document.querySelector(".menu-toggle");
const nav = document.getElementById("nav");

function setMenu(open) {
  nav.classList.toggle("open", open);
  menuToggle.setAttribute("aria-expanded", String(open));
}

menuToggle.addEventListener("click", () => {
  setMenu(menuToggle.getAttribute("aria-expanded") !== "true");
});

nav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => setMenu(false));
});

// Dark mode toggle (the starting mode is set by the inline script in <head>)
const modeToggle = document.querySelector(".mode-toggle");

function updateModeToggle() {
  modeToggle.setAttribute("aria-pressed", String(document.documentElement.dataset.mode === "dark"));
}

modeToggle.addEventListener("click", () => {
  const dark = document.documentElement.dataset.mode !== "dark";
  if (dark) document.documentElement.dataset.mode = "dark";
  else delete document.documentElement.dataset.mode;
  try {
    localStorage.setItem("mode", dark ? "dark" : "light");
  } catch (e) {
    /* storage blocked: the choice just won't be remembered */
  }
  updateModeToggle();
});
updateModeToggle();

// Header shadow after scrolling
const header = document.querySelector(".site-header");
function updateHeader() {
  header.classList.toggle("scrolled", window.scrollY > 10);
}
window.addEventListener("scroll", updateHeader, { passive: true });
updateHeader();

// Fade sections in as they scroll into view.
// content.js calls observeReveals() again after it adds new elements.
const revealObserver = "IntersectionObserver" in window
  ? new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 })
  : null;

function observeReveals() {
  document.querySelectorAll(".reveal:not(.visible)").forEach((node) => {
    if (revealObserver) revealObserver.observe(node);
    else node.classList.add("visible");
  });
}
observeReveals();

// Gallery lightbox (delegated, because gallery images are added by content.js)
const lightbox = document.getElementById("lightbox");
const lightboxImg = lightbox.querySelector("img");

function openLightbox(src, alt) {
  lightboxImg.src = src;
  lightboxImg.alt = alt;
  lightbox.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightbox.hidden = true;
  lightboxImg.src = "";
  document.body.style.overflow = "";
}

document.getElementById("gallery-grid").addEventListener("click", (e) => {
  const item = e.target.closest(".gallery-item");
  if (!item) return;
  const img = item.querySelector("img");
  openLightbox(img.src, img.alt);
});

lightbox.addEventListener("click", closeLightbox);
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") {
    if (!lightbox.hidden) closeLightbox();
    setMenu(false);
  }
});

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();
