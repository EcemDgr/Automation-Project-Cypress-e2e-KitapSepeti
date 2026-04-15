describe('ödeme işlemleri', function () {

  
      it('TC_PRODUCT_DETAIL_44 Ana sayfada iken herhangi bir ürün için "Sepete Ekle" butonuna tiklar ve açilan popupta "Sepete Git" butonuna tiklayarak da sepete gidilebilmelidir.', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

  cy.get('#header-email').type('gnnbbecem@gmail.com')
  cy.get('#header-password').type('Ee123456@@')
  cy.get('#login-btn-322').click()


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

  cy.url().should('include', '/order/')

  //cy.screenshot('navigate_to_adress_page')

    })
  })
    

it('TC_PRODUCT_DETAIL_45 "Ödeme Adimina Geç" butonuna tiklayarak ödeme bilgileri ekranina yönlendirilmelidir.', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

  cy.get('#header-email').type('gnnbbecem@gmail.com')
  cy.get('#header-password').type('Ee123456@@')
  cy.get('#login-btn-322').click()

  

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

  cy.url().should('include', '/order/')

    cy.get('.col-7 > .btn').should('be.visible').should('not.be.disabled')
    cy.contains('Ödeme Adımına Geç').should('be.visible').click()

    cy.url().should('include', '/order/payment')

//cy.screenshot('navigate_to_payment_page')

})

it('TC_PRODUCT_DETAIL_46 Kullanici , ödeme sayfasinda kargo seçenekleri görmelidir.', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

  cy.get('#header-email').type('gnnbbecem@gmail.com')
  cy.get('#header-password').type('Ee123456@@')
  cy.get('#login-btn-322').click()

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

  cy.url().should('include', '/order/')

    cy.get('.col-7 > .btn').should('be.visible').should('not.be.disabled')
    cy.contains('Ödeme Adımına Geç').should('be.visible').click()

    cy.url().should('include', '/order/payment')

   cy.contains('Kargo Seçenekleri').should('be.visible')

   cy.contains('PTT Kargo').should('be.visible')
   cy.contains('HEPSİJET').should('be.visible')
   cy.contains('DHL').should('be.visible')

   cy.get('input[type="radio"]')
  .first()         
  .should('be.checked')

  //cy.screenshot('shipping_options_visible')

})

it('TC_PRODUCT_DETAIL_47 Ödeme sayfasinda "iyzico ile öde" ve "Kartla Ödeme" seçenekleri net bir şekilde sunulmalidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

  cy.get('#header-email').type('gnnbbecem@gmail.com')
  cy.get('#header-password').type('Ee123456@@')
  cy.get('#login-btn-322').click()

  

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

  cy.url().should('include', '/order/')

    cy.get('.col-7 > .btn').should('be.visible').should('not.be.disabled')
    cy.contains('Ödeme Adımına Geç').should('be.visible').click()

    cy.url().should('include', '/order/payment')

     
  cy.get('#iyz-tab-credit-card')
  .scrollIntoView()
  .should('be.visible')
  .should('contain','Kartla Ödeme')

  cy.get('#iyz-tab-payWithIyzico')
  .should('be.visible')
  .scrollIntoView()
  .should('contain','iyzico ile Öde')

 //cy.screenshot('payment_options_visible')

})

it('TC_PRODUCT_DETAIL_48 "Kartla Ödeme" seçildiğinde kart üzerindeki bilgiler ekranda gösterilmelidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
 
  cy.get('.member-login-btn').click()
  cy.get('#header-email').type('gnnbbecem@gmail.com')
  cy.get('#header-password').type('Ee123456@@')
  cy.get('#login-btn-322').click()

  

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

  cy.url().should('include', '/order/')

    cy.get('.col-7 > .btn').should('be.visible').should('not.be.disabled')
    cy.contains('Ödeme Adımına Geç').should('be.visible').click()

    cy.url().should('include', '/order/payment')

    cy.scrollTo('bottom')
    cy.get('#iyz-tab-credit-card').contains('Kartla Ödeme').should('be.visible').click()

 cy.get('[name="cardHolderName"]').should('be.visible')
 cy.get('#ccnumber').should('be.visible')
 cy.get('#ccexp').should('be.visible')
 cy.get('#cccvc').should('be.visible')

 //cy.screenshot('credit_card_fields_visible')
})

    
  
it('TC_PRODUCT_DETAIL_49 Tüm alanlar doldurulduktan sonra "xxx TL ÖDE" butonu aktif(mavi renk) hale gelmelidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
 
  cy.get('.member-login-btn').click()
  cy.get('#header-email').type('gnnbbecem@gmail.com')
  cy.get('#header-password').type('Ee123456@@')
  cy.get('#login-btn-322').click()


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

  cy.url().should('include', '/order/')

    cy.get('.col-7 > .btn').should('be.visible').should('not.be.disabled')
    cy.contains('Ödeme Adımına Geç').should('be.visible').click()

    cy.url().should('include', '/order/payment')

    cy.scrollTo('bottom')
    cy.get('#iyz-tab-credit-card').contains('Kartla Ödeme').should('be.visible').click()

 cy.get('[name="cardHolderName"]').should('be.visible').type('ayşe yilmaz')
 cy.get('#ccnumber').should('be.visible').type('5549 6014 9253 1035')
 cy.get('#ccexp').should('be.visible').type('10/30')
 cy.get('#cccvc').should('be.visible').type('123')

  cy.get('#iyz-payment-button').should('be.visible').should('not.be.disabled')
  .should('have.css', 'background-color', 'rgb(30, 100, 255)') // Mavi renk kontrolü

  cy.screenshot('pay_button_active')
})



it('TC_PRODUCT_DETAIL_50 Bazi alanlar eksik birakilip "xxx TL ÖDE" butonuna tiklanirsa eksik alanlar için uyari mesaji gösterilmelidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
 
  cy.get('.member-login-btn').click()
  cy.get('#header-email').type('gnnbbecem@gmail.com')
  cy.get('#header-password').type('Ee123456@@')
  cy.get('#login-btn-322').click()


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

  cy.url().should('include', '/order/')

    cy.get('.col-7 > .btn').should('be.visible').should('not.be.disabled')
    cy.contains('Ödeme Adımına Geç').should('be.visible').click()

    cy.url().should('include', '/order/payment')

 cy.get('[name="cardHolderName"]').should('be.visible').type('ayşe yilmaz')
 cy.get('#ccnumber').should('be.visible')
 cy.get('#ccexp').should('be.visible')
 cy.get('#cccvc').should('be.visible').type('123')

 cy.get('#iyz-payment-button').click()
 cy.get('.css-1gwypqx-BaseTextBlock-BaseTextStyle').should('be.visible').should('contain', 'Kart numarası giriniz')

 cy.screenshot('payment_error_message_visible')

})



it('TC_PRODUCT_DETAIL_50 Bazi alanlar eksik birakilip "xxx TL ÖDE" butonuna tiklanirsa eksik alanlar için uyari mesaji gösterilmelidir.', function () {

 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').should('be.visible').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
 
  cy.get('.member-login-btn').click()
  cy.get('#header-email').type('gnnbbecem@gmail.com')
  cy.get('#header-password').type('Ee123456@@')
  cy.get('#login-btn-322').click()


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

  cy.url().should('include', '/order/')

    cy.get('.col-7 > .btn').should('be.visible').should('not.be.disabled')
    cy.contains('Ödeme Adımına Geç').should('be.visible').click()

    cy.url().should('include', '/order/payment')

   cy.get('#order-summary').should('be.visible')
   cy.get('#order-summary').should('contain', 'Sepet Toplamı', 'Kargo Ücreti', 'Genel Toplam')

cy.screenshot('order_summary_visible')
})














/*describe('Ödeme işlemleri', () => {

  beforeEach(() => {

    cy.visit('https://www.kitapsepeti.com')

    cy.acceptCookies()

    cy.get('body').then(($body) => {
      if ($body.find('#t-modal-close-1').length) {
        cy.get('#t-modal-close-1').click()
      }
    })

    cy.login()

    cy.addProductToCart()

    cy.get('#cart-buy-btn').click()

  })


  it('TC_PRODUCT_DETAIL_44 Sepete gitme', () => {

    cy.url().should('include','/order/')

  })


  it('TC_PRODUCT_DETAIL_45 Ödeme adimina geçilebilmelidir', () => {

    cy.contains('Ödeme Adımına Geç')
      .should('be.visible')
      .click()

    cy.url().should('include','/order/payment')

  })


  it('TC_PRODUCT_DETAIL_46 Kargo seçenekleri görünmelidir', () => {

    cy.contains('Ödeme Adımına Geç').click()

    cy.contains('Kargo Seçenekleri').should('be.visible')

    cy.contains('PTT Kargo').should('be.visible')
    cy.contains('HEPSİJET').should('be.visible')
    cy.contains('DHL').should('be.visible')

    cy.get('input[type="radio"]')
      .first()
      .should('be.checked')

  })


  it('TC_PRODUCT_DETAIL_47 Ödeme seçenekleri görünmelidir', () => {

    cy.contains('Ödeme Adımına Geç').click()

    cy.get('#iyz-tab-credit-card')
      .should('contain','Kartla Ödeme')

    cy.get('#iyz-tab-payWithIyzico')
      .should('contain','iyzico ile öde')

  })


  it('TC_PRODUCT_DETAIL_48 Kart alanlari görünmelidir', () => {

    cy.contains('Ödeme Adımına Geç').click()

    cy.get('#iyz-tab-credit-card').click()

    cy.get('[name="cardHolderName"]').should('be.visible')
    cy.get('#ccnumber').should('be.visible')
    cy.get('#ccexp').should('be.visible')
    cy.get('#cccvc').should('be.visible')

  })

})*/