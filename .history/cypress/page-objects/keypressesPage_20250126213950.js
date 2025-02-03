const input = '#target';

class KeypressesPage {
    checkEnterButton() {
        cy.get(input).type('{enter}');
        cy.get(input).should('have.value', '');
    }
}