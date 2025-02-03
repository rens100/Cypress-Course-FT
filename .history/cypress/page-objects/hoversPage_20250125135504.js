const hovers = '.figure';

class HoversPage {
    hoverFirstFigure() {
        cy.get(hovers).first().trigger('mouseover');
        
    }
}
