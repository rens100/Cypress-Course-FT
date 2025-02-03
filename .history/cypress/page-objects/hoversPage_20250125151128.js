const hovers = '.figure';
const 
class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should('be.visible').click();



    }

}

export default HoversPage;

