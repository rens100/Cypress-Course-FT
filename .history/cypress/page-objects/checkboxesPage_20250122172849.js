const checkbox = 'input[type="checkbox"]';

class CheckboxPage{

    checkFirstCheckbox(){
        cy.get(checkbox).first().check().should('be.checked');
        cy.get(checkbox).first().uncheck();
        cy.get(checkbox).first().should('not.be.checked');
            );

    checkSecondCheckbox(){
        cy.get(checkbox).last().check();
        cy.get(checkbox).last().should('be.checked');
        cy.get(checkbox).last().uncheck();
        cy.get(checkbox).last().should('not.be.checked');
        

    }
    }
}