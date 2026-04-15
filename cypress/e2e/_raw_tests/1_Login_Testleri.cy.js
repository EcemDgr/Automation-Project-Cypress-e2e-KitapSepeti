describe('login olma testi', function () {

  it('TC_LOGIN_01 E-posta ile giris linki ile popup acilmasi', function () {


    cy.visit('https://www.kitapsepeti.com')
    cy.get('.cc-nb-okagree').click()
    cy.get('.t-modal-content > p > img').should('be.visible')
    cy.get('#t-modal-close-1 > .ti-close').click()
    cy.get('.member-login-btn').click()

    //cy.screenshot('epostalinki_ile_login_olma')

  })

})


it('TC_LOGIN_02 avatar ikonu ile giris popup acilmasi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
 cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('#header-account > .custom-user').click()

  //cy.screenshot('avatarikonu_ile_login_olma')

  })


  it('TC_LOGIN_03 gerekli form alanlarinin görülmesi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email').should('be.visible')
cy.get('#header-password').should('be.visible')
cy.get('#login-btn-322').should('be.visible')
cy.get('.input-checkbox').should('be.visible')
cy.get('.flex-wrap > .text-gray').should('be.visible')
cy.get('#register-btn-322').should('be.visible')


  //cy.screenshot('gerekli_form_alanlari')

  })


  it('TC_LOGIN_04 gecerli bilgilerle login olma', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#login-btn-322').click()


  //cy.screenshot('login')

  })

// TC_LOGIN_03 testinde manuel test yaparken basarili giris sonrasi adres sayfasina yönlendirilme kontrolu yapilmistir. Ancak cypress ile test yaparken bu yönlendirme gerçekleşmemektedir. Bu nedenle manuel testteki yönlendirme kontrolu cypress testine eklenmiştir.
  it('TC_LOGIN_05 basarili giris sonrasi adres sayfasina yönlendirilme', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email').type('gnnbbecem@gmail.com')
cy.get('#header-password').type('Ee123456@@')
cy.get('#login-btn-322').click()
cy.url().should('include', 'https://www.kitapsepeti.com/uye-kayit');



  //cy.screenshot('navigate_to_adress_page')

  })

  it('TC_LOGIN_06 hatali bilgilerle login olma denemesi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email').type('gnnbbecem@gmail.com')
cy.get('#header-password').type('Ee12345')
cy.get('#login-btn-322').click()


  //cy.screenshot('negative_login_1')

  })


    it('TC_LOGIN_07 hatali bilgilerle login olma denemesi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email').type('test@gmail.com')
cy.get('#header-password').type('Ee12345@@')
cy.get('#login-btn-322').click()
  //cy.screenshot('negative_login_2')

  })

    it('TC_LOGIN_08 gecersiz email formati ile login olma denemesi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email').type('gnnbbecem@gmail')
cy.get('#header-password').type('Ee12345@@')
cy.get('#login-btn-322').click()

  //cy.screenshot('negative_login_3')

  })

it('TC_LOGIN_09 boş email alani ile login olma denemesi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email')
cy.get('#header-password').type('Ee12345@@')
cy.get('#login-btn-322').click()

  //cy.screenshot('negative_login_4')

  })

  it('TC_LOGIN_09 boş password alani ile login olma denemesi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email').type('gnnbbecem@gmail.com')
cy.get('#header-password')
cy.get('#login-btn-322').click()

  //cy.screenshot('negative_login_5')

  })


   it('TC_LOGIN_10 boş password alani ile login olma denemesi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email')
cy.get('#header-password')
cy.get('#login-btn-322').click()

  //cy.screenshot('negative_login_6')

  })


  it('TC_LOGIN_11 10 kez hatali login denemesi', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

cy.get('#header-email').type('wrong@mail.com')
cy.get('#header-password').type('Ee12345@@')
cy.get('#login-btn-322').click()

   const clicks = 10;

for (let i = 0; i < clicks; i++) {
  cy.get('#login-btn-322').click();

  //cy.screenshot('10_kez_hatali_deneme_7')
}

  })


    it('TC_LOGIN_12 şifremi unuttum butonuna tiklandiginda şifre sifirlama sayfasina yonlendirme', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

 cy.get('.flex-wrap > .text-gray').should('contain', 'Şifremi Unuttum')
 .click()
 cy.url().should('include', 'https://www.kitapsepeti.com/uye-sifre-hatirlat')
 cy.get('[name="forgot-email"]').should('be.visible')
 cy.get('#forgot-password-btn-292').should('be.visible')


  
  //cy.screenshot('şifremi_unuttum_butonu_8')


  })

  it('TC_LOGIN_13 Şifre sifirlama sayfasinda gerekli alanlar bulunmalidir', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

 cy.get('.flex-wrap > .text-gray').should('contain', 'Şifremi Unuttum')
 .click()
 cy.url().should('include', 'https://www.kitapsepeti.com/uye-sifre-hatirlat')
 cy.get('[name="forgot-email"]').should('be.visible')
 cy.get('#forgot-password-btn-292').should('be.visible')
 cy.get('[name="forgot-email"]').should('have.attr', 'placeholder', 'E-posta adresinizi giriniz')
 .should('be.visible').should('be.enabled')
 cy.get('#forgot-password-btn-292').should('be.visible').should('be.enabled').should('contain', 'Şifremi Hatırlat')

cy.screenshot('şifre_sifirlama_sayfasi')

  })


   it('TC_LOGIN_13 Şifre sifirlama sayfasinda gerekli alanlar bulunmalidir', function () {

  cy.visit('https://www.kitapsepeti.com')
  cy.get('.cc-nb-okagree').click()
  cy.get('.t-modal-content > p > img').should('be.visible')
  cy.get('#t-modal-close-1 > .ti-close').click()
  cy.get('.member-login-btn').click()

 cy.get('.flex-wrap > .text-gray').should('contain', 'Şifremi Unuttum')
 .click()
 cy.url().should('include', 'https://www.kitapsepeti.com/uye-sifre-hatirlat')
 cy.get('[name="forgot-email"]').should('be.visible')
 cy.get('#forgot-password-btn-292').should('be.visible')
 cy.get('[name="forgot-email"]').should('have.attr', 'placeholder', 'E-posta adresinizi giriniz')
 .should('be.visible').should('be.enabled')
 cy.get('#forgot-password-btn-292').should('be.visible').should('be.enabled').should('contain', 'Şifremi Hatırlat')
 

cy.screenshot('şifre_sifirlama_sayfasi_gerekli_alanlar')
   })