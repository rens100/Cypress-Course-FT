const select = "#dropdown";
const option1 = 'option[value="1"]';
const option2 = 'option[value="2"]';

class DropdownListPage {
  selectOption() {

    cy.get('select')
    .select('option1', { force: true })
    .invoke('val')
    .should('eq', 'okra')
    // cy.get(dropdownList).select(option2);
    // cy.get(dropdownList + " option:selected").should("have.text", "Option 2");
  }
}

export default DropdownListPage;
