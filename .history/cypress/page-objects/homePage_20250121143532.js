import Urls from "./urls";

const inputsHeader = '#inputs-header'


class HomePage {

    
    
    clickInputsHeader (){
        cy.get(inputsHeader).click();
    }

}