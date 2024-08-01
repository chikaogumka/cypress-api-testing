describe('Create transaction api test', () => {
    it('should create a transactions successfully and return 200 status', () => {
      cy.fixture('postCreateTransaction.json').then((requestBody) => {

        cy.apiPostCreateTransaction('https://account-api.sandbox.tuumplatform.com/api/v5/accounts/ID-1000/transactions', requestBody)
          .then((response) => {
            expect(response.status).to.eq(200);
          })
      });
    });
    it('should fail to create transactions when wrong credentials are sent', () => {
      cy.fixture('random.json').then((requestBody) => {

        cy.apiPostCreateTransaction('https://account-api.sandbox.tuumplatform.com/api/v5/accounts/ID-1000/transactions', requestBody)
          .then((response) => {
            expect(response.status).to.eq(401);
            expect(response.body).to.be.undefined
          })
      });
    });
});
