import Urls from "./urls";

const inputsHeader = '#inputs-header'


class HomePage {

    click
    
    clickInputsHeader (){
        cy.get(inputsHeader).click();
    }

}