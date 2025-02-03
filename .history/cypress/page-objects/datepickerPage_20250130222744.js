// import { faker } from '@faker-js/faker';

const datepicker = '#start';

class DatePickerPage {

    setRandomDate() {
        const Year = 2020;
        const randomMonth = Math.floor(Math.random() * 12);
        const randomDay = Math.floor(Math.random() * 28) +1;
        const randomDate = new Date(year, randomMonth, randomDay);
        const formatedDate = randomDate.toISOString().slice(0,10);




        cy.get(datepicker).clear().type(formatedDate
    }
}
export default DatePickerPage;



