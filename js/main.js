(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });


    // Date and time picker
    $('.date').datetimepicker({
        format: 'L'
    });
    $('.time').datetimepicker({
        format: 'LT'
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


    // Price carousel
    $(".price-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            },
            1200:{
                items:3
            }
        }
    });


    // Team carousel
    $(".team-carousel, .related-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        margin: 45,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="bi bi-arrow-left"></i>',
            '<i class="bi bi-arrow-right"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            992:{
                items:2
            }
        }
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        items: 1,
        dots: true,
        loop: true,
    });
    
    (function ($) {
    "use strict";

    // Smooth scroll for Popular Links
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        var target = this.hash;
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 1000, 'easeInOutExpo');
    });
    

})
// Chat Bot
function toggleChatbot() {
    const widget = document.getElementById('chatbot-widget');
    widget.style.display = widget.style.display === 'none' ? 'block' : 'none';
}


function toggleChatbox() {
    const dialog = document.getElementById('chatbot-dialog');
    dialog.style.display = dialog.style.display === 'none' ? 'block' : 'none';
}

function toggleChatbot() {
    const chatbot = document.getElementById('chatbot-dialog');
    if (chatbot.style.display === 'none' || chatbot.style.display === '') {
        chatbot.style.display = 'block'; // Show the chatbot
    } else {
        chatbot.style.display = 'none'; // Hide the chatbot
    }
}

function sendMessage() {
    const input = document.getElementById('chatbot-input');
    const messages = document.getElementById('chatbot-messages');

    if (input.value.trim() !== '') {
        // Add user message
        const userMessage = document.createElement('p');
        userMessage.style.background = '#E23936';
        userMessage.style.color = 'white';
        userMessage.style.padding = '10px';
        userMessage.style.borderRadius = '5px';
        userMessage.style.margin = '5px 0';
        userMessage.style.textAlign = 'right';
        userMessage.textContent = input.value;
        messages.appendChild(userMessage);

        // Add bot response
        const botMessage = document.createElement('p');
        botMessage.style.background = '#f1f1f1';
        botMessage.style.padding = '10px';
        botMessage.style.borderRadius = '5px';
        botMessage.style.margin = '5px 0';
        botMessage.textContent = 'Thank you for your message!';
        messages.appendChild(botMessage);

        // Clear input field
        input.value = '';

        // Scroll to the bottom
        messages.scrollTop = messages.scrollHeight;
    }
}


})(jQuery);



