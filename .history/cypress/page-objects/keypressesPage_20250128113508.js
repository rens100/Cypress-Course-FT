const input = "#target";
const result = "#keyPressResult";

class KeypressesPage {
  checkPressButton() {
    const Enter = "{enter}";
    cy.get(input).type("{enter}");
    cy.get(result).should("have.text", "You entered: ENTER");
    cy.get(input).type("{esc}");
    cy.get(result).should("have.text", "You entered: ESCAPE");
    cy.get(input).type("{shift}");
    cy.get(result).should("have.text", "You entered: SHIFT");
    cy.get(input).type("{shift}");
    cy.get(input).type("a");
    cy.get(result).should("have.text", "You entered: A");




  }

}

export default KeypressesPage;
