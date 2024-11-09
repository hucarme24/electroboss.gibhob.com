document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();  // Evitar el envío del formulario tradicional

  // Obtener los valores de los campos
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  // Validar que los campos no estén vacíos
  if (name === "" || email === "" || message === "") {
      alert("Por favor, completa todos los campos.");
      return;
  }

  // Validar formato de correo electrónico
  const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailPattern.test(email)) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
  }

  // Simulación de envío (lo puedes reemplazar por una función para enviar a un backend)
  document.getElementById("responseMessage").textContent = "¡Gracias por tu mensaje! Nos pondremos en contacto pronto.";
  document.getElementById("contactForm").reset();  // Limpiar el formulario
});