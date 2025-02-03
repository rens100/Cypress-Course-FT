const input = '#target';
const result 

class KeypressesPage {
    checkEnterButton() {
        cy.get(input).type('{enter}');
        cy.get(input).should('have.value', '');
    }
}