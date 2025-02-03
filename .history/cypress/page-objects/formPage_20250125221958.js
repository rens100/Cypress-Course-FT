const firstname  =  '#fname';
const lastname =  '#lname';
const submit = '#formSubmitButton';

class FormPage {
    fillFirstnamefield() {
        cy.get(firstname).clear();
        cy.get(firstname).type("Renka").should("have.value", "Renka");
    }
    fillLastnamefield() {
        cy.get(lastname).clear();
        cy.get(lastname).type("Smith").should("have.value", "Smith");
    }

    ]

}