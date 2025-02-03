import InputPage from "../../page-objects/inputPage";
import HomePage from "../../page-objects/homePage";
import CheckboxPage from "../../page-objects/checkboxPage";



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

    it ('test checkboxTab',() =>{

        
        const checkboxTab = new CheckboxPage();
        checkboxTab.checkFirstCheckbox();
        checkboxTab.checkSecondCheckbox();
});
