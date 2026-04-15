class HomePage {

  visitSite() {
    return cy.visit('https://www.kitapsepeti.com')
  }


  acceptCookie() {
    return cy.get('.cc-nb-okagree', { timeout: 10000 })
      .should('be.visible')
      .click()
  }

  closeCampaignPopup() {
    return cy.get('body').then(($body) => {
      if ($body.find('#t-modal-close-1').length > 0) {
        cy.get('#t-modal-close-1')
          .should('be.visible')
          .click()
      }
    })
  }

  loginButton() {
    return cy.get('.member-login-btn')
  }

  avatarIcon() {
    return cy.get('#header-account .custom-user')
  }

  openLoginWithButton() {
   return this.loginButton().click()
  }

  openLoginWithAvatar() {
    return this.avatarIcon().click()
  }

}

export default HomePage