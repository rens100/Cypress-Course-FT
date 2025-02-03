const dropdownList = '#dropdown';

class DropdownListPage {
    selectOption(option) {
        cy.get(dropdownList).select(option);
    }
}