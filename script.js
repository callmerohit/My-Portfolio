document.addEventListener('DOMContentLoaded', function() {
    // Hamburger functionality
    const hamburger = document.getElementById('hamburger');
    const navelements = document.getElementById('navelements');

    hamburger.addEventListener('click', function() {
        navelements.classList.toggle('show');
    });

    // Form submission
    const contactForm = document.querySelector('.contact-form'); 

    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {
            event.preventDefault();

            // Get form data
            const formData = new FormData(contactForm);
            const data = {
                from_name: formData.get('name'),
                reply_to: formData.get('email'),
                message: formData.get('message')
            };

            // Send email using EmailJS
            emailjs.send('service_wnsn36o', 'template_cbp4gyc', data)
                .then(function(response) {
                    alert('Message sent successfully!');
                    contactForm.reset();
                }, function(error) {
                    if (error.status === 400) {
                        alert('Bad Request. Please E-Mail Directly to rohitkumarr2212@gmail.com');
                    } else if (error.status === 401) {
                        alert('Unauthorized. Please E-Mail Directly to rohitkumarr2212@gmail.com');
                    } else if (error.status === 403) {
                        alert('Forbidden.Please E-Mail Directly to rohitkumarr2212@gmail.com');
                    } else if (error.status === 404) {
                        alert('Service not found.Please E-Mail Directly to rohitkumarr2212@gmail.com');
                    } else {
                        alert('Failed to send the message. Please try again.');
                    }
                });
        });
    } else {
        console.error('Contact form not found');
    }
});
