
describe('Homework from Module5: ', () => {

    it('visit page and take a screenshot',() => {
        cy.visit('https://fabrykatestow.pl/')
        cy.get('a[href="https://fabrykatestow.pl/cypress"]')
        cy.get('span').contains("POKAŻ CZEGO SIĘ NAUCZĘ").click();
        cy.get('h1').contains("Kto nauczy Cię testów automatycznych?")
        .scrollIntoView()
        .should('be.visible')
        cy.wait()
        cy.screenshot('screenshot', {
            capture: 'viewport'
        })
    })


})
