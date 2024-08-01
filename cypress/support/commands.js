// Headers for Authentication endpoint
Cypress.Commands.add('apiPostCreateAuth', (url, body = {}) => {
    const headers = {
      'accept': 'application/json',
      'x-channel-code': 'SYSTEM',
      'x-tenant-code': 'MB',
      'Accept-Language': 'en',
      'Content-Type': 'application/json'
    };

    return cy.request({
      method: 'POST',
      url: url,
      body: body,
      headers: headers,
      failOnStatusCode: false
    });
});

Cypress.Commands.add('apiPostCreatePerson', (url, body = {}) => {
    const headers = {
      'Authorization': `Bearer ${Cypress.env('token')}`,
      'accept': 'application/json',
      'x-channel-code': 'SYSTEM',
      'x-tenant-code': 'MB',
      'Accept-Language': 'en',
      'Content-Type': 'application/json'
    };

    return cy.request({
      method: 'POST',
      url: url,
      body: body,
      headers: headers,
      failOnStatusCode: false
    });
});

Cypress.Commands.add('apiPostCreateAccount', (url, body = {}) => {
    const headers = {
      'Authorization': `Bearer ${Cypress.env('token')}`,
      'accept': '*/*',
      'x-channel-code': 'SYSTEM',
      'x-tenant-code': 'MB',
      'Accept-Language': 'en',
      'x-request-id': `${Cypress.env('x-request-id')}`,
      'Content-Type': 'application/json',
    };
    return cy.request({
      method: 'POST',
      url: url,
      body: body,
      headers: headers,
      failOnStatusCode: false
    });
});

Cypress.Commands.add('apiPostCreateAccountBalance', (url, body = {}) => {
    const headers = {
      'Authorization': `Bearer ${Cypress.env('token')}`,
      'accept': '*/*',
      'x-channel-code': 'SYSTEM',
      'x-tenant-code': 'MB',
      'Accept-Language': 'en',
      'x-request-id': `${Cypress.env('x-request-id')}`,
      'Content-Type': 'application/json',
    };
    return cy.request({
      method: 'POST',
      url: url,
      body: body,
      headers: headers,
      failOnStatusCode: false
    });
});

Cypress.Commands.add('apiPostCreateTransaction', (url, body = {}) => {
    const headers = {
      'Authorization': `Bearer ${Cypress.env('token')}`,
      'accept': '*/*',
      'x-channel-code': 'SYSTEM',
      'x-tenant-code': 'MB',
      'Accept-Language': 'en',
      'x-request-id': `${Cypress.env('x-request-id')}`,
      'Content-Type': 'application/json',
    };
    return cy.request({
      method: 'POST',
      url: url,
      body: body,
      headers: headers,
      failOnStatusCode: false
    });
});

Cypress.Commands.add('apiGetAccountBalances', () => {
    return {
      'accept': '*/*',
      'x-channel-code': 'SYSTEM',
      'x-tenant-code': 'MB',
      'Accept-Language': 'en'
    };
});
