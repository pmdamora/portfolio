$( document ).ready(function() {
    // Slide open the overlay menu
    $('.hamburger').on('click', function() {
        toggleOverlay();
    });

    // Close the overlay menu if the window is resized too big
    $(window).resize(function() {
        if ($(window).width() > 768 && $('.hamburger').hasClass('is-active')) {
            toggleOverlay();
        }
    });

    // Display the top arrow if the window is scrolled down too much
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 400) {
            if ($('#return-to-top').css('bottom') == '-30px') {
                $('#return-to-top').animate({bottom: '20px'}, 4);
            }
        } else {
            if ($('#return-to-top').css('bottom') == '20px') {
                $('#return-to-top').animate({bottom: '-30px'}, 4);
            }
        }
    });

    // Return to top if the button is clicked
    $('#return-to-top').click(function() {
        $('body,html').animate({
            scrollTop : 0
        }, 500);
    });
});

function toggleOverlay() {
    $('.hamburger').toggleClass('is-active');
    $('.burger-container .navbar-brand').toggleClass('navbar-brand-overlay');

    $('#wrap').toggleClass('blurred');
    $('#footer').toggleClass('blurred');
    $('body').toggleClass('no-scroll');

    $('nav.navbar-overlay').fadeToggle('elastic');
    $('#social-overlay').fadeToggle('elastic');
}
