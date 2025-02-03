const hovers = '.figure';
const user = 'figcaption'

class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should('be.visible').click();



    }

}

export default HoversPage;

