export class CartPage {
  locators = {
    cartItem: '.cart_item',
    checkoutButton: '[data-test="checkout"]',
  };

  verifyCartHasItems(count = 1) {
    cy.url().should('include', '/cart.html');
    cy.get(this.locators.cartItem).should('have.length', count);
    return this;
  }

  proceedToCheckout() {
    cy.get(this.locators.checkoutButton).click();
    return this;
  }
}
