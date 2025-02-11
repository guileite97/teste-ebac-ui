///<reference types="cypress"/>
import { faker } from '@faker-js/faker';

describe('Funcionalidade: Produtos', () => {

beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/')
});

    it('Deve selecionar um produto da lista', () => {
        cy.get('.product-block')
            .contains('Apollo Running Short')
            .click()
            cy.get('#tab-title-description > a').should('contain','Descrição')
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
});