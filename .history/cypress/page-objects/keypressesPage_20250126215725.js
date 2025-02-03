const input = '#target';
const result = '#keyPressResult';

class KeypressesPage {
    checkPressButton() {
        const ENTER = '{enter}';  // Definiujemy zmienną ENTER

        cy.get(input).type('{enter}');
        cy.get(result).should('have.value', `You entered: ${Enter}`);
    }
}

export default KeypressesPage;