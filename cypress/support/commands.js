Cypress.Commands.add('createtask', (taskname = '') => {
  cy.visit('/');
  cy.get('input[placeholder = "Add a new Task"]').as('inputtask');
  if (taskname !== '') {
    cy.get('@inputtask') //busca o campo
      .type(taskname); // jogo o texto no campo
  }
  cy.contains('button', 'Create').click(); // compara onde tem button e clica
});

Cypress.Commands.add('deletetask', (taskname) => {
  cy.request({
    // faz requisiçao para excluir a tarefa via API
    url: Cypress.env('apiUrl') + '/helper/tasks ',
    method: 'DELETE',
    body: { name: taskname },
  }).then((Response) => {
    expect(Response.status).to.eq(204);
  });
});

Cypress.Commands.add('posttask', (task) => {
  cy.request({
    // faz requisiçao para excluir a tarefa via API
    url: Cypress.env('apiUrl') + '/tasks',
    method: 'POST',
    body: task,
  }).then((Response) => {
    expect(Response.status).to.eq(201);
  });
});

Cypress.Commands.add('isrequired', () => {
  cy.get('@inputtask')
    .invoke('prop', 'validationMessage') //validar texto que não está no html
    .should((text) => {
      expect('This is a required field').to.eq(text);
    });
});
