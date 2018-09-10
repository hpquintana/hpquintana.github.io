<?php
//header("Access-Control-Allow-Origin: http://nosuit.io");
header("Access-Control-Allow-Origin: *");
if(!isset($_POST['name']) || !isset($_POST['number']) || !isset($_POST['message']) ) {
      echo '0';
} else {
	$number = strip_tags($_POST['number']);
    $name = strip_tags($_POST['name']);
    $message = strip_tags($_POST['message']);
    $address = "No adress entered";
    if(isset($_POST['address'])){ //optional?
        $address = strip_tags($_POST['address']);
    }
    
    
	$emailSubject = "Name: " . $name . "<br/>";
    $emailSubject = $emailSubject . "Phone Number: " . $number . "<br/>";
    $emailSubject = $emailSubject . "Address: " . $address . "<br/>";
    $emailSubject = $emailSubject . "Message: " . $message . "<br/>";
    
	echo mail('helloworld@nosuit.io', '#nosuit website', $emailSubject); 
}
?>