<?php
session_start();

if(!isset($_SESSION['id'])){
    header("Location: login.php");
}
?>

<!DOCTYPE html>
<html>
<head>
<title>Dashboard</title>
</head>
<body>

<h2>Welcome <?php echo $_SESSION['name']; ?></h2>

<a href="logout.php">Logout</a>

</body>
</html>