const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnaToColumnB() {

        cy.get('#column-a')  
            .trigger('mousedown', { which: 1 }) 
        cy.get('#column-a')  
            .trigger('mousemove', { clientX: 200, clientY: 20 }) 
        cy.wait(1500);
        cy.get('#column-b')
            .trigger('mouseup', { force: true });
    }
}

export default DragAndDrobPage;
