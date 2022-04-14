it('successfully logs in via GUI', () => {
  cy.intercept('GET', `${Cypress.env('apiUrl')}/Autenticacao/Ldap`).as('getUserModels')
  cy.loginViaGUI()
  cy.wait('@getUserModels')
  cy.contains('a','Liana') 
})
