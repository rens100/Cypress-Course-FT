const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnAToColumnB() {

        const dataTransfer = new DataTransfer();

        cy.get('#column-a header').should('contain', 'A'); 
        cy.get('#column-b header').should('contain', 'B');  
        cy.get(columnA).trigger('dragstart', { dataTransfer })
        cy.get(columnA).trigger('dragend', { dataTransfer });
        cy.get(columnB).trigger('drop', { dataTransfer });
        cy.get('#column-a header').should('not.contain', 'A');  // Element nie powinien być już w #column-a
        // cy.get('#column-b').should('contain', 'Element A');  // Element powinien pojawić się w #column-b
}
    }

export default DragAndDrobPage;
