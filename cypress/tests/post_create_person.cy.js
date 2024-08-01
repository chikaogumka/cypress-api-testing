describe('Create person api test', () => {
    it('it should create a new person, return a 200 status and set personID as an env variable', () => {
      cy.fixture('postCreatePerson.json').then((requestBody) => {

        cy.apiPostCreatePerson('https://person-api.sandbox.tuumplatform.com/api/v2/persons', requestBody)
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('personId');
            const personId = response.body.data.personId;
            Cypress.env('personId', personId);
          });
      });
    });
    it('it should not create person and return a 401 when an invalid post request is sent', () => {
      cy.fixture('postCreatePerson').then((requestBody) => {
        cy.apiPostCreatePerson('https://person-api.sandbox.tuumplatform.com/api/v2/persons', requestBody)
          .then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.be.undefined;
          });
      });
    });
});
