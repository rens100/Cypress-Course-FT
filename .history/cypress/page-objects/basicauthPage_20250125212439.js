const name = 'input[id="ba_username"]';
const password = 'input[id="ba_password"]';

class basicauthPage {

    checkPositiveCase() {
        cy.get(name).clear();
        cy.get(name).type("admin").should("have.")
    }


} 