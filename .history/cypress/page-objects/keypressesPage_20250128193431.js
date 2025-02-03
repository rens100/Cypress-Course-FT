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
    cy.get(input).type("a");
    cy.get(result).should("have.text", "You entered: A");
    cy.get(input).type("1");
    cy.get(result).should("have.text", "You entered: 1");
  }
  //miałam tu problem ze zrobieniem optymalnego testu, łatwo jest przetestować kazdy znak oddzielnie, natomaist chciałam zrobić jeden test, który będzie testował wszystko. 
  // Próbowałam  zrobić tablicę danych , ale  np. tab nie jest w kodzie jako znak specjalny tak jak np.enter
  // Moja metoda z tablica wyglada tak:
  checkRandomButton() {
    const keys = [
        "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "1", "2", "3", 
        "{enter}", "{tab}", "{esc}", "{space}", "{backspace}", "{shift}", "{ctrl}", "{alt}" // Specjalne klawisze
      ];
    const randomKeys = keys[Math.floor(Math.random() * keys.length)];
    cy.get(input).type(randomKeys);
    cy.get(result).should("have.text", `You entered: ${randomKeys}`);
      }

      // np dla alta : Timed out retrying after 4000ms: expected '<p#keyPressResult>' to have text 'You entered: {alt}', but the text was 'You entered: ALT'
      //ale dla entera juz dziala poprawnie. 

}

export default KeypressesPage;
