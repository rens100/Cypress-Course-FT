const hovers = '.figure';

class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should().bevisib
    }

}

export default HoversPage;

