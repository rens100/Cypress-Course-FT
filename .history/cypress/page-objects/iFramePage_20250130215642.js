const button1 = '#simpleButton1';
const button2 = '#simpleButton2';
const iframe = 'iframe';
const resultButton = '#whichButtonIsClickedMessage';

class IFramePage {
    checkButtonIsVisible() {
        const iframeTest = cy.get(iframe)
        .its('0.contentDocument.body')
        .should('be.visible')
        .then((body) => {  // Przekazujemy 'body' do funkcji .then()
            // Opakowujemy body w Cypressowy obiekt, żeby móc manipulować DOM-em
            cy.wrap(body).find(button1).click();  // Klikamy przycisk button1

            // Sprawdzamy, czy po kliknięciu pojawił się odpowiedni tekst
            cy.wrap(body).find(resultButton).should('have.text', 'Button 1 was clicked!');
        });
        // .then(cy.wrap);

        // iframeTest.find(button1).click().then(() => {
        //     ('have.text', 'Button 1 was clicked!')
            // cy.wrap(body).find(resultButton).should('have.text', 'Button 1 was clicked!');
        
    }
}
export default IFramePage;

