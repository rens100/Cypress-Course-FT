import InputPage from "../../page-objects/inputPage";
import HomePage
 from "../../page-objects/homePage";


describe  ("should automate the websites", function () {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("https://simpletestsite.fabrykatestow.pl/");
    })
    it ('test inputTab',() =>{

    })

});
