const dropdownList = '#dropdown';

class DropdownListPage {
    
    selectOption1 () {
        cy.get(dropdownList).select('Option 1');
    }

    }
}