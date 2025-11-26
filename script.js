// Mobile Menu Toggle
const mobileMenu = document.getElementById('mobileMenu');
const navMenu = document.getElementById('navMenu');

if (mobileMenu && navMenu) {
    mobileMenu.addEventListener('click', function() {
        navMenu.classList.toggle('show');
    });
}

// Product Category Tabs
const categoryBtns = document.querySelectorAll('.category-btn');

categoryBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        categoryBtns.forEach(b => b.classList.remove('active'));
        this.classList.add('active');
    });
});

// Form Submission
const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Thank you for your message! We will get back to you soon.');
        contactForm.reset();
    });
}

// Partners Slider Animation
function initPartnersSlider() {
    const partnersTrack = document.querySelector('.partners-track');
    if (!partnersTrack) return;
    
    // Clone the partner logos for seamless animation
    const logos = partnersTrack.innerHTML;
    partnersTrack.innerHTML = logos + logos;
}

// Initialize when page loads
document.addEventListener('DOMContentLoaded', function() {
    initPartnersSlider();
});