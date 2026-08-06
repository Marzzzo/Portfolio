function renderTechnologies(technologies) {
  return technologies
    .map(
      (tech) => `
    <div class="single-content">
      <img src="/assets/icons/overlay-${tech.toLowerCase()}.png" alt="${tech}">
      <p>${tech}</p>
    </div>
  `,
    )
    .join("");
}

function overlayTemplate(project) {
  return `      <div class="card">
        <div class="left-section">
          <div class="headline">
            <h1>${project.number}</h1>
            <h2>${project.title}</h2>
          </div>
          <div class="fonts-section">
            <h3>Worum geht es bei diesem Projekt?</h3>
            <span>${translate(project.descriptionKey)}</span>
          </div>
          <div class="workframe">
          ${renderTechnologies(project.technologies)}
          </div>
          <div class="overlay-buttons">
            <div class="overlay-button">
              <a href="${project.github}">GitHub</a>
              <img src="/assets/icons/arrow-outward-green.png" alt="" />
            </div>
            <div class="overlay-button">
              <a href="${project.liveTest}">Live Test</a>
              <img src="/assets/icons/arrow-outward-green.png" alt="" />
            </div>
          </div>
        </div>
        <div class="right-section">
          <img class="image" src="${project.image}" alt="" />
        </div>
        <div class="next-button" onclick="nextProject()">
          <p>Nächstes Projekt</p>
          <img src="/assets/icons/arrow-forward-green.png" alt="" />
        </div>
        <div class="close-button  " onclick="closeOverlay()">
          <img class="close-button-small" src="/assets/icons/close-button.png" alt="" />
          <img class="close-button-big" src="/assets/icons/close-button-hover.png" alt="" />
        </div>
      </div>`;
}

function trackTemplate(i) {
  return `<div class="inline-container" id="scroll-${i}">
            ${textbarTemplate()}
          </div>`;
}

function textbarTemplate() {
  return `
    <div>•</div>
    <div data-i18n="hero.headline">Frontend Entwickler</div>
    <div>•</div>
    <div data-i18n="hero.location">Komme aus Büren</div>
    <div>•</div>
    <div data-i18n="hero.challenges">Offen für neue Herausforderungen</div>
    <div>•</div>
    <div data-i18n="hero.remote">Verfügbar für Remote</div>
  `;
}

function headerTemplate() {
  return `
    <div class="mobile-header">
      <div class="mobile-logo">
        <img src="/assets/icons/favicon.png" alt="Logo">
      </div>

      <button class="burger-button" onclick="toggleMobileMenu()">
        <img src="/assets/icons/burger-menu.png" alt="Menü">
      </button>
    </div>

    <div class="desktop-header">
      <div class="left-header-section">
        <div class="language-switcher">
          <button class="language-button active" data-language="de" onclick="setLanguage('de')">
            DE
          </button>

          <button class="language-button" data-language="en" onclick="setLanguage('en')">
            EN
          </button>
        </div>

        <nav class="header-navigation">
          <a href="#aboutMe" data-i18n="navigation.about">Über mich</a>
          <a href="#skills" data-i18n="navigation.skills">Skills</a>
          <a href="#projects" data-i18n="navigation.projects">Projekte</a>
        </nav>
      </div>

      <div class="logo-container">
        <img class="logo-filled" src="/assets/icons/logo-initial.png" alt="">
        <img class="logo-outline" src="/assets/icons/logo-initial-hover.png" alt="">
      </div>
    </div>

    <div class="mobile-menu" id="mobileMenu">
      <nav class="mobile-navigation">
        <a href="#aboutMe" data-i18n="navigation.about" onclick="closeMobileMenu()">Über mich</a>
        <a href="#skills" data-i18n="navigation.skills" onclick="closeMobileMenu()">Skills</a>
        <a href="#projects" data-i18n="navigation.projects" onclick="closeMobileMenu()">Projekte</a>

        <div class="language-switcher">
          <button class="language-button" data-language="de" onclick="setLanguage('de')">
            DE
          </button>

          <button class="language-button" data-language="en" onclick="setLanguage('en')">
            EN
          </button>
        </div>
      </nav>
    </div>
  `;
}

function footerTemplate() {
  return `
    <div class="footer-left">
      <div class="logo-container">
        <img class="logo-filled" src="/assets/icons/logo-initial.png" alt="" />
        <a href="/">
          <img class="logo-outline" src="/assets/icons/logo-initial-hover.png" alt="" />
        </a>
      </div>
      <div class="footer-p">
        <p data-i18n="footer.role">Webentwickler</p>
        <p data-i18n="footer.location">Büren Deutschland</p>
      </div>
      </div>
        <span class="copyright">&copy; Marco Burdick 2026</span>
      <div class="footer-right">
        <a href="https://github.com/Marzzzo" data-i18n="footer.github">Github</a>
        <a href="https://www.linkedin.com/in/marco-burdick-767a22422/" data-i18n="footer.linkedin">LinkedIn</a>
        <a href="mailto:kontakt@marco-burdick.de" data-i18n="footer.email">Email</a>
        <a href="/imprint" data-i18n="footer.imprint">Impressum</a>
    </div>
  `;
}

function carouselCardTemplate(card) {
  return `
    <p class="card-description">
      ${card.description[currentLanguage]}
    </p>
    <div class="card-footer">
      <div class="horizonline"></div>

      <p class="card-name">
        ${card.name}
        <span>- ${card.position[currentLanguage]}</span>
      </p>
    </div>
  `;
}
