/// <reference types="cypress" />

describe('Testes para adição de novos contatos a Lista de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-de-contatos-kappa-virid.vercel.app/')
    })
    it('Deve voltar à página inicial ao clicar no botão "Voltar à agenda"', () => {
        cy.contains('+').click({ force: true });
        cy.contains('Voltar a lista de contatos').click();
    })
    it('Deve levar o usuário para o formulário de adição de novos contatos e adicionar ', () => {
        cy.contains('+').click({ force: true });
        cy.get('[placeholder="Nome"]').type('Bruna Santiago')
        cy.get('[placeholder="Email"]').type('brunasant@gmail.com')
        cy.get('[placeholder="Celular"]').type('(21) 968321-8972')
        cy.get('[placeholder="URL da imagem"]').type('https://avatars.githubusercontent.com/u/99828311?v=4')
        cy.get('.sc-fuExOL > button').click()
    })
   
})