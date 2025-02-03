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
    
    // Nasłuchujemy na alert
    cy.on('window:alert', alertStub);
    
    // Wyczyść pole firstname i wpisz tylko jedną literę w lastname
    cy.get(firstname).clear();
    cy.get(lastname).clear().type('S');

    // Kliknij przycisk submit
    cy.get(submit).click();
    cy.wait(1000); 
    cy.get(firstname).should.equal('.should('have.prop', 'validationMessage', 'Please fill out this field.');


}

export default FormPage;
