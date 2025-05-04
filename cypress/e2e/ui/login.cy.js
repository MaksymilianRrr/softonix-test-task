import { LoginPage } from '../../support/pages/loginPage';

const loginPage = new LoginPage();

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.fixture('users').then(function (data) {
      this.data = data;
    });
  });

  it('should log in successfully with valid credentials', function () {
    loginPage
      .visit()
      .validateLoginPageIsVisible()
      .login(this.data.standardUser.username, this.data.standardUser.password);

    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('exist');
  });

  it('should show error message for invalid credentials', function () {
    loginPage
      .visit()
      .validateLoginPageIsVisible()
      .login(this.data.invalidUser.username, this.data.invalidUser.password);
  
    loginPage.getErrorMessage()
      .should('contain', 'Username and password do not match')
      .and('be.visible');
  });

  it('should mask the password input', () => {
    loginPage.visit();
    loginPage.validateLoginPageIsVisible();

    loginPage.getPasswordInput().should('have.attr', 'type', 'password');
  });
});
