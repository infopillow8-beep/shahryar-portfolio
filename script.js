
const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const name = document.getElementById("name").value;

    document.getElementById("formStatus").textContent =
        "Thank you " + name + "! Your form is working.";

    form.reset();

});
