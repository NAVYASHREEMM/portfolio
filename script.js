emailjs.init("qwJBVeVuwDRZQpWA3");

const contactForm = document.getElementById("contact-form");

contactForm.addEventListener("submit", function(event){

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

    .then(function(){

        alert("✅ Message sent successfully!");

        contactForm.reset();

    })

    .catch(function(error){

        alert("❌ Failed to send message.");

        console.log(error);

    });

});
@media (max-width:768px){

    .nav-links{
        position:absolute;
        top:100%;
        right:0;
        width:220px;
        background:black;
        border-radius:15px;
        padding:20px;
        display:none;
        flex-direction:column;
        gap:20px;
    }

    .nav-links.active{
        display:flex;
    }

    #menu-icon{
        display:block;
        cursor:pointer;
        color:white;
        font-size:2rem;
    }
}
