<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $message = $_POST['message'];
    
    // Set the recipient email address
    $to = "info@example.com"; // Replace with your email
    
    // Set the email subject
    $subject = "Message from $name";

    // Email content
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n\n";
    $email_content .= "Message:\n$message\n";

    // Email headers
    $headers = "From: $name <$email>";

    // Send email
    if (mail($to, $subject, $email_content, $headers)) {
        echo "Email sent successfully.";
    } else {
        echo "Error sending email.";
    }
} else {
    echo "Method not allowed.";
}
?>
