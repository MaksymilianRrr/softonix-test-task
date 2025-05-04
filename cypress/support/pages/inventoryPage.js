export class InventoryPage {
  locators = {
    items: '.inventory_item',
    addToCartButton: '.btn_inventory',
    cartIcon: '.shopping_cart_link',
  };

  verifyOnInventoryPage() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.locators.items).should('exist');
    return this;
  }

  addFirstItemToCart() {
    cy.get(this.locators.items).first().within(() => {
      cy.get(this.locators.addToCartButton).click();
    });
    return this;
  }

  goToCart() {
    cy.get(this.locators.cartIcon).click();
    return this;
  }
}
