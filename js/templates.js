function renderTechnologies(technologies) {
  return technologies
    .map(
      (tech) => `
    <div class="single-content">
      <img src="./icons/overlay-${tech.toLowerCase()}.png" alt="${tech}">
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
            <h3>Whats is this project about?</h3>
            <span>${project.description}</span>
          </div>
          <div class="workframe">
          ${renderTechnologies(project.technologies)}
          </div>
          <div class="overlay-buttons">
            <div class="overlay-button">
              <a href="${project.github}">GitHub</a>
              <img src="./icons/arrow-outward-green.png" alt="" />
            </div>
            <div class="overlay-button">
              <a href="">Live Test</a>
              <img src="./icons/arrow-outward-green.png" alt="" />
            </div>
          </div>
        </div>
        <div>
          <img class="image" src="${project.image}" alt="" />
        </div>
        <div class="next-button" onclick="nextProject()">
          <p>Next project</p>
          <img src="./icons/arrow-forward-green.png" alt="" />
        </div>
        <div class="close-button" onclick="closeOverlay()">
          <img class="close-button-small" src="./icons/close-button.png" alt="" />
          <img class="close-button-big" src="./icons/close-button-hover.png" alt="" />
        </div>
      </div>`;
}
