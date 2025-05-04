export class CartPage {
  locators = {
    cartItem: '.cart_item',
    buttons: {
      checkout: '[data-test="checkout"]',
      remove: '[data-test^="remove-"]',
    }
  };

  verifyCartHasItems(count) {
    cy.url().should('include', '/cart.html');
    cy.get(this.locators.cartItem).should('have.length', count);
    return this;
  }

  proceedToCheckout() {
    cy.get(this.locators.buttons.checkout).click();
    return this;
  }
}
