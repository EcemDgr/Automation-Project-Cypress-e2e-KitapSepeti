class ProductPage {

  productItems() {
    return cy.get('.product-item')
  }

  productTitle() {
    return cy.get('#product-title')
  }

  brandTitle() {
    return cy.get('#brand-title')
  }

  modelTitle() {
    return cy.get('#model-title span')
  }

  price() {
    return cy.get('.product-price')
  }

  addToCartButton() {
    return cy.get('#addToCartBtn')
  }

  successMessage() {
    return cy.get('.product-cart-title span')
  }

  goToCartButton() {
    return cy.get('#cart-popup-go-cart')
  }

  cartBadge() {
    return cy.get('#header-cart-btn .badge')
  }

  goToFirstProduct() {
    return this.productItems()
      .first()
      .find('a')
      .first()
      .click()
  }

  addToCart() {
  return this.addToCartButton()
    .scrollIntoView()
    .should('exist')
    .should('not.be.disabled')
    .click({ force: true })
}

  goToCart() {
    return cy.contains('Sepete Git')
      .should('be.visible')
      .click()
  }

  closeAddToCartPopup() {
    return cy.get('body').then(($body) => {
      if ($body.find('#t-modal-close-1').length > 0) {
        cy.get('#t-modal-close-1')
          .should('be.visible')
          .click()
      }
    })
  }

  goToCartFromPopup() {
    return cy.contains('Sepete Git', { timeout: 10000 })
      .should('be.visible')
      .click()
  }

}

export default ProductPage