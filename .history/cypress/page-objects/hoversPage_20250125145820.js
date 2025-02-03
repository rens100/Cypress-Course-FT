const hovers = '.figure';

class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should().bevisible;
        
    }

}

export default HoversPage;

