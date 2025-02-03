const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnaToColumnB() {
          
              // Przeciąganie elementu
        cy.get('#column-a')  // Element, który przeciągasz
            .trigger('mousedown', { which: 1 }) // Kliknięcie lewym przyciskiem myszy  
              // Symulowanie ruchu myszy do miejsca docelowego
        cy.get('.drop-target')  // Element, gdzie upuszczasz
            .trigger('mousemove', { clientX: 300, clientY: 400 })  // Przemieszczamy kursor
              // Upuszczanie elementu
        cy.get('.drop-target')
                .trigger('mouseup', { force: true });  // Upuszczamy element
            });
          });




    cy.get(columnA).drag({ duration: 1000 }).drop(columnB)
    }
}

export default DragAndDrobPage;
