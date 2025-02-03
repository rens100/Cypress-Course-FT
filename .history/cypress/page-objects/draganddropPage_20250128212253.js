const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnaToColumnB() {

        cy.get('#column-a').should('contain', 'A'); 
        cy.get('#column-b').should('contain', 'B');  
    
        cy.get('#column-a')  
            .trigger('mousedown', { which: 1 }) 
        cy.get('#column-a')  
            .trigger('mousemove', { clientX: 200, clientY: 200 }) 
        cy.get('#column-b')
            .trigger('mouseup', { force: true });
        cy.get('#column-a').should('not.contain', 'A');  // Element nie powinien być już w #column-a
        // cy.get('#column-b').should('contain', 'Element A');  // Element powinien pojawić się w #column-b
}
    }

export default DragAndDrobPage;
