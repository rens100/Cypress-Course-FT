const hovers = '.figure';
const user = '.figcaption';


class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should('be.visible').click();
        cy.get(user).first().click();
        cy.get(figcaption).first().should('be.hidden').invoke('show').should('be.visible');





    }

}

export default HoversPage;

