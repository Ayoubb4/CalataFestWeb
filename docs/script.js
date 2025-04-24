function handleScrollAnimation() {
    const elements = document.querySelectorAll('.animate-on-scroll');
    const triggerBottom = window.innerHeight * 0.8;
  
    elements.forEach((el) => {
      const elementTop = el.getBoundingClientRect().top;
  
      if (elementTop < triggerBottom && !el.classList.contains('visible')) {
        el.classList.add('visible');
      }
    });
  }
  
  window.addEventListener('scroll', handleScrollAnimation);
  
  handleScrollAnimation();


function toggleMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.toggle('show');

  // Alternar icono de hamburguesa a X (opcional)
  const hamburger = document.querySelector('.hamburger');
  hamburger.textContent = navLinks.classList.contains('show') ? '✖' : '☰';
}

function closeMenu() {
  const navLinks = document.querySelector('.nav-links');
  navLinks.classList.remove('show');

  const hamburger = document.querySelector('.hamburger');
  hamburger.textContent = '☰';
}

// Cierra el menú si se hace clic fuera
document.addEventListener('click', function (e) {
  const nav = document.querySelector('.navbar');
  const navLinks = document.querySelector('.nav-links');
  if (!nav.contains(e.target)) {
    navLinks.classList.remove('show');
    document.querySelector('.hamburger').textContent = '☰';
  }
});
