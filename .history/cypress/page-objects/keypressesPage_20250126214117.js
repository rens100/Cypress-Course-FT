const input = '#target';
const result = 'p[id="keyPressResult"]'

class KeypressesPage {
    checkEnterButton() {
        cy.get(input).type('{enter}');
        cy.get(input).should('have.value', '');
    }
}