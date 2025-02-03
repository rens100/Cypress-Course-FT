const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnaToColumnB() {
          
              // Przeciąganie elementu
        cy.get('#column-a')  // Element, który przeciągasz
            .trigger('mousedown', { which: 1 }) // Kliknięcie lewym przyciskiem myszy  
        cy.get('#column-a')  // Element, gdzie upuszczasz
            .trigger('mousemove', { clientX: 300, clientY: 400 })  // Przemieszczamy kursor
        cy.wait(500);      // Upuszczanie elementu
        cy.get('#column-a')
            .trigger('mouseup', { force: true });
        cy.wait(500);  // Upuszczamy element
    }
}

export default DragAndDrobPage;
