const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnaToColumnB() {

        cy.get('#column-a header').should('contain', 'A'); 
        cy.get('#column-b header').should('contain', 'B');  
    
        cy.get('#column-a header')  
            .trigger('mousedown', { which: 1 }) 
        cy.get('#column-a header')  
            .trigger('mousemove', { clientX: 200, clientY: 200 }) 
        cy.get('#column-b header)
            .trigger('mouseup', { force: true });
        cy.get('#column-a header').should('not.contain', 'A');  // Element nie powinien być już w #column-a
        // cy.get('#column-b').should('contain', 'Element A');  // Element powinien pojawić się w #column-b
}
    }

export default DragAndDrobPage;
