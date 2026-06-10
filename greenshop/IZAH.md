# 🌿 GreenShop - Layihənin İzahı və Cavab Bələdçisi

Bu sənəd sənə müəllimin suallarına cavab verməyə kömək edəcək.
Hər tələbin **harada yerləşdiyini** və **necə işlədiyini** burada tapacaqsan.

---

## 📁 LAYİHƏ STRUKTURU

```
greenshop/
├── index.html      ← Ana səhifə (hero + seçilmiş bitkilər)
├── shop.html       ← Mağaza (6 məhsul kartı)
├── care.html       ← Qulluq məsləhətləri (5 məsləhət)
├── about.html      ← Haqqımızda
├── contact.html    ← Əlaqə (forma)
├── style.css       ← Ümumi CSS faylı (bütün stillər)
└── script.js       ← JavaScript faylı
```

---

## ✅ TƏLƏBLƏRİN HARASINDADIR (TAPMA BƏLƏDÇİSİ)

### 🔹 LAYOUT TƏLƏBLƏRİ (8 xal)

| Tələb | Harada |
|-------|--------|
| 5 HTML səhifə | index.html, shop.html, care.html, about.html, contact.html |
| Naviqasiya əlaqəsi | Hər səhifənin `<header>` hissəsində |
| Bir ümumi CSS | `style.css` faylı — hər səhifədə `<link rel="stylesheet" href="style.css">` |
| Semantik HTML5 teqlər | `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>` |
| HTML-də stil yoxdur | HTML faylların heç birində `style=""` yoxdur |
| Stillər ayrı faylda | `style.css` |
| Responsive | `style.css` sonunda `@media (max-width: 768px)` |
| Flex/Grid | Hər ikisi: nav-da `flex`, kartlarda `grid` |
| position: fixed | `.header` selector-də (style.css) |

### 🔹 CSS3 TƏLƏBLƏRİ (7 xal)

| Tələb | Harada (style.css içində) |
|-------|--------|
| Background | `body` və hər bölmədə |
| Gradient | `.hero` və `.page-header` (linear-gradient) |
| box-shadow | `.header`, `.card`, `.btn` |
| border-radius | `.btn`, `.card`, fieldset |
| transition | `.btn`, `.card`, `.nav-links a` |
| transform | `.btn:hover`, `.card:hover`, animation içində |
| animation | `@keyframes fadeInUp`, `@keyframes sway`, `@keyframes slideDown` |
| Pseudo-classes | `:hover`, `:nth-of-type(odd)`, `:nth-of-type(even)`, `:focus` |
| Pseudo-elements | `::before`, `::after`, `::selection` |

### 🔹 FORMA (2 xal) — contact.html

| Tələb | Harada |
|-------|--------|
| placeholder | Bütün input-larda |
| type | text, email, tel, submit |
| name | Hər input-da |
| `<label>` | Hər input-un üstündə |
| `<fieldset>` | 2 dənə: "Şəxsi məlumatlar" və "Mesajınız" |
| `<legend>` | Hər fieldset içində |

### 🔹 RƏNGLƏR (1 xal)

| Format | Harada (style.css) |
|--------|--------|
| HEX | `#2d6a4f`, `#52b788`, `#1b4332`, `#f8faf7` |
| RGB | `rgb(255, 255, 255)` — header-də |
| RGBA | `rgba(0, 0, 0, 0.1)` — kölgələrdə |

### 🔹 JAVASCRIPT (2 xal) — script.js

Forma göndərmə funksiyası:
- Forma göndəriləndə səhifə yenilənmir (preventDefault)
- "Uğurla göndərildi" mesajı görünür
- Forma təmizlənir
- 5 saniyə sonra mesaj gizlənir

---

## 🎤 MÜƏLLİM SUAL VERƏ BİLƏCƏK SUALLAR VƏ CAVABLAR

### S: Semantik HTML nədir? Niyə istifadə edirsən?

**C:** Semantik teqlər — bunlar mənası olan teqlərdir.
Məsələn, `<div>` heç nə demir, amma `<header>` "bu səhifənin başlığıdır" deyir.
Mən istifadə etmişəm: `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.

**Faydaları:**
- Kod daha aydın olur
- Google saytı daha yaxşı başa düşür (SEO)
- Ekran oxuyucular (kor adamlar üçün) daha yaxşı işləyir

---

### S: Flexbox nədir? Harda istifadə etmisən?

**C:** Flexbox — bir xətt boyunca elementləri yerləşdirmək üçün CSS texnologiyasıdır.

İstifadə etmişəm: **naviqasiya menyusunda** (`.nav` və `.nav-links`).

```css
.nav {
    display: flex;
    justify-content: space-between;  /* Logo solda, menyu sağda */
    align-items: center;             /* Şaquli ortalanma */
}
```

- `justify-content` — üfüqi yerləşdirmə
- `align-items` — şaquli yerləşdirmə
- `gap` — elementlər arası məsafə

---

### S: Grid nədir? Harda istifadə etmisən?

**C:** Grid — elementləri 2 ölçüdə (sətir + sütun) yerləşdirmək üçündür.

İstifadə etmişəm: **məhsul kartlarında** (`.cards`).

```css
.cards {
    display: grid;
    grid-template-columns: repeat(3, 1fr);  /* 3 bərabər sütun */
    gap: 30px;                              /* Kartlar arası məsafə */
}
```

`repeat(3, 1fr)` — 3 dəfə 1fr (yəni 1 bərabər hissə) deməkdir.

---

### S: position: fixed nə deməkdir?

**C:** Element səhifədə həmişə eyni yerdə qalır, scroll edəndə də.

İstifadə etmişəm: **header**.
Səhifə aşağı sürüşəndə də menyu yuxarıda qalır.

```css
.header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
```

---

### S: Pseudo-class və pseudo-element arasında fərq nədir?

**C:**
- **Pseudo-class** (`:hover`) — elementin **vəziyyətini** ifadə edir
  - Misal: `.btn:hover` — düymənin üzərinə gələndə
  
- **Pseudo-element** (`::before`) — elementin **yeni hissəsini** yaradır
  - Misal: `.hero::before` — hero-nun əvvəlinə yeni element əlavə edir

Fərq: Pseudo-class-da **bir** ":", pseudo-element-də **iki** "::" işarəsi var.

---

### S: transition və animation arasında fərq nədir?

**C:**
- **transition** — bir vəziyyətdən digərinə hamar keçid
  - Misal: hover-də rəng dəyişir
  
- **animation** — keyframes ilə təyin olunan kompleks animasiya
  - Misal: səhifə açılanda yuxarıya doğru görünmə

**transition nümunəsi:**
```css
.btn { transition: all 0.3s ease; }
.btn:hover { transform: translateY(-3px); }
```

**animation nümunəsi:**
```css
@keyframes fadeInUp {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
}
.hero-content { animation: fadeInUp 1s ease-out; }
```

---

### S: Responsive dizayn nədir?

**C:** Sayt fərqli ekran ölçülərində (telefon, planşet, kompüter) düzgün görünsün.

İstifadə etmişəm: `@media (max-width: 768px)` — ekran 768 piksel-dən kiçik olanda (yəni telefon və ya planşet) fərqli stillər tətbiq olunur.

Telefonda:
- Naviqasiya vertikal olur
- Kartlar 3 sütundan 1 sütuna düşür
- Şriftlər kiçilir

---

### S: HEX, RGB, RGBA arasında fərq nədir?

**C:**
- **HEX** — `#2d6a4f` (16-lıq say sistemi, # ilə başlayır)
- **RGB** — `rgb(255, 255, 255)` (Red, Green, Blue — 0-255 arası)
- **RGBA** — `rgba(0, 0, 0, 0.1)` (RGB + Alpha = şəffaflıq, 0-1 arası)

RGBA üstünlüyü: yarıməffaf rəng yarada bilirsən (kölgə üçün ideal).

---

### S: JavaScript-də bu kod nə edir?

**C:** Forma göndəriləndə işə salınır:

```javascript
form.addEventListener('submit', function(event) {
    event.preventDefault();      // Səhifə yenilənməsin
    successMessage.style.display = 'block';  // Uğur mesajını göstər
    form.reset();                // Formanı təmizlə
});
```

1. `addEventListener` — hadisəni dinləyir
2. `'submit'` — forma göndərilməsi hadisəsi
3. `preventDefault()` — default davranışın qarşısını alır
4. `style.display = 'block'` — gizli elementi göstərir
5. `form.reset()` — input-ları təmizləyir

---

### S: Niyə bir CSS faylı? Hər səhifə üçün ayrı niyə yox?

**C:**
- **Az kod** — eyni stilləri təkrar yazmırıq
- **Asan dəyişiklik** — bir yerdə dəyişəndə bütün səhifələrdə dəyişir
- **Sürət** — brauzer faylı bir dəfə yükləyir, sonra cache-dən götürür

---

### S: Niyə Bootstrap istifadə etmədin?

**C:** Çünki:
1. Tələblərdə qadağandır
2. Bootstrap istifadə etsən sən özün CSS yazmırsan, hazır kod götürürsən
3. CSS-i öz əllərimlə yazmaqla daha yaxşı öyrənmişəm

---

## 🎨 RƏNG PALİTRASI

| Rəng | Kod | İstifadə |
|------|-----|----------|
| Tünd yaşıl | `#2d6a4f` | Əsas rəng (logo, başlıqlar) |
| Orta yaşıl | `#52b788` | İkinci dərəcəli (qiymət, vurğular) |
| Açıq fon | `#f8faf7` | Səhifə fonu |
| Çox tünd | `#1b4332` | Mətn rəngi, footer |
| Ağ | `rgb(255, 255, 255)` | Header, kartlar |

---

## 💡 ƏLAVƏ MƏSLƏHƏTLƏR

1. **Suallara qısa cavab ver** — uzun-uzadı izah etmə, müəllim soruşar əlavə.
2. **Bilmirsənsə "bilmirəm" de** — yalan danışma, daha pis olar.
3. **Kodu birlikdə oxu** — müəllim bir hissəni göstərəndə həmin yerə bax və izah et.
4. **Komentariyaları oxu** — hər hissənin nə etdiyini komentariyalar yazır.

Uğurlar! 🍀
