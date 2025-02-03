const select = "#dropdown";
const option1 = 'option[value="1"]';
const option2 = 'option[value="2"]';

class DropdownListPage {
  selectOption() {

    cy.get('select').select('option1') // Select the 'user-1' option


    // cy.get(dropdownList + " option:selected").should("have.text", "Option 2");
  }
}

export default DropdownListPage;
