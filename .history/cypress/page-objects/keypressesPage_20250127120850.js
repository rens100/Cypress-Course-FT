const input = '#target';
const result = '#keyPressResult';

class KeypressesPage {
    checkPressButton() {
        const Enter = '{enter}';  // Definiujemy zmienną ENTER
        cy.get(input).type('{enter}');
        cy.get(result).should('have.text', 'You entered: Enter');
    }
}

export default KeypressesPage;  