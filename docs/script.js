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
    navLinks.classList.remove('fade-in');
    navLinks.classList.add('fade-out');

    setTimeout(function () {
      navLinks.classList.remove('show');
      navLinks.classList.remove('fade-out');
    }, 300); // duración de la animación

    hamburger.textContent = '☰';
  } else {
    navLinks.classList.add('show');
    navLinks.classList.add('fade-in');
    hamburger.textContent = '✖';
  }
}

function closeMenu() {
  var navLinks = document.querySelector('.nav-links');
  var hamburger = document.querySelector('.hamburger');

  navLinks.classList.remove('fade-in');
  navLinks.classList.add('fade-out');

  setTimeout(function () {
    navLinks.classList.remove('show');
    navLinks.classList.remove('fade-out');
    hamburger.textContent = '☰';
  }, 300);
}

document.addEventListener('click', function (e) {
  var nav = document.querySelector('.navbar');
  var navLinks = document.querySelector('.nav-links');
  var hamburger = document.querySelector('.hamburger');

  if (!nav.contains(e.target)) {
    closeMenu();
  }
});
