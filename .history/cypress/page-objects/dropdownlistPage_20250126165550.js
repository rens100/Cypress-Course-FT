const dropdownList = '#dropdown';
const option1 =  'option'

class DropdownListPage {
    
    selectOption1 () {
        cy.get(dropdownList).select('Option 1').click().should
    }

    }
}