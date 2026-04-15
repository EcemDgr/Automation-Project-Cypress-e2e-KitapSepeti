class GuestPage {

  fullnameInput() {
    return cy.get('[name="fullname"]')
  }

  emailInput() {
    return cy.get('[name="email"]')
  }

  phoneInput() {
    return cy.get('[name="mobile_phone"]')
  }

  citySelect() {
    return cy.get('[name="city_code"]')
  }

  townSelect() {
    return cy.get('[name="town_code"]')
  }

  districtSelect() {
    return cy.get('[name="district_code"]')
  }

  addressTextarea() {
    return cy.get('[name="address"]')
  }

  continueButton() {
    return cy.get('.col-12 > .btn')
  }

  continueWithoutMembershipButton() {
    return cy.get('#membership-form-131 > .w-100')
  }

  addressValidationMessage() {
  return this.addressTextarea()
    .focus()
    .blur()
}

  continueWithoutMembership() {
    return this.continueWithoutMembershipButton()
      .should('be.visible')
      .click()
  }

  fillAddressForm(options = {}) {
    const {
      fullname = 'ayşe yılmaz',
      email = 'ayseyilmaz@example.com',
      phone = '5363002010',
      city = 'Ankara',
      town = 'Çankaya',
      district = 'ATA MAH',
      address = 'Atatürk Bulvarı Melis Evleri No:123 Çankaya/Ankara'
    } = options

    if (fullname !== undefined) {
      this.fullnameInput().clear().type(fullname)
    }

    if (email !== undefined) {
      this.emailInput().clear().type(email)
    }

    if (phone !== undefined) {
      this.phoneInput().clear().type(phone)
    }

    if (city !== undefined) {
      this.citySelect().select(city)
    }

    if (town !== undefined) {
      this.townSelect().select(town)
    }

    if (district !== undefined) {
      this.districtSelect().select(district)
    }

    if (address !== undefined) {
      this.addressTextarea().clear()

      if (address !== '') {
        this.addressTextarea().type(address)
      }
    }

    return cy.wrap(null) 
  }

  clickContinue() {
    return this.continueButton().click()
  }

}

export default GuestPage