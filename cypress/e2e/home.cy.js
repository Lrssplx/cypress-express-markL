describe('teste home', () => {
  it('web app deve estar on', () => {
    cy.visit('http://localhost:3000/')
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})