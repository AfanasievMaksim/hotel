<?php
require './sendgrid-php-7.5.2/sendgrid-php.php';

//file_put_contents(__DIR__ . '/request-history.log', date("Y-m-d H:i:s"). '=============' . PHP_EOL, FILE_APPEND);
//file_put_contents(__DIR__ . '/request-history.log', print_r($_REQUEST, true), FILE_APPEND);

$roistatData = array(
    'roistat' => isset($_COOKIE['roistat_visit']) ? $_COOKIE['roistat_visit'] : 'nocookie',
    'key'     => 'M2Y3YzQ3Y2E1NjdkNzIxMWQxOGNiOWQ2MzhjNTljZDQ6MTU4ODk3',
    'title'   => isset($_POST['title']) ? $_POST['title']: '{domain}',
    'comment' => isset($_POST['comment']) ? $_POST['comment']: '',
    'name'    => isset($_POST['name']) ? $_POST['name']: '',
    'email'   => isset($_POST['email']) ? $_POST['email']: '',
    'phone'   => isset($_POST['phone']) ? $_POST['phone']: '',
    'fields'  => [
        'from' => $_POST['form'],
        'site' => '{domain}',
    ],
);
file_get_contents("https://cloud.roistat.com/api/proxy/1.0/leads/add?" . http_build_query($roistatData));

$email = new \SendGrid\Mail\Mail();
$email->setFrom('admin@whitemark.io', 'admin');//change
$email->setSubject($_SERVER['SERVER_NAME']);
$email->addTo('leads.whitemark@gmail.com', 'admin');//change
$content = sprintf("Phone: %s\nForm name: %s\nDomain: %s", $_POST['phone'], $_POST['form'], $_SERVER['SERVER_NAME']);
if(!empty($_POST['name'])){
    $content = sprintf("Name: %s\n", $_POST['name']) . $content;
}

$email->addContent('text/plain',$content);

$sendgrid = new \SendGrid('SG.ZZFcYsFpRZORKO-yGDnMEA.Os0W0rNAFcCddvJr5U2AGk_CZDAahnwykrZRkvB-iZs');
try {
    $response = $sendgrid->send($email);
} catch (Throwable $e) {
    echo 'Caught exception: '. $e->getMessage() .'\n';
}
