// import { faker } from '@faker-js/faker';

const datepicker = '#start';

class DatePickerPage {

    setRandomDate() {

        const year = 2020;

        let randomDay;
        let randomMonth;
        let formatedDate;
    
        // Pętla do momentu, gdy randomDay będzie równy 31
        do {
            randomMonth = Math.floor(Math.random() * 12);  // Losowy miesiąc
            const daysInMonth = new Date(year, randomMonth + 1, 0).getDate();  // Liczba dni w miesiącu
            randomDay = Math.floor(Math.random() * daysInMonth) + 1;  // Losowy dzień
            const randomDate = new Date(year, randomMonth, randomDay);  // Tworzymy datę
            formatedDate = randomDate.toISOString().slice(0, 10);  // Formatowanie daty na 'YYYY-MM-DD'
        } while (randomDay !== 31);  // Pętla będzie kontynuować, dopóki dzień nie będzie równy 31
    
        // Po znalezieniu daty z dniem 31, wpisujemy ją do pola daty
        cy.get(datepicker).clear().type(formatedDate);  // Wpisujemy datę do pola
    
        // const year = 2020;
        // const randomMonth = Math.floor(Math.random() * 12);
        // const daysInMonth = new Date(year, randomMonth + 1, 0).getDate();
        // const randomDay = Math.floor(Math.random() * daysInMonth) +1;
        // const randomDate = new Date(year, randomMonth, randomDay);
        // const formatedDate = randomDate.toISOString().slice(0,10);

        // cy.get(datepicker).clear().type(formatedDate);
    }
}
export default DatePickerPage;



