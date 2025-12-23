/// <reference types="cypress" />



describe('ToDo Application', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  context('all DOMS elements exist', () => {
    it('should contain the title of the app', () => {
      cy.get('[data-test="app-title"]').contains('ToDo List Application using Express');
      cy.get('[data-test=input-todo-title').should('exist');
      cy.get('[data-test=input-todo-description').should('exist');
      cy.get('[data-test=form-submit-button').should('exist');
      cy.get('[data-test=todo-container').should('exist')
    })
  })




})
