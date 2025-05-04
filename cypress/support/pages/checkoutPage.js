export class CheckoutPage {
  locators = {
    inputs: {
      firstName: '[data-test="firstName"]',
      lastName: '[data-test="lastName"]',
      postalCode: '[data-test="postalCode"]',
    },
    buttons: {
      continue: '[data-test="continue"]',
      cancel: '[data-test="cancel"]',
      finish: '[data-test="finish"]',
    }
  };

  fillCustomerInfo(firstName, lastName, postalCode) {
    cy.get(this.locators.inputs.firstName).type(firstName);
    cy.get(this.locators.inputs.lastName).type(lastName);
    cy.get(this.locators.inputs.postalCode).type(postalCode);
    return this;
  }

  continueToSummary() {
    cy.get(this.locators.buttons.continue).click();
    return this;
  }

  finishPurchase() {
    cy.get(this.locators.buttons.finish).click();
    return this;
  }
}
