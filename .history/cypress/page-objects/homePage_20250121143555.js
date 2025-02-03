import Urls from "./urls";

const inputsHeader = '#inputs-header'


class HomePage {

    clickCheckbox
    
    clickInputsHeader (){
        cy.get(inputsHeader).click();
    }

}