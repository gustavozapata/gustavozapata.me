<?php

if(isset($_REQUEST["message"])){
  $name = $email = $message = "";
  $name = curarInput($_POST['name']);
  $email = curarInput($_POST['email']);
  $message = curarInput($_POST['message']);

  $formcontent=" From: $name \n Message: $message";
  $recipient = "contact@gustavozapata.me";
  $subject = "GZ Contact Form";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $email) or die("Error!");
  header("Location: index.html");
}

function curarInput($elInput){
  $elInput = trim($elInput);
  $elInput = stripslashes($elInput);
  $elInput = htmlspecialchars($elInput);
  return $elInput;
}