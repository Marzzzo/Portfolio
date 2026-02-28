function setLanguage(language) {
  const btnDE = document.getElementById('btnDE');
  const btnEN = document.getElementById('btnEN');

  if (language === 'DE') {
    btnDE.classList.add('active');
    btnEN.classList.remove('active');
  } else {
    btnEN.classList.add('active');
    btnDE.classList.remove('active');
  }
}
