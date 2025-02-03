const checkbox = 'input[type="checkbox"]';

class CheckboxPage{

    checkFirstCheckbox(){
        cy.get(checkbox).first().check();
        cy.get(checkbox).first().should('be.checked');
        cy.get(checkbox).first().uncheck();
        cy.get(checkbox).first().should('not.be.checked');
            );

    checkSecondCheckbox(){
        cy.get(checkbox).l

    }
    }
}