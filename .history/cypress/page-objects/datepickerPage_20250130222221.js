import { faker } from '@faker-js/faker';

const datepicker = '#start';

class DatePickerPage {

    setRandomDate() {
        const Year = 2020;
        const randomMonth = Math.floor(Math.random() * 12);
        cy.get(datepicker).clear().type(faker.date.future().toISOString().slice(0, 10));
    }
}
export default DatePickerPage;



