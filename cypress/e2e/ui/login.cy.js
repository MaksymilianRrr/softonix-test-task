import { LoginPage } from '../../support/pages/loginPage';
import { InventoryPage } from '../../support/pages/inventoryPage';

const loginPage = new LoginPage();
const inventoryPage = new InventoryPage();

describe('Login Page Tests', () => {
  beforeEach(function () {
    cy.fixture('users').then((data) => { this.data = data; });
    cy.fixture('messages').then((messages) => { this.messages = messages; });
  });

  it('should log in successfully with valid credentials', function () {
    loginPage
      .visit()
      .validateLoginPageIsVisible()
      .login(this.data.standardUser.username, this.data.standardUser.password);

    inventoryPage
      .verifyInventoryPageIsVisible()
      .verifyInventoryListVisible();
  });

  it('should show error message for invalid credentials', function () {
    loginPage
      .visit()
      .validateLoginPageIsVisible()
      .login(this.data.invalidUser.username, this.data.invalidUser.password);
  
    loginPage.getErrorMessage()
      .should('contain', this.messages.loginError)
      .and('be.visible');
  });

  it('should mask the password input', () => {
    loginPage
      .visit()
      .validateLoginPageIsVisible()
      .getPasswordInput()
      .should('have.attr', 'type', 'password');
  });
});
