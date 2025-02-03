const select = "#dropdown";

class DropdownListPage {
  selectOption() {

    cy.get('select').select('Option 1') // Select the 'user-1' option


    // cy.get(dropdownList + " option:selected").should("have.text", "Option 2");
  }
}

export default DropdownListPage;
