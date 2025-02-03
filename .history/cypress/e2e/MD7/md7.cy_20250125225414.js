import InputPage from "../../page-objects/inputPage";
import HomePage from "../../page-objects/homePage";
import CheckboxPage from "../../page-objects/checkboxPage";
import HoversPage from "../../page-objects/hoversPage";
import BasisauthPage from "../../page-objects/basicauthPage";
import FormPage from "../../page-objects/formPage";

describe("should automate the websites", function () {
  beforeEach(() => {
    cy.clearLocalStorage();
    cy.visit("https://simpletestsite.fabrykatestow.pl/");
  });

  it("test checkboxTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickCheckboxTab();

    const checkboxPage = new CheckboxPage();
    checkboxPage.checkFirstCheckbox();
    checkboxPage.checkSecondCheckbox();
  });

  it("test inputTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickInputsTab();

    const inputPage = new InputPage();
    inputPage.typeNumberIntoField();
    inputPage.typeLetterIntoField();
  });

  it("test hoversTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickHoversTab();

    const hoversPage = new HoversPage();
    hoversPage.hoversFirstFigure();
  });

  it("test basisauthTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickBasicauthTab();

    const basisauthPage = new BasisauthPage();
    basisauthPage.checkNegativeCase();
    basisauthPage.checkPositiveCase();
  });

  it("test formTab", () => {
    const homePage = new HomePage();
    homePage.visitPage();
    homePage.clickFormTab();

    const formPage = new FormPage();
    formPage.fillFieldsWithValidData();
    f

  });
});
