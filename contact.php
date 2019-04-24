<?php

if(isset($_REQUEST["message"])){
  $name = $email = $message = "";
  $name = sanitiseInput($_POST['name']);
  $email = sanitiseInput($_POST['email']);
  $message = sanitiseInput($_POST['message']);

  $formcontent=" From: $name \n Message: $message";
  $recipient = "contact@gustavozapata.me";
  $subject = "GZ Contact Form";
  $mailheader = "From: $email \r\n";
  mail($recipient, $subject, $formcontent, $email) or die("Error!");
  header("Location: index.html?contact=1");
}

function sanitiseInput($elInput){
  $elInput = trim($elInput);
  $elInput = stripslashes($elInput);
  $elInput = htmlspecialchars($elInput);
  return $elInput;
}