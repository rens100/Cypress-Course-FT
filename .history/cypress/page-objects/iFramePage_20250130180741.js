const button1 = '#simpleButton1';
const button2 = '#simpleButton2';

class IFramePage {
    checkButtonIsVisible() {
        const iframeTest = cy.get()


        cy.get(button1).should('be.visible');
        cy.get(button2).should('be.visible');
    }
}
export default IFramePage;

