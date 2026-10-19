document.addEventListener("DOMContentLoaded", () => {
    // Mobile Navigation Toggle
    const hamburger = document.getElementById("hamburger");
    const navMenu = document.getElementById("navMenu");

    if (hamburger && navMenu) {
        hamburger.addEventListener("click", () => {
            navMenu.classList.toggle("active");
        });
    }

    // Smooth Scroll for Navigation Links
    const links = document.querySelectorAll('.nav-menu a, .btn');
    
    for (const link of links) {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith("#")) {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth'
                    });
                    // Close mobile menu after clicking link
                    if (navMenu.classList.contains("active")) {
                        navMenu.classList.remove("active");
                    }
                }
            }
        });
    }
});