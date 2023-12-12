class DarkModeHandler {
  constructor() {
    this.applyDarkMode = this.applyDarkMode.bind(this);
  }

  applyDarkMode() {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("dark-mode", prefersDarkMode);
  }

  init() {
    this.applyDarkMode();

    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", this.applyDarkMode);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const darkModeHandler = new DarkModeHandler();
  darkModeHandler.init();
});
