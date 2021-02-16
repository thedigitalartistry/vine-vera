<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $pname      =   $_POST['txt_fname'];
    $psurname   =   $_POST['txt_surname'];
    $pemail     =   $_POST['txt_email'];
    $pphone     =   $_POST['txt_phone'];
    $pmdate     =   $_POST['txt_mdate'];
    $pmtime     =   $_POST['txt_mtime'];
    $pstate     =   $_POST['txt_inputState'];

    $msg    =   '';
    $msg    .=  '<b>Name : </b>' . $pname . '<br />';
    $msg    .=  '<b>Sur Name : </b>' . $psurname . '<br />';
    $msg    .=  '<b>E-mail : </b>' . $pemail . '<br />';
    $msg    .=  '<b>Phone : </b>' . $pphone . '<br />';
    $msg    .=  '<b>date : </b>' . $pmdate . '<br />';
    $msg    .=  '<b>time : </b>' . $pmtime . '<br />';
    $msg    .=  '<b>inputState : </b>' . $pstate . '<br />';
    $to     =   "citas@vinevera.com.mx";
    
    $subject=   "Vine Data";
    
    // Always set content-type when sending HTML email
    $headers    =   "MIME-Version: 1.0" . "\r\n";
    $headers    .=  "Content-type:text/html;charset=UTF-8" . "\r\n";

    // More headers
    $headers    .=  'From: <webmaster@example.com>' . "\r\n";

    //$headers .= 'Cc: myboss@example.com' . "\r\n";
    @mail($to,$subject,$msg,$headers);
    echo "Email Sent.";
} ?>