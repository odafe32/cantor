
<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "contact_me";

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get form data
$name = $_POST['name'];
$email = $_POST['email'];
$phone = $_POST['phone'];
$message = $_POST['message'];

// SQL to insert data into the database
$sql = "INSERT INTO contact_me (name, email, phone, message) VALUES ('$name', '$email', '$phone', '$message')";

if ($conn->query($sql) === TRUE) {
    echo "Form submitted successfully!";
} else {
    echo "Error: " . $sql . "<br>" . $conn->error;
}

$conn->close();

?>
