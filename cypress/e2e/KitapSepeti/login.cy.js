import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"

const homePage = new HomePage()
const loginPage = new LoginPage()

describe('Login Tests', () => {

  beforeEach(() => {

    homePage.visitSite()
    homePage.acceptCookie()
    homePage.closeCampaignPopup()
    homePage.openLoginWithButton()
  })

  it('TC_LOGIN_01 E-posta ile giris linki ile popup acilmasi', () => {
    loginPage.emailInput().should('be.visible')
  })

  it('TC_LOGIN_02 Avatar ikonu ile giris popup acilmasi', () => {
    homePage.openLoginWithAvatar()
    loginPage.emailInput().should('be.visible')
  })

  it('TC_LOGIN_03 Gerekli form alanlarinin görülmesi', () => {
    loginPage.emailInput().should('be.visible')
    loginPage.passwordInput().should('be.visible')
    loginPage.loginButton().should('be.visible')
  })

  it('TC_LOGIN_04 Gecerli bilgilerle login olma', () => {
    loginPage.login(Cypress.env('email'), Cypress.env('password'))
  })

  it('TC_LOGIN_05 Basarili giris sonrasi adres sayfasina yönlendirilme', () => {
    loginPage.login(Cypress.env('email'), Cypress.env('password'))
    cy.url().should('include', '/uye-kayit')
  })

  it('TC_LOGIN_06 Hatali bilgilerle login olma denemesi', () => {
    loginPage.login(Cypress.env('email'), '123456')
    loginPage.errorMessage().should('be.visible')
  })

  it('TC_LOGIN_07 Gecersiz email ile login olma denemesi', () => {
    loginPage.login('test@mail.com', 'Ee123456@@')
    loginPage.errorMessage().should('be.visible')
  })

  it('TC_LOGIN_08 Gecersiz email formati ile login denemesi', () => {
    loginPage.login('test@', 'Password123')
    loginPage.validationMessage().should('be.visible')
  })

  it('TC_LOGIN_09 Boş email alani ile login denemesi', () => {
    loginPage.passwordInput().type('Password123')
    loginPage.loginButton().click()
    loginPage.validationMessage().should('be.visible')
  })

  it('TC_LOGIN_10 Boş password alani ile login denemesi', () => {
    loginPage.emailInput().type('test@mail.com')
    loginPage.loginButton().click()
    loginPage.validationMessage().should('be.visible')
  })

  it('TC_LOGIN_11 Çoklu hatali login denemesi', () => {

    loginPage.emailInput().type('wrong@mail.com')
    loginPage.passwordInput().type('Ee12345@@')

    Cypress._.times(5, () => {
      loginPage.loginButton().click()
    })

    cy.contains('hatalı').should('exist')
  })

  it('TC_LOGIN_12 şifremi unuttum butonuna tiklandiginda şifre sifirlama sayfasina yonlendirme', () => {

    loginPage.forgotPassword().click()

    cy.url().should('include', '/uye-sifre-hatirlat')

    cy.get('[name="forgot-email"]').should('be.visible')
    cy.get('[id^="forgot-password-btn"]').should('be.visible')
  })

  it('TC_LOGIN_13 Şifre sifirlama sayfasinda gerekli alanlar bulunmalidir', () => {

    loginPage.forgotPassword().click()

    cy.get('[name="forgot-email"]')
      .should('be.visible')
      .and('have.attr', 'placeholder', 'E-posta adresinizi giriniz')
      .and('be.enabled')

    cy.get('[id^="forgot-password-btn"]')
      .should('be.visible')
      .and('be.enabled')
      .and('contain', 'Şifremi Hatırlat')
  })

  it('TC_LOGIN_14 Forgot password validation', () => {

    loginPage.forgotPassword().click()

    cy.get('[id^="forgot-password-btn"]').click()

    cy.contains('Lütfen').should('exist')
  })

})