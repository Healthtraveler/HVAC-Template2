$(document).ready(function() {
    // Function to adjust sizes based on window width
    function adjustSizes() {
        var windowWidth = $(window).width();
        var h1FontSize, pFontSize;

        // Check window width and apply styles accordingly
        if (windowWidth >= 992) { // Desktop
            h1FontSize = '30px';
            pFontSize = '16px';
        } else if (windowWidth >= 768 && windowWidth < 992) { // Tablet
            h1FontSize = '24px';
            pFontSize = '14px';
        } else if (windowWidth < 768) { // Mobile
            h1FontSize = '20px';
            pFontSize = '12px';
        }

        // Apply font sizes to h1 and p elements
        $('h1').css('font-size', h1FontSize);
        $('p').css('font-size', pFontSize);
    }

    // Initial adjustment on page load
    adjustSizes();

    // Adjust sizes on window resize
    $(window).resize(function() {
        adjustSizes();
    });
});
