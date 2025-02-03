import { faker } from '@faker-js/faker';

const datepicker = '#start';

class DatePickerPage {

    setRandomDate() {
        const Year
        cy.get(datepicker).clear().type(faker.date.future().toISOString().slice(0, 10));
    }
}
export default DatePickerPage;



