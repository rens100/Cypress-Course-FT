describe  ("should automate the websites", function () {
    this.beforeEach() => {
        cy.clearLocalStorage();
        cy.visit("https://www.example.com/");
    }


});
