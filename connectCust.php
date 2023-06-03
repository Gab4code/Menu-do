<?php
$server_name = "localhost";
$username = "root";
$password = "";
$database_name = "customer";

$conn = mysqli_connect($server_name, $username, $password, $database_name);

// Check the connection
if (!$conn) {
    die("Connection Failed: " . mysqli_connect_error());
}

if (isset($_POST['save'])) {
    $regEmail = $_POST['regEmail'];
    $regUsername = $_POST['regUsername'];
    $regPassword = $_POST['regPassword'];
    $regRepassword = $_POST['regRepassword'];

    // Check if the passwords match
    if ($regPassword !== $regRepassword) {
        echo "<script>alert('Passwords do not match!'); window.history.back();</script>";
    } else {
        $sql_query = "INSERT INTO registration (regEmail, regUsername, regPassword)
                      VALUES ('$regEmail', '$regUsername', '$regPassword')";

        if (mysqli_query($conn, $sql_query)) {
            echo "<script>alert('New details entry inserted successfully!'); window.history.back();</script>";
        } else {
            echo "Error: " . $sql . " " . mysqli_error($conn);
        }
    }

    mysqli_close($conn);
}
?>
