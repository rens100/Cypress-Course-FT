const select = "#dropdown";

class DropdownListPage {
  selectOption() {

    cy.get('select').select('Option 1')
    cy.get('select').find('option:selected').should('have.text', 'Option 1'); // Sprawdzamy tekst wybranej opcji
    cy.get('sele// cy.get(dropdownList + " option:selected").should("have.text", "Option 2");
  }
}

export default DropdownListPage;
