<?php

$_POST;
header("Location: ".$_SERVER['HTTP_REFERER']);
$userName = $_POST['name'];
$userEmail = $_POST['email'];
$messageSubject = $_POST['subject'];
$message = $_POST['message'];

$text = '-- START ' . date('c') . " --\n"
. "User email:{$userEmail}\n" 
. "User name: {$userName}\n"
. "Message:\n"
. "{$messageSubject}\n"
. "{$message}\n";

$handle = 'C:\xampp\htdocs\test.txt';
$file = fopen($handle, "a") or die("can't open file");
fwrite($file, $text);
fclose($file);
exit;
?>