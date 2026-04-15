class LoginPage {

  emailInput() {
    return cy.get('#header-email')
  }

  passwordInput() {
    return cy.get('#header-password')
  }

  loginButton() {
    return cy.get('#login-btn-322')
  }

  forgotPassword() {
    return cy.get('.flex-wrap > .text-gray')
  }

  registerButton() {
    return cy.get('#register-btn-322')
  }

  rememberMe() {
    return cy.get('.input-checkbox')
  }

  errorMessage() {
    return cy.get('.error-message')
  }

  validationMessage() {
    return cy.contains('Lütfen')
  }

  openLogin() {
    return cy.get('.member-login-btn')
  }

  login(email, password) {
    this.emailInput().clear().type(email)
    this.passwordInput().clear().type(password)
    this.loginButton().click()
  }

}

export default LoginPage