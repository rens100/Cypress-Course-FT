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
      "{enter}",   // Użyj składni specjalnej dla klawisza ENTER
      "{tab}",
      "{esc}",
      "{alt}",
      "{backspace}",
      "{shift}",
      "{ctrl}",
      "{space}",
      "R",    // Zwykłe litery
      "E",
      "N",
      "K",
      "A"
    ];
  
    // Losujemy jeden z klawiszy
    const randomKey = keys[Math.floor(Math.random() * keys.length)];
  
    // Wpisujemy "Test" + losowy klawisz (np. {enter} lub litera)
    cy.get(input).type(`Test${randomKey}`);
    // Tworzymy zmienną z oczekiwanym tekstem, który ma być w elemencie 'result'
    const resultKey = `Test${randomKey}`;

    // Asercja: sprawdzamy, czy wynik zawiera odpowiedni tekst
    cy.get(result).should("have.text", `You entered: ${resultKey}`);
  }
}

export default KeypressesPage;
