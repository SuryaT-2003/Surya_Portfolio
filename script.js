// Smooth Scrolling
const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', smoothScroll);
});

function smoothScroll(e) {
    e.preventDefault();
    const targetId = this.getAttribute('href').substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
        top: targetSection.offsetTop - 70, // Adjust for fixed nav height
        behavior: 'smooth'
    });

    // Close mobile menu after clicking
    if (window.innerWidth < 768) {
        navLinksContainer.classList.remove('active');
    }
}

// Active Navigation Link Highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('.section');
    const scrollPos = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;

    sections.forEach(section => {
        if (
            scrollPos >= section.offsetTop - 80 &&
            scrollPos < section.offsetTop + section.offsetHeight - 80
        ) {
            document.querySelector('.nav-link.active')?.classList.remove('active');
            document.querySelector(`.nav-link[href="#${section.id}"]`).classList.add('active');
        }
    });
});

// Contact Form Validation
const contactForm = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');

contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    // Clear previous errors
    document.querySelectorAll('.error-message').forEach(error => {
        error.style.display = 'none';
    });
    formSuccess.style.display = 'none';

    // Validate Name
    const name = document.getElementById('name');
    if (name.value.trim() === '') {
        showError('name-error', 'Please enter your name.');
        valid = false;
    }

    // Validate Email
    const email = document.getElementById('email');
    if (email.value.trim() === '') {
        showError('email-error', 'Please enter your email.');
        valid = false;
    } else if (!validateEmail(email.value.trim())) {
        showError('email-error', 'Please enter a valid email.');
        valid = false;
    }

    // Validate Subject
    const subject = document.getElementById('subject');
    if (subject.value.trim() === '') {
        showError('subject-error', 'Please enter a subject.');
        valid = false;
    }

    // Validate Message
    const message = document.getElementById('message');
    if (message.value.trim() === '') {
        showError('message-error', 'Please enter your message.');
        valid = false;
    }

    if (valid) {
        // Here you can handle form submission, e.g., send data to a server
        // For demonstration, we'll just show a success message
        formSuccess.textContent = 'Your message has been sent successfully!';
        formSuccess.style.display = 'block';
        contactForm.reset();
    }
});

function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    errorElement.textContent = message;
    errorElement.style.display = 'block';
}

function validateEmail(email) {
    // Simple email regex
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Mobile Menu Toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinksContainer = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinksContainer.classList.toggle('active');
});

// Close the menu when clicking outside
document.addEventListener('click', (e) => {
    if (!navLinksContainer.contains(e.target) && !menuToggle.contains(e.target)) {
        if (navLinksContainer.classList.contains('active')) {
            navLinksContainer.classList.remove('active');
        }
    }
});
document.querySelectorAll('.accordion-button').forEach(button => {
    button.addEventListener('click', function() {
        // Remove the dance class if it exists
        button.classList.remove('dance');

        // Force a reflow to restart the animation
        void button.offsetWidth; 

        // Add the dance class
        button.classList.add('dance');
    });
});
