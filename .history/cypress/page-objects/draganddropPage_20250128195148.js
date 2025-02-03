const columnA = '#column-a';
const columnB = '#column-b';

class drag

moveColumnaToColumnB() {
    cy.get(columnA).drag({ duration: 1000 }).drop(columnB);
}

export default fu
