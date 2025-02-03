const input = "#target";
const result = "#keyPressResult";

class KeypressesPage {
  checkPressButton() {
    const Enter = "{enter}";
    cy.get(input).type("{enter}");
    cy.get(result).should("have.text", "You entered: ENTER");
    }
  //WYBÓR RANDOMOWYCH KLAWISZY Z TABLICY:
  checkRandomButton
(key: string, output: string) {
        cy.get(input).type(key);
        cy.get(result).should('have.text', 'You entered: '+ output);

    }
}

export default KeypressesPage;
