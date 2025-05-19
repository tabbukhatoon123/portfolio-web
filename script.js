// ========= ScrollReveal Animations =========
ScrollReveal({
    reset: false,
    distance: '50px',
    duration: 1000,
    easing: 'ease-in-out',
    origin: 'bottom'
  });
  
  // Hero Section
  ScrollReveal().reveal('.hero h1', { delay: 200 });
  ScrollReveal().reveal('.hero .subtitle', { delay: 400 });
  ScrollReveal().reveal('.hero .btn', { delay: 600 });
  
  // About Section
  ScrollReveal().reveal('.about-img', { origin: 'left', delay: 200 });
  ScrollReveal().reveal('.about-text', { origin: 'right', delay: 300 });
  
  // Skills Section
  ScrollReveal().reveal('#skills h2', { delay: 100 });
  ScrollReveal().reveal('.skill-card', {
    interval: 100,
    origin: 'bottom'
  });
  
  // Projects Section
  ScrollReveal().reveal('#projects h2', { delay: 100 });
  ScrollReveal().reveal('.project-card', {
    interval: 150,
    origin: 'bottom'
  });
  
  // Contact Section
  ScrollReveal().reveal('#contact h2', { delay: 100 });
  ScrollReveal().reveal('.contact-subtitle', { delay: 200 });
  ScrollReveal().reveal('.contact-form input, .contact-form textarea, .contact-form button', {
    interval: 100,
    origin: 'bottom'
  });
  
  // Footer
  ScrollReveal().reveal('#footer p, .social-links a', {
    interval: 100,
    origin: 'bottom',
    delay: 200
  });
  
  
  // ========= Smooth Scroll for Anchor Links =========
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const section = document.querySelector(this.getAttribute('href'));
      if (section) {
        section.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  
  // ========= Optional: Contact Form Logging (Fake Submit) =========
  const form = document.querySelector('.contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
  
      const name = form.name.value.trim();
      const email = form.email.value.trim();
      const message = form.message.value.trim();
  
      if (name && email && message) {
        console.log('✅ Message sent:', { name, email, message });
  
        // Show success (optional)
        alert('Thanks for reaching out!');
  
        form.reset(); // Clear form
      } else {
        alert(' Please fill out all fields.');
      }
    });
  }
  