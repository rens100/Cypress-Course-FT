import { faker } from '@faker-js/faker';

const datepicker = '#start';

class DatePickerPage {

    setRandomDate() {
        const Year = 2020;
        const randomMonth = Math.floor(Math.random() * 12);
        const randomDay = Math.floor(Math.random() * 28) +1;
        const randomDate = new Date(year, randomMonth, randomDay);
        const formatedDate = new Date




        cy.get(datepicker).clear().type(faker.date.future().toISOString().slice(0, 10));
    }
}
export default DatePickerPage;



