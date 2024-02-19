async function handleSubmit(event) {
    event.preventDefault();
    var status = document.getElementById("my-form-status");
    var data = new FormData(event.target);
    fetch(event.target.action, {
        method: form.method,
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.innerHTML = "Thanks for your submission!";
            form.reset();
            showThankYouContainer(); // Call function to show thank you container
            setTimeout(function() {
                hideThankYouContainer(); // Hide thank you container after 5 seconds
                showContactForm(); // Show contact form again
            }, 5000); // 5000 milliseconds = 5 seconds
        } else {
            response.json().then(data => {
                if (Object.hasOwn(data, 'errors')) {
                    status.innerHTML = data["errors"].map(error => error["message"]).join(", ");
                } else {
                    status.innerHTML = "Oops! There was a problem submitting your form";
                }
            });
        }
    }).catch(error => {
        status.innerHTML = "Oops! There was a problem submitting your form";
    });
}

function showThankYouContainer() {
    thankYouContainer.classList.add('show'); // Use classList to add 'show' class
}

function hideThankYouContainer() {
    thankYouContainer.classList.remove('show'); // Use classList to remove 'show' class
}

function showContactForm() {
    form.style.display = "block";
}