// --- LOGICA PER MENU HAMBURGER ---
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

if (menuIcon) {
    menuIcon.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });
}

document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});


// --- LOGICA PER ANIMAZIONI ON-SCROLL ---
const animatedElements = document.querySelectorAll('.animate-on-scroll');
if (animatedElements.length > 0) {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1 });

    animatedElements.forEach(el => observer.observe(el));
}


// --- LOGICA PULSANTE SCROLL-TO-TOP ---
const scrollToTopBtn = document.querySelector('.scroll-to-top');
if (scrollToTopBtn) {
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }
    });
}


// --- LOGICA EFFETTO 3D DEL LOGO (SOLO SU DESKTOP) ---
// Controlliamo la larghezza dello schermo all'avvio
if (window.innerWidth > 992) {
    const logo = document.getElementById('hero-logo');
    if (logo) {
        // Se lo schermo è più grande di 992px, attiviamo l'effetto del mouse
        document.addEventListener('mousemove', function(e) {
            // Calcoliamo la posizione del mouse rispetto al centro dello schermo
            let x = (window.innerWidth / 2 - e.clientX) / 25; // Divisore più grande per un effetto più sottile
            let y = (window.innerHeight / 2 - e.clientY) / 25;
    
            // Applichiamo la trasformazione per l'effetto 3D
            logo.style.transform = `rotateY(${-x}deg) rotateX(${y}deg)`;
            logo.style.transition = 'transform 0.1s ease-out'; // Aggiungiamo una transizione per fluidità
        });
    }
}