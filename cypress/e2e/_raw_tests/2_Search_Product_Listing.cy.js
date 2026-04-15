describe('Ürün Arama ve Listeleme Testi', function () {

  it('TC_SEARCH_15 arama çubuğuna en az 1 karakter (ürün adi) yazarak arama yapma', function () {

    cy.visit('https://www.kitapsepeti.com')
    cy.get('.cc-nb-okagree').click()
    cy.get('.t-modal-content > p > img').should('be.visible')
    cy.get('#t-modal-close-1 > .ti-close').click()
    cy.get('[name="q"]').type('k')
    cy.get('#live-search-btn').click()
        
    //cy.screenshot('urun_arama')

  })

})

it('TC_SEARCH_16 arama kriterine uygun ürünlerin listelendiğinin doğrulanmasi ve arama kutusundan silindiğinin görülmesi', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap')
  cy.get('#live-search-btn').click()
  cy.get('.product-item').should('have.length.greaterThan', 0)
  cy.get('[name="q"]').should('have.value', '')

  //cy.screenshot('urun_listeleme')
  
})

it('TC_SEARCH_17 Sistemde bulunmayan bir kelimeyle arama yapildiginda sonuç görüntülenme testi.', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('asdfqwert')

//cy.screenshot('sistemde_bulunmayan_kelime_ile_arama')

})

it('TC_SEARCH_18 ürün kartinda gerekli bilgiler bulunmalidir', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap')

  cy.get('.product-item').each(($el) => {      
  cy.wrap($el).find('.product-title').should('exist')
    .and('not.be.empty');
  cy.wrap($el).find('.brand-title').should('exist')
    .and('not.be.empty');  
  cy.wrap($el).find('.current-price').should('exist')
    .and('not.be.empty');   
  cy.wrap($el).find('.image-inner').should('exist')
  .should('not.be.empty');
  
//cy.screenshot('urun_kartlarinda_gerekli_bilgiler')})

  })

})

it('TC_SEARCH_19 ürün kartinda "Sepete Ekle" butonunun bulunması ve hover ile aktif olması', function () {

  
cy.visit('https://www.kitapsepeti.com')
cy.get('.cc-nb-okagree').click()
cy.get('.t-modal-content > p > img').should('be.visible')
cy.get('#t-modal-close-1 > .ti-close').click()
cy.get('[name="q"]').type('kitap')

  cy.get('.product-item').first().within(() => {

  cy.get('[id^="product-addcart-button"]')
    .should('exist')
    .and('have.css', 'visibility', 'hidden') 
})
 
cy.screenshot('sepete_ekle_butonunun_gorunurlugu')

 })



it('TC_SEARCH_20 "Siralama" menüsü tiklandiginda dogru seçenekler listelenmelidir', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
cy.get('[name="q"]').type('kitap{enter}');

cy.url().should('include', 'kitap');  
cy.get('#sort')
  .should('exist')
  .and('be.visible');

  cy.contains('option', 'Varsayılan Sıralama').should('exist');
  cy.contains('option', 'Yeniden Eskiye').should('exist');
  cy.contains('option', 'Eskiden Yeniye').should('exist');
  cy.contains('option', 'Fiyat Artan').should('exist');
  cy.contains('option', 'Fiyat Azalan').should('exist');

  //cy.screenshot('siralama_menusu_dogru_secenekler')

});

it('TC_SEARCH_21 "Fiyat Artan" seçildiğinde ürünler artan fiyata göre siralanmalidir', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
cy.get('[name="q"]').type('kitap{enter}');

cy.get('#sort').select('Fiyat Artan');

cy.get('.current-price').then(($prices) => {
  const prices = $prices.map((index, html) => parseFloat(html.innerText.replace(/[^0-9.,]+/g, '').replace(',', '.'))).get();
 prices.forEach((price, i) => {
    if (i < prices.length - 1) {
      expect(price).to.be.at.most(prices[i + 1]); 
    }
  });

});

//cy.screenshot('fiyat_artan_siralama')
});

/*it('TC_SEARCH_22 Filtreleme panelinden kategori, marka ve model filtreleri uygulanabilmelidir', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
cy.get('[name="q"]').type('kitap{enter}');
 cy.get('#accordion-brand-361').click();

cy.get('#accordion-brand-361 label').first().then($el => {

  const brandName = $el.text().trim();

  cy.wrap($el).click();

  cy.get('.product-item').each(($product) => {
    cy.wrap($product)
      .find('.brand-title')
      .should('contain.text', brandName);
  });

});*/
    
it('TC_SEARCH_26 Asagi kaydirildiginda yeni urunler yuklenmelidir', function () {


  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('[name="q"]').type('kitap{enter}');
  
  cy.get('.product-item').then($items => {

  const initialCount = $items.length;

  cy.scrollTo('bottom');

  cy.get('.product-item', { timeout: 10000 })
    .should('have.length.greaterThan', initialCount);

});


})


