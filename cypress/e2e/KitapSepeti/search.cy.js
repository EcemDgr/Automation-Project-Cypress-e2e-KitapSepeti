import HomePage from "../pages/HomePage"
import SearchPage from "../pages/SearchPage"

const homePage = new HomePage()
const searchPage = new SearchPage()

describe('Search Tests', () => {

  beforeEach(() => {
    homePage.visitSite()
    homePage.acceptCookie()
    homePage.closeCampaignPopup()
  })

  it('TC_SEARCH_15 Search with 1 character', () => {
    searchPage.search('k')
    cy.url().should('include', 'k')
  })

  it('TC_SEARCH_16 Products should be listed', () => {
    searchPage.search('kitap')

    searchPage.productItems()
      .should('have.length.greaterThan', 0)
  })

  it('TC_SEARCH_17 Search with non-existing keyword', () => {
    searchPage.search('asdfqwert')
    searchPage.productItems().should('not.exist')
  })

  it('TC_SEARCH_18 Product card should contain required info', () => {
    searchPage.search('kitap')

    searchPage.productItems().each(($el) => {
      cy.wrap($el).find('.product-title').should('exist').and('not.be.empty')
      cy.wrap($el).find('.brand-title').should('exist').and('not.be.empty')
      cy.wrap($el).find('.current-price').should('exist').and('not.be.empty')
      cy.wrap($el).find('.image-inner').should('exist')
    })
  })

  it('TC_SEARCH_20 Sorting options should be visible', () => {
    searchPage.search('kitap')

    searchPage.sortDropdown()
      .should('be.visible')

    cy.contains('option', 'Varsayılan Sıralama')
    cy.contains('option', 'Yeniden Eskiye')
    cy.contains('option', 'Eskiden Yeniye')
    cy.contains('option', 'Fiyat Artan')
    cy.contains('option', 'Fiyat Azalan')
  })

  it('TC_SEARCH_21 Price ascending sorting', () => {
    searchPage.search('kitap')

    searchPage.sortDropdown().select('Fiyat Artan')

    searchPage.productPrice().then(($prices) => {
      const prices = $prices.map((i, el) =>
        parseFloat(el.innerText
          .replace(/[^0-9.,]+/g, '')
          .replace(',', '.'))
      ).get()

      prices.forEach((price, i) => {
        if (i < prices.length - 1) {
          expect(price).to.be.at.most(prices[i + 1])
        }
      })
    })
  })

  it('TC_SEARCH_26 Infinite scroll should load more products', () => {
    searchPage.search('kitap')

    searchPage.productItems().then(($items) => {
      const initialCount = $items.length

      cy.scrollTo('bottom')

      cy.get('.product-item', { timeout: 10000 })
    .should('have.length.greaterThan', initialCount)
})

  })

})