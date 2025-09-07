const form = document.querySelector("#form-contacto");

form.addEventListener("submit", function (event) {

  alert("Mensaje enviado correctamente");

  //Limpiar los campos después del envío
  form.reset();
});