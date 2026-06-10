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

function hideImages() {
  images.forEach((image) => {
    image.style.display = 'none';
  });
}

function showImage(className) {
  hideImages();
  const image = document.querySelector(`.${className}`);
  if (image) {
    image.style.display = 'block';
  }
}
