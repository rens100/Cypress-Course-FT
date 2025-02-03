import Urls from "./urls";

const checkboxHeader = '#checkbox-header';
const datepickerHeader = '#date'

const inputsHeader = '#inputs-header'


class HomePage {

    clickCheckboxHeader (){}
    
    clickInputsHeader (){
        cy.get(inputsHeader).click();
    }

}