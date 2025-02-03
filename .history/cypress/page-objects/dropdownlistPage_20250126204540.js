const select = "#dropdown";

class DropdownListPage {
  selectOption() {

    cy.get('select').select('Option 1');
    cy.get('select').find('option:selected').should('have.text', 'Option 1'); 
    cy.get('select').select('Option 2');
    cy.get
  }
}

export default DropdownListPage;
