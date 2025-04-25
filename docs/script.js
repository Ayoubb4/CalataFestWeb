function handleScrollAnimation() {
  const elements = document.querySelectorAll('.animate-on-scroll');
  const triggerBottom = window.innerHeight * 0.8;

  elements.forEach(function (el) {
    const elementTop = el.getBoundingClientRect().top;

    if (elementTop < triggerBottom && !el.classList.contains('visible')) {
      el.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', handleScrollAnimation);
handleScrollAnimation();

function toggleMenu() {
  var navLinks = document.querySelector('.nav-links');
  var hamburger = document.querySelector('.hamburger');

  if (navLinks.classList.contains('show')) {
    // Cierra el menú con animación
    navLinks.classList.remove('fade-in');
    navLinks.classList.add('fade-out');
    hamburger.classList.remove('active');

    // Restaura el ícono de hamburguesa
    setTimeout(function () {
      hamburger.textContent = '☰';
    }, 150);

    // Oculta el menú después de la animación
    setTimeout(function () {
      navLinks.classList.remove('show');
      navLinks.classList.remove('fade-out');
    }, 300);
  } else {
    // Abre el menú con animación
    navLinks.classList.add('show');
    navLinks.classList.add('fade-in');
    hamburger.classList.add('active');
    
    // Cambia el ícono con una animación suave
    setTimeout(function() {
      hamburger.textContent = '✖';
    }, 150);
  }
}

function closeMenu() {
  var navLinks = document.querySelector('.nav-links');
  var hamburger = document.querySelector('.hamburger');

  // Solo ejecuta si el menú está abierto
  if (navLinks.classList.contains('show')) {
    navLinks.classList.remove('fade-in');
    navLinks.classList.add('fade-out');
    hamburger.classList.remove('active');

    // Restaura el ícono de hamburguesa con animación
    setTimeout(function() {
      hamburger.textContent = '☰';
    }, 150);

    // Oculta el menú después de la animación
    setTimeout(function () {
      navLinks.classList.remove('show');
      navLinks.classList.remove('fade-out');
    }, 300);
  }
}

// Cierra el menú al hacer clic fuera de él
document.addEventListener('click', function (e) {
  var nav = document.querySelector('.navbar');
  var navLinks = document.querySelector('.nav-links');
  var hamburger = document.querySelector('.hamburger');

  if (!nav.contains(e.target) && navLinks.classList.contains('show')) {
    closeMenu();
  }
});

// Añade animación a los elementos del menú cuando aparecen
document.addEventListener('DOMContentLoaded', function() {
  const menuItems = document.querySelectorAll('.nav-links li');
  
  // Configuración de animación para los elementos del menú
  menuItems.forEach((item, index) => {
    item.style.transitionDelay = `${index * 0.1}s`;
  });

  // Si la página se carga con ancho móvil, asegúrate de que el menú esté cerrado
  var navLinks = document.querySelector('.nav-links');
  var hamburger = document.querySelector('.hamburger');
  
  if (window.innerWidth <= 768) {
    navLinks.classList.remove('show');
    hamburger.textContent = '☰';
    hamburger.classList.remove('active');
  }
});

window.addEventListener('DOMContentLoaded', function () {
  var preguntas = document.querySelectorAll('.faq-question');

  for (var i = 0; i < preguntas.length; i++) {
    preguntas[i].addEventListener('click', function () {
      var item = this.parentElement;

      if (item.classList.contains('active')) {
        item.classList.remove('active');
      } else {
        // Si quieres cerrar los demás al abrir uno:
        var activos = document.querySelectorAll('.faq-item.active');
        for (var j = 0; j < activos.length; j++) {
          activos[j].classList.remove('active');
        }

        item.classList.add('active');
      }
    });
  }
});