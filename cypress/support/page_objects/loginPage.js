export class LoginPage {
    visit() {
      cy.visit('/');
      return this;
    }

     locators = {
      inputs: {
        username: '#user-name',
        password: '#password',
      },
      buttons: {
        login: '#login-button',
      },
      messages: {
        error: '[data-test="error"]',
      }
    };
  
    enterUsername(username) {
      cy.get(this.locators.inputs.username).type(username);
      return this;
    }
  
    enterPassword(password) {
      cy.get(this.locators.inputs.password).type(password);
      return this;
    }
  
    submit() {
      cy.get(this.locators.buttons.login).click();
      return this;
    }
  
    getErrorMessage() {
      return cy.get(this.locators.messages.error);
    }
  
    getPasswordInput() {
      return cy.get(this.locators.inputs.password);
    }

    validateLoginPageIsVisible() {
      cy.get(this.locators.inputs.username).should('be.visible');
      cy.get(this.locators.inputs.password).should('be.visible');
      cy.get(this.locators.buttons.login).should('be.visible');
      return this;
    }
  }
  