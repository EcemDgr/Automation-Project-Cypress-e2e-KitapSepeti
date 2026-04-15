class CartPage {

  cartIcon() {
    return cy.get('.custom-cart')
  }

  goToCartButton() {
    return cy.get('#go-cart-btn')
  }

  cartItems() {
    return cy.get('.cart-item')
  }

  deleteProductButton() {
    return cy.get('[id^="delete-product"]')
  }

  confirmDeleteButton() {
    return cy.contains('button', 'Sil')
  }

  clearCartButton() {
    return cy.get('[id^="clear-cart-btn"]')
  }

  cartBadge() {
    return cy.get('#header-cart-btn .badge')
  }

  checkoutButton() {
    return cy.get('#cart-buy-btn')
  }

  openCart() {
    return this.cartIcon().click()
  }

  goToCartPage() {
    return this.goToCartButton().click()
  }

  deleteFirstProduct() {
    return this.deleteProductButton()
      .first()
      .click()
      .then(() => this.confirmDeleteButton().click())
  }

  clearCart() {
    return this.clearCartButton().click()
  }

  clickCheckout() {
    return this.checkoutButton()
      .should('be.visible')
      .and('not.be.disabled')
      .click()
  }

  goToCartFromPopup() {
    return cy.contains('Sepete Git')
      .should('be.visible')
      .click()
  }

}

export default CartPage