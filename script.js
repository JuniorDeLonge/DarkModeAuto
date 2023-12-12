function applyDarkMode() {
  const prefersDarkMode = window.matchMedia(
    "(prefers-color-scheme: dark)"
  ).matches;
  document.body.classList.toggle("dark-mode", prefersDarkMode);
}

applyDarkMode();

window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", applyDarkMode);
