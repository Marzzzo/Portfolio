let currentLanguage = localStorage.getItem("language") || "de";
let translations = {};

/**
 * Loads the translation data from the JSON file
 * and stores it in the translations object.
 *
 * @async
 * @returns {Promise<void>}
 */
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

/**
 * Returns the translated value for a given translation key
 * based on the currently selected language.
 *
 * @param {string} key - The translation key in dot notation.
 * @returns {string} The translated value or the key if no translation is found.
 */
function translate(key) {
  const translatedValue = key.split(".").reduce((object, property) => {
    return object?.[property];
  }, translations[currentLanguage]);
  return translatedValue ?? key;
}

/**
 * Updates the page language and translates all elements
 * that contain a data-i18n attribute.
 *
 * @returns {void}
 */
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

/**
 * Sets the current language, saves the selection,
 * and updates all translated content on the page.
 *
 * @param {string} language - The language code to set.
 * @returns {void}
 */
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

/**
 * Updates the active state of all language buttons
 * based on the currently selected language.
 *
 * @returns {void}
 */
function updateLanguageButtons() {
  document.querySelectorAll("[data-language]").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });
}

/**
 * Re-renders dynamic page components to apply
 * the currently selected language.
 *
 * @returns {void}
 */
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

/**
 * Initializes the translation system by loading
 * the translation data and applying the current language.
 *
 * @async
 * @returns {Promise<void>}
 */
async function initTranslations() {
  await loadTranslations();
  updateLanguage();
}
