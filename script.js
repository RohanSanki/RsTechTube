// Smooth Scroll
document.querySelectorAll('a[href^="#"], a[href$=".html"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        // Check if it's a link to an ID or a page
        if (this.getAttribute('href').startsWith('#')) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});

// Page Load Animation
window.addEventListener('load', () => {
    document.body.classList.add('page-loaded');
});

// Hover animation on nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('mouseenter', () => {
        link.classList.add('hover-animate');
    });
    link.addEventListener('mouseleave', () => {
        link.classList.remove('hover-animate');
    });
});
