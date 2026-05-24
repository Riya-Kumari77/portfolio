const navbar = document.getElementById("navbar");

// NAVBAR SCROLL EFFECT
window.addEventListener("scroll", () => {
  navbar.classList.toggle("scrolled", window.scrollY > 20);
});


// SCROLL REVEAL
const revealEls = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }

  });
}, {
  threshold: 0.12
});

revealEls.forEach((el) => observer.observe(el));


// CONTACT FORM
const form = document.getElementById("contact-form");
const statusText = document.getElementById("statusText");
const sendBtn = document.getElementById("sendBtn");

form.addEventListener("submit", function (e) {

  e.preventDefault();

  sendBtn.disabled = true;
  sendBtn.textContent = "Sending...";

  statusText.textContent = "Sending message...";

  emailjs
    .sendForm(
      "service_m8alftl",
      "template_lkhc0iu",
      this
    )

    .then(() => {

      statusText.textContent = "Message sent successfully";
      sendBtn.textContent = "Sent";

      form.reset();

      setTimeout(() => {
        sendBtn.disabled = false;
        sendBtn.textContent = "Send Message";
        statusText.textContent = "";
      }, 3000);

    })

    .catch((error) => {

      console.error("EmailJS Error:", error);

      statusText.textContent =
        "Failed to send message. Try again later.";

      sendBtn.disabled = false;
      sendBtn.textContent = "Try Again";

    });

});