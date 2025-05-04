export class CheckoutPage {
  locators = {
    firstName: '[data-test="firstName"]',
    lastName: '[data-test="lastName"]',
    postalCode: '[data-test="postalCode"]',
    continueButton: '[data-test="continue"]',
    finishButton: '[data-test="finish"]',
  };

  fillCustomerInfo(firstName, lastName, postalCode) {
    cy.get(this.locators.firstName).type(firstName);
    cy.get(this.locators.lastName).type(lastName);
    cy.get(this.locators.postalCode).type(postalCode);
    return this;
  }

  continueToSummary() {
    cy.get(this.locators.continueButton).click();
    return this;
  }

  finishPurchase() {
    cy.get(this.locators.finishButton).click();
    return this;
  }
}
