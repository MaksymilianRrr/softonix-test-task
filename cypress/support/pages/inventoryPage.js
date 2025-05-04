export class InventoryPage {
  locators = {
    items: '.inventory_item',
    inventoryList: '.inventory_list',
    buttons: {
      addToCart: '.btn_inventory',
      cartIcon: '.shopping_cart_link',
    }
  };

  verifyInventoryPageIsVisible() {
    cy.url().should('include', '/inventory.html');
    cy.get(this.locators.items).should('exist');
    return this;
  }

  verifyInventoryListVisible() {
    cy.get(this.locators.inventoryList).should('exist');
    return this;
  }

  addFirstItemToCart() {
    cy.get(this.locators.items).first().within(() => {
      cy.get(this.locators.buttons.addToCart).click();
    });
    return this;
  }

  openCart() {
    cy.get(this.locators.buttons.cartIcon).click();
    return this;
  }
}
