/**
 * References to the contact form elements.
 */
const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const checkbox = document.getElementById("privacy");
const submitButton = document.getElementById("submitButton");

/**
 * Initializes the contact form validation.
 */
function initContactForm() {
  checkName();
  checkEmail();
  checkMessage();
  checkbox.addEventListener("change", checkForm);
}

/**
 * Adds validation listeners to the name input.
 */
function checkName() {
  nameInput.addEventListener("blur", validateName);
  nameInput.addEventListener("input", () => {
    validateName();
    checkForm();
  });
}

/**
 * Adds validation listeners to the email input.
 */
function checkEmail() {
  emailInput.addEventListener("blur", validateEmail);
  emailInput.addEventListener("input", () => {
    validateEmail();
    checkForm();
  });
}

/**
 * Adds validation listeners to the message input.
 */
function checkMessage() {
  messageInput.addEventListener("blur", validateMessage);
  messageInput.addEventListener("input", () => {
    validateMessage();
    checkForm();
  });
}

/**
 * Validates the name input.
 * @returns {boolean} Whether the name is valid.
 */
function validateName() {
  const error = nameInput.nextElementSibling;
  if (nameInput.value.trim().length < 2) {
    error.classList.add("active");
    nameInput.classList.add("input-error");
    return false;
  }
  error.classList.remove("active");
  nameInput.classList.remove("input-error");
  return true;
}

/**
 * Validates the email input.
 * @returns {boolean} Whether the email is valid.
 */
function validateEmail() {
  const error = emailInput.nextElementSibling;
  const email = emailInput.value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email) || email.includes("..")) {
    error.classList.add("active");
    emailInput.classList.add("input-error");
    return false;
  }
  error.classList.remove("active");
  emailInput.classList.remove("input-error");
  return true;
}

/**
 * Validates the message input.
 * @returns {boolean} Whether the message is valid.
 */
function validateMessage() {
  const error = messageInput.nextElementSibling;
  if (messageInput.value.trim() === "") {
    error.classList.add("active");
    messageInput.classList.add("input-error");
    return false;
  }
  error.classList.remove("active");
  messageInput.classList.remove("input-error");
  return true;
}

/**
 * Checks whether all form fields are valid and enables the submit button.
 */
function checkForm() {
  const nameValid = nameInput.value.trim().length >= 2;
  const email = emailInput.value.trim();
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) && !email.includes("..");
  const messageValid = messageInput.value.trim() !== "";
  const privacyValid = checkbox.checked;
  submitButton.disabled = !(nameValid && emailValid && messageValid && privacyValid);
}

initContactForm();
checkForm();
