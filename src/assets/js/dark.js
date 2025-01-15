// Helper functions to toggle dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  const logo = document.querySelector(".cs-logo img");
  logo.src = "assets/svgs/Therafit-Logo-Dark.svg";

  const footerLogo = document.querySelector(".footer-logo img");
  footerLogo.src = "assets/svgs/Therafit-Logo-Dark.svg";
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  const logo = document.querySelector(".cs-logo img");
  logo.src = "assets/svgs/Therafit-Logo.svg";

  const footerLogo = document.querySelector(".footer-logo img");
  footerLogo.src = "assets/svgs/Therafit-Logo.svg";
}

// Function to detect and apply the saved theme
function detectColorScheme() {
  let theme = "light";

  // Apply the theme
  if (theme === "dark") {
    enableDarkMode();
  } else {
    disableDarkMode();
  }
}

//function to change Logo Icon
function changeLogoIcon() {
  const logo = document.querySelector(".cs-logo img");
  logo.src = "assets/svgs/Therafit-Logo-Dark.svg";
}

// Initialize theme on page load
document.addEventListener("DOMContentLoaded", () => {
  detectColorScheme();

  const darkModeToggle = document.getElementById("dark-mode-toggle");
  if (darkModeToggle) {
    darkModeToggle.addEventListener("change", (e) => {
      e.target.checked ? enableDarkMode() : disableDarkMode();
    });
  }
});
``;
