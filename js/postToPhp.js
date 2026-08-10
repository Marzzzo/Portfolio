/**
 * Handles the contact form submission.
 *
 * @async
 * @param {SubmitEvent} event - The form submission event.
 * @returns {Promise<void>}
 */
async function sendContactForm(event) {
  event.preventDefault();
  submitButton.disabled = true;
  submitButton.textContent = translate("contact.form.sending");
  try {
    await sendFormData(getFormData());
    contactForm.reset();
    submitButton.textContent = translate("contact.form.sent");
  } catch (error) {
    console.error(error);
    submitButton.textContent = translate("contact.form.failed");
  } finally {
    resetContactForm();
  }
}

/**
 * Returns the current contact form data.
 *
 * @returns {{name: string, email: string, message: string}}
 */
function getFormData() {
  return {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
}

/**
 * Sends the contact form data to the server.
 *
 * @async
 * @param {Object} formData - The contact form data.
 * @returns {Promise<void>}
 */
async function sendFormData(formData) {
  const response = await fetch("./contact_form_mail.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  });
  const result = await response.json();
  if (!response.ok || !result.success) {
    throw new Error(result.error || "Mail konnte nicht gesendet werden.");
  }
}

/**
 * Resets the contact form state after submission.
 *
 * @returns {void}
 */
function resetContactForm() {
  setTimeout(() => {
    updateLanguage();
    checkForm();
  }, 2000);
}
