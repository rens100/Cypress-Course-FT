const status200 = "#200siteAnchor";
const status305 = "#305siteAnchor";
const status404 = "#404siteAnchor";
const status500 = "#500siteAnchor";
const url200 = "https://httpstat.us/200";
const url305 = "https://httpstat.us/305";
const url404 = "https://httpstat.us/404";
const url500 = "https://httpstat.us/500";

class StatusCodesPage {
  checkIsStatusVisible() {
    cy.get(status200).should("be.visible");
    cy.get(status305).should("be.visible");
    cy.get(status404).should("be.visible");
    cy.get(status500).should("be.visible");
  }
  // cy.wait(2000);
  checkIsLinkStatusCorrect() {
    cy.request(url200).then((response) => {
      const body = response.body;
      if (body.includes("200 OK")) {
        cy.log("Status 200 OK");
      } else {
        cy.log("Status not 200 OK");
      }
    });
    cy.go("back");
    cy.request(url305).then((response) => {
      const body = response.body;
      if (body.includes("305 Use Proxy")) {
        cy.log("Status 305 Use Proxy");
      } else {
        cy.log("Status not 305 Use Proxy");
      }
    });
    cy.go("back");
    cy.request(url404).then((response) => {
        const body = response.body;
      if (body.includes("404 Not Found")) {
        cy.log("Status 404 Not Found");
      } else {
        cy.log("Status not 404 Not Found");
    }
  })
  cy.go("back");
  
  }
}

export default StatusCodesPage;
