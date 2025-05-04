export class CheckoutCompletePage {
  locators = {
    completeHeader: '.complete-header',
    pageTitle: '.title',
  };
  
  verifyOrderSuccess() {
    cy.url().should('include', '/checkout-complete.html');
    cy.get(this.locators.completeHeader).should('contain.text', 'Thank you for your order!');
    return this;
  }

  verifyCompletePageIsVisible() {
    cy.get(this.locators.pageTitle).should('be.visible');
    return this;
  }
}
  