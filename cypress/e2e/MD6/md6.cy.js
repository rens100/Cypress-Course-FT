// test metody HTTP : put i delete + asercje oraz  put i get

const url = "https://jsonplaceholder.typicode.com/posts/1";

describe("my first API tests with cy", () => {
  it("should test PUT and DELETE methods", function () {
    cy.request(url).then((response) => {
      const body = JSON.stringify(response.body);
      expect(response.body).to.have.property("title");
      cy.log(body);
    });
    cy.request({
      method: "PUT",
      url: url,
      body: JSON.stringify({
        title: "method is testing",
        body: "putputput",
        userId: 1,
      }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {
      expect(response.body).to.be.not.empty;
      expect(response.body).to.have.property("title", "method is testing");
      const body = JSON.stringify(response.body);
      cy.log(body);
    });
    cy.request({
      method: "DELETE",
      url: url,
      headers: { "Content-type": "application/json" },
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.be.empty;
      const body = JSON.stringify(response.body);
      cy.log(body);
    });
  });

  it("should test PUT and GET methods", function () {
    cy.request(url).then((response) => {
      const body = JSON.stringify(response.body);
      expect(response.body).to.have.property("title");
      cy.log(body);
    });
    cy.request({
      method: "PUT",
      url: url,
      body: JSON.stringify({
        title: "method PUT/GET is testing",
        body: "putputput",
        userId: 1,
      }),
      headers: { "Content-type": "application/json" },
    }).then((response) => {
      expect(response.body).to.be.not.empty;
      expect(response.body).to.have.property(
        "title",
        "method PUT/GET is testing"
      );
      const body = JSON.stringify(response.body);
      cy.log(body);
      cy.request({
        method: "GET",
        url: url,
        headers: { "Content-type": "application/json" },
      });
      cy.log(body);
      expect(response.body).to.have.property(
        "title",
        "method PUT/GET is testing"
      );
    });
  });
});
