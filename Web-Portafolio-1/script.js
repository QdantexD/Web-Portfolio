// ============================================
// MENU TOGGLE AVANZADO
// ============================================
const menuIcon = document.getElementById('menu-icon');
const navbar = document.querySelector('.navbar');
const navLinks = document.querySelectorAll('.navbar a');

let menuOpen = false;

menuIcon.addEventListener('click', () => {
  menuOpen = !menuOpen;
  navbar.classList.toggle('active');
  
  if (menuOpen) {
    menuIcon.classList.remove('fa-bars');
    menuIcon.classList.add('fa-times');
    // Animación de entrada para los enlaces
    navLinks.forEach((link, index) => {
      link.style.opacity = '0';
      link.style.transform = 'translateX(20px)';
      setTimeout(() => {
        link.style.transition = 'all 0.3s ease';
        link.style.opacity = '1';
        link.style.transform = 'translateX(0)';
      }, index * 100);
    });
  } else {
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
  }
});

// Cerrar menú al hacer clic en un enlace
navLinks.forEach(link => {
  link.addEventListener('click', () => {
    if (menuOpen) {
      navbar.classList.remove('active');
      menuIcon.classList.remove('fa-times');
      menuIcon.classList.add('fa-bars');
      menuOpen = false;
    }
  });
});

// Cerrar menú al hacer clic fuera
document.addEventListener('click', (e) => {
  if (!navbar.contains(e.target) && !menuIcon.contains(e.target) && menuOpen) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    menuOpen = false;
  }
});

// ============================================
// HEADER SCROLL EFFECT AVANZADO
// ============================================
const header = document.querySelector('.header');
let lastScroll = 0;
let ticking = false;

function updateHeader() {
  const currentScroll = window.pageYOffset;
  
  if (currentScroll > 100) {
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
  
  // Efecto de parallax en el logo
  if (currentScroll > 50) {
    const logo = document.querySelector('.logo');
    const scrollRatio = Math.min(currentScroll / 200, 1);
    logo.style.transform = `scale(${1 - scrollRatio * 0.05})`;
  }
  
  lastScroll = currentScroll;
  ticking = false;
}

window.addEventListener('scroll', () => {
  if (!ticking) {
    window.requestAnimationFrame(updateHeader);
    ticking = true;
  }
});

// ============================================
// ACTIVE NAVIGATION LINK ON SCROLL
// ============================================
const sections = document.querySelectorAll('section[id]');

function activateNavLink() {
  const scrollY = window.pageYOffset;
  const windowHeight = window.innerHeight;

  sections.forEach(section => {
    const sectionHeight = section.offsetHeight;
    const sectionTop = section.offsetTop - 150;
    const sectionId = section.getAttribute('id');
    const navLink = document.querySelector(`.navbar a[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      navLinks.forEach(link => link.classList.remove('active'));
      if (navLink) {
        navLink.classList.add('active');
      }
    }
  });
}

window.addEventListener('scroll', activateNavLink);

// ============================================
// SMOOTH SCROLLING AVANZADO
// ============================================
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerOffset = 100;
      const elementPosition = target.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });

      // Efecto de "pulso" en la sección objetivo
      target.style.animation = 'none';
      setTimeout(() => {
        target.style.animation = 'fadeInUp 0.6s ease';
      }, 10);
    }
  });
});

// ============================================
// TYPING EFFECT AVANZADO
// ============================================
const typingElement = document.querySelector('.typing');
const typingTexts = ['Ingeniero Frontend', 'Desarrollador Web Frontend', 'Especialista en UI/UX', 'Creador de Experiencias Digitales'];
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;
let pauseTime = 2000;

function typeText() {
  if (!typingElement) return;
  
  const currentText = typingTexts[textIndex];
  
  if (isDeleting) {
    typingElement.textContent = currentText.substring(0, charIndex - 1);
    charIndex--;
    typingSpeed = 50;
  } else {
    typingElement.textContent = currentText.substring(0, charIndex + 1);
    charIndex++;
    typingSpeed = 100;
  }

  if (!isDeleting && charIndex === currentText.length) {
    typingSpeed = pauseTime;
    isDeleting = true;
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % typingTexts.length;
    typingSpeed = 500;
  }

  setTimeout(typeText, typingSpeed);
}

// Iniciar efecto de escritura cuando la página carga
if (typingElement) {
  setTimeout(() => {
    typeText();
  }, 1500);
}

// ============================================
// SCROLL ANIMATIONS AVANZADAS
// ============================================
const observerOptions = {
  threshold: 0.15,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('fade-in');
        observer.unobserve(entry.target);
      }, index * 100);
    }
  });
}, observerOptions);

// Observar elementos para animación
const animateElements = document.querySelectorAll(
  '.service-box, .skill-box, .timeline-item, .experience-box, .contact-item'
);

animateElements.forEach(el => {
  observer.observe(el);
});

// ============================================
// SKILL BARS ANIMATION AVANZADA
// ============================================
const skillBars = document.querySelectorAll('.skill-progress');

const skillObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        const width = entry.target.getAttribute('data-width');
        entry.target.style.width = width + '%';
        
        // Efecto de número contador
        const skillInfo = entry.target.closest('.skill-box').querySelector('.skill-info span:last-child');
        if (skillInfo) {
          animateCounter(skillInfo, 0, parseInt(width), 1500);
        }
        
        skillObserver.unobserve(entry.target);
      }, index * 150);
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

// Función para animar contador
function animateCounter(element, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    const current = Math.floor(progress * (end - start) + start);
    element.textContent = current + '%';
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

// ============================================
// TIMELINE ANIMATIONS
// ============================================
const timelineItems = document.querySelectorAll('.timeline-item');

const timelineObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        timelineObserver.unobserve(entry.target);
      }, index * 200);
    }
  });
}, { threshold: 0.3 });

timelineItems.forEach(item => {
  timelineObserver.observe(item);
});

// ============================================
// EXPERIENCE BOX ANIMATIONS
// ============================================
const experienceBoxes = document.querySelectorAll('.experience-box');

const experienceObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      setTimeout(() => {
        entry.target.classList.add('visible');
        experienceObserver.unobserve(entry.target);
      }, index * 200);
    }
  });
}, { threshold: 0.2 });

experienceBoxes.forEach(box => {
  experienceObserver.observe(box);
});

// ============================================
// SCROLL TO TOP BUTTON AVANZADO
// ============================================
const scrollTopBtn = document.getElementById('scrollTop');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 300) {
    scrollTopBtn.classList.add('active');
  } else {
    scrollTopBtn.classList.remove('active');
  }
});

scrollTopBtn.addEventListener('click', (e) => {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
  
  // Efecto de rotación
  scrollTopBtn.style.transform = 'rotate(360deg)';
  setTimeout(() => {
    scrollTopBtn.style.transform = '';
  }, 500);
});

// ============================================
// CONTACT FORM AVANZADO
// ============================================
const contactForm = document.getElementById('contactForm');

if (contactForm) {
  // Efecto de focus en inputs
  const inputs = contactForm.querySelectorAll('input, textarea');
  inputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement?.classList.add('focused');
    });
    
    input.addEventListener('blur', function() {
      if (!this.value) {
        this.parentElement?.classList.remove('focused');
      }
    });
  });

  contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    const originalBg = submitBtn.style.background;
    
    // Animación de carga
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Enviando...';
    submitBtn.disabled = true;
    submitBtn.style.opacity = '0.7';
    
    // Simulación de envío (reemplazar con lógica real)
    setTimeout(() => {
      submitBtn.innerHTML = '<i class="fas fa-check"></i> ¡Mensaje Enviado!';
      submitBtn.style.background = 'linear-gradient(135deg, #00ff88 0%, #00cc6a 100%)';
      submitBtn.style.opacity = '1';
      
      // Efecto de confeti
      createConfetti();
      
      // Resetear formulario después de 3 segundos
      setTimeout(() => {
        contactForm.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = originalBg;
        submitBtn.disabled = false;
        showNotification('¡Mensaje enviado exitosamente!', 'success');
      }, 3000);
    }, 1500);
  });
}

// ============================================
// NOTIFICACIONES AVANZADAS
// ============================================
function showNotification(message, type = 'info') {
  const notification = document.createElement('div');
  notification.className = `notification notification-${type}`;
  notification.innerHTML = `
    <i class="fas ${type === 'success' ? 'fa-check-circle' : 'fa-info-circle'}"></i>
    <span>${message}</span>
  `;
  
  notification.style.cssText = `
    position: fixed;
    top: 120px;
    right: 20px;
    background: ${type === 'success' 
      ? 'linear-gradient(135deg, rgba(0, 255, 136, 0.95) 0%, rgba(0, 204, 106, 0.95) 100%)' 
      : 'linear-gradient(135deg, rgba(255, 0, 110, 0.95) 0%, rgba(131, 56, 236, 0.95) 100%)'};
    color: white;
    padding: 1.8rem 2.5rem;
    border-radius: 1.5rem;
    font-size: 1.6rem;
    font-weight: 600;
    z-index: 10000;
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.3);
    display: flex;
    align-items: center;
    gap: 1rem;
    backdrop-filter: blur(10px);
    animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    max-width: 400px;
  `;
  
  document.body.appendChild(notification);
  
  setTimeout(() => {
    notification.style.animation = 'slideOutRight 0.4s cubic-bezier(0.4, 0, 0.2, 1)';
    setTimeout(() => {
      notification.remove();
    }, 400);
  }, 4000);
}

// ============================================
// PARALLAX EFFECTS AVANZADOS
// ============================================
let parallaxElements = [];

function initParallax() {
  const homeImg = document.querySelector('.home-img');
  const homeContent = document.querySelector('.home-content');
  
  if (homeImg) parallaxElements.push({ element: homeImg, speed: 0.3 });
  if (homeContent) parallaxElements.push({ element: homeContent, speed: 0.2 });
}

function updateParallax() {
  const scrolled = window.pageYOffset;
  
  parallaxElements.forEach(({ element, speed }) => {
    if (scrolled < window.innerHeight * 1.5) {
      const yPos = -(scrolled * speed);
      element.style.transform = `translateY(${yPos}px)`;
    }
  });
}

window.addEventListener('scroll', () => {
  if (window.innerWidth > 768) {
    updateParallax();
  }
});

initParallax();

// ============================================
// PARTICLE SYSTEM AVANZADO
// ============================================
function createParticleSystem() {
  const homeSection = document.querySelector('.home');
  if (!homeSection) return;
  
  const particleCount = 30;
  const particles = [];
  
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    
    const size = Math.random() * 3 + 1;
    const x = Math.random() * 100;
    const y = Math.random() * 100;
    const duration = Math.random() * 10 + 10;
    const delay = Math.random() * 5;
    
    particle.style.cssText = `
      position: absolute;
      width: ${size}px;
      height: ${size}px;
      background: ${i % 3 === 0 ? 'var(--main-color)' : i % 3 === 1 ? 'var(--accent-color)' : 'var(--accent-color-2)'};
      border-radius: 50%;
      opacity: ${Math.random() * 0.5 + 0.2};
      pointer-events: none;
      left: ${x}%;
      top: ${y}%;
      animation: float-particle ${duration}s infinite ease-in-out;
      animation-delay: ${delay}s;
      box-shadow: 0 0 ${size * 2}px currentColor;
    `;
    
    homeSection.appendChild(particle);
    particles.push(particle);
  }
}

// Crear sistema de partículas
createParticleSystem();

// ============================================
// CONFETI EFFECT
// ============================================
function createConfetti() {
  const colors = ['#ff006e', '#8338ec', '#3a86ff', '#00ff88'];
  const confettiCount = 50;
  
  for (let i = 0; i < confettiCount; i++) {
    const confetti = document.createElement('div');
    const color = colors[Math.floor(Math.random() * colors.length)];
    const x = Math.random() * window.innerWidth;
    const angle = Math.random() * 360;
    const velocity = Math.random() * 10 + 5;
    
    confetti.style.cssText = `
      position: fixed;
      width: 10px;
      height: 10px;
      background: ${color};
      left: ${x}px;
      top: -10px;
      z-index: 10000;
      pointer-events: none;
      border-radius: ${Math.random() > 0.5 ? '50%' : '0'};
      animation: confettiFall ${Math.random() * 2 + 2}s linear forwards;
      transform: rotate(${angle}deg);
    `;
    
    document.body.appendChild(confetti);
    
    setTimeout(() => {
      confetti.remove();
    }, 4000);
  }
}

// ============================================
// CURSOR EFFECT (opcional, solo desktop)
// ============================================
if (window.innerWidth > 768) {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 2px solid var(--main-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 10000;
    transition: transform 0.1s ease;
    display: none;
  `;
  document.body.appendChild(cursor);
  
  let mouseX = 0, mouseY = 0;
  let cursorX = 0, cursorY = 0;
  
  document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursor.style.display = 'block';
  });
  
  function animateCursor() {
    cursorX += (mouseX - cursorX) * 0.1;
    cursorY += (mouseY - cursorY) * 0.1;
    cursor.style.left = cursorX + 'px';
    cursor.style.top = cursorY + 'px';
    requestAnimationFrame(animateCursor);
  }
  
  animateCursor();
  
  // Efecto hover en elementos interactivos
  const interactiveElements = document.querySelectorAll('a, button, .service-box, .skill-icon');
  interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'scale(1.5)';
      cursor.style.background = 'rgba(255, 0, 110, 0.2)';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'scale(1)';
      cursor.style.background = 'transparent';
    });
  });
}

// ============================================
// LAZY LOADING PARA IMÁGENES
// ============================================
if ('IntersectionObserver' in window) {
  const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        if (img.dataset.src) {
          img.src = img.dataset.src;
          img.removeAttribute('data-src');
          img.style.opacity = '0';
          img.style.transition = 'opacity 0.5s ease';
          setTimeout(() => {
            img.style.opacity = '1';
          }, 100);
        }
        imageObserver.unobserve(img);
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('img[data-src]').forEach(img => {
    imageObserver.observe(img);
  });
}

// ============================================
// PRELOADER (opcional)
// ============================================
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
  
  // Animación de entrada suave
  setTimeout(() => {
    document.querySelector('.home')?.classList.add('loaded');
  }, 100);
});

// ============================================
// KEYBOARD NAVIGATION
// ============================================
document.addEventListener('keydown', (e) => {
  // Cerrar menú con Escape
  if (e.key === 'Escape' && menuOpen) {
    navbar.classList.remove('active');
    menuIcon.classList.remove('fa-times');
    menuIcon.classList.add('fa-bars');
    menuOpen = false;
  }
  
  // Navegación con flechas (cuando el menú está abierto)
  if (menuOpen && (e.key === 'ArrowDown' || e.key === 'ArrowUp')) {
    e.preventDefault();
    const currentIndex = Array.from(navLinks).findIndex(link => link.classList.contains('active'));
    let nextIndex;
    
    if (e.key === 'ArrowDown') {
      nextIndex = (currentIndex + 1) % navLinks.length;
    } else {
      nextIndex = (currentIndex - 1 + navLinks.length) % navLinks.length;
    }
    
    navLinks.forEach(link => link.classList.remove('active'));
    navLinks[nextIndex]?.classList.add('active');
    navLinks[nextIndex]?.focus();
  }
});

// ============================================
// PERFORMANCE OPTIMIZATION
// ============================================
let scrollTimeout;
window.addEventListener('scroll', () => {
  if (!scrollTimeout) {
    window.requestAnimationFrame(() => {
      // Aquí se ejecutan las funciones de scroll
      scrollTimeout = null;
    });
    scrollTimeout = true;
  }
});

// ============================================
// CONSOLE MESSAGE
// ============================================
console.log('%c¡Hola! 👋', 'color: #ff006e; font-size: 24px; font-weight: bold;');
console.log('%c¿Interesado en el código? ¡Contáctame!', 'color: #8338ec; font-size: 16px;');
console.log('%cPortfolio desarrollado con ❤️', 'color: #3a86ff; font-size: 14px;');

// ============================================
// AGREGAR ESTILOS DINÁMICOS
// ============================================
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInRight {
    from {
      transform: translateX(100%);
      opacity: 0;
    }
    to {
      transform: translateX(0);
      opacity: 1;
    }
  }
  
  @keyframes slideOutRight {
    from {
      transform: translateX(0);
      opacity: 1;
    }
    to {
      transform: translateX(100%);
      opacity: 0;
    }
  }
  
  @keyframes float-particle {
    0%, 100% {
      transform: translate(0, 0) scale(1);
      opacity: 0.3;
    }
    25% {
      transform: translate(50px, -50px) scale(1.2);
      opacity: 0.6;
    }
    50% {
      transform: translate(-30px, -100px) scale(0.8);
      opacity: 0.4;
    }
    75% {
      transform: translate(-50px, -30px) scale(1.1);
      opacity: 0.5;
    }
  }
  
  @keyframes confettiFall {
    to {
      transform: translateY(100vh) rotate(720deg);
      opacity: 0;
    }
  }
  
  .home.loaded {
    animation: fadeIn 1s ease;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;
document.head.appendChild(style);
