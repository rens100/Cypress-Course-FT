import Urls from "./urls";

const checkboxHeader = '#checkbox-header';
const datepickerHeader = '#datepicker-header';
const hoversHeader = '#hovers-header';
const inputsHeader = '#inputs-header'


class HomePage {

    clickCheckboxHeader (){}
    
    clickInputsHeader (){
        cy.get(inputsHeader).click();
    }

}