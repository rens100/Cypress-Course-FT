
describe('Moduł5: ', () => {

    it('Wejdź na stronę fabrykatestów.pl znajdź kurs Cypress i przejdź do kursu klikając w przycisk "POKAŻ CZEGO SIĘ NAUCZĘ", przescrolluj do sekcji "Kto nauczy Cię testów automatycznych?", zrób screenshot i zapisz na dysku ',() => {
        cy.visit('https://fabrykatestow.pl/')
        cy.get('a[href="https://fabrykatestow.pl/cypress"]')
        cy.get('span').contains("POKAŻ CZEGO SIĘ NAUCZĘ").click();
        cy.get('h1').contains("Kto nauczy Cię testów automatycznych?").scrollIntoView().should('be.visible').screenshot('screenshot')
    })


})
