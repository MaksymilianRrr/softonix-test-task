import { LoginPage } from '../../support/pages/loginPage';
import { InventoryPage } from '../../support/pages/inventoryPage';
import { CartPage } from '../../support/pages/cartPage';
import { CheckoutPage } from '../../support/pages/checkoutPage';
import { CheckoutCompletePage } from '../../support/pages/checkoutCompletePage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();
const cartPage = new CartPage();
const checkoutPage = new CheckoutPage();
const checkoutCompletePage = new CheckoutCompletePage();

describe('Complete Purchase Flow', () => {
  beforeEach(function () {
  cy.fixture('users').then((data) => {
    this.data = data;
  });

  cy.fixture('customerInfo').then((customer) => {
    this.customer = customer;
  });
});


  it('should complete a purchase successfully', function () {
    // Step 1: Login
    loginPage
      .visit()
      .validateLoginPageIsVisible()
      .login(this.data.standardUser.username, this.data.standardUser.password);

    // Step 2: Verify inventory page
    inventoryPage
      .verifyOnInventoryPage()
      .addFirstItemToCart();

    // Step 3: Go to cart
    inventoryPage.goToCart();

    // Step 4: Verify cart page and proceed to checkout
    cartPage
      .verifyCartHasItems()
      .proceedToCheckout();

    // Step 5: Fill checkout info
    checkoutPage
      .fillCustomerInfo(
        this.customer.validCustomer.firstName, 
        this.customer.validCustomer.lastName, 
        this.customer.validCustomer.postalCode
      )
      .continueToSummary();

    // Step 6: Finish checkout
    checkoutPage.finishPurchase();

    // Step 7: Verify order confirmation
    checkoutCompletePage.verifyOrderSuccess();
  });
});
