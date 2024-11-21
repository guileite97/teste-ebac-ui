///<reference types="cypress"/>

describe('Funcionalidade: Login', () => {

    beforeEach(() => {
        cy.visit('http://lojaebac.ebaconline.art.br/minha-conta/')
    });

    afterEach(() => {
        cy.screenshot()
    });

    it('Deve fazer login com sucesso',() => {
        cy.get('#username').type('guilherme.teste@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-MyAccount-content > :nth-child(2)').should('contain','Olá, guilherme.teste (não é guilherme.teste? Sair)')
    })

    it('Deve exibir uma mensagem de erro ao inserir usuário inválido', () => {
        cy.get('#username').type('guilherme.erro@teste.com.br')
        cy.get('#password').type('teste@123')
        cy.get('.woocommerce-form > .button').click()

        //cy.get('.woocommerce-error > li').should('contain','Endereço de e-mail desconhecido.')
        cy.get('.woocommerce-error > li').should('exist')
    });

    it('Deve inserir mensagem de erro ao inserir senha inválida', () => {
        cy.get('#username').type('guilherme.teste@teste.com.br')
        cy.get('#password').type('teste')
        cy.get('.woocommerce-form > .button').click()

        cy.get('.woocommerce-error > li').should('contain','Erro: A senha fornecida para o e-mail guilherme.teste@teste.com.br está incorreta. Perdeu a senha?')

    });
})