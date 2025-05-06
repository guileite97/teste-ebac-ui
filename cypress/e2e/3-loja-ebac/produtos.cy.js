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

    it.only('Deve buscar um produto com sucesso', () => {
        let produto = 'Abominable Hoodie'
        produtosPage.buscarProduto(produto)
        cy.get('.product_title').should('contain', produto)
    })

    it('Deve visitar a página do produto', () => {
        
    })

    it('Deve adicionar o produto ao carrinho', () => {
        
    })
});