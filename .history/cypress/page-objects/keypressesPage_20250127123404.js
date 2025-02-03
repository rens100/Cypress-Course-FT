const input = "#target";
const result = "#keyPressResult";

class KeypressesPage {
  checkPressButton() {
    const Enter = "{enter}";
    cy.get(input).type("{enter}");
    cy.get(result).should("have.text", "You entered: ENTER");
  }
  //WYBÓR RANDOMOWYCH KLAWISZY Z TABLICY:
  checkRandomButton() {
    const keys = [
      "{ENTER}",
      "{TAB}",
      "{ESCAPE}",
      "{ALT}",
      "{BACK_SPACE}",
      "{SHIFT}",
      "{CONTROL}",
      "{SPACE}",
      "{R}",
      "{E}",
      "{N}",
      "{K}",
      "{A}"
    ];

    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    cy.get(input).type(`Test${randomKey}`);
    const resultKey = `Test${randomKey}`;
    cy.get(result).should("have.text", `You entered: ${resultKey}`);
    }
}

export default KeypressesPage;
