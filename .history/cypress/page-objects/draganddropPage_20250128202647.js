const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnaToColumnB() {
          

        cy.get('#column-a')  
            .trigger('mousedown', { which: 1 }) 
        cy.get('#column-a')  
            .trigger('mousemove', { clientX: 10000, clientY: 0 }) 
        cy.wait(500);      // Upuszczanie elementu
        cy.get('#column-b')
            .trigger('mouseup', { force: true });
        cy.wait(500);  // Upuszczamy element
    }
}

export default DragAndDrobPage;
