// Funktion zum Überprüfen und Setzen des Themes
function detectAndSetTheme() {
  // Prüfe gespeichertes Theme aus localStorage
  const savedTheme = localStorage.getItem("theme");

  if (savedTheme) {
    // Wenn ein Theme gespeichert ist, verwende dieses
    document.body.classList.toggle("dark-mode", savedTheme === "dark");
  } else {
    // Prüfe System-Einstellung
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("dark-mode", prefersDark);
    // Speichere die Präferenz
    localStorage.setItem("theme", prefersDark ? "dark" : "light");
  }
}

// Führe die Erkennung beim Laden der Seite aus
detectAndSetTheme();

// Höre auf Änderungen der System-Einstellung
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (e) => {
    const newTheme = e.matches ? "dark" : "light";
    document.body.classList.toggle("dark-mode", e.matches);
    localStorage.setItem("theme", newTheme);
  });
