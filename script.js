let currentProject = 0;
let trackCounter = 6;
let currentSlide = 0;
let images = document.querySelectorAll(".img-container img");

async function init() {
  await loadTranslations();
  renderHeader();
  renderFooter();
  renderTextbar(trackCounter);
  renderCarousel();
  updateLanguage();
}

function initPolicyPage() {
  renderHeader();
  renderFooter();
}

function initImpressumPage() {
  renderHeader();
  renderFooter();
}

function renderHeader() {
  const header = document.getElementById("header");
  header.innerHTML = headerTemplate();
}

function renderFooter() {
  const footer = document.getElementById("footer");
  footer.innerHTML = footerTemplate();
}

function renderTextbar(trackCounter) {
  const counter = trackCounter;
  const track = document.getElementById("textbarTrack");
  track.innerHTML = "";
  for (let i = 1; i <= counter; i++) {
    track.innerHTML += trackTemplate(i);
  }
}

function hideImages() {
  images.forEach((image) => {
    image.style.display = "none";
  });
}

function showImage(className) {
  if (window.innerWidth <= 1265) return;
  hideImages();
  const image = document.querySelector(`.${className}`);
  if (image) {
    image.style.display = "block";
  }
}

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

function nextSlide() {
  currentSlide++;
  if (currentSlide >= carouselCards.length) {
    currentSlide = 0;
  }
  updateCarousel();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselCards.length - 1;
  }
  updateCarousel();
}

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

function createCard(card, index, itemsContainer, dotsContainer) {
  const carouselItem = document.createElement("div");
  carouselItem.classList.add("item");
  carouselItem.innerHTML = carouselCardTemplate(card);
  itemsContainer.appendChild(carouselItem);
  const dot = document.createElement("div");
  dot.classList.add("dot");
  dotsContainer.appendChild(dot);
}

function openOverlay(index) {
  currentProject = index;
  const overlay = document.getElementById("overlay");
  overlay.innerHTML = overlayTemplate(projects[index]);
  overlay.classList.remove("d-none");
  document.body.classList.add("no-scroll");
}

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

function nextProject() {
  currentProject++;
  if (currentProject >= projects.length) {
    currentProject = 0;
  }
  document.getElementById("overlay").innerHTML = overlayTemplate(projects[currentProject]);
}

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem("language", language);
  updateLanguage();
}

function updateLanguage() {
  document.documentElement.lang = currentLanguage;
  updateTexts();
  updatePlaceholders();
  updateLanguageButtons();
  renderCarousel();
}

function updateTexts() {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    const translatedText = translate(key);
    if (translatedText !== key) {
      element.textContent = translatedText;
    }
  });
}

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

function updateLanguageButtons() {
  document.querySelectorAll(".language-button").forEach((button) => {
    button.classList.toggle("active", button.dataset.language === currentLanguage);
  });
}

function toggleMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const burgerButton = document.querySelector(".burger-button");
  const isOpen = mobileMenu.classList.toggle("open");
  burgerButton.setAttribute("aria-expanded", String(isOpen));
  burgerButton.setAttribute("aria-label", isOpen ? "Menü schließen" : "Menü öffnen");
  document.body.classList.toggle("menu-open", isOpen);
}

function closeMobileMenu() {
  const mobileMenu = document.getElementById("mobileMenu");
  const burgerButton = document.querySelector(".burger-button");
  mobileMenu.classList.remove("open");
  burgerButton.setAttribute("aria-expanded", "false");
  burgerButton.setAttribute("aria-label", "Menü öffnen");
  document.body.classList.remove("menu-open");
}
