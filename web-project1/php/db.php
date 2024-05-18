<?php
// db.php

$servername = "localhost"; // عادةً ما يكون "localhost" للخادم المحلي
$username = "root";
$password = "";
$dbname = "real_estate_db"; // اسم قاعدة البيانات التي تريد الاتصال بها

// إنشاء الاتصال
$conn = new mysqli($servername, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";

// يمكنك إغلاق الاتصال في نهاية السكربت (أو في نهاية الصفحة) باستخدام:
// $conn->close();
?>
