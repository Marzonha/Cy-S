 // plano de testes
describe('devfinance', () => {

    // seguir o floxo da aplicação
    // mapear os elementos
    // descrever as interações com cypress
    // adicionar as asserções(expect´s) que forem necessárias 

    // suite de testes
    

    // Entradas de valores
    it('cadastrar entradas', () => {

        cy.visit('https://dev-finance.netlify.app/');
        cy.get('#transaction .button')
        cy.get('#transaction .button').click();
        cy.get('#description').type('mercado');
        cy.get('[name=amount]').type('430');
        cy.get('[type=date]').type('2024-07-24');
        cy.get('button').contains('Salvar').click();
 
    });

    // Saídas de valores
    it.only('cadastrar saídas', () => {
        
        cy.visit('https://dev-finance.netlify.app/');
        cy.get('#transaction .button')
        cy.get('#transaction .button').click();
        cy.get('#description').type('imposto de importação');
        cy.get('[name=amount]').type('-250');
        cy.get('[type=date]').type('2024-07-24');
        cy.get('button').contains('Salvar').click();
        
    });

});