import Urls from "./urls";

const checkboxHeader = '#checkbox-header'
const datepickerHeader = '#datepicker-header'
const hoversHeader = '#hovers-header'
const inputsHeader = '#inputs-header'
const basicauthHeader = '#basicauth-header'
const formHeader = '#form-header'
const dropdownlistHeader = '#dropdownlist-header'
const keypressesHeader = '#keypresses-header'
const draganddropHeader = '#draganddrop-header'
const addremoveelementsHeader = '#addremoveelements-header'
const statuscodesHeader = '#statuscodes-header'
const iframeHeader = '#iframe-header'


class HomePage {

    clickCheckboxTab (){
        cy.get(checkboxHeader).click();
    }

    clickDatepickerTab (){
        cy.get(datepickerHeader).click();
    }
    clickHoversTab (){
        cy.get(hoversHeader).click();
    }
    clickInputsTab (){
        cy.get(inputsHeader).click();
    }
    clickBasicauthHeader (){
        cy.get(basicauthHeader).click();
    }
    clickFormHeader (){
        cy.get(formHeader).click();
    }
    clickDropdownlistHeader (){
        cy.get(dropdownlistHeader).click();
    }
    clickKeypressesHeader (){
        cy.get(keypressesHeader).click();
    }
    clickDraganddropHeader (){
        cy.get(draganddropHeader).click();
    }
    clickAddremoveelementsHeader (){
        cy.get(addremoveelementsHeader).click();
    }
    clickStatuscodesHeader (){
        cy.get(statuscodesHeader).click();
    }
    clickIframeHeader (){
        cy.get(iframeHeader).click();
    }


}