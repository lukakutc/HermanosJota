const form = document.querySelector("#form-contacto");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("MENSAJE ENVIADO CORRECTAMENTE");
    form.reset();
});