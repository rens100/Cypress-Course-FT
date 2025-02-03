const hovers = '.figure';
const user = '.figcaption';


class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should('be.visible');
        cy.get(user).first().should('be.hidden').invoke('show').should('be.visible');
    }

}

export default HoversPage;

