/// <reference types="cypress" />

describe('Testes para a funcionalidade completa de contatos', () => {
    beforeEach(() => {
        cy.visit('https://agenda-de-contatos-kappa-virid.vercel.app/')
    })
    it('Deve procurar os contatos renderizados - Pesquisa', () => {
        // Procurando por Juliana
        cy.get('input[type="text"]').clear().type('Juliana Silva')
        cy.contains('Juliana Silva').should('exist');
        cy.contains('Rafaela Souza').should('not.exist');
        cy.contains('Joilton Santos').should('not.exist');
        
        // Procurando por Rafaela
        cy.get('input[type="text"]').clear().type('Rafaela Souza')
        cy.contains('Rafaela Souza').should('exist')
        cy.contains('Juliana Silva').should('not.exist');
        cy.contains('Joilton Santos').should('not.exist');
        
        // Procurando por Joilton
        cy.get('input[type="text"]').clear().type('Joilton Santos')
        cy.contains('Joilton Santos').should('exist')
        cy.contains('Juliana Silva').should('not.exist');
        cy.contains('Rafaela Souza').should('not.exist');

    })
    it('Deve editar/alterar um contato - Alteração', () => {
        cy.get(':nth-child(1) > .sc-jUkaYT > .sc-kXOizl > .cyhBwM').first().click()
        cy.get('[value="Juliana Silva"]').clear().type('Bruna Silva')
        cy.get('[type="email"]').clear().type('brunasilva@gmail.com')
        cy.get('[value="(21) 99999-999"]').clear().type('(21) 97594-7654')
        cy.get('.eNlCRs').click()
    })
    it('Deve remover um contato - Remoção', () => {
        cy.get(':nth-child(2) > .sc-jUkaYT > .sc-kXOizl > .clfSzw').click()
    })
})