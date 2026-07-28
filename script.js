emailjs.init("qwJBVeVuwDRZQpWA3");

// Mobile Menu
const menuIcon = document.getElementById("menu-icon");
const navLinks = document.querySelector(".nav-links");

menuIcon.addEventListener("click", () => {

    navLinks.classList.toggle("active");

    menuIcon.classList.toggle("fa-bars");
    menuIcon.classList.toggle("fa-xmark");

});

// Contact Form
const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(
        "service_iynt61c",
        "template_48fe1di",
        templateParams
    )
    .then(() => {
        alert("✅ Message sent successfully!");
        contactForm.reset();
    })
    .catch((error) => {
        alert("❌ Failed to send message.");
        console.log(error);
    });

});
