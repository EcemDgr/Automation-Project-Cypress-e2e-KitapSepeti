class PaymentPage {

  paymentStepButton() {
    return cy.contains('Ödeme Adımına Geç')
  }

  creditCardTab() {
    return cy.get('#iyz-tab-credit-card')
  }

  cardHolderInput() {
    return cy.get('[name="cardHolderName"]')
  }

  cardNumberInput() {
    return cy.get('#ccnumber')
  }

  cardExpiryInput() {
    return cy.get('#ccexp')
  }

  cardCvcInput() {
    return cy.get('#cccvc')
  }

  payButton() {
    return cy.get('#iyz-payment-button')
  }

  goToPayment() {
    return this.paymentStepButton()
      .should('be.visible')
      .click()
  }

  selectCreditCard() {
    return this.creditCardTab()
      .scrollIntoView()
      .click()
  }

  fillCardForm({ name, number, exp, cvc }) {
    if (name !== undefined) {
      this.cardHolderInput().clear().type(name)
    }

    if (number !== undefined) {
      this.cardNumberInput().clear().type(number)
    }

    if (exp !== undefined) {
      this.cardExpiryInput().clear().type(exp)
    }

    if (cvc !== undefined) {
      this.cardCvcInput().clear().type(cvc)
    }

    return cy.wrap(null)
  }

}

export default PaymentPage