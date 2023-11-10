/// <reference types="cypress" />

describe('Environment Varibles', () => {

  // beforeEach(() => {
  // cy.visit(Cypress.env('baseUrl'))//cy.visit irá visitar a baseUrl dentro do env
  // });
  // it('Cypress.json', () => {
  // cy.url().should('eq', 'http://localhost/') //Teste para ver se a baseUrl é a mesma do localHost
  // });

  before(() => {
    cy.fixture(`${Cypress.env('MY_ENV')}/data.json`).then(data => {
      cy.log(data)
    })
  })

  beforeEach(() => {
    cy.visit(Cypress.env('HOST'))
  });

  it('Cypress.json', () => {
    cy.url().should('eq', Cypress.env('HOST'))
  });

  it('Config Test Env', {
    env: {
      myEnv: 'Local'
    }
  }, () => {
    cy.log(Cypress.env('myEnv'))
  })
});