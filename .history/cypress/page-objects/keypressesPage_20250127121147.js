const input = '#target';
const result = '#keyPressResult';

class KeypressesPage {
    checkPressButton() {
        const Enter = '{enter}';
        cy.get(input).type('{enter}');
        cy.get(result).should('have.text', 'You entered: ENTER');
    }
        checkRandomButton() {
            // Tworzymy tablicę możliwych klawiszy
            const keys = ['{enter}', '{tab}', '{esc}', {backspace}, {shift}, {ctrl}, {s}];  // Możesz dodać więcej klawiszy, np. {backspace}, {shift}, {ctrl}, itp.
            
            // Losujemy klawisz
            const randomKey = keys[Math.floor(Math.random() * keys.length)];
    
            // Wpisujemy tekst + losowy klawisz
            cy.get(input).type(`Test${randomKey}`);
    
            // Sprawdzamy, czy wartość w polu "result" jest zgodna z oczekiwaniem
            cy.get(result).should('have.value', `You entered: Test${randomKey}`);
        }

}

export default KeypressesPage;  