

(function () {
  
  const yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  // If the page does not have the form (e.g., Resume, Projects, Gallery),
  // simply exit without doing anything.
  if (!form || !status) return;

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const nameField = form.querySelector('input[name="name"]');
    const name =
      nameField && nameField.value.trim() !== ""
        ? nameField.value.trim()
        : "there";

    status.textContent = `Thanks, ${name}! Your message has been received.`;

    form.reset();
  });
})();
