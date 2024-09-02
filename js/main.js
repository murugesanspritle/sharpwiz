(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();


    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-primary shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-primary shadow-sm').css('top', '-150px');
        }
    });


    // Facts counter
    $('[data-toggle="counter-up"]').counterUp({
        delay: 10,
        time: 2000
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        dots: true,
        loop: true,
        nav: true,
        navText : [
            '<i class="bi bi-chevron-left"></i>',
            '<i class="bi bi-chevron-right"></i>'
        ]
    });
    
})(jQuery);


// form functionality

document.getElementById("contact-form").addEventListener("submit", async function (e) {
    e.preventDefault(); 
    const form = e.target;
    const formData = new FormData(form);
    const submitButton = document.getElementById("submit-button");

    submitButton.innerHTML = "Sending...";

    try {
        const response = await fetch(form.action, {
            method: form.method,
            body: formData,
            headers: {
                "Accept": "application/json",
            },
        });

        if (response.ok) {
            submitButton.innerHTML = "&#10004; Sent Successfully";
            submitButton.style.backgroundColor = "#002A5C"; 
            submitButton.style.borderColor = "#002A5C"; 
        } else {
            submitButton.innerHTML = "Submit";
        }
    } catch (error) {
        submitButton.innerHTML = "Submit";
    }
});

// contact form validation

    document.getElementById("contact-form").addEventListener("submit", function(e) {
        e.preventDefault();

        const emailInput = document.getElementById("email");
        const phoneInput = document.getElementById("phone");
        const submitButton = document.getElementById("submit-button");

        const email = emailInput.value;
        const phone = phoneInput.value;

        // Validate email domain
        const bannedDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com"];
        const emailDomain = email.split('@').pop();

        if (bannedDomains.includes(emailDomain)) {
            emailInput.classList.add("is-invalid");
            return; // Prevent form submission
        } else {
            emailInput.classList.remove("is-invalid");
        }

        // Validate phone number length (should be between 10 to 14 digits)
        if (phone.length < 10 || phone.length > 14) {
            phoneInput.classList.add("is-invalid");
            return; // Prevent form submission
        } else {
            phoneInput.classList.remove("is-invalid");
        }

        // Change button text to "Sending..."
        submitButton.innerHTML = "Sending...";

        // Submit the form if validation passes
        this.submit();
    });
