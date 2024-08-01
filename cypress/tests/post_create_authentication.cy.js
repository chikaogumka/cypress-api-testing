describe('Create authentication for user api test', () => {
    it('it should authenticate an employee, return a 200 status with valid data', () => {
      cy.fixture('postCreateAuthentication').then((requestBody) => {
        cy.apiPostCreateAuth('https://auth-api.sandbox.tuumplatform.com/api/v1/employees/authorise', requestBody)
          .then((response) => {

            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('token');

            const token = response.body.data.token;
            //set bearer token as environment variable for further authentication
            Cypress.env('bearerToken', token);
          });
      });
    });
    it('it should not allow authentication and return a 400 when an invalid authentication data is sent', () => {
      cy.fixture('random').then((requestBody) => {
        cy.apiPostCreateAuth('https://auth-api.sandbox.tuumplatform.com/api/v1/employees/authorise', requestBody)
          .then((response) => {

            expect(response.status).to.eq(400);
            expect(response.body).to.have.property('validationErrors');
            expect(response.body.validationErrors).to.be.an('array').that.is.not.empty;
          });
      });
    });
});
