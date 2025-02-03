const columnA = "#column-a";
const columnB = "#column-b";

class DragAndDrobPage {
  moveColumnAToColumnB() {
    const dataTransfer = new DataTransfer();

    //A -> B
    cy.get("#column-a header").should("contain", "A");
    cy.get("#column-b header").should("contain", "B");
    cy.get(columnA).trigger("dragstart", { dataTransfer });
    cy.get(columnA).trigger("dragend", { dataTransfer });
    cy.get(columnB).trigger("drop", { dataTransfer });
    cy.get("#column-a header").should("not.contain", "A");
    cy.get("#column-a header").should("contain", "B");
    
    //B -> A
    cy.get("#column-a header").should("contain", "B");
    cy.get("#column-b header").should("contain", "A");
    cy.get(columnB).trigger("dragstart", {dataTransfer});
    cy.get(columnB).trigger("dragend", { dataTransfer});
    cy.get(columnA).trigger("drop", { dataTransfer });
    cy.get("#column-a header").should("contain", "A");
    cy.get("column-b header").shoul
    
  }
}

export default DragAndDrobPage;
