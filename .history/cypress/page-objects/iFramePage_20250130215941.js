const button1 = '#simpleButton1';
const button2 = '#simpleButton2';
const iframe = 'iframe';
const resultButton = '#whichButtonIsClickedMessage';

class IFramePage {
    checkIsButtonVisibleAndHasCorrectTextAfterClick() {
        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then((body) => {
            cy.wrap(body).find(button1).click();
            cy.wrap(body).find(resultButton).should('have.text', 'Button 1 was clicked!');
        });
    }
}
export default IFramePage;

