import { LoginPage } from '../../support/page_objects/loginPage';

const loginPage = new LoginPage();

describe('Login Page Tests', () => {
  beforeEach(() => {
    cy.fixture('users').then(function (data) {
      this.data = data;
    });
  });

  it('should log in successfully with valid credentials', function () {
    loginPage.visit();
    loginPage.validateLoginPageIsVisible();
    loginPage.enterUsername(this.data.standardUser.username);
    loginPage.enterPassword(this.data.standardUser.password);
    loginPage.submit();

    cy.url().should('include', '/inventory.html');
    cy.get('.inventory_list').should('exist');
  });

  it('should show error message for invalid credentials', function () {
    loginPage.visit();
    loginPage.validateLoginPageIsVisible();
    loginPage.enterUsername(this.data.invalidUser.username);
    loginPage.enterPassword(this.data.invalidUser.password);
    loginPage.submit();
  
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
