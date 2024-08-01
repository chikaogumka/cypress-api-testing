describe('Get Account Balances API Test', () => {
    it('should retrieve account balances successfully and return 200', () => {
      const headers = cy.apiGetAccountBalances();

      cy.request({
        method: 'GET',
        //Assuming account id is ID-2000
        url: 'https://account-api.sandbox.tuumplatform.com/api/v1/accounts/ID-2000/balances?currencyCode=null',
        headers: headers})
        .then((response) => {
        cy.log(JSON.stringify(response.body));

        expect(response.status).to.eq(200);
        expect(response.body.data).to.have.property('balancesId');
        expect(response.body.balances).to.be.an('array');
      });
    });
    it('should not retrieve account balances when a bad request is sent', () => {
        const headers = cy.apiGetAccountBalances();

        cy.request({
          method: 'GET',
          //Assuming account id is ID-2000
          url: 'https://account-api.sandbox.tuumplatform.com/api/v1/accounts/ID-2000/balances?currencyCode=null',
          headers: headers})
          .then((response) => {
      
          cy.log(JSON.stringify(response.body));
    
          expect(response.status).to.eq(200);
    
          expect(response.body.data).to.have.property('balancesId');
          expect(response.body.balances).to.be.an('array');
        });
    });
});
