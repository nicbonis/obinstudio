// Seleziona gli elementi dal DOM
const menuIcon = document.getElementById('menu-icon');
const navLinks = document.querySelector('.nav-links');

// Aggiunge un evento al click sull'icona del menu
menuIcon.addEventListener('click', () => {
    // Aggiunge o rimuove la classe 'active' alla lista dei link
    navLinks.classList.toggle('active');
});

// Opzionale: Chiude il menu quando si clicca su un link
// Utile per la navigazione in pagine con sezioni (one-page scroll)
// In questo caso, visto che cambi pagina, non è strettamente necessario, ma è buona pratica.
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});