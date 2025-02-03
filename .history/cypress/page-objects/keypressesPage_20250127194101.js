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
    "{enter}"       // Zmieniamy na {enter}
    // "{tab}",         // Zmieniamy na {tab}
    // "{esc}",         // Zmieniamy na {esc}
    // "{alt}",         // Zmieniamy na {alt}
    // "{backspace}",   // Zmieniamy na {backspace}
    // "{shift}",       // Zmieniamy na {shift}
    // "CONTROL",
    // "{space}"
    //   "R",
    //   "E",
    //   "N",
    //   "K",
    //   "A"
    ];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    cy.get(input).type(randomKey);
    // const resultKey = `${randomKey}`;
    cy.get(result).should("have.text", `You entered: ${rand}`);
    }
}

export default KeypressesPage;
