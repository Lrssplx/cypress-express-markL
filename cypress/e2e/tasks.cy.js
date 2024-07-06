describe('tasks', () => {
  let testData;

  before(() => {
    cy.fixture('tasks').then((t) => {
      testData = t;
    });
  });

  beforeEach(() => {
    cy.viewport(1920, 1080);
  });
  context('cadastro', () => {
    //suite de teste
    it('deve cadastrar nova task', () => {
      //cenario de teste

      const taskname = 'Jogar lol';

      cy.deletetask(taskname);

      cy.createtask(taskname);

      cy.get('main div p').contains(taskname).should('be.visible');
      //cy.get('main div p').should('be.visible') // garante que está visivel
      //.should('have.text', 'Jogar lol') // verificar se é o texto esperado
    });

    it('não deve permitir task duplicada', () => {
      const task = testData.dup;
      //Dado que
      cy.deletetask(task.name);

      cy.posttask(task);
      //Quando
      cy.createtask(task.name);
      //cy.get('.swal2-html-container').should('be.visible').should('have.text', 'Task already exists!')
      cy.contains('.swal2-html-container', 'Task already exists!').should(
        'be.visible'
      );
    });

    it('campo obrigatório', () => {
      cy.createtask();
      cy.isrequired();
    });
  });
});
