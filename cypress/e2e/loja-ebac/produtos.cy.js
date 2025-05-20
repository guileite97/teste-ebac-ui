///<reference types="cypress"/>
import { faker } from '@faker-js/faker';
import produtosPage from '../../support/page-objects/produtos.page';

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    produtosPage.visitarUrl()
});

    it('Deve selecionar um produto da lista', () => {
        produtosPage.buscarProdutoLista('Aether Gym Pant')
    });
    it('Deve selecionar o terceiro produto da lista', () => {
        cy.get('.product-block')
            .eq(3)
            .click()
    });
    it('Deve selecionar o último produto da lista', () => {
        cy.get('.product-block')
            .last()
            .click()
    });
    it('Deve selecionar o primeiro produto da lista', () => {
        cy.get('.product-block')
            .first()
            .click()
    });

    it('Deve buscar um produto com sucesso', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar a página do produto', () => {
        produtosPage.visitarProduto('Aero Daily Fitness Tee')
        cy.get('.product_title').should('contain', 'Aero Daily Fitness Tee')
    })

    it('Deve adicionar o produto ao carrinho', () => {
        let qtd = 2
        produtosPage.buscarProduto('Cassius Sparring Tank')
        produtosPage.addProdutoCarrinho('M', 'Blue', qtd)
        cy.get('.woocommerce-message').should('contain', qtd + ' × “Cassius Sparring Tank” foram adicionados no seu carrinho.')
    })

    it('Deve adicionar o produto ao carrinho buscando da massa de dados', () => {
        cy.fixture('produtos').then(dados => {
        produtosPage.buscarProduto(dados[2].nomeProduto)
        produtosPage.addProdutoCarrinho(
            dados[2].tamanho, 
            dados[2].cor, 
            dados[2].quantidade)
        cy.get('.woocommerce-message').should('contain', dados[2].nomeProduto)
        })
        
    })
});