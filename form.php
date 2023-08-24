<?php

// variable que guarda el mail del cliente
$mail = $_POST['mail'];


// como se va a guardar el mail
$mensaje = "Tienes un nuevo suscriptor: " . $mail . " .";

$para = 'maxi.fun35@gmail.com'; //el mail va para mi
$asunto = 'Nuevo suscriptor en Hassar'; // el asunto del mail
// el hader para mistrar un texto plano

$head .= 'Content-Type: text/plain';

// la funcion que me va a enviar el mail
mail($para, $asunto, utf8_decode($mensaje), $head);

header('Location:index.html');
?>