const input = '#target';
const result = '#keyPressResult';

class KeypressesPage {
    checkPButton() {
        cy.get(input).type('{enter}');
        cy.get(result).should('have.value', ''You entered: '+ ENTER');



        
    }
}