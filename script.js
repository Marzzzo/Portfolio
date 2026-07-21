let currentProject = 0;

// switch language German and English
function setLanguage(language) {
  const btnEN = document.getElementById('btnEN');
  const btnDE = document.getElementById('btnDE');
  if (language === 'EN') {
    btnEN.classList.add('active');
    btnDE.classList.remove('active');
  } else {
    btnDE.classList.add('active');
    btnEN.classList.remove('active');
  }
}

let images = document.querySelectorAll('.img-container img');

//hide Image Exit hover in Projects
function hideImages() {
  images.forEach((image) => {
    image.style.display = 'none';
  });
}

//show Image by hover in Projects
function showImage(className) {
  hideImages();
  const image = document.querySelector(`.${className}`);
  if (image) {
    image.style.display = 'block';
  }
}

let currentSlide = 1;

function updateCarousel() {
  document.getElementById('item_1').checked = false;
  document.getElementById('item_2').checked = false;
  document.getElementById('item_3').checked = false;
  document.getElementById('item_' + currentSlide).checked = true;
  document.getElementById('dot1').classList.remove('active');
  document.getElementById('dot2').classList.remove('active');
  document.getElementById('dot3').classList.remove('active');
  document.getElementById('dot' + currentSlide).classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > 3) {
    currentSlide = 1;
  }
  updateCarousel();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 1) {
    currentSlide = 3;
  }
  updateCarousel();
}

function openOverlay(index) {
  currentProject = index;
  const overlay = document.getElementById('overlay');
  overlay.innerHTML = overlayTemplate(projects[index]);
  overlay.classList.remove('d-none');
  console.log(projects);
}

function closeOverlay() {
  document.getElementById('overlay').classList.add('d-none');
}

function nextProject() {
  currentProject++;
  if (currentProject >= projects.length) {
    currentProject = 0;
  }
  document.getElementById('overlay').innerHTML = overlayTemplate(projects[currentProject]);
}
