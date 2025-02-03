const name = 'input[id="ba_username"]';
const password = 'input[id="ba_password"]';
const button = 'button[onclick="onLoginSubmit()"]';

class basicauthPage {

    checkPositiveCase() {
        cy.get(name).clear();
        cy.get(name).type("admin").should("have.value", "admin");
        cy.get(password).clear();
        cy.get(password).type("password").should("have.value", "password");
        cy.get(button).click();

    }
}