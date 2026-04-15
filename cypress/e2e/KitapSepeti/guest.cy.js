import HomePage from "../pages/HomePage"
import ProductPage from "../pages/ProductPage"
import CartPage from "../pages/CartPage"
import GuestPage from "../pages/GuestPage"

const homePage = new HomePage()
const productPage = new ProductPage()
const cartPage = new CartPage()
const guestPage = new GuestPage()

describe('Guest Checkout Tests', () => {

  beforeEach(() => {
    homePage.visitSite()
    homePage.acceptCookie()
    homePage.closeCampaignPopup()

    productPage.goToFirstProduct()
    productPage.addToCart()
    cartPage.goToCartFromPopup()
    cartPage.clickCheckout()
  })

  it('TC_GUEST_52 Giriş sayfasina yönlendirme', () => {
    cy.url().should('include', '/siparis-uye-giris')
  })

  it('TC_GUEST_53 'Üye Olmadan Devam Et' butonu görünür olmali', () => {
    guestPage.continueWithoutMembershipButton()
      .should('be.visible')
  })

  it('TC_GUEST_54 Adres sayfasina yönlendirme', () => {
    guestPage.continueWithoutMembership()
    cy.url().should('include', '/order/address')
  })

  it('TC_GUEST_55 Adres bilgileri görünür olmali', () => {
    guestPage.continueWithoutMembership()

    guestPage.fullnameInput().should('be.visible')
    guestPage.emailInput().should('be.visible')
    guestPage.phoneInput().should('be.visible')
    guestPage.citySelect().should('be.visible')
    guestPage.addressTextarea().should('be.visible')
  })

  it('TC_GUEST_56 Boş adres alani için doğrulama hatasi gösterilmeli', () => {
 guestPage.fillAddressForm({
  address: ''
})

guestPage.addressTextarea()
  .focus()
  .blur()

guestPage.addressTextarea().then(($el) => {
  expect($el[0].validationMessage).to.not.equal('')
})
  })

  it('TC_GUEST_57 Ödeme sayfasina yönlendirme', () => {
    guestPage.continueWithoutMembership()

    guestPage.fillAddressForm()
    guestPage.clickContinue()

    cy.url().should('include', '/order/payment')
  })

})