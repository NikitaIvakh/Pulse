<?php 

$name = isset($_POST['name']) ? $_POST['name'] : '';
$phone = isset($_POST['phone']) ? $_POST['phone'] : '';
$email = isset($_POST['email']) ? $_POST['email'] : '';

if (empty($name) || empty($phone) || empty($email)) {
    http_response_code(400);
    echo 'All fields are required!';
    exit;
}

require_once('phpmailer/PHPMailerAutoload.php');
$mail = new PHPMailer;
$mail->CharSet = 'utf-8';

$mail->isSMTP();                                      
$mail->Host = 'smtp.mail.ru';  
$mail->SMTPAuth = true;                               
$mail->Username = 'example@mail.ru';                 
$mail->Password = 'password';              
$mail->SMTPSecure = 'ssl';         
$mail->Port = 465;                                    

$mail->setFrom('example@mail.ru', 'Pulse');   
$mail->addAddress('example_reveive@mail.ru');     
$mail->isHTML(true);                                 

$mail->Subject = 'Данные';
$mail->Body    = '
        Пользователь оставил данные <br> 
    Имя: ' . $name . ' <br>
    Номер телефона: ' . $phone . '<br>
    E-mail: ' . $email . '';

if(!$mail->send()) {
    echo 'Mailer Error: ' . $mail->ErrorInfo;
    return false;
} else {
    echo 'Message has been sent';
    return true;
}

?>
