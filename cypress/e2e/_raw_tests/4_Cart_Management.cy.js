describe('sepet yönetimi ve kontrolü', function () {
    
    it('TC_PRODUCT_DETAIL_34 sepet ikonuna tiklayarak sepetini açabilmeli ve "Sepete Git" butonuna tiklayarak sepet sayfasina erişebilmeli', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
   cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(2000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('#t-modal-close-1 > .ti-close').should('be.visible').click()


    cy.get('.custom-cart').click()
    cy.get('#header-cart-panel-340').should('be.visible')
    cy.get('#go-cart-btn').should('be.visible').should('contain', 'Sepete Git').click()
    cy.url().should('include', '/sepet')
    
    cy.get('.fw-black > .pr-0').should('contain', 'Sepet Toplamı').as('cartTotal')
    cy.get(':nth-child(2) > .pr-0').should('contain', 'Kargo Ücreti').as('shippingCost')
    cy.get('.fw-bold > .pr-0').should('contain', 'Genel Toplam').as('grandTotal')

    
    
        //cy.screenshot('cart-summary')
    

      });
      });


    it('TC_PRODUCT_DETAIL_35 sepet sayfasinda ürün adi, birim fiyat, adet ve toplam tutar bilgileri doğru olarak gösterilmelidir.', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
   cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(2000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('#t-modal-close-1 > .ti-close').should('be.visible').click()

      cy.get('.custom-cart').click()
      cy.get('#header-cart-panel-340').should('be.visible')
      cy.get('#go-cart-btn').should('be.visible').should('contain', 'Sepete Git').click()
      cy.url().should('include', '/sepet')

      cy.get('.cart-item').each(($el) => {

  const unitPriceText = $el.find('.unit-price').text();
  const quantityText = $el.find('.quantity').text();
  const totalText = $el.find('.total-price').text();

  const unitPrice = Number(unitPriceText.replace('TL', '').trim().replace(',', '.'));  // Birim fiyatı sayısal değere dönüştür
  const quantity = Number(quantityText);
  const total = Number(totalText.replace('TL', '').trim().replace(',', '.'));

  expect(unitPrice * quantity).to.eq(total);

});

        //cy.screenshot('cart-item-details')
 

    })


it('TC_PRODUCT_DETAIL_36 "Sepet Toplami" bölümünde Sepet Toplami, Kargo Ücreti ve Genel Toplam doğru hesaplanarak gösterilmelidir.', function () {


   cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click() 
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(2000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('#t-modal-close-1 > .ti-close').should('be.visible').click()

      cy.get('.custom-cart').click()
      cy.get('#header-cart-panel-340').should('be.visible')
      cy.get('#go-cart-btn').should('be.visible').should('contain', 'Sepete Git').click()
      cy.url().should('include', '/sepet')

      cy.get('.cart-item').each(($el) => {

  const cartTotalText = $el.find('.cart-total').text();
  const shippingCostText = $el.find('.shipping-cost').text();
  const totalText = $el.find('.total-price').text();

  const cartTotal = Number(cartTotalText.replace('TL', '').trim().replace(',', '.'));  // Sepet toplamı sayısal değere dönüştür
  const shippingCost = Number(shippingCostText.replace('TL', '').trim().replace(',', '.'));  // Kargo ücreti sayısal değere dönüştür
  const total = Number(totalText.replace('TL', '').trim().replace(',', '.'));  // Genel toplam sayısal değere dönüştür

  expect(cartTotal + shippingCost).to.eq(total);

 // cy.screenshot('cart-total-calculation')

});

})


it('TC_PRODUCT_DETAIL_37 "+" butonuna tiklandiginda ürün adedi ve toplam tutar doğru şekilde güncellenmelidir.', function () {


   cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
   cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(2000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('#t-modal-close-1 > .ti-close').should('be.visible').click()

      cy.get('.custom-cart').click()
      cy.get('#header-cart-panel-340').should('be.visible')
      cy.get('#go-cart-btn').should('be.visible').should('contain', 'Sepete Git').click()
      cy.url().should('include', '/sepet')
 
  cy.get('.cart-item').first().then(($el) => {

  const quantityText = $el.find('.quantity').text();
  const totalText = $el.find('.total-price').text();
  const unitPriceText = $el.find('.unit-price').text();

  const quantity = Number(quantityText);
  const unitPrice = Number(unitPriceText.replace('TL', '').trim().replace(',', '.'));
  const total = Number(totalText.replace('TL', '').trim().replace(',', '.'));

  cy.wrap($el).find('[id^="qty-plus"]').click()

    const newQuantity = quantity + 1;

    //cy.screenshot('cart-item-quantity-update')
  })
})


it('TC_PRODUCT_DETAIL_38 sepetten ürün silme', function () {


   cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
   cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(2000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('#t-modal-close-1 > .ti-close').should('be.visible').click()

      cy.get('.custom-cart').click()
      cy.get('#header-cart-panel-340').should('be.visible')
      cy.get('#go-cart-btn').should('be.visible').should('contain', 'Sepete Git').click()
      cy.url().should('include', '/sepet')


    cy.get('[id^="delete-product"]').first().click();

    cy.contains('Silmek istediğinize emin misiniz?').should('be.visible');
    
     cy.contains('button', 'Sil').click();
      
     cy.get('#header-cart-btn .badge').should('contain.text', '0')

     //cy.screenshot('cart-item-deletion-confirmation')
});

    
it('TC_PRODUCT_DETAIL_39 "Sepeti Temizle" butonuna tiklandiginda tüm ürünler direkt sepetten kaldirilmalidir.', function () {


   cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
   cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(2000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('#t-modal-close-1 > .ti-close').should('be.visible').click()

      cy.get('.custom-cart').click()
      cy.get('#header-cart-panel-340').should('be.visible')
      cy.get('#go-cart-btn').should('be.visible').should('contain', 'Sepete Git').click()
      cy.url().should('include', '/sepet')
     cy.get('#clear-cart-btn-129').click();

cy.get('#header-cart-btn .badge').should('contain.text', '0')

//cy.screenshot('cart-clear-confirmation')


})

it('TC_PRODUCT_DETAIL_40 Ürünler silindiginde "Sepetinizde ürün bulunmamaktadir" mesaji gösterilmelidir ve "Alişverişe Devam Et" butonu görüntülenmelidir.', function () {


   cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
   cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(2000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('#t-modal-close-1 > .ti-close').should('be.visible').click()

      cy.get('.custom-cart').click()
      cy.get('#header-cart-panel-340').should('be.visible')
      cy.get('#go-cart-btn').should('be.visible').should('contain', 'Sepete Git').click()
      cy.url().should('include', '/sepet')

      cy.get('[id^="clear-cart-btn"]').click()
  
  
cy.contains('Sepetinizde Ürün Bulunmamaktadır').should('be.visible');
cy.get('#cart-back-btn').should('be.visible').click();

//cy.screenshot('empty-cart-confirmation')

})


it('TC_PRODUCT_DETAIL_41 Sepette en az bir ürün varken, tiklanabilir ve kullaniciyi bir sonraki adima tasiyacak bir "Satin Al" butonu bulunmalidir.', function () {


   cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
   cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(2000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('#t-modal-close-1 > .ti-close').should('be.visible').click()

      cy.get('.custom-cart').click()
      cy.get('#header-cart-panel-340').should('be.visible')
      cy.get('#go-cart-btn').should('be.visible').should('contain', 'Sepete Git').click()
      cy.url().should('include', '/sepet')


       cy.get('#cart-buy-btn').should('be.visible').click()

       //cy.screenshot('proceed-to-checkout')
})

    it('TC_PRODUCT_DETAIL_42 ürün detay sayfasindaki iken "Sepete Ekle" butonuna tiklar ve açilan popupta "Sepete Git" butonuna tiklayarak da sepetine gitmelidir.', function () {


 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
   cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()

  cy.url().should('not.include', '/arama')

cy.get('#addToCartBtn').contains('button', 'Sepete Ekle')
  .should('be.visible')
  .click()


 cy.get('#cart-popup-go-cart')
  .should('be.visible')
  .and('contain', 'Sepete Git')
  .click()
  
  cy.url().should('include', '/sepet')

//cy.screenshot('add-to-cart-popup-go-cart')

    })


it('TC_PRODUCT_DETAIL_43 Ana sayfada iken herhangi bir ürün için "Sepete Ekle" butonuna tiklar ve açilan popupta "Sepete Git" butonuna tiklayarak da sepete gidilebilmelidir.', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
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

  cy.url().should('include', '/sepet')

cy.screenshot('cart-navigation-from-product-detail')
    })




