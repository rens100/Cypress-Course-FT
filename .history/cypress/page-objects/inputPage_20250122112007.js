const input =  'input[type="number"]'

class InputPage{

    typeNumberIntoField(){
        cy.get(input).clear()
        cy.get(input).type('123').should('have.value','123')

    }

    typeLetterIntoField(){
        cy.get(input).clear()
        cy.get(input).type('abc').should('not.have.value','abc')
    }
}
expect default InputPage;
