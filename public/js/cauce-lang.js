// Cauce IA · selector ES | EN para las páginas estáticas. El idioma elegido se guarda en
// localStorage ("cauce-lang") y lo comparte la app React de /equipo.
window.CauceLang = (function () {
  var KEY = "cauce-lang";

  function stored() {
    try { return localStorage.getItem(KEY); } catch (e) { return null; }
  }
  function store(lang) {
    try { localStorage.setItem(KEY, lang); } catch (e) { /* sin almacenamiento: solo esta visita */ }
  }

  function init(translations) {
    function setLang(lang) {
      var dict = translations[lang];
      document.querySelectorAll("[data-i18n]").forEach(function (el) {
        var key = el.getAttribute("data-i18n");
        if (dict[key] !== undefined) el.innerHTML = dict[key];
      });
      document.querySelectorAll("[data-i18n-href]").forEach(function (el) {
        var key = el.getAttribute("data-i18n-href");
        if (dict[key] !== undefined) el.setAttribute("href", dict[key]);
      });
      document.title = dict["page.title"];
      var desc = document.getElementById("page-description");
      if (desc) desc.setAttribute("content", dict["page.description"]);
      document.documentElement.setAttribute("lang", lang);
      var pill = document.getElementById("lang-pill");
      pill.classList.toggle("is-en", lang === "en");
      pill.classList.toggle("is-es", lang === "es");
      pill.setAttribute("aria-label", lang === "en" ? "Cambiar a español" : "Switch to English");
      window.__lang = lang;
      store(lang);
    }

    var pill = document.getElementById("lang-pill");
    function toggle() { setLang(window.__lang === "en" ? "es" : "en"); }
    pill.addEventListener("click", toggle);
    pill.addEventListener("keydown", function (e) {
      if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggle(); }
    });

    setLang(stored() === "en" ? "en" : "es");
  }

  return { init: init };
})();
