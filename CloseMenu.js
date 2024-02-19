document.addEventListener('DOMContentLoaded', function () {
    var navbarToggler = document.querySelector('.navbar-toggler');
    var navbarCollapse = document.querySelector('.navbar-collapse');
    var body = document.querySelector('body');
    var exitBtn;

    navbarToggler.addEventListener('click', function () {
        if (navbarCollapse.classList.contains('show')) {
            // If the menu is open, create and display the exit button
            if (!exitBtn) {
                exitBtn = document.createElement('button');
                exitBtn.className = 'exit-btn close-icon';
                exitBtn.innerHTML = '✕';
                exitBtn.setAttribute('aria-label', 'Close menu');
                navbarCollapse.appendChild(exitBtn);
                
                // Add event listener to the exit button to close the menu
                exitBtn.addEventListener('click', function () {
                    navbarToggler.click(); // Close the menu
                });
            }
        } else {
            // If the menu is closed, remove the exit button if it exists
            if (exitBtn) {
                exitBtn.remove();
                exitBtn = null;
            }
        }
    });

    // Add event listener to close the menu when clicking outside of the navigation elements
    navbarCollapse.addEventListener('click', function (event) {
        if (event.target === navbarCollapse) {
            navbarToggler.click(); // Close the menu
        }
    });
});
