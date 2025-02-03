const dropdownList = '#dropdown';

class DropdownListPage {
    selectOption() {
        cy.get(dropdownList).select(option);
    }
}