import { faker } from '@faker-js/faker';

const datepicker = '#start';

class DatePicker {

    setRandomDate() {
        cy.get(datepicker).clear().type(faker.date.future().toISOString().slice(0, 10));
    }
}




