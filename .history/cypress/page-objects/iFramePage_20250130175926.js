const button1 = '#simpleButton1';
const button2 = '#simpleButton2';

class IFramePage {

    checkButton1IsVisible() {
        cy.get(button1).should('be.visible');
    }
}
