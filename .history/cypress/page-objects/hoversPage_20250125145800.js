const hovers = '.figure';

class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').shouldbe
    }

}

export default HoversPage;

