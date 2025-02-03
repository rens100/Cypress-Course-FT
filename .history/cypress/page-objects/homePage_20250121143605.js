import Urls from "./urls";

const inputsHeader = '#inputs-header'


class HomePage {

    clickCheckboxHeader ()
    
    clickInputsHeader (){
        cy.get(inputsHeader).click();
    }

}