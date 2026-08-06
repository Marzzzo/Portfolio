let currentLanguage = localStorage.getItem("language") || "de";
let translations = {};

async function loadTranslations() {
  try {
    const response = await fetch("/data/translations.json");
    if (!response.ok) {
      throw new Error(`Übersetzungen konnten nicht geladen werden: ${response.status}`);
    }
    translations = await response.json();
  } catch (error) {
    console.error("Fehler beim Laden der Übersetzungen:", error);
  }
}

function translate(key) {
  const translatedValue = key.split(".").reduce((object, property) => {
    return object?.[property];
  }, translations[currentLanguage]);
  return translatedValue ?? key;
}

function updateLanguage() {
  document.documentElement.lang = currentLanguage;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translation = translate(key);
    if (translation !== key) {
      element.textContent = translation;
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translation = translate(key);
    if (translation !== key) {
      element.placeholder = translation;
      element.dataset.placeholder = translation;
    }
  });
  updateLanguageButtons();
}

function setLanguage(language) {
  if (!translations[language]) {
    console.warn(`Sprache nicht gefunden: ${language}`);
    return;
  }
  currentLanguage = language;
  localStorage.setItem("language", language);
  updateLanguage();
  renderDynamicTranslations();
}

function updateLanguageButtons() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });
}

function renderDynamicTranslations() {
  if (typeof renderTextbar === "function") {
    renderTextbar();
  }
  if (typeof renderCarousel === "function") {
    renderCarousel();
  }
  if (typeof renderFooter === "function") {
    renderFooter();
  }
}

async function initTranslations() {
  await loadTranslations();
  updateLanguage();
}
