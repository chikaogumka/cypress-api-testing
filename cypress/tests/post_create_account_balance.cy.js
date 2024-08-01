describe('Create Account Balance API Test', () => {
    it('should create account balance successfully and return 200 status', () => {
      cy.fixture('postCreateAccountBalance.json').then((requestBody) => {

        cy.apiPostCreateAccountBalance('https://account-api.sandbox.tuumplatform.com/api/v1/accounts/:accountId/balances', requestBody)
          .then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body.data).to.have.property('balanceId');
          });
      });
    });
    it('should not create account balance when wrong data is sent', () => {
      cy.fixture('random.json').then((requestBody) => {

        cy.apiPostCreateAccountBalance('https://account-api.sandbox.tuumplatform.com/api/v1/accounts/:accountId/balances', requestBody)
          .then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.be.undefined;
          });
      });
    });
});
