$(document).ready(function() {
    // Function to center the logo on smaller screens
    function centerLogoOnSmallScreens() {
        if ($(window).width() <= 991.98) { // Check if screen width is less than or equal to 991.98 pixels
            $('.navbar-brand').addClass('text-center'); // Add Bootstrap utility class to center the text
        } else {
            $('.navbar-brand').removeClass('text-center'); // Remove Bootstrap utility class
        }
    }

    // Function to adjust logo size
    function adjustLogoSize() {
        var windowWidth = $(window).width();
        var logo = $('.logo');

        if (windowWidth < 992) {
            // Small screen size
            logo.css('width', '100px'); // Adjust width as needed
        } else {
            // Larger screen size
            logo.css('width', '250px'); // Reset width
        }
    }

    // Call the functions on page load
    centerLogoOnSmallScreens();
    adjustLogoSize();

    // Call the functions whenever the window is resized
    $(window).resize(function() {
        centerLogoOnSmallScreens();
        adjustLogoSize();
    });
});