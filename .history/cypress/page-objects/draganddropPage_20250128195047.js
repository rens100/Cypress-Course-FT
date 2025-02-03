const columnA = '#column-a';
const columnB = '#column-b';

moveColumnaToColumnB() {
    cy.get(columnA).drag({ duration: 1000 }).drop(columnB);
}
     // This line is not working, it should move the column from A to B.

export default 
