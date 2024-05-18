let slideIndex = 0;
    showSlides(slideIndex);
    
    // دالة لعرض الشريحة التالية
    function showNextSlide() {
        showSlides(slideIndex += 1);
    }
    
    // دالة عرض الشرائح
    function showSlides(n) {
        let i;
        let slides = document.getElementsByClassName("slide");
        if (n >= slides.length) {slideIndex = 0}
        if (n < 0) {slideIndex = slides.length - 1}
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        slides[slideIndex].style.display = "block";  
    }
    
    setInterval(showNextSlide, 4000);
    
//lang

document.addEventListener('DOMContentLoaded', function() {
    const texts = {
        "logo": {
            "en": "Real Estate Market",
            "ar": "السوق العقاري"
        },
        "home": {
            "en": "Home",
            "ar": "الرئيسية"
        },
        "about": {
            "en": "About Us",
            "ar": "عن الشركة"
        },
        "properties": {
            "en": "Properties",
            "ar": "عرض العقارات"
        },
        "consultation": {
            "en": "Consultation",
            "ar": "طلب استشارة"
        },
        "contact": {
            "en": "Contact Us",
            "ar": "اتصل بنا"
        },
        "login": {
            "en": "Login",
            "ar": "تسجيل الدخول"
        },
        
        "sliderCaption1": {
        "en": "Welcome to the Real Estate Market",
        "ar": "مرحبًا بكم في السوق العقاري"
    },
    "sliderCaption2": {
        "en": "Discover Your Dream Properties Here",
        "ar": "اكتشف عقارات أحلامك هنا"
    },
    "sliderCaption3": {
        "en": "Multiple Options to Satisfy All Your Needs",
        "ar": "خيارات متعددة تلبي جميع احتياجاتك"
    },
    "introTitle1": {
        "en": "Welcome to the Real Estate Market",
        "ar": "مرحبًا بكم في السوق العقاري"
    },
    "introDesc1": {
        "en": "Discover your dream home from thousands of properties available on our platform. We provide you with full support to make your property search easier and faster.",
        "ar": "اكتشف منزل أحلامك من بين آلاف العقارات المتاحة على منصتنا. نحن نقدم لك الدعم الكامل لجعل رحلة البحث عن عقار أسهل وأسرع."
    },
    "aboutTitle2": {
        "en": " About the real estate market",
        "ar": " عن السوق العقاري"
    },
    "introDesc2": {
        "en": " In the market Real Estate, we are proud to provide distinguished services in the field of selling land and real estate. We work hard to provide our customers with a comprehensive and comfortable experience, whether they are looking for a property for residence or for commercial investment. With our long experience in the market, we guarantee that you will find the ideal property that meets all your requirements. ",
        "ar": "في السوق العقاري، نفخر بتقديم خدمات متميزة في مجال بيع الأراضي والعقارات. نعمل جاهدين لنوفر لعملائنا تجربة شاملة ومريحة، سواء كانوا يبحثون عن عقار للسكن أو للاستثمار التجاري. مع خبرتنا الطويلة في السوق، نضمن لكم إيجاد العقار المثالي الذي يلبي جميع متطلباتكم "
    },
    "property1": {
        "en": " Great property",
        "ar": "عقار رائع "
    },
    "property1": {
        "en": "Brief description of the property here   ",
        "ar": " وصف مختصر للعقار هنا"
    },
    "property1": {
        "en": "more information ",
        "ar": "المزيد من المعلومات "
    },
    "property2": {
        "en": "  Add a new property",
        "ar": "اضافة عقار جديد "
    },
    "property3": {
        "en": "Property address ",
        "ar": " عنوان العقار"
    },
    "property4": {
        "en": " Description of the property",
        "ar": "وصف العقار "
    },
    "property5": {
        "en": "the price ",
        "ar": " السعر "
    },
    "property6": {
        "en": "Add a property ",
        "ar": "إضافة عقار "
    },
    "section1": {
        "en": "Search for the best neighborhoods ",
        "ar": "بحث عن أفضل الأحياء "
    },
    "section2": {
        "en": " Services",
        "ar": "الخدمات "
    },
    "section3": {
        "en": "everyone ",
        "ar": "الكل "
    },
    "section4": {
        "en": " Shopping malls",
        "ar": " مراكز تسوق   "
    },
    "section5": {
        "en": " Schools",
        "ar": " مدارس"
    },
    "section6": {
        "en": "Hospitals ",
        "ar": " مستشفيات"
    },
    "section7": {
        "en": "Budget ",
        "ar": " الميزانية"
    },
    "section9": {
        "en": "Low ",
        "ar": "منخفضة "
    },
    "section10": {
        "en": " Medium",
        "ar": " متوسطة"
    },
    "section11": {
        "en": "High ",
        "ar": " عالية"
    },
    "section12": {
        "en": " Selling speed",
        "ar": "سرعة البيع "
    },
    "section14": {
        "en": "fast ",
        "ar": "سريع "
    },
    "section15": {
        "en": " middle",
        "ar": "متوسط "
    },
    "section16": {
        "en": "slow ",
        "ar": " بطيء"
    },
    "section17": {
        "en": " research",
        "ar": "بحث "
    },
    "aboutTitle-tt": {
        "en": "Your first platform for searching residential and commercial properties. We offer you the best options available according to your needs.Quick links ",
        "ar": " منصتك الأولى للبحث عن عقارات سكنية وتجارية. نقدم لك أفضل الخيارات المتاحة وفقاً لاحتياجاتك."
    },
    "contact3": {
        "en": " Quick Links ",
        "ar": " روابط سريعة"
    },
    "contact7": {
        "en": "call us ",
        "ar": "اتصل بنا "
    },
    "contact8": {
        "en": "Connect with us  ",
        "ar": "تواصل معنا "
    },
    "contact9": {
        "en": " For help and support, please contact us via",
        "ar": "للحصول على المساعدة والدعم، يرجى التواصل معنا عبر: "
    },
    "contact10": {
        "en": "Email: info@realestate.com",
        "ar": "البريد الإلكتروني: info@realestate.com "
    },
    "contact11": {
        "en": "Phone: +123 456 7890 ",
        "ar": " الهاتف: +123 456 7890 "
    },
    "aboutTitle-tt": {
        "en": "Your first platform for searching residential and commercial properties. We offer you the best options available according to your needs. ",
        "ar": "منصتك الأولى للبحث عن عقارات سكنية وتجارية. نقدم لك أفضل الخيارات المتاحة وفقاً لاحتياجاتك. "
    },
    "contact2": {
        "en": "About the real estate market ",
        "ar": "عن السوق العقاري "
    },
    };

    function updateTexts(lang) {
        const elements = document.querySelectorAll('[data-key]');
        elements.forEach(element => {

            const key = element.getAttribute('data-key');
            if (texts[key]) {
                element.textContent = texts[key][lang];
            }
        });

        document.body.dir = lang === 'ar' ? 'rtl' : 'ltr';
        localStorage.setItem('lang', lang);
    }

    document.getElementById('switch-ar').addEventListener('click', function() {
        updateTexts('ar');
    });

    document.getElementById('switch-en').addEventListener('click', function() {
        updateTexts('en');
    });

    const lang = localStorage.getItem('lang') || 'en'; 
    updateTexts(lang);
});

document.addEventListener('DOMContentLoaded', function() {
    // تحقق من حالة تسجيل الدخول هنا وعرض زر إضافة عقار إذا كان المستخدم مسجل الدخول
    // مثال مبسط
    const loggedIn = true; // هذا يجب أن يُحدد بناءً على جلسة المستخدم
    if(loggedIn) {
        document.getElementById('addPropertyBtn').style.display = 'block';
    }

    document.getElementById('addPropertyBtn').addEventListener('click', function() {
        document.getElementById('addPropertyForm').style.display = 'block';
    });

    // تحميل العقارات وعرضها
    loadProperties();
});

function loadProperties() {
    fetch('getProperties.php')
    .then(response => response.json())
    .then(properties => {
        const propertiesList = document.getElementById('propertiesList');
        propertiesList.innerHTML = ''; // إعادة تعيين المحتوى
        
        properties.forEach(property => {
            const propertyHTML = `
                <div class="property-card">
                    <img src="${property.image}" alt="${property.title}" />
                    <div class="property-info">
                        <h3>${property.title}</h3>
                        <p>${property.description}</p>
                        <p>السعر: ${property.price}</p>
                    </div>
                </div>
            `;
            propertiesList.innerHTML += propertyHTML;
        });
    })
    .catch(error => console.error('Error loading properties:', error));
}


//add form
document.getElementById('addPropertyForm').addEventListener('submit', function(e) {
    e.preventDefault(); // منع الإرسال الافتراضي للفورم

    var formData = new FormData(this);

    fetch('addProperty.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if(data.success) {
            alert('عقار تم إضافته بنجاح');
            // إعادة تحميل العقارات هنا
            loadProperties();
        } else {
            alert('حدث خطأ: ' + data.error);
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });
});

function filterDistricts() {
    const services = document.getElementById('services').value;
    const budget = document.getElementById('budget').value;
    const saleSpeed = document.getElementById('saleSpeed').value;

  
    const exampleDistricts = [
        { name: "حي الرياض", services: "shopping", budget: "high", saleSpeed: "fast", image: "images/slider1.avif" },
        { name: "حي الجميرة", services: "schools", budget: "medium", saleSpeed: "normal", image: "images/slider5.avif" },
        { name: "حي الخالدية", services: "hospitals", budget: "low", saleSpeed: "slow", image: "images/slider6.avif" }
    ];

    const filteredResults = exampleDistricts.filter(district => {
        return (services === "all" || district.services === services) &&
               (budget === "all" || district.budget === budget) &&
               (saleSpeed === "all" || district.saleSpeed === saleSpeed);
    });

    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; 

    filteredResults.forEach(district => {
        const cardHTML = `
            <div class="property-card">
                <img src="${district.image}" alt="${district.name}" style="width:100%;">
                <div class="property-info">
                    <h3>${district.name}</h3>
                    <p>الخدمات: ${district.services}, الميزانية: ${district.budget}, سرعة البيع: ${district.saleSpeed}</p>
                </div>
            </div>
        `;
        resultsContainer.innerHTML += cardHTML;
    });

    if (filteredResults.length === 0) {
        resultsContainer.innerHTML = '<p>لم يتم العثور على نتائج مطابقة لمعايير البحث.</p>';
    }
}