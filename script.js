
//Prevent Inspect
document.addEventListener('contextmenu', function (e) {
    e.preventDefault();
});
document.addEventListener('keydown', function (e) {
    if (
        e.key === "F12" ||
        (e.ctrlKey && e.shiftKey && (e.key === "I" || e.key === "J")) ||
        (e.ctrlKey && e.key === "U")
    ) {
        e.preventDefault();
    }
});

// JS CODE START -->
document.addEventListener('DOMContentLoaded', function () {
    emailjs.init('N9NGr9cZ4-tx16iTh');

// //Mobile POP UP
    const mobileBtn = document.getElementById("mobileViewBtn");
    const mobilePopup = document.getElementById("mobilePopup");
    const closeBtn = document.getElementById("closePopup");

    mobileBtn.addEventListener("click", () => {
        mobilePopup.style.display = "flex";
        
    });
    closeBtn.addEventListener("click", () => {
        mobilePopup.style.display = "none";
    });
    mobilePopup.addEventListener("click", (e) => {
        if (e.target === mobilePopup) {
            mobilePopup.style.display = "none";
        }
    });
    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape") {
            mobilePopup.style.display = "none";
        }
    });


    // Hamburger functionality
    const hamburger = document.getElementById('hamburger');
    const navelements = document.getElementById('navelements');
    const navLinks = document.querySelectorAll('.navButton');

    hamburger.addEventListener('click', function () {
        hamburger.classList.toggle('active'); 
        navelements.classList.toggle('show');
    });

    navLinks.forEach(link => {
        link.addEventListener('click', function () {
            navelements.classList.remove('show');
            hamburger.classList.remove('active'); 
        });
    });

    window.addEventListener('scroll', function () {
        if (window.innerWidth < 768) {
            navelements.classList.remove('show');
            hamburger.classList.remove('active');
        }
    });

    // Theme toggle
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    if (localStorage.getItem('theme') === 'dark') {
        body.classList.add('dark-mode');
        themeToggle.querySelector('i').classList.replace('fa-moon', 'fa-sun');
    }

    themeToggle.addEventListener('click', function () {
        body.classList.toggle('dark-mode');
        const icon = themeToggle.querySelector('i');
        if (body.classList.contains('dark-mode')) {
            icon.classList.replace('fa-moon', 'fa-sun');
            localStorage.setItem('theme', 'dark');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
            localStorage.setItem('theme', 'light');
        }
    });

    // Contact Form
    const contactForm = document.querySelector('.contact-form');
    if (!contactForm) {
        console.error('Contact form not found (.contact-form)');
    } else {
        const sendBtn = contactForm.querySelector('button[type="submit"]');

        // Set time field automatically
        const timeField = contactForm.querySelector('input[name="time"]');
        if (timeField) {
            timeField.value = new Date().toLocaleString();
        }

        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();

            if (typeof emailjs === 'undefined') {
                console.error('EmailJS not loaded.');
                alert('Email service not available.');
                return;
            }

            sendBtn.disabled = true;
            const originalText = sendBtn.textContent;
            sendBtn.textContent = 'Sending...';

            emailjs.sendForm('service_dmgzjrf', 'template_8ss2xpb', contactForm)
                .then(() => {
                    alert('Message sent successfully!');
                    contactForm.reset();
                })
                .catch((err) => {
                    console.error('EmailJS error', err);
                    alert('Failed to send message. Check console for details.');
                })
                .finally(() => {
                    sendBtn.disabled = false;
                    sendBtn.textContent = originalText;
                });
        });
    }

  
    // Footer Year Update
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }
});