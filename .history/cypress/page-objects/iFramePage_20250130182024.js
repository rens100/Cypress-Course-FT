const button1 = '#simpleButton1';
const button2 = '#simpleButton2';
const iframe = 'iframe';

class IFramePage {
    checkButtonIsVisible() {
        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body').should('be.')


        cy.get(button1).should('be.visible');
        cy.get(button2).should('be.visible');
    }
}
export default IFramePage;

