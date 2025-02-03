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
    "{enter}",       // Zmieniamy na {enter}
    "{tab}",         // Zmieniamy na {tab}
    "{esc}",         // Zmieniamy na {esc}
    "{alt}",         // Zmieniamy na {alt}
    "{backspace}",   // Zmieniamy na {backspace}
    "{shift}",       // Zmieniamy na {shift}
    "{ctrl}",        // Zmieniamy na {ctrl}
    "{space}", 
    //   "R",
    //   "E",
    //   "N",
    //   "K",
    //   "A"
    ];
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
    cy.get(input).type(`Test${randomKey}`);
    const resultKey = `Test${randomKey}`;
    cy.get(result).should("have.text", `You entered: ${resultKey}`);
    }
}

export default KeypressesPage;
