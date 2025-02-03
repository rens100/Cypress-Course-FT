const input = '#target';
const result = 'p[id="keyPressResult"]';

class KeypressesPage {
    checkEnterButton() {
        cy.get(input).type('{enter}');
        cy.get(result).should('have.value', ''You entered: '+ output');



        
    }
}