import HomePage from "../pages/HomePage"
import SearchPage from "../pages/SearchPage"
import ProductPage from "../pages/ProductPage"

const homePage = new HomePage()
const searchPage = new SearchPage()
const productPage = new ProductPage()

describe('Product Detail Tests', () => {

  beforeEach(() => {
    homePage.visitSite()
    homePage.acceptCookie()
    homePage.closeCampaignPopup()

    searchPage.search('roman')
    searchPage.clickFirstProduct()
  })

  it('TC_PRODUCT_DETAIL_27 Ürün detay sayfasina yönlendirme', () => {
    cy.url().should('not.include', '/arama')
  })

  it('TC_PRODUCT_DETAIL_28 Ürünün temel bilgileri görünür olmalı', () => {
    productPage.productTitle().should('be.visible')
    productPage.brandTitle().should('be.visible')
    productPage.modelTitle().should('be.visible')
    productPage.price().should('be.visible')
  })

  it('TC_PRODUCT_DETAIL_29 Ürün detay bilgileri görünür olmalı', () => {
    cy.contains('Türü').should('be.visible')
    cy.contains('ISBN').should('be.visible')
    cy.contains('Basım Yılı').should('be.visible')
    cy.contains('Kağıt Tipi').should('be.visible')
  })

  it('TC_PRODUCT_DETAIL_30 Sepete ekle butonu çalişiyor olmali', () => {
    productPage.addToCart()
  })

  it('TC_PRODUCT_DETAIL_31 Başari mesaji görünür olmali', () => {
    productPage.addToCart()

    productPage.successMessage()
      .should('be.visible')
      .and('contain', 'Ürün Başarıyla Sepete Eklendi')
  })

  it('TC_PRODUCT_DETAIL_32 Sepet sayisi artmali', () => {
    productPage.addToCart()
    productPage.goToCartFromPopup()

    productPage.cartBadge()
      .should('contain.text', '1')
  })

})