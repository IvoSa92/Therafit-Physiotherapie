// Helper functions to toggle dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  saveTheme("dark");
  const logo = document.querySelector(".cs-logo img");
  logo.src = "assets/svgs/Therafit-Logo-Dark.svg";

  const footerLogo = document.querySelector(".footer-logo img");
  footerLogo.src = "assets/svgs/Therafit-Logo-Dark.svg";
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  saveTheme("light");
  const logo = document.querySelector(".cs-logo img");
  logo.src = "assets/svgs/Therafit-Logo.svg";

  const footerLogo = document.querySelector(".footer-logo img");
  footerLogo.src = "assets/svgs/Therafit-Logo.svg";
}

// Function to detect and apply the saved theme
function detectColorScheme() {
  const savedTheme = getTheme();
  const osDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const theme = savedTheme || (osDark ? "dark" : "light");

  if (theme === "dark") {
    enableDarkMode();
    document.querySelector(".dark-mode-toggle-input").checked = true;
  } else {
    disableDarkMode();
    document.querySelector(".dark-mode-toggle-input").checked = false;
  }
}

// save theme to local storage
function saveTheme(theme) {
  localStorage.setItem("theme", theme);
  console.log("theme saved to local storage", theme);
}
// get theme from local storage
function getTheme() {
  return localStorage.getItem("theme");
}

//function to change Logo Icon
function changeLogoIcon() {
  const logo = document.querySelector(".cs-logo img");
  logo.src = "assets/svgs/Therafit-Logo-Dark.svg";
}

//dark mode toggle position
function darkModeTogglePosition() {
  const darkModeToggle = document.querySelector(".dark-mode-toggle-input");
  let currentTheme = getTheme();
  if (currentTheme === "dark") {
    console.log("dark mode toggle position", currentTheme);
    darkModeToggle.checked = true;
  } else {
    console.log("dark mode toggle position", currentTheme);
    darkModeToggle.checked = false;
  }
}

document.addEventListener("DOMContentLoaded", () => {
  // Theme initialisieren
  detectColorScheme();

  // Toggle-Event-Listener hinzufügen
  const darkModeToggle = document.querySelector(".dark-mode-toggle-input");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", (e) => {
      e.target.checked ? enableDarkMode() : disableDarkMode();
    });
  }
});
