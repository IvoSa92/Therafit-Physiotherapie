// Helper functions to toggle dark mode
function enableDarkMode() {
  document.body.classList.add("dark-mode");
  // document.querySelector("#sbs-2170").style.display =
  //   "url('../svgs/team-dark.svg')";
}

function disableDarkMode() {
  document.body.classList.remove("dark-mode");
  // document.querySelector("#sbs-2170").style.backgroundImage =
  //   "url('../svgs/team-svg.svg')";
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
