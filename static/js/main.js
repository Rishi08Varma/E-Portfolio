document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Add animation class to elements when they become visible
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-fade-in');
            }
        });
    });

    // Observe all portfolio cards
    document.querySelectorAll('.portfolio-card').forEach((card) => {
        observer.observe(card);
    });

    // Update last modified date
    const lastModified = document.getElementById('last-modified');
    if (lastModified) {
        lastModified.textContent = "2025-01-22 21:05:30";
    }

    // Add user info
    const userInfo = document.getElementById('user-info');
    if (userInfo) {
        userInfo.textContent = "Rishi08Varma";
    }
});