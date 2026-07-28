const contactForm = document.getElementById('contactForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const messageInput = document.getElementById('message');
const checkbox = document.getElementById('privacy');
const submitButton = document.getElementById('submitButton');

function initContactForm() {
  checkName();
  checkEmail();
  checkMessage();
  checkbox.addEventListener('change', checkForm);
}

function checkName() {
  nameInput.addEventListener('blur', validateName);
  nameInput.addEventListener('input', () => {
    validateName();
    checkForm();
  });
}

function checkEmail() {
  emailInput.addEventListener('blur', validateEmail);
  emailInput.addEventListener('input', () => {
    validateEmail();
    checkForm();
  });
}

function checkMessage() {
  messageInput.addEventListener('blur', validateMessage);
  messageInput.addEventListener('input', () => {
    validateMessage();
    checkForm();
  });
}

function validateName() {
  const error = nameInput.nextElementSibling;
  if (nameInput.value.trim() === '') {
    error.classList.add('active');
    nameInput.classList.add('input-error');
    return false;
  }
  error.classList.remove('active');
  nameInput.classList.remove('input-error');
  return true;
}

function validateEmail() {
  const error = emailInput.nextElementSibling;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    error.classList.add('active');
    emailInput.classList.add('input-error');
    return false;
  }
  error.classList.remove('active');
  emailInput.classList.remove('input-error');
  return true;
}

function validateMessage() {
  const error = messageInput.nextElementSibling;
  if (messageInput.value.trim() === '') {
    error.classList.add('active');
    messageInput.classList.add('input-error');
    return false;
  }
  error.classList.remove('active');
  messageInput.classList.remove('input-error');
  return true;
}

function checkForm() {
  const nameValid = nameInput.value.trim() !== '';
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  const messageValid = messageInput.value.trim() !== '';
  const privacyValid = checkbox.checked;
  submitButton.disabled = !(nameValid && emailValid && messageValid && privacyValid);
}
initContactForm();
checkForm();

contactForm.addEventListener('submit', sendContactForm);

async function sendContactForm(event) {
  event.preventDefault();
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };

  submitButton.disabled = true;
  submitButton.textContent = 'Sending...';

  try {
    const response = await fetch('./contact_form_mail.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    const result = await response.json();
    if (!response.ok || !result.success) {
      throw new Error(result.error || 'Mail konnte nicht gesendet werden.');
    }

    contactForm.reset();
    submitButton.textContent = 'gesendet';
  } catch (error) {
    console.error(error);
    submitButton.textContent = 'fehlgeschlagen';
  } finally {
    setTimeout(() => {
      submitButton.textContent = 'Sag Hallo 😎';
      checkForm();
    }, 2000);
  }
}
