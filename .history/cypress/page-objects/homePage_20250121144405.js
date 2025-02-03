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


class HomePage {

    clickCheckboxHeader (){
        cy.get(checkboxHeader).click();
    }

    clickDatepickerHeader (){
        cy.get(datepickerHeader).click();
    }
    clickHoversHeader (){
        cy.get(hoversHeader).click();
    }
    clickInputsHeader (){
        cy.get(inputsHeader).click();
    }

}