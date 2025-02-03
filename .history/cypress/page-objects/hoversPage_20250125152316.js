const hovers = '.figure';
const user = '.


class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should('be.visible').click();
        cy.get(user).first().click();




    }

}

export default HoversPage;

