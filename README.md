# Automation-Project-Cypress-e2e-KitapSepeti
E2E test automation project using Cypress and POM for an e-commerce platform

_|| A real-world Cypress E2E automation project covering product search, cart, and guest checkout flows._

_Includes:_
- Page Object Model (POM)
- Validation testing
- Handling dynamic popups
- Dealing with CAPTCHA limitations
- Debugging unstable UI behaviors

_Built to demonstrate practical QA problem-solving skills, not just happy-path testing. ||_

📦 KitapSepeti E2E Test Projesi – README

📌 **Proje Amacı**

Bu proje, KitapSepeti e-ticaret platformu üzerinde uçtan uca (E2E) kullanıcı senaryolarını test etmek amacıyla geliştirilmiştir. Testler, gerçek kullanıcı davranışlarını simüle ederek kritik iş akışlarının doğruluğunu ve stabilitesini doğrular.

🧪 **Kapsam**

**Test edilen ana senaryolar:**

🔍 Ürün arama ve listeleme
📄 Ürün detay sayfası
🛒 Sepete ürün ekleme
🧾 Sepet görüntüleme
👤 Üye olmadan alışveriş (guest checkout)
📍 Adres formu doldurma
⚠️ Form validation kontrolleri
💳 Ödeme sayfasına yönlendirme

**Kullanılan Teknolojiler**
Cypress → E2E test framework
JavaScript → Test dili
POM (Page Object Model) → Kod organizasyonu
Mocha → Test runner | describe () - it()
Chai → Assertion library | should() - assertions

📁 **Proje Yapısı**
```cypress/
│
├── e2e/
│   ├── KitapSepeti/
│   │   ├── 1_Login_Testleri.cy.js
│   │   ├── 2_Search_Product_Listing.cy.js                     ### 🧱 Yapı Açıklaması
│   │   ├── 3_Product_Detail.cy.js
│   │   ├── 4_Cart_Management.cy.js
│   │   ├── 5_Payment_Process.cy.js                           - **e2e/KitapSepeti/** → Test senaryoları ve POM yapıları 
│   │   ├── 6_Purchase_as_a_Guest.cy.js                  
│   │   ├── POM_Cart.cy.js                                            
│   │   ├── POM_Guest.cy.js
│   │   ├── POM_Login.cy.js
│   │   ├── POM_Payment.cy.js
│   │   ├── POM_Product.cy.js     
│   │   ├── POM_Search.cy.js                          
│   └── pages/                                            - **pages/** → Page Object sınıfları  
│       ├── CartPage.js 
│       ├── GuestPage.js
│       ├── HomePage.js
│       ├── LoginPage.js
│       ├── PaymentPage.js                             - **support/** → Custom commands ve global config  
│       └── ProductPage.js-                            -  **fixtures/** → Test verileri  
├── fixtures
├── screenshots                                       - **screenshots/** → Test çıktıları  
├── support/
│   ├── commands.js
│   └── e2e.js
├── node_modules
├── cypress.config.js
├── package-lock.json
├── package.json```


🧱 **POM (Page Object Model) Yapısı**

Her sayfa için ayrı bir class oluşturulmuştur:

Örnek: GuestPage
class GuestPage {

  fillAddressForm(options = {}) { ... }

  clickContinue() { ... }

  verifyAddressValidationError() { ... }

  verifyPaymentPage() { ... }

}

**Avantajları:**
🔁 Kod tekrarını azaltır
🧼 Testleri sadeleştirir
🔧 Maintenance kolaylığı sağlar

⚙️ **Kurulum**
1. Projeyi klonla
git clone <repo-url>
cd project-folder
2. Bağımlılıkları yükle
npm install
3. Cypress başlat
npx cypress open


▶️ **Test Çalıştırma**

Headless:

npx cypress run

UI ile:

npx cypress open



🧩 **Örnek Test Senaryosu**
TC_PRODUCT_DETAIL_57 – Ödeme Sayfasına Geçiş
it('ödeme sayfasına geçiş', () => {

  guestPage.fillAddressForm() // tüm alanlar dolu

  guestPage.clickContinue()
  guestPage.verifyPaymentPage()

})



⚠️ **Karşılaşılan Problemler & Çözümler**

**1. 🔐 Login Sonrası Navigation Problemi (CAPTCHA)**

Senaryo:
Login işlemi sonrası kullanıcı adres sayfasına yönlendirilmelidir.

Login testlerinde sistem CAPTCHA göstermektedir
CAPTCHA nedeniyle test akışı kesilmekte
Bu yüzden adres sayfasına yönlendirme doğrulanamamaktadır

Denenen Yaklaşımlar:

Farklı kullanıcılar ile login denemeleri
Test tekrar çalıştırmaları

Sonuç:
❌ CAPTCHA otomasyon tarafından geçilemedi
❌ Navigation doğrulaması yapılamadı

Analiz:

CAPTCHA anti-bot mekanizmasıdır
Cypress ile bypass edilmesi doğru yaklaşım değildir
Test environment desteği gereklidir

Mevcut Durum:
⚠️ Bu test senaryosu manuel doğrulamaya bırakılmıştır

**2. 🖱️ Hover ile Görünen “Sepete Ekle” Butonu**

Senaryo:

Ürün kartında fiyat görünür
Mouse hover yapıldığında “Sepete Ekle” butonu görünür hale gelir

Karşılaşılan Problem:

Hover olmadan buton DOM’da görünmüyor
Cypress gerçek mouse hareketini simüle edemedi

Denenen Yaklaşımlar:

cy.get('.product-item').trigger('mouseover')
cy.get('.product-item').trigger('mouseenter')
.trigger('mouseover') kullanımı
.trigger('mouseenter') kullanımı


Sonuç:
❌ Buton stabil şekilde görünür hale getirilemedi
❌ Test flaky davrandı veya tamamen başarısız oldu

Analiz:

UI CSS hover state ile kontrol ediliyor
Cypress gerçek kullanıcı hover davranışını birebir taklit edemedi

Mevcut Durum:
⚠️ Hover davranışı güvenilir şekilde otomatize edilemedi

**3. 🔎 Filtreleme Problemleri (Kategori / Marka / Model)**

Senaryo:
Kullanıcı filtre panelinden kategori, marka ve model seçerek ürünleri filtreler.

Karşılaşılan Problem:

Filtre elementleri her zaman bulunamıyor
Testler zaman zaman fail oluyor
Özellikle accordion yapılarında sorun yaşanıyor

Denenen Yaklaşımlar:

Farklı selector stratejileri
cy.wait() kullanımı
cy.intercept() ile API bekleme
Element visibility kontrolleri

Karşılaşılan Hata:

Timed out retrying after 4000ms: Expected to find element...

Sonuç:
❌ Testler stabil hale getirilemedi
❌ Filtreleme senaryoları güvenilir değil

Analiz:

Filtreler dinamik olarak yükleniyor
DOM sürekli değişiyor (dynamic rendering)
Selector’lar kırılgan
API response timing problemi var

Mevcut Durum:
⚠️ Filtreleme testleri kısmen başarısız ve stabil değildir

🎯 Genel Değerlendirme

Bu problemler şunu göstermektedir:

Canlı ortam projelerinde stabilite büyük zorluk
Test başarısından çok problemi analiz etmek kritik

Bu proje, sadece başarılı testleri değil, aynı zamanda:
👉 karşılaşılan zorlukları
👉 debugging süreçlerini
👉 çözüm arayışlarını

göstermek amacıyla hazırlanmıştır.


🧠 **Test Stratejisi**

Bu projede şu test yaklaşımları uygulanmıştır:

✅ **Positive Testing**
Tüm alanlar doğru → ödeme sayfasına geçiş
❌ **Negative Testing**
Eksik alan → validation hatası
🔁 **Recovery Flow**
Eksik doldur → hata al → düzelt → devam et
💡 **Best Practices**

- data-driven form kullanımı
- parametrik POM methodları
- reusable helper fonksiyonlar
- cy.intercept() ile stabil testler
- flaky testleri önlemek için event tetikleme


**🧾 README Nasıl Hazırlandı?**

Bu README hazırlanırken şu adımlar izlendi:

1.Proje analizi yapıldı
-Hangi senaryolar var?
-Hangi yapılar kullanılıyor?
2.Test mimarisi çıkarıldı
3.POM yapısı
4.Test Flow
5.Karşılaşılan hatalar belirlendi
6.Debugging süreci dokümante edildi
7.Standart README formatı uygulandı
-Amaç
-Kurulum
-Kullanım
-Yapı
-Best practices
