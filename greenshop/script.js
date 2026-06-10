/* ================================================================
   GreenShop - JavaScript faylı
   Funksional JS fraqmenti (forma göndərilməsi)
   ================================================================ */


// Formanı və uğur mesajını HTML-dən tapırıq
// document.getElementById - id-ə görə elementi tapır
const form = document.getElementById('contactForm');
const successMessage = document.getElementById('successMessage');


// Forma göndəriləndə hadisəni dinləyirik
// addEventListener - hadisəni izləyir ('submit' = forma göndərilməsi)
form.addEventListener('submit', function(event) {

    // event.preventDefault() - səhifənin yenilənməsinin qarşısını alır
    // Adətən forma göndəriləndə səhifə yenilənir, biz bunu istəmirik
    event.preventDefault();

    // Uğur mesajını göstəririk (CSS-də display: none idi)
    successMessage.style.display = 'block';

    // Formanı təmizləyirik (bütün input-lar boş olur)
    form.reset();

    // 5 saniyə sonra uğur mesajı gizlənsin
    // setTimeout - müəyyən vaxtdan sonra funksiya işə salır
    setTimeout(function() {
        successMessage.style.display = 'none';
    }, 5000); // 5000 millisaniyə = 5 saniyə

});
