const status200 = '#200siteAnchor';
const status305 = '#305siteAnchor';
const status404 = '#404siteAnchor';
const status500 = '#500siteAnchor';
const url200 = 'https://httpstat.us/200';
const url305 = 'https://httpstat.us/305';
const url404 = 'https://httpstat.us/404';
const url500 = 'https://httpstat.us/500';

class StatusCodesPage {

    checkIsStatusVisible() {
    cy.get(status200).should('be.visible');
    cy.get(status305).should('be.visible');
    cy.get(status404).should('be.visible');
    cy.get(status500).should('be.visible');
    }
    // cy.wait(2000);
    checkIsLinkStatusCorrect() {
        cy.request(url200).then(response) => {
            const body = response.body
            if (body.includes('200 OK')) {
                cy.log('Status 200 OK');
            } else {
                cy.log('Status not 200 OK');
            }

        }
    / cy.go('back');

    // cy.get(status305).should('be.visible').click();
    // cy.get(status404).should('be.visible').click();
    // cy.get(status500).should('be.visible').click();
    }
}

export default StatusCodesPage;