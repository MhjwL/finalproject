<?php
            $messageSent = false; // علامة لتتبع إذا تم إرسال الرسالة
            if ($_SERVER['REQUEST_METHOD'] == 'POST') {
                $host = 'localhost'; // أو عنوان IP لخادم قاعدة البيانات
                $username = "root";
                $password = "";
                $dbname = "real_estate_db.sql"; // اسم قاعدة البيانات التي تريد الاتصال بها // اسم قاعدة البيانات

                // إنشاء اتصال
                $conn = new mysqli($host, $username, $password, $dbname);

                // التحقق من الاتصال
                if ($conn->connect_error) {
                    die("Connection failed: " . $conn->connect_error);
                }

                $name = $conn->real_escape_string($_POST['name']);
                $email = $conn->real_escape_string($_POST['email']);
                $message = $conn->real_escape_string($_POST['message']);

                $sql = "INSERT INTO contact (name, email, message) VALUES (?, ?, ?)";

                $stmt = $conn->prepare($sql);
                $stmt->bind_param("sss", $name, $email, $message);

                if ($stmt->execute()) {
                    $messageSent = true;
                } else {
                    echo "Error: " . $stmt->error;
                }

                $stmt->close();
                $conn->close();
            }
            
            if ($messageSent):
                echo "<p>شكرًا لتواصلك معنا، تم إرسال رسالتك بنجاح.</p>";
            else:
                echo"<p>لم يتم الارسال بنجاح</p?"
            ?>