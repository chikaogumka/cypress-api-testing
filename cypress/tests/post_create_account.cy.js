describe('Create account api tests', () => {
    it('should create an account successfully, set accountid as env variable and return 200 status', () => {
      cy.fixture('postCreateAccount.json').then((requestBody) => {

        cy.apiPostCreateAuth('https://account-api.sandbox.tuumplatform.com/api/v4/persons/ID-1001/accounts', requestBody)
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('accountId');

            const accountId = response.body.data.accountId;
            Cypress.env('accountId', accountId);
          });
      });
    });
    it('should not create an account when a bad request is sent with invalid data', () => {

      cy.fixture('random.json').then((requestBody) => {
        cy.apiPostCreateAuth('https://account-api.sandbox.tuumplatform.com/api/v4/persons/ID-1001/accounts', requestBody)
          .then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.be.undefined
          });
      });
    });
});
