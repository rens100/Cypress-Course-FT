import Urls from "./urls";

const checkboxHeader = '#id="checkbox-header"';


const inputsHeader = '#inputs-header'


class HomePage {

    clickCheckboxHeader (){}
    
    clickInputsHeader (){
        cy.get(inputsHeader).click();
    }

}