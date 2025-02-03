const input = '#target';
const result = '#keyPressResult';

class KeypressesPage {
    checkPressButton() {
        cy.get(input).type('{enter}');
        cy.get(result).should('have.value', ''You entered: '+ ENTER');
    }
}

export default KeypressesPage;