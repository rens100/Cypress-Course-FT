const input =  'input[type="number"]'

class InputPage{

    typeNumberIntoField(){
        cy.get(input).type('123').should('have.value','123')
    }
}
