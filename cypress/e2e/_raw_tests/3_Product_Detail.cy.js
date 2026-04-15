describe('ürün detay testi', function () {
    
    it('TC_PRODUCT_DETAIL_27 Kullanici, ürün listeleme sayfasinda herhangi bir ürünün görseline veya ismine tikladiginda, detay sayfasina yönlendirilmelidir', function () {


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

      
//cy.screenshot('product-detail-page')

  
    })
  })
    

it('TC_PRODUCT_DETAIL_28 Ürün detay sayfasinda temel bilgiler belirgin şekilde görüntülenmelidir.', function () {

  
 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('roman{enter}');
cy.get('.product-item')
    .should('have.length.greaterThan', 0)


cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
     
    
      cy.get('#product-title').should('be.visible')
      cy.get('#brand-title').should('be.visible')
      cy.get('#model-title > span').should('be.visible')
      cy.get('.product-price').should('be.visible')
    
      //cy.screenshot('product-detail-basic-info')
})

  it('TC_PRODUCT_DETAIL_29 Ürün Hakkinda Bilgiler bölümünde ürün ile ilgili detayli bilgiler yer almalidir', function () {

  
 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(3000) // yüklenmenin tamamlanması için beklemem gerekti öncesinde hata verdi 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')

      cy.get('.col-12.mt-1 > .row > .w-100').should('be.visible').should('not.be.empty')
      cy.contains('Türü').should('be.visible').should('not.be.empty')
      cy.contains('ISBN').should('be.visible').should('not.be.empty')
      cy.contains('Basım Yılı').should('be.visible').should('not.be.empty')
      cy.contains('Kağıt Tipi').should('be.visible').should('not.be.empty')

      //cy.screenshot('product-detail-detailed-info')
 
  })


    it('TC_PRODUCT_DETAIL_30 Sayfada fiyat bilgisinin altinda işlevsel Sepete Ekle butonu olmalidir', function () {

  
 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(3000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      

     
   // cy.screenshot('product-detail-add-to-cart-button')


    })


    it('TC_PRODUCT_DETAIL_31 "Sepete Ekle" butonuna tiklandiginda, onay mesaji ekranda görünmelidir.', function () {

  
 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(3000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('.product-cart-title > span').should('be.visible').should('contain', 'Ürün Başarıyla Sepete Eklendi')
      cy.get('#cart-popup-go-cart').should('be.visible')
      cy.get('#cart-popup-continue-shopping').should('be.visible')
    


     //cy.screenshot('product-detail-add-to-cart-confirmation')
  

    })


     it('TC_PRODUCT_DETAIL_32 Ürün sepete eklendikten sonra, sepet ikonunda bulunan ürün sayisi 1 artmalidir.', function () {

  
 cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');

  cy.wait(3000) 

cy.get('.product-item')
  .first()
  .find('a')
  .first()
  .click()
      
      cy.url().should('not.include', '/arama')
      cy.get('#addToCartBtn').should('be.visible').should('not.be.disabled')
      cy.get('#addToCartBtn').click()
      cy.get('.product-cart-title > span').should('be.visible').should('contain', 'Ürün Başarıyla Sepete Eklendi')
      cy.get('#cart-popup-go-cart').should('be.visible').click()
      
  
      cy.get('#header-cart-btn .badge').should('contain.text', '1')

           // cy.screenshot('product-detail-cart-count')
        })

    
