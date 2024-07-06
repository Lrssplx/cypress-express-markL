

 


describe('tasks', ()=> { //suite de teste
    it('deve cadastrar nova task', ()=>{ //cenario de teste


        cy.request({ // faz requisiçao para excluir a tarefa via API
            url: 'http://localhost:3333/helper/tasks/ ',
            method: 'DELETE',
            body: {name: 'Jogar lol'}
        }).then(Response =>{
            expect(Response.status).to.eq(204)
        })



        cy.visit('http://localhost:3000/')
        cy.get('input[placeholder = "Add a new Task"]') //busca o campo
        .type('Jogar lol' ) // jogo o texto no campo

        cy.contains('button', 'Create').click() // compara onde tem button e clica

        cy.get('main div p').contains('Jogar lol')
        .should('be.visible')
        //cy.get('main div p').should('be.visible') // garante que está visivel
        //.should('have.text', 'Jogar lol') // verificar se é o texto esperado
    })
})