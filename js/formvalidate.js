const contactForm = document.getElementById("contactForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const messageInput = document.getElementById("message");
const checkbox = document.getElementById("privacy");
const submitButton = document.getElementById("submitButton");

/**
 * Initializes the contact form validation and adds
 * an event listener to the privacy checkbox.
 *
 * @returns {void}
 */
function initContactForm() {
  checkName();
  checkEmail();
  checkMessage();
  checkbox.addEventListener("change", checkForm);
}

/**
 * Adds validation event listeners to the name input field
 * and updates the form state when the input changes.
 *
 * @returns {void}
 */
function checkName() {
  nameInput.addEventListener("blur", validateName);
  nameInput.addEventListener("input", () => {
    validateName();
    checkForm();
  });
}

/**
 * Adds validation event listeners to the email input field
 * and updates the form state when the input changes.
 *
 * @returns {void}
 */
function checkEmail() {
  emailInput.addEventListener("blur", validateEmail);
  emailInput.addEventListener("input", () => {
    validateEmail();
    checkForm();
  });
}

/**
 * Adds validation event listeners to the message input field
 * and updates the form state when the input changes.
 *
 * @returns {void}
 */
function checkMessage() {
  messageInput.addEventListener("blur", validateMessage);
  messageInput.addEventListener("input", () => {
    validateMessage();
    checkForm();
  });
}

/**
 * Validates the name input field and updates its error state.
 *
 * @returns {boolean} True if the name is valid, otherwise false.
 */
function validateName() {
  const error = nameInput.nextElementSibling;
  if (nameInput.value.trim() === "") {
    error.classList.add("active");
    nameInput.classList.add("input-error");
    return false;
  }
  error.classList.remove("active");
  nameInput.classList.remove("input-error");
  return true;
}

/**
 * Validates the email input field using an email pattern
 * and updates its error state.
 *
 * @returns {boolean} True if the email address is valid, otherwise false.
 */
function validateEmail() {
  const error = emailInput.nextElementSibling;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(emailInput.value.trim())) {
    error.classList.add("active");
    emailInput.classList.add("input-error");
    return false;
  }
  error.classList.remove("active");
  emailInput.classList.remove("input-error");
  return true;
}

/**
 * Validates the message input field and updates its error state.
 *
 * @returns {boolean} True if the message is valid, otherwise false.
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
 * Checks whether all contact form fields are valid
 * and enables or disables the submit button accordingly.
 *
 * @returns {void}
 */
function checkForm() {
  const nameValid = nameInput.value.trim() !== "";
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailInput.value.trim());
  const messageValid = messageInput.value.trim() !== "";
  const privacyValid = checkbox.checked;
  submitButton.disabled = !(nameValid && emailValid && messageValid && privacyValid);
}
initContactForm();
checkForm();
