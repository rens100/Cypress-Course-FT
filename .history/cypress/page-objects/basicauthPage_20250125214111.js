const name = 'input[id="ba_username"]';
const password = 'input[id="ba_password"]';
const button = 'button[onclick="onLoginSubmit()"]';

class BasisauthPage {
  checkPositiveCase() {
    cy.get(name).clear();
    cy.get(name).type("admin").should("have.value", "admin");
    cy.get(password).clear();
    cy.get(password).type("admin").should("have.value", "admin");
    cy.get(button).click();
  }
  checkNegativeCase() {
    cy.get(name).clear();
    cy.get(name).type("test").should("have.value", "test");
    cy.get(password).clear();
    cy.get(password).type("test").should("have.value", "test");
    


}
export default BasisauthPage;
