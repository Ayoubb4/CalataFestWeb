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