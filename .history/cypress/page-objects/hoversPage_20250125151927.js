const hovers = '.figure';
const user = 'a[href="/users/1"]';


class HoversPage {
    hoversFirstFigure() {
        cy.get(hovers).first().trigger('mouseover').should('be.visible').click();
        cy.get(user).



    }

}

export default HoversPage;

