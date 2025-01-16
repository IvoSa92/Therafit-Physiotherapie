// Klasse für animierte Elemente
const ANIMATE_CLASS = "will-animate";
const ANIMATED_CLASS = "is-animated";

// Konfiguration für den Intersection Observer
const observerOptions = {
  root: null, // viewport als root
  threshold: 0.1, // Animation startet wenn 10% des Elements sichtbar sind
  rootMargin: "0px",
};

// Callback für den Observer
const observerCallback = (entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add(ANIMATED_CLASS);
      observer.unobserve(entry.target); // Beobachtung beenden nach Animation
    }
  });
};

// Observer erstellen
const observer = new IntersectionObserver(observerCallback, observerOptions);

// Alle zu animierenden Elemente beobachten
document.addEventListener("DOMContentLoaded", () => {
  // Selektiere alle Elemente die animiert werden sollen
  const elements = document.querySelectorAll(
    ".cs-title, .cs-text, .cs-item, .cs-card, .cs-topper, " +
      ".cs-image, .cs-picture, .cs-content, .cs-stat, .cs-flex, " +
      ".cs-box, .cs-ul, .cs-li, .cs-h1, .cs-h2, .cs-h3, p, img"
  );

  elements.forEach((element) => {
    element.classList.add(ANIMATE_CLASS);
    observer.observe(element);
  });
});
