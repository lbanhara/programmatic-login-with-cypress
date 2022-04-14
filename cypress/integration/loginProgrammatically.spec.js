it('successfully logs in programmatically', () => {
  cy.intercept('GET', `${Cypress.env('apiUrl')}/Autenticacao/Ldap`).as('getUserModels')

  cy.loginViaAPI()
  cy.wait('@getUserModels')
  cy.contains('a','Liana') 
})
