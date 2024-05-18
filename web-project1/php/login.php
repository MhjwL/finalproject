<?php
session_start(); // تبدأ جلسة جديدة أو تستأنف جلسة موجودة

// هنا تتحقق إذا كانت الطلب من نوع POST، والذي يعني إرسال الفورم
if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $host = 'localhost';
    $username = "root";
    $password = "";
    $dbname = "real_estate_db"; // اسم قاعدة البيانات التي تريد الاتصال بها

    // الاتصال بقاعدة البيانات
    $conn = new mysqli($host, $username, $password, $dbname);

    // التحقق من الاتصال
    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    $user = $conn->real_escape_string($_POST['username']);
    $pass = $conn->real_escape_string($_POST['password']);

    // يجب تحديث هذا الاستعلام ليتطابق مع جدول المستخدمين الخاص بك والذي يحتوي على كلمة المرور
    $sql = "SELECT * FROM users WHERE username = '$user' AND password = '$pass'";

    $result = $conn->query($sql);

    if ($result->num_rows > 0) {
        // تخزين بيانات المستخدم في متغيرات الجلسة
        $_SESSION['loggedin'] = true;
        $_SESSION['username'] = $user;
        // إعادة توجيه المستخدم إلى صفحة ما بعد تسجيل الدخول
        header("Location: ../inde.html");
    } else {
        // إذا لم يتم العثور على المستخدم، أظهر رسالة خطأ
        echo "<p>اسم المستخدم أو كلمة المرور غير صحيحة.</p>";
    }

    $conn->close();
}
?>





<!DOCTYPE html>
<html lang="ar">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>تسجيل الدخول - السوق العقاري</title>
    <link rel="stylesheet" href="../css/style.css">
</head>
<body>
<header>
        <nav>
            <div class="language-switcher">
                <button id="switch-ar">عربي</button>
                <button id="switch-en">English</button>
            </div>
            
            <div class="logo" data-key="logo">السوق العقاري</div>
            <div class="nav-links">
                <a href="index.html" data-key="home">الرئيسية</a>
                <a href="index.html" data-key="about">عن الشركة</a>
                <a href="index.html" data-key="properties">عرض العقارات</a>
                <a href="index.html" data-key="consultation">طلب استشارة</a>
                <a href="index.html" data-key="contact">اتصل بنا</a>
            </div>
            <div class="login-button">
                <a href="#" data-key="login">تسجيل الدخول</a>
            </div>
        </nav>
        
    </header>

    <section class="login-section">
        <div class="container">
            <h2>تسجيل الدخول</h2>
            <form action="login.php" method="post">
                <div class="form-group">
                    <label for="username">اسم المستخدم:</label>
                    <input type="text" id="username" name="username" required>
                </div>
                <div class="form-group">
                    <label for="password">كلمة المرور:</label>
                    <input type="password" id="password" name="password" required>
                </div>
                <button type="submit">دخول</button>
            </form>
        </div>
    </section>

    <footer>
        <div class="

        footer-container">
        <div class="footer-section">
        <h4>عن السوق العقاري</h4>
        <p>منصتك الأولى للبحث عن عقارات سكنية وتجارية. نقدم لك أفضل الخيارات المتاحة وفقاً لاحتياجاتك.</p>
        </div>
        <div class="footer-section">
        <h4>روابط سريعة</h4>
        <ul>
        <li><a href="#">الرئيسية</a></li>
        <li><a href="#">عن الشركة</a></li>
        <li><a href="#">عرض العقارات</a></li>
        <li><a href="#">اتصل بنا</a></li>
        </ul>
        </div>
        <div class="footer-section">
        <h4>تواصل معنا</h4>
        <p>للحصول على المساعدة والدعم، يرجى التواصل معنا عبر:</p>
        <p data-key="contact10"> Email :<a href="mailto:satw.888@gmail.com">satw.888@gmail.com</a></p>
        <p>الهاتف: +123 456 7890</p>
        </div>
        </div>
        
        </footer>  

    <script src="js/script.js"></script>
</body>
</html>
