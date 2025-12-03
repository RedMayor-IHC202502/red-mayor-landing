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
  window.openModal = function (id) {
return;
}


const mensaje = new SpeechSynthesisUtterance(
"Bienvenido a Red Mayor. Puedes agendar citas, ver campañas de salud y solicitar acompañamiento."
);
mensaje.lang = "es-ES";
window.speechSynthesis.speak(mensaje);
};


window.mostrarCampañas = function () {
const lista = document.getElementById("listaCampañas");
lista.innerHTML = "";


const campañas = [
"Vacunación preventiva",
"Charla de nutrición saludable",
"Control de hipertensión gratuito"
];


campañas.forEach((c) => {
const item = document.createElement("li");
item.textContent = c;
lista.appendChild(item);
});
};


window.mostrarResumen = function () {
const lista = document.getElementById("panelResumen");
lista.innerHTML = "";


const tareas = [
"Tomar medicamento 8:00 AM",
"Ejercicio ligero 10:00 AM",
"Revisar presión arterial",
];


tareas.forEach((t) => {
const item = document.createElement("li");
item.textContent = t;
lista.appendChild(item);
});
};


window.solicitarAcompañamiento = function () {
document.getElementById("acompañamientoConfirmacion").textContent =
"✔ Tu solicitud de acompañamiento fue enviada (simulación)";
};
});
});
