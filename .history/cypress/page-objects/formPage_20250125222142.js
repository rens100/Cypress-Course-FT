const firstname  =  '#fname';
const lastname =  '#lname';
const submit = '#formSubmitButton';

class FormPage {
    fillFieldsWithValid() {
        cy.get(firstname).clear();
        cy.get(firstname).type("Renka").should("have.value", "Renka");
    }
    fillLastnamefield() {
        cy.get(lastname).clear();
        cy.get(lastname).type("S").should("have.value", "S");

    }

    ]

}