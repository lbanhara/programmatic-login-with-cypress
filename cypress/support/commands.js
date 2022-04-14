
Cypress.Commands.add('loginViaAPI', (
  email = Cypress.env('userEmail'),
  password = Cypress.env('userPassword')
) => {
  cy.request('POST', `${Cypress.env('apiUrl')}/home`, {
    username: email,
    password,
  }).then((response) => {
    console.log(response)
    cy.setCookie('sessionId', response.body.sessionId)
    cy.setCookie('userId', response.body.userId)
    cy.setCookie('userName', response.body.userName)
    //cy.visit('/#!/main')
  })
})

Cypress.Commands.add('loginViaGUI', 
   (email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')) => {
  
    cy.visit('/')
    cy.get('#username').type(email)
    cy.get('#password').type(password, { log: false })
    cy.contains('button', 'Acessar').click()
  })


  Cypress.Commands.add('login', (username, password) => {
    cy.visit(`${Cypress.env('apiUrl')}/Autenticacao/Ldap`)
    cy.get('#username').type(username)
    cy.get('#password').type(password)
    cy.contains('button', 'Acessar').click()
    cy.url().should('contain', '/home')
  })