
/* 1) Put the current year in the footer */
var yearSpan = document.getElementById("year"); // <span id="year"></span>
if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
}

/* 2) Dark / Light Mode Button */
var themeButton = document.getElementById("themeToggle"); // the button
var htmlTag = document.documentElement; // <html>

if (themeButton) {
    // When user clicks the button, switch theme
    themeButton.addEventListener("click", function () {
        // Get current theme (if none, use "light")
        var currentTheme = htmlTag.getAttribute("data-theme");
        if (currentTheme === null) currentTheme = "light";

        // Switch to the other theme
        if (currentTheme === "dark") {
            htmlTag.setAttribute("data-theme", "light");
            themeButton.textContent = "☀️";
        } else {
            htmlTag.setAttribute("data-theme", "dark");
            themeButton.textContent = "🌙";
        }
    });
}

/* 3) Contact Form "Message Sent" (No backend) */
var contactForm = document.getElementById("contactForm"); // the form
var statusText = document.getElementById("formStatus");   // the message area

if (contactForm && statusText) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault(); // stop page refresh

        // Get values from inputs
        var name = contactForm.elements["name"].value.trim();
        var email = contactForm.elements["email"].value.trim();
        var message = contactForm.elements["message"].value.trim();

        // If any field is empty, show error
        if (name === "" || email === "" || message === "") {
            statusText.textContent = "Please fill in all fields.";
            return;
        }

        // If everything is filled, show success
        statusText.textContent = "✅ Message sent successfully.!";
        contactForm.reset(); // clear the form

        // Optional: remove the message after 3 seconds
        setTimeout(function () {
            statusText.textContent = "";
        }, 3000);
    });
}

