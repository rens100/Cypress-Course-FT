import Urls from "./urls";

const checkboxHeader = '#checkbox-header'
const datepickerHeader = '#datepicker-header'
const hoversHeader = '#hovers-header'
const inputsHeader = '#inputs-header'
const basicauth-header


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