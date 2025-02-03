const hovers = '.figure';
const user = 'a'


class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should('be.visible').click();



    }

}

export default HoversPage;

