// script.js: checks the contact form on the home page.
// It never sends anything. It only shows messages on the screen.

// Look at the three answers. Return a note for each problem.
// If there are no problems, the result is empty: {}
function checkForm(name, email, message) {
  const errors = {};

  if (name.trim() === "") {
    errors.name = "Please type your name.";
  }

  if (email.trim() === "") {
    errors.email = "Please type your email.";
  } else if (!email.includes("@")) {
    errors.email = "An email needs an @ sign, like asha@example.com.";
  }

  if (message.trim() === "") {
    errors.message = "Please type a message.";
  }

  return errors;
}

const form = document.getElementById("contact-form");

// Only the home page has the form. This check stops errors on other pages.
if (form) {
  form.addEventListener("submit", function (event) {
    // Stop the browser from sending the form anywhere.
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    const errors = checkForm(name, email, message);

    // Show each note, or clear it if that box is now fine.
    document.getElementById("name-error").textContent = errors.name || "";
    document.getElementById("email-error").textContent = errors.email || "";
    document.getElementById("message-error").textContent = errors.message || "";

    // No problems: hide the form and show the thank-you note.
    if (Object.keys(errors).length === 0) {
      const thanks = document.getElementById("thanks");
      thanks.textContent = "Thank you, " + name.trim() + "! We got your note. This is a practice form, so nothing was sent.";
      form.hidden = true;
      thanks.hidden = false;
    }
  });
}
