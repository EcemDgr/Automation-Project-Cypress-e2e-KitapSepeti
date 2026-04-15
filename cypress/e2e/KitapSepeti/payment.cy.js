import HomePage from "../pages/HomePage"
import LoginPage from "../pages/LoginPage"
import SearchPage from "../pages/SearchPage"
import ProductPage from "../pages/ProductPage"
import CartPage from "../pages/CartPage"
import PaymentPage from "../pages/PaymentPage"

const homePage = new HomePage()
const loginPage = new LoginPage()
const searchPage = new SearchPage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const paymentPage = new PaymentPage()

describe('Checkout Tests', () => {

  beforeEach(() => {
    
    homePage.visitSite()
    homePage.acceptCookie()
    homePage.closeCampaignPopup()

    homePage.openLoginWithButton()
    loginPage.login(Cypress.env('email'), Cypress.env('password'))

    searchPage.search('kitap')
    searchPage.clickFirstProduct()

    productPage.addToCart()
    productPage.goToCartFromPopup()

    cartPage.clickCheckout()

    paymentPage.goToPayment()
  })

  it('TC_PAYMENT_44 ödeme sayfasına yönlendirme', () => {
    cy.url().should('include', '/order/payment')
  })

  it('TC_PAYMENT_45 Kargo seçenekleri görünür olmalı', () => {
    cy.contains('Kargo Seçenekleri').should('be.visible')
    cy.contains('PTT Kargo').should('be.visible')
    cy.contains('HEPSİJET').should('be.visible')
  })

  it('TC_PAYMENT_46 Kredi karti alanlari görünür olmali', () => {
    paymentPage.selectCreditCard()

    paymentPage.cardHolderInput().should('be.visible')
    paymentPage.cardNumberInput().should('be.visible')
  })

  it('TC_PAYMENT_47 Pay button should be enabled after filling form', () => {
    paymentPage.selectCreditCard()

    paymentPage.fillCardForm({
      name: 'ayşe yilmaz',
      number: '5549 6014 9253 1035',
      exp: '10/30',
      cvc: '123'
    })

    paymentPage.payButton()
      .should('not.be.disabled')
  })

  it('TC_PAYMENT_48 Eksik bilgiler için doğrulama hatasi gösterilmeli', () => {
    paymentPage.selectCreditCard()

    paymentPage.cardHolderInput().type('ayşe')

    paymentPage.payButton().click()

    cy.contains('Kart numarası giriniz')
      .should('be.visible')
  })

})