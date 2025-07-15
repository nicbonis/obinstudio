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


// --- LOGICA LOGO FLUTTUANTE ---
const heroLogo = document.getElementById('hero-logo');
if (heroLogo) {
    document.addEventListener('mousemove', (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth - 0.5) * -40;
        const y = (clientY / window.innerHeight - 0.5) * -40;
        
        heroLogo.style.transform = `translate(${x}px, ${y}px)`;
    });
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