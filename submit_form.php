<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Get form data
    $name = $_POST["name"];
    $email = $_POST["email"];
    $phone = $_POST["phone"];
    $message = $_POST["message"];
    $selectedDate = $_POST["selectedDate"];
    $appointmentTime = $_POST["appointmentTime"];

    // Email configuration (update with your own details)
    $to = "erikshvac@gmail.com"; // Specify your email address here
    $subject = "New Appointment Booking";
    $headers = "From: $email";

    // Compose email message
    $emailMessage = "Name: $name\n";
    $emailMessage .= "Email: $email\n";
    $emailMessage .= "Phone: $phone\n";
    $emailMessage .= "Message: $message\n";
    $emailMessage .= "Selected Date: $selectedDate\n";
    $emailMessage .= "Preferred Time: $appointmentTime\n";

    // Send email
    mail($to, $subject, $emailMessage, $headers);

    // You can add additional logic or redirect the user after sending the email
    header("Location: thank_you.html");
    exit();
}