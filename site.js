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

// Film placeholder: say when the film arrives instead of doing nothing
document.querySelectorAll(".film .play").forEach(function (b) {
  b.addEventListener("click", function () {
    var m = b.parentNode.querySelector(".film-msg");
    if (m) m.hidden = !m.hidden;
  });
});

// Phone menu
(function () {
  var sheet = document.getElementById("menu");
  if (!sheet) return;
  document.querySelectorAll("[data-menu-open]").forEach(function (b) { b.addEventListener("click", function () { sheet.hidden = false; }); });
  sheet.querySelectorAll("[data-menu-close], a").forEach(function (el) { el.addEventListener("click", function () { sheet.hidden = true; }); });
})();
