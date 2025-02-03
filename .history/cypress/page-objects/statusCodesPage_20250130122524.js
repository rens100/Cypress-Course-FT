const status200 = '#200siteAnchor';
const status305 = '#305siteAnchor';
const status404 = '#404siteAnchor';
const status500 = '#500siteAnchor';

class StatusCodesPage {

    checkIsStatusVisibleAndHasCorrectLink() {
    cy.get(status200).should('be.visible').click();
    cy.get(status305).should('be.visible').click();
    cy.get(status404).should('be.visible').click();
    cy.get(status500).should('be.visible').click();
    }
}

export default StatusCodesPage;