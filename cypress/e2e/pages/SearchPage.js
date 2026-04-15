class SearchPage {

  searchInput() {
    return cy.get('[name="q"]')
  }

  searchButton() {
    return cy.get('#live-search-btn')
  }

  productItems() {
    return cy.get('.product-item')
  }

  productTitle() {
    return cy.get('.product-title')
  }

  brandTitle() {
    return cy.get('.brand-title')
  }

  productPrice() {
    return cy.get('.current-price')
  }

  productImage() {
    return cy.get('.image-inner')
  }

  sortDropdown() {
    return cy.get('#sort')
  }

  search(product) {
    return this.searchInput()
      .clear()
      .type(`${product}{enter}`)
  }

  searchWithButton(product) {
    return this.searchInput()
      .clear()
      .type(product)
      .then(() => this.searchButton().click())
  }

  clickFirstProduct() {
    return this.productItems()
      .first()
      .find('a')
      .first()
      .click()
  }

}

export default SearchPage