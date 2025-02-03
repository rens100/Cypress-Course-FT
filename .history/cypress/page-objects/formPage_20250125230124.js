const firstname = "#fname";
const lastname = "#lname";
const submit = "#formSubmitButton";

class FormPage {
  fillFieldsWithValidData() {
    cy.get(firstname).clear();
    cy.get(firstname).type("Renka").should("have.value", "Renka");
    cy.get(lastname).clear();
    cy.get(lastname).type("S").should("have.value", "S");
    cy.once("window:alert", (str) => expect(str).to.equal("success"));
    cy.get(submit).click();
  }

    doNotFillAllFields() {
      cy.get(firstname).clear();
      cy.get(lastname).clear().type("S").should("have.value", "S");
 // Stwórz stub dla window.alert
    const alertStub = cy.stub();
    cy.on('window:alert', alertStub); // Przechwytuj alerty i przekieruj je do stubu
 
 // Kliknij przycisk, który wywołuje alert
 cy.get('button[type="submit"]').click();
 
 // Sprawdź, czy alert został wywołany z odpowiednią treścią
 expect(alertStub).to.have.been.calledWith('Wypełnij to pole');
      cy.get(submit).click();  //     cy.once("window:alert", (str) => expect(str).to.equal("Wypełnij to pole"));

    }
}

export default FormPage;
