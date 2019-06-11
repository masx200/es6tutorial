/* Get Started  |  Workbox  |  Google Developers
https://developers.google.cn/web/tools/workbox/guides/get-started */

// Check that service workers are registered
if ("serviceWorker" in navigator) {
  // Use the window load event to keep the page load performant
  window.addEventListener("load", () => {
    navigator.serviceWorker.register("/service-worker-google-workbox.js");
  });
}
