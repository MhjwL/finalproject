<?php
// تحديث المتغيرات بما يناسب بيانات اتصالك
$host = 'localhost';
$username = 'your_username'; // اسم المستخدم لقاعدة البيانات
$password = 'your_password'; // كلمة المرور لقاعدة البيانات
$dbname = 'real_estate_db'; // اسم قاعدة البيانات

// الاتصال بقاعدة البيانات
$conn = new mysqli($host, $username, $password, $dbname);

// التحقق من الاتصال
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// تحقق من الطلب المُرسل هو POST
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // جمع البيانات من الفورم
    $title = $_POST['title'];
    $description = $_POST['description'];
    $price = $_POST['price'];
    
    // لتحميل الصورة وتحديد مسار لحفظها
    // تأكد من أن المجلد 'uploads' موجود ولديه الأذونات الصحيحة
    $imagePath = 'uploads/' . basename($_FILES['image']['name']);
    if (move_uploaded_file($_FILES['image']['tmp_name'], $imagePath)) {
        // إعداد الاستعلام
        $stmt = $conn->prepare("INSERT INTO properties (title, description, price, image) VALUES (?, ?, ?, ?)");
        $stmt->bind_param("ssds", $title, $description, $price, $imagePath);
        
        // تنفيذ الاستعلام
        if ($stmt->execute()) {
            echo "تم إضافة العقار بنجاح.";
        } else {
            echo "خطأ: " . $stmt->error;
        }

        $stmt->close();
    } else {
        echo "خطأ في تحميل الصورة.";
    }
} else {
    echo "طلب غير صالح.";
}

$conn->close();
?>
