document.addEventListener('DOMContentLoaded', function () {
    const serviceBoxes = document.querySelectorAll('.service-box');
    let inactivityTimer;

    function hideServiceInfo(box) {
        box.classList.remove('expanded');
        box.querySelector('.service-info').style.display = 'none';
        box.querySelector('.service-name').style.display = 'block';
    }

    function handleUserActivity() {
        // Clear the existing inactivity timer
        clearTimeout(inactivityTimer);

        // Set a timer to automatically hide the service info after 5 seconds of inactivity
        inactivityTimer = setTimeout(function () {
            serviceBoxes.forEach(function (box) {
                hideServiceInfo(box);
            });
        }, 5000);
    }

    serviceBoxes.forEach(function (box) {
        box.addEventListener('click', function (event) {
            // Toggle the expanded class on the clicked service box
            box.classList.toggle('expanded');

            // Toggle the visibility of the service info within the clicked box
            const serviceInfo = box.querySelector('.service-info');
            serviceInfo.style.display = (box.classList.contains('expanded')) ? 'block' : 'none';

            // Toggle the visibility of the service name within the clicked box
            const serviceName = box.querySelector('.service-name');
            serviceName.style.display = (box.classList.contains('expanded')) ? 'none' : 'block';

            // Collapse other service boxes
            serviceBoxes.forEach(function (otherBox) {
                if (otherBox !== box && otherBox.classList.contains('expanded')) {
                    hideServiceInfo(otherBox);
                }
            });

            // Handle user activity after a click
            handleUserActivity();
        });
    });

    // Event listener for clicks anywhere on the document
    document.addEventListener('click', function (event) {
        // Hide service info when clicking outside of service boxes
        if (!event.target.closest('.service-box')) {
            serviceBoxes.forEach(function (box) {
                hideServiceInfo(box);
            });
        }

        // Handle user activity after a click
        handleUserActivity();
    });

    // Event listener for scroll events on the document
    document.addEventListener('scroll', function () {
        // Hide service info when scrolling
        serviceBoxes.forEach(function (box) {
            hideServiceInfo(box);
        });

        // Handle user activity after a scroll
        handleUserActivity();
    });
});