const input = '#target';
const result = '#keyPressResult';

class KeypressesPage {
    checkPressButton() {
        const Enter = '{enter}';
        cy.get(input).type('{enter}');
        cy.get(result).should('have.text', 'You entered: ENTER');
    }



    
}

export default KeypressesPage;  