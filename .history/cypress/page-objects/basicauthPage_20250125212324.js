const name = 'input[id="ba_username"]';
const password = 'input[id="ba_password"]';

class basicauthPage {

    checkNameField() {
        cy.get(name).clear();
        cy.get(name).type("admin").
    }


} 