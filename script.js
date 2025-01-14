
// Smooth scrolling for navbar sections
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.querySelectorAll('.ai-tool').forEach(tool => {
    tool.addEventListener('click', () => {
        alert('You clicked on ' + tool.querySelector('h3').innerText);
    });
});


document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    const formData = new FormData(form);

    const name = formData.get('name').trim();
    const email = formData.get('email').trim();
    const message = formData.get('message').trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
        return;
    }

    // Send the form data using fetch
    fetch(form.action, {
        method: 'POST',
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            alert('Thank you for your message! We will get back to you shortly.');
            form.reset();
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    alert(data["errors"].map(error => error["message"]).join(", "));
                } else {
                    alert('Oops! There was a problem submitting your form');
                }
            });
        }
    }).catch(error => {
        alert('Oops! There was a problem submitting your form');
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

