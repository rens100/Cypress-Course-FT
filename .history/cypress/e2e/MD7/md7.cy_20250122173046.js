import InputPage from "../../page-objects/inputPage";
import HomePage from "../../page-objects/homePage";
imp


describe  ("should automate the websites", function () {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("https://simpletestsite.fabrykatestow.pl/");
    })
    it ('test inputTab',() =>{

    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickInputsTab();

    const inputPage = new InputPage();
    inputPage.typeNumberIntoField();
    inputPage.typeLetterIntoField();

    })

});
