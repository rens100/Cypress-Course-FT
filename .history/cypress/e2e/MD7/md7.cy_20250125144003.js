import InputPage from "../../page-objects/inputPage";
import HomePage from "../../page-objects/homePage";
import CheckboxPage from "../../page-objects/checkboxPage";
import HoversPage from "../../page-objects/hoversPage";



describe  ("should automate the websites", function () {
    beforeEach(() => {
        cy.clearLocalStorage();
        cy.visit("https://simpletestsite.fabrykatestow.pl/");
    })
    
    it ('test checkboxTab',() =>{

        const homePage = new HomePage();
        homePage.visitPage();
        homePage.clickCheckboxTab();

        const checkboxPage = new CheckboxPage();
        checkboxPage.checkFirstCheckbox();
        checkboxPage.checkSecondCheckbox();
    })

    it ('test inputTab',() =>{

        const homePage = new HomePage();
        homePage.visitPage();
        homePage.clickInputsTab();

        const inputPage = new InputPage();
        inputPage.typeNumberIntoField();
        inputPage.typeLetterIntoField();

    })

    it ()


})
