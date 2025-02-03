const columnA = '#column-a';
const columnB = '#column-b';

class DragAndDrobPage {
    
    moveColumnaToColumnB() {

        cy.get('#column-a header').should('contain', 'A'); 
        cy.get('#column-b header').should('contain', 'B');  
    
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


cy.get('#column-a header').should('contain', 'A');  // Sprawdzenie, że nagłówek A jest w #column-a
cy.get('#column-b header').should('contain', 'B');  // Sprawdzenie, że nagłówek B jest w #column-b

// Klikamy na nagłówek w #column-a i zaczynamy przeciąganie
cy.get('#column-a header')  
    .trigger('mousedown', { which: 1 });  // Kliknięcie lewym przyciskiem myszy na nagłówku A

// Symulujemy ruch myszy do miejsca docelowego (nagłówek B)
cy.get('#column-b header')  
    .trigger('mousemove', { clientX: 200, clientY: 100 });  // Przemieszczamy kursor nad nagłówek w #column-b

// Upuszczamy nagłówek w #column-b
cy.get('#column-b header')
    .trigger('mouseup', { force: true });  // Upuszczamy nagłówek w miejscu B

// Sprawdzamy, czy nagłówki zostały zamienione miejscami
cy.get('#column-a header').should('contain', 'B');  // Nagłówek B powinien teraz być w #column-a
cy.get('#column-b header').should('contain', 'A');  // Nagłówek A powinien teraz być w #column-b
}