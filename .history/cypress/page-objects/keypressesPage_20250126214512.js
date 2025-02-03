const input = '#target';
const result = '#keyPressResult';

class KeypressesPage {
    checkEnterButton() {
        cy.get(input).type('{enter}');
        cy.get(result).should('have.value', ''You entered: '+ output');



        
    }
}