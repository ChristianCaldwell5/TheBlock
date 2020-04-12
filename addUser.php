<?php

require('db-credentials.php');

$link=mysqli_connect(servername,username,password,dbname,port); 
    
// Check connection
if (mysqli_connect_errno($link)){
    echo "Failure to connect: " . mysqli_connect_error();
}else{
    echo "Connection Success!"
}


if(isset($_POST['next1'])) {
    $inputUsername = $_POST['l-username'] ? $_POST['l-username'] : null;
    $inputPassword = $_POST['l-password'] ? $_POST['l-password'] : null;
    //should always set to zero at beginning
    //will change if join band, will grab bandID from bandTable
    $bandID = 0;
    //this needs to change depending on which account gets linked
    $isSpotify = 1;
}

if(isset($_POST['next2']))
    $gender = $_POST['gender'] ? $_POST['gender'] : null;
    $country = $_POST['country'] ? $_POST['country'] : null;
    $state = $_POST['state'] ? $_POST['state'] : null;
    $city = $_POST['city'] ? $_POST['city'] : null;
    $age = $_POST['age'] ? $_POST['age'] : null;
    
    $query = "INSERT INTO userInfo (username, password, bandID, isSpotify, gender, country, state, city, age)
                VALUES ('$inputUsername', '$inputPassword', '$bandID', '$isSpotify', '$gender', '$country', '$state', '$city', '$age')";
    if (!mysqli_query($dbconnect, $query)) {
        die('An error occurred when submitting your user info.');
    } else {
      echo "Thanks for your account creation.";
    }
}

?>
