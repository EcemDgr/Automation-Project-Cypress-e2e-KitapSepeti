describe('Misafir olarak satin alma işlemleri', function () {

it('TC_PRODUCT_DETAIL_52 üyelik oluşturmadan ana sayfada bir ürün için "Sepete Ekle" butonuna tiklayip açilan popupta "Satin Al" butonuna tiklandiginda, üye girişi sayfasina yönlendirilmelidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()


  cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()

  cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
  cy.get('#addToCartBtn').click()
  cy.contains('Sepete Git').should('be.visible').click()
  cy.get('#cart-buy-btn').should('be.visible').should('not.be.disabled')
  cy.get('#cart-buy-btn').click()

  cy.url().should('include', '/siparis-uye-giris')

 // cy.screenshot('guest_purchase_redirect')
})

})


it('TC_PRODUCT_DETAIL_53 Üye girişi sayfasında belirgin bir "Üye Olmadan Devam Et" butonu bulunmalıdır.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()


  cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()

  cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
  cy.get('#addToCartBtn').click()
  cy.contains('Sepete Git').should('be.visible').click()
  cy.get('#cart-buy-btn').should('be.visible').should('not.be.disabled')
  cy.get('#cart-buy-btn').click()

  cy.url().should('include', '/siparis-uye-giris')
  cy.get('#membership-form-131 > .w-100').should('be.visible').should('contain', 'Üye Olmadan Devam Et')

  //cy.screenshot('guest_continue_button_visible')
})

it('TC_PRODUCT_DETAIL_54 "Üye Olmadan Devam Et" butonuna tiklandiginda, "Adres Bilgileri" başligini taşiyan adres formu sayfasi yüklenmelidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()


  cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()

  cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
  cy.get('#addToCartBtn').click()
  cy.contains('Sepete Git').should('be.visible').click()
  cy.get('#cart-buy-btn').should('be.visible').should('not.be.disabled')
  cy.get('#cart-buy-btn').click()

  cy.url().should('include', '/siparis-uye-giris')
  cy.get('#membership-form-131 > .w-100').should('be.visible').should('contain', 'Üye Olmadan Devam Et')
  .click()
  cy.url().should('include', '/order/address')

  //cy.screenshot('guest_checkout_address_page')

})



it('TC_PRODUCT_DETAIL_55  Adres formunda gerekli alanlar bulunmalidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()


  cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()

  cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
  cy.get('#addToCartBtn').click()
  cy.contains('Sepete Git').should('be.visible').click()
  cy.get('#cart-buy-btn').should('be.visible').should('not.be.disabled')
  cy.get('#cart-buy-btn').click()

  cy.url().should('include', '/siparis-uye-giris')
  cy.get('#membership-form-131 > .w-100').should('be.visible').should('contain', 'Üye Olmadan Devam Et')
  .click()
  cy.url().should('include', '/order/address')
  
  cy.get('[name="fullname"]').should('be.visible')
  cy.get('[name="email"]').should('be.visible')
  cy.get('[name="mobile_phone"]').should('be.visible')
  cy.get('[name="city_code"]').should('be.visible')
  cy.get('.town-input-container').should('be.visible')
  cy.get('.district-input-container').should('be.visible')
  cy.get('[name="address"]').should('be.visible')

  //cy.screenshot('guest_checkout_address_fields_visible')
})

it('TC_PRODUCT_DETAIL_56 Zorunlu alanlardan birini boş birakip "Devam Et" butonuna bastiginda, kirmizi renkte uyarisi gösterilmelidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()


  cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()

  cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
  cy.get('#addToCartBtn').click()
  cy.contains('Sepete Git').should('be.visible').click()
  cy.get('#cart-buy-btn').should('be.visible').should('not.be.disabled')
  cy.get('#cart-buy-btn').click()

  cy.url().should('include', '/siparis-uye-giris')
  cy.get('#membership-form-131 > .w-100').should('be.visible').should('contain', 'Üye Olmadan Devam Et')
  .click()
  cy.url().should('include', '/order/address')
  
  cy.get('[name="fullname"]').should('be.visible').type('ayşe yılmaz')
  cy.get('[name="email"]').should('be.visible').type('ayseyilmaz@example.com')
  cy.get('[name="mobile_phone"]').should('be.visible').type('5363002010')
  cy.get('[name="city_code"]').should('be.visible').select('Ankara')
  cy.get('[name="town_code"]').should('be.visible').select('Çankaya')
  cy.get('[name="district_code"]').should('be.visible').select('ATA MAH')
  cy.get('[name="address"]').should('be.visible')

  cy.get('.col-12 > .btn').click()

  

 cy.get('[name="address"]')
 .should('be.visible')
 .parent()                       
 .should('contain', 'Lütfen bu alanı doldurunuz')
  
 //cy.screenshot('guest_checkout_address_validation_message')

})

it('TC_PRODUCT_DETAIL_57 zorunlu alanlari geçerli bilgilerle doldurup "Adresi Kaydet" butonuna tikladiginda, ödeme seçeneklerinin bulunduğu bir sonraki adima başariyla geçebilmelidir..', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()


  cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()

  cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
  cy.get('#addToCartBtn').click()
  cy.contains('Sepete Git').should('be.visible').click()
  cy.get('#cart-buy-btn').should('be.visible').should('not.be.disabled')
  cy.get('#cart-buy-btn').click()

  cy.url().should('include', '/siparis-uye-giris')
  cy.get('#membership-form-131 > .w-100').should('be.visible').should('contain', 'Üye Olmadan Devam Et')
  .click()
  cy.url().should('include', '/order/address')
  
  cy.get('[name="fullname"]').should('be.visible').type('ayşe yılmaz')
  cy.get('[name="email"]').should('be.visible').type('ayseyilmaz@example.com')
  cy.get('[name="mobile_phone"]').should('be.visible').type('5363002010')
  cy.get('[name="city_code"]').should('be.visible').select('Ankara')
  cy.get('[name="town_code"]').should('be.visible').select('Çankaya')
  cy.get('[name="district_code"]').should('be.visible').select('ATA MAH')
  cy.get('[name="address"]').should('be.visible').type('Atatürk Bulvarı Melis Evleri No:123 Çankaya/Ankara')

  cy.get('.col-12 > .btn').click()

  cy.url().should('include', '/order/payment')

//cy.screenshot('guest_checkout_payment_page')

})
