describe('teste home', () => {
  it('web app deve estar on', () => {
    cy.visit('/')
    cy.title().should('eq', 'Gerencie suas tarefas com Mark L')
  })
})