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
    .join('');
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
            <span>${project.description}</span>
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
        <div>
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
  return `<div>•</div>
          <div>Frontend Entwickler</div>
          <div>•</div>
          <div>Komme aus Büren</div>
          <div>•</div>
          <div>Offen für neue Herausforderungen</div>
          <div>•</div>
          <div>Verfügbar für Remote</div>`;
}

function headerTemplate() {
  return `<div class="left-header-section">
          <div class="language-switcher">
            <div id="btnDE" class="language-button active" onclick="setLanguage('DE')">
              <p>DE</p>
            </div>
            <div id="btnEN" class="language-button" onclick="setLanguage('EN')">
              <p>EN</p>
            </div>
          </div>
          <div class="header-headline">
            <a href="#aboutMe"><h3>About me</h3></a>
            <a href="#skills"><h3>Skills</h3></a>
            <a href="#projects"><h3>Projects</h3></a>
          </div>
        </div>
        <div>
          <div class="logo-container">
            <img class="logo-filled" src="/assets/icons/logo-initial.png" alt="" />
            <img class="logo-outline" src="/assets/icons/logo-initial-hover.png" alt="" />
          </div>
        </div>`;
}

function footerTemplate() {
  return `<div class="footer-left">
          <div class="logo-container">
            <img class="logo-filled" src="/assets/icons/logo-initial.png" alt="" />
            <a href="/"> <img class="logo-outline" src="/assets/icons/logo-initial-hover.png" alt="" /></a>
          </div>
          <div class="footer-p">
            <p>Webentwickler</p>
            <p>Büren Deutschland</p>
          </div>
        </div>
        <span class="copyright">&copy; Marco Burdick 2026</span>
        <div class="footer-right">
          <a href="https://github.com/Marzzzo">Github</a>
          <a href="">LinkedIn</a>
          <a href="mailto:kontakt@marco-burdick.de">Email</a>
          <a href="/imprint">Impressum</a>
        </div>`;
}

function carouselCardTemplate(carouselCards) {
  return `      <div class="card-descripton">
                <p>${carouselCards.description}</p>
              </div>
              <div class="card-name-container">
                <div class="horizonline"></div>
                <div class="name-content">
                <p>${carouselCards.name}</p>-
                <p>${carouselCards.position}</p>
                </div>
              </div>`;
}
