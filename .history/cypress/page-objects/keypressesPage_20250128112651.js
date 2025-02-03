const input = "#target";
const result = "#keyPressResult";

class KeypressesPage {
  checkPressButton() {
    const Enter = "{enter}";
    cy.get(input).type("{enter}");
    cy.get(result).should("have.text", "You entered: ENTER");
    cy.get(input).type("{esc}");
    cy.get(result).should("have.text", "You entered: ESCAPE");
    cy.get(input).type("{space}");
    cy.get(result).should("have.text", "You entered: SPACE");
    cy.get(input).type("{shift}");
    cy.get(result).should("have.text", "You entered: SPACE");




  }

}

export default KeypressesPage;
