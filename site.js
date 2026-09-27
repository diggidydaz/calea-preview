// Shared behavior for the Calea homepage options.
(function () {
  // Webcam preview clock, in St. John time
  function tick() {
    var t;
    try {
      t = new Date().toLocaleTimeString("en-US", { hour: "numeric", minute: "2-digit", timeZone: "America/St_Thomas" });
    } catch (e) { t = ""; }
    document.querySelectorAll("[data-cam-time]").forEach(function (el) { el.textContent = t ? t + " AST" : "St. John"; });
  }
  tick();
  setInterval(tick, 30000);

  // Request forms are mockups: keep the visitor on the page and show the confirmation copy
  document.querySelectorAll("form[data-request]").forEach(function (f) {
    f.addEventListener("submit", function (e) {
      e.preventDefault();
      var done = f.querySelector("[data-sent]");
      if (done) done.hidden = false;
    });
  });
})();
