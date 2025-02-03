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
    
  }

  doNotFillAllFields() {
    // Tworzymy stub dla alertu
    const alertStub = cy.stub();
    
    cy.on('window:alert', alertStub);
    
    cy.get(firstname).clear();
    cy.get(lastname).clear().type('S');

    cy.get(submit).click();
    cy.wait(1000); 
    cy.get(firstname).should('have.prop', 'validationMessage', 'Wypełnij to pole.');
  }
}

export default FormPage;
