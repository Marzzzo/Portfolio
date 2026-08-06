contactForm.addEventListener("submit", sendContactForm);

async function sendContactForm(event) {
  event.preventDefault();
  const formData = {
    name: nameInput.value.trim(),
    email: emailInput.value.trim(),
    message: messageInput.value.trim(),
  };
  submitButton.disabled = true;
  submitButton.textContent = translate("contact.form.sending");

  try {
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
    contactForm.reset();
    submitButton.textContent = translate("contact.form.sent");
  } catch (error) {
    console.error(error);
    submitButton.textContent = translate("contact.form.failed");
  } finally {
    setTimeout(() => {
      updateLanguage();
      checkForm();
    }, 2000);
  }
}
