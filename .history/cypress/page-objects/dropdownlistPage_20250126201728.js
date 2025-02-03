const select = "#dropdown";
const option1 = 'option[value="1"]';
const option2 = 'option[value="2"]';

class DropdownListPage {
  selectOption() {
    cy.get(select).select();
    cy.get(dropdownList + " option:selected").should("have.text", "Option 1");
    // cy.get(dropdownList).select(option2);
    // cy.get(dropdownList + " option:selected").should("have.text", "Option 2");
  }
}

export default DropdownListPage;
