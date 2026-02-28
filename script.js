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
