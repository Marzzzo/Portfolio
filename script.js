let currentProject = 0;
let trackCounter = 6;
let currentSlide = 0;
let images = document.querySelectorAll(".img-container img");

/**
 * Initializes the application by loading translations
 * and rendering all main UI components.
 *
 * @async
 * @returns {Promise<void>}
 */
async function init() {
  await loadTranslations();
  renderHeader();
  renderFooter();
  renderTextbar(trackCounter);
  renderCarousel();
  updateLanguage();
}

/**
 * Initializes the policy page by loading translations,
 * rendering the header and footer, and applying the selected language.
 *
 * @async
 * @returns {Promise<void>}
 */
async function initPolicyPage() {
  await loadTranslations();
  renderHeader();
  renderFooter();
  updateLanguage();
}

/**
 * Initializes the impressum page by rendering the header and footer.
 *
 * @returns {void}
 */
async function initImpressumPage() {
  await loadTranslations();
  renderHeader();
  renderFooter();
  updateLanguage();
}

/**
 * Renders the header by inserting the header template
 * into the header element.
 *
 * @returns {void}
 */
function renderHeader() {
  const header = document.getElementById("header");
  header.innerHTML = headerTemplate();
}

/**
 * Renders the footer by inserting the footer template
 * into the footer element.
 *
 * @returns {void}
 */
function renderFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = footerTemplate();
}

/**
 * Renders the textbar by creating track elements
 * based on the provided track counter.
 *
 * @param {number} trackCounter - The number of tracks to render.
 * @returns {void}
 */
function renderTextbar(trackCounter) {
  const counter = trackCounter;
  const track = document.getElementById("textbarTrack");
  track.innerHTML = "";
  for (let i = 1; i <= counter; i++) {
    track.innerHTML += trackTemplate(i);
  }
}

/**
 * Hides all images by setting their display style to "none".
 *
 * @returns {void}
 */
function hideImages() {
  images.forEach((image) => {
    image.style.display = "none";
  });
}

/**
 * Shows a specific image by its class name.
 *
 * @param {string} className - The class name of the image to show.
 * @returns {void}
 */
function showImage(className) {
  if (window.innerWidth <= 1265) return;
  hideImages();
  const image = document.querySelector(`.${className}`);
  if (image) {
    image.style.display = "block";
  }
}

/**
 * Updates the carousel by checking the appropriate item and dot elements.
 *
 * @returns {void}
 */
function updateCarousel() {
  document.getElementById("item_1").checked = false;
  document.getElementById("item_2").checked = false;
  document.getElementById("item_3").checked = false;
  document.getElementById("item_" + currentSlide).checked = true;
  document.getElementById("dot1").classList.remove("active");
  document.getElementById("dot2").classList.remove("active");
  document.getElementById("dot3").classList.remove("active");
  document.getElementById("dot" + currentSlide).classList.add("active");
}

/**
 * Navigates to the next slide in the carousel.
 *
 * @returns {void}
 */
function nextSlide() {
  currentSlide++;
  if (currentSlide >= carouselCards.length) {
    currentSlide = 0;
  }
  updateCarousel();
}

/**
 * Navigates to the previous slide in the carousel.
 *
 * @returns {void}
 */
function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselCards.length - 1;
  }
  updateCarousel();
}

/**
 * Updates the carousel by assigning the appropriate classes
 * to the current, previous, next, and hidden slides.
 * Also updates the active navigation dot.
 *
 * @returns {void}
 */
function updateCarousel() {
  const items = document.querySelectorAll(".item");
  const dots = document.querySelectorAll(".dot");
  const totalSlides = items.length;
  items.forEach((item, index) => {
    item.classList.remove("active", "left", "right", "hidden");
    const previousSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    const nextSlide = (currentSlide + 1) % totalSlides;
    if (index === currentSlide) {
      item.classList.add("active");
    } else if (index === previousSlide) {
      item.classList.add("left");
    } else if (index === nextSlide) {
      item.classList.add("right");
    } else {
      item.classList.add("hidden");
    }
  });
  dots.forEach((dot, index) => {
    dot.classList.toggle("active", index === currentSlide);
  });
}

/**
 * Renders all carousel cards and navigation dots.
 * Clears existing carousel content before creating new elements
 * and updates the carousel state afterwards.
 *
 * @returns {void}
 */
function renderCarousel() {
  const itemsContainer = document.getElementById("carouselItems");
  const dotsContainer = document.getElementById("carouselDots");
  if (!itemsContainer || !dotsContainer) return;
  itemsContainer.innerHTML = "";
  dotsContainer.innerHTML = "";
  carouselCards.forEach((card, index) => {
    createCard(card, index, itemsContainer, dotsContainer);
  });
  updateCarousel();
}

/**
 * Creates a carousel card and its corresponding navigation dot
 * and appends them to their respective containers.
 *
 * @param {Object} card - The data used to create the carousel card.
 * @param {number} index - The index of the carousel card.
 * @param {HTMLElement} itemsContainer - The container for the carousel cards.
 * @param {HTMLElement} dotsContainer - The container for the navigation dots.
 * @returns {void}
 */
function createCard(card, index, itemsContainer, dotsContainer) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("item");
  carouselItem.innerHTML = carouselCardTemplate(card);
  itemsContainer.appendChild(carouselItem);
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

/**
 * Opens the project overlay for the specified project index.
 *
 * @param {number} index - The index of the project to display.
 * @returns {void}
 */
function openOverlay(index) {
  currentProject = index;
  const overlay = document.getElementById("overlay");
  overlay.innerHTML = overlayTemplate(projects[index]);
  overlay.classList.remove("d-none");
  document.body.classList.add("no-scroll");
}

/**
 * Closes the project overlay.
 *
 * @param {Event} event - The event that triggered the function.
 * @returns {void}
 */
function closeOverlay(event) {
  if (event && event.target !== event.currentTarget) {
    return;
  }
  const overlay = document.getElementById("overlay");
  overlay.classList.add("closing");
  document.body.classList.remove("no-scroll");
  setTimeout(() => {
    overlay.classList.add("d-none");
    overlay.classList.remove("closing");
  }, 400);
}

/**
 * Navigates to the next project in the overlay.
 *
 * @returns {void}
 */
function nextProject() {
  currentProject++;
  if (currentProject >= projects.length) {
    currentProject = 0;
  }
  document.getElementById("overlay").innerHTML = overlayTemplate(projects[currentProject]);
}

/**
 * Sets the language for the application.
 *
 * @param {string} language - The language to set.
 * @returns {void}
 */
function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("language", language);
  updateLanguage();
}

/**
 * Updates the page content based on the currently selected language.
 * Updates texts, placeholders, language buttons, and re-renders the carousel.
 *
 * @returns {void}
 */
function updateLanguage() {
  document.documentElement.lang = currentLanguage;
  updateTexts();
  updatePlaceholders();
  updateLanguageButtons();
  renderCarousel();
}

/**
 * Updates the text content of all elements with a data-i18n attribute
 * using the translation for the currently selected language.
 *
 * @returns {void}
 */
function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translate(key);
    if (translatedText !== key) {
      element.textContent = translatedText;
    }
  });
}

/**
 * Updates the placeholders of all elements with a data-i18n-placeholder
 * attribute using the translation for the currently selected language.
 *
 * @returns {void}
 */
function updatePlaceholders() {
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.dataset.i18nPlaceholder;
    const translatedText = translate(key);
    if (translatedText !== key) {
      element.placeholder = translatedText;
      element.dataset.placeholder = translatedText;
    }
  });
}

/**
 * Updates the active state of all language buttons
 * based on the currently selected language.
 *
 * @returns {void}
 */
function updateLanguageButtons() {
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });
}

/**
 * Toggles the mobile navigation menu and updates the
 * burger button accessibility attributes and body state.
 *
 * @returns {void}
 */
function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const burgerButton = document.querySelector(".burger-button");
  const isOpen = mobileMenu.classList.toggle("open");
  burgerButton.setAttribute("aria-expanded", String(isOpen));
  burgerButton.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
  document.body.classList.toggle("menu-open", isOpen);
}

/**
 * Closes the mobile navigation menu and resets the
 * burger button accessibility attributes and body state.
 *
 * @returns {void}
 */
function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const burgerButton = document.querySelector(".burger-button");
  mobileMenu.classList.remove("open");
  burgerButton.setAttribute("aria-expanded", "false");
  burgerButton.setAttribute("aria-label", "Menü öffnen");
  document.body.classList.remove("menu-open");
}
