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
      cy.get(firstname).clear().type("S").should("have.value", "S");
      cy.get(submit).click();
  //     cy.once("window:alert", (str) => expect(str).to.equal("Wypełnij to pole"));

    }
}

export default FormPage;
