describe('User account page', () => {
   
    
    beforeEach(() => {

        cy.intercept('GET', `${Cypress.env('apiUrl')}/Autenticacao/Ldap`).as('getUserModels')
        cy.login(`${Cypress.env('userId')}`, `${Cypress.env('userPassword')}`)
        cy.wait('@getUserModels')

    })
  
    it.only('should actually be accessible', () => {   
        //cy.get('div[id="cardBody"] li:nth-child(2) a').click()
        cy.get('li[role="presentation"]').contains('a','Atividades em que você foi alocado').click()
        cy.get('div[class="alert alert-info"]').should('not.be.visible')
        cy.getCookie('ASP.NET_SessionId').as('cookie')
        cy.get('@cookie').should('have.a.property','name','ASP.NET_SessionId')
 
    })
  
    it('should have the correct page title', () => {   
      cy.get('ul[class="nav navbar-nav navbar-right"] .dropdown .dropdown-toggle' ).contains('a', 'Liana')
      cy.title().should('eq','NGDP | Painel de Comunicação')
    })
  })
  