const select = "#dropdown";

class DropdownListPage {
  selectOption() {

    cy.get('select').select('Option 1')]
    cy.get('select').select('Option 2').should('have.text', 'Option 2');
    cy.get(dropdownList + " option:selected").should("have.text", "Option 2");
  }
}

export default DropdownListPage;
