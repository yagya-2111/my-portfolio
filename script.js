// Initialize EmailJS with your Public Key/User ID
(function () {
    emailjs.init('aLmEJmQsy8VYPrVO9'); // Your Public Key/User ID
})();

// Smooth scrolling for navbar sections
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Contact form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const message = e.target.message.value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Simulate form submission
    console.log('Form submitted:', { name, email, message });
    alert('Thank you for your message! We will get back to you shortly.');
    e.target.submit(); // Submit the form using FormSubmit
    e.target.reset();
});

document.addEventListener('DOMContentLoaded', function () {
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.querySelector('nav ul');

    navToggle.addEventListener('click', function () {
        navToggle.classList.toggle('active');
        navLinks.classList.toggle('show');
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.hidden');

    window.addEventListener('scroll', function () {
        sections.forEach((section) => {
            if (window.scrollY > 100) {
                section.classList.remove('hidden');
                section.classList.add('show-content');
            }
        });
    });
});
