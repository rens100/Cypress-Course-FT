const checkbox = 'input[type="checkbox"]';

class CheckboxPage{

    checkFirstCheckbox(){
        cy.get(checkbox).first().check();
        cy
    }
}