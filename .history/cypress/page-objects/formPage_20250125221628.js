const firstname  =  '#fname';
const lastname =  '#lname';
const submit = '#formSubmitButton';

class FormPage {
    typeFirstname(name) {
        cy.get(firstname).clear();
        cy.get(firstname).type(name);
    }

}