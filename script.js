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

    console.log('Sending email with EmailJS...'); // Debugging log

    // Send email using EmailJS
    emailjs.send('service_url023m', 'template_hj81epa', {
        to_name: 'Your Name', // Replace with your desired recipient name
        from_name: name,
        message: message
    }).then(response => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Thank you for your message! We will get back to you shortly.');
        e.target.reset();
    }).catch(err => {
        console.error('Failed to send message. Error details:', err); // Detailed error logging
        alert('Failed to send message. Please try again later.');
    });
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
