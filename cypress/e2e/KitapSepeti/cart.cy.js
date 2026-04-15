import HomePage from "../pages/HomePage"
import SearchPage from "../pages/SearchPage"
import ProductPage from "../pages/ProductPage"
import CartPage from "../pages/CartPage"

const homePage = new HomePage()
const searchPage = new SearchPage()
const productPage = new ProductPage()
const cartPage = new CartPage()

describe('Cart Tests', () => {

  beforeEach(() => {
    homePage.visitSite()
    homePage.acceptCookie()
    homePage.closeCampaignPopup()

    searchPage.search('kitap')
    searchPage.clickFirstProduct()
    productPage.addToCart()
    productPage.closeAddToCartPopup()
    cartPage.goToCartFromPopup()

    cartPage.openCart()
    cartPage.goToCartPage()
  })

  it('TC_34 Sepet sayfasına yönlendirme', () => {
    cy.url().should('include', '/sepet')
  })

  it('TC_35 Fiyat hesaplaması doğru olmalı', () => {
    cartPage.cartItems().each(($el) => {
      const unit = Number($el.find('.unit-price').text().replace('TL','').replace(',','.'))
      const qty = Number($el.find('.quantity').text())
      const total = Number($el.find('.total-price').text().replace('TL','').replace(',','.'))

      expect(unit * qty).to.eq(total)
    })
  })

  it('TC_38 Sepetten ürün silme', () => {
    cartPage.deleteFirstProduct()

    cartPage.cartBadge()
      .should('contain.text', '0')
  })

  it('TC_39 Sepeti temizle', () => {
    cartPage.clearCart()

    cartPage.cartBadge()
      .should('contain.text', '0')
  })

  it('TC_41 Satış işlemine yönlendirme-buton görünür olmalı', () => {
    cartPage.checkoutButton()
      .should('be.visible')
      .and('not.be.disabled')
  })

})