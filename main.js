document.addEventListener("DOMContentLoaded", function () {
  const body = document.body;
  const menuToggle = document.querySelector(".menu-toggle");
  const navMenu = document.querySelector(".nav-menu");
  const navLinks = document.querySelectorAll(".nav-menu a");

  // Botones de Accesibilidad (US-014, US-032, US-033)
  const toggleContrastButton = document.getElementById("toggle-contrast");
  const toggleTextSizeButton = document.getElementById("toggle-text-size");

  // 1. Funcionalidad del Menú de Navegación (US-041)
  menuToggle.addEventListener("click", function () {
    navMenu.classList.toggle("active");
    // Opcional: Cerrar otros elementos si existieran
  });

  // Cerrar el menú al hacer clic en un enlace (para móviles)
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navMenu.classList.contains("active")) {
        navMenu.classList.remove("active");
      }
    });
  });

  // 2. Funcionalidad de Accesibilidad (Alto Contraste) (US-014, US-032, US-033)
  toggleContrastButton.addEventListener("click", function () {
    body.classList.toggle("high-contrast");
    // Opcional: Guardar la preferencia en localStorage si la persistencia fuera necesaria
    if (body.classList.contains("high-contrast")) {
      console.log("Modo Alto Contraste Activado");
    } else {
      console.log("Modo Alto Contraste Desactivado");
    }
  });

  // 3. Funcionalidad de Accesibilidad (Aumentar Texto) (US-014, US-032, US-033)
  toggleTextSizeButton.addEventListener("click", function () {
    body.classList.toggle("large-text");
    // Opcional: Guardar la preferencia en localStorage
    if (body.classList.contains("large-text")) {
      console.log("Modo Texto Grande Activado");
    } else {
      console.log("Modo Texto Grande Desactivado");
    }
  });

  // 4. Funcionalidad para el Formulario de Contacto (Simulación Estática)
  const contactForm = document.querySelector(".formulario-contacto");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault(); // Detener el envío real del formulario

      // Validación simple (requiere que los inputs tengan el atributo 'required')
      const isValid = contactForm.checkValidity();

      if (isValid) {
        // Simulación de envío exitoso
        alert(
          "¡Mensaje enviado con éxito! Pronto nos pondremos en contacto contigo. (Simulación Estática)"
        );
        contactForm.reset(); // Limpiar el formulario
      } else {
        // El navegador maneja la validación de campos requeridos, pero este alert es un fallback.
        alert(
          "Por favor, completa todos los campos requeridos del formulario."
        );
      }
    });
  }
});
