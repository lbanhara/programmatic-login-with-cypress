it('successfully logs in via GUI', () => {
  cy.intercept('GET', `${Cypress.env('apiUrl')}/Autenticacao/Ldap`).as('getUserModels')
  cy.loginViaGUI()
  cy.wait('@getUserModels')

/ cy.get('ul[class$="navbar-right"]')
    .contains('Liana')
    .parent()
    .find('a[class="dropdown-toggle"]')
    .click()
 
  //busca todos os irmãos e busca o que tem img
  cy.get('li[class^="dropdown"]')
    .siblings()
    .children('a')
    .click()
    cy.wait(1000)

    //busca todos os irmãos e filtra
    cy.get('li[class^="dropdown"]')
    .siblings()
    .children()
    .filter('a')
    .click()
    cy.wait(1000)
  //cy.contains('a','Liana') 
})
