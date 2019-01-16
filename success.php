<?php
header("Content-Type: text/html; charset=utf-8");
$email = htmlspecialchars($_POST["email"]);
$name = htmlspecialchars($_POST["name"]);
$tel = htmlspecialchars($_POST["tel"]);

$refferer = getenv('HTTP_REFERER');
$date=date("d.m.y"); // число.месяц.год  
$time=date("H:i"); // часы:минуты:секунды 
$myemail = "demontazh_kiev@ukr.net";

$tema = "Тема письма админу";
$message_to_myemail = "Текст письма:
<br><br>
Имя: $name<br>
E-mail: $email<br>
Телефон: $tel<br>
Источник (ссылка): $refferer
";

mail($myemail, $tema, $message_to_myemail, "From: almaz-ok.kiev.ua <demontazh_kiev@ukr.net> \r\n Reply-To: almaz-ok.kiev.ua \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );


$tema = "Тема письма клиенту";
$message_to_myemail = "
Текст письма<br>
Ваша заявка принята. Мы перезвоним Вам!
";
$myemail = $email;
mail($myemail, $tema, $message_to_myemail, "From: almaz-ok.kiev.ua <demontazh_kiev@ukr.net> \r\n Reply-To: almaz-ok.kiev.ua \r\n"."MIME-Version: 1.0\r\n"."Content-type: text/html; charset=utf-8\r\n" );



?>
