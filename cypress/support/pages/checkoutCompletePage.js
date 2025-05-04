export class CheckoutCompletePage {
    locators = {
      confirmationHeader: '.complete-header',
    };
  
    verifyOrderSuccess() {
      cy.url().should('include', '/checkout-complete.html');
      cy.get(this.locators.confirmationHeader)
        .should('contain.text', 'Thank you for your order!');
      return this;
    }
  }
  