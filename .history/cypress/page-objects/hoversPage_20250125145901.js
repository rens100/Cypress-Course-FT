const hovers = '.figure';

class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should('be.visi')

    }

}

export default HoversPage;

