const firstname  =  '#fname';
const lastname =  '#lname';
const submit = '#formSubmitButton';

class FormPage {
    fillFieldsWithValidData() {
        cy.get(firstname).clear();
        cy.get(firstname).type("Renka").should("have.value", "Renka");
        cy.get(lastname).clear();
        cy.get(lastname).type("S").should("have.value", "S");
        cy.get(submit).click().then()

    }

    ]

}