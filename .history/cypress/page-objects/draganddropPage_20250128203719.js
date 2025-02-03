const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnaToColumnB() {
          

    cy.get('[data-cy=draggable]')
        .trigger('mousedown', { which: 1, pageX: 600, pageY: 100 })
        .trigger('mousemove', { which: 1, pageX: 600, pageY: 600 })
        .trigger('mouseup')

        // cy.get('#column-a')  
        //     .trigger('mousedown', { which: 0 }) 
        // cy.get('#column-a')  
        //     .trigger('mousemove', { clientX: 10000, clientY: 0 }) 
        // cy.wait(1500);
        // cy.get('#column-b')
        //     .trigger('mouseup', { force: true });
    }
}

export default DragAndDrobPage;
