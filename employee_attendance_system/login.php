<?php
session_start();
include "db.php";

if(isset($_POST['login'])){

    $email = trim($_POST['email']);
    $password = trim($_POST['password']);

    $sql = "SELECT * FROM users WHERE email='$email' AND password='$password'";
    $result = mysqli_query($conn,$sql);

    if(mysqli_num_rows($result) > 0){

        $row = mysqli_fetch_assoc($result);

        $_SESSION['id'] = $row['id'];
        $_SESSION['name'] = $row['full_name'];
        $_SESSION['role'] = $row['role'];

        header("Location: dashboard.php");
        exit;

    } else {

        echo "<script>alert('Invalid Email or Password');</script>";

    }
}
?>

<!DOCTYPE html>
<html>
<head>

<title>Login</title>

<link rel="stylesheet" href="css/style.css">

</head>
<body>

<div class="login-box">

<h2>Employee Attendance System</h2>

<form method="POST">

<input type="email" name="email" placeholder="Email" required>

<input type="password" name="password" placeholder="Password" required>

<button name="login">Login</button>

</form>

</div>

</body>
</html>