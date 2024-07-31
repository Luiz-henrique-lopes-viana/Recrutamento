/// <reference types="Cypress"/>

describe('Incluir Produto no carrinho', () => {
    it('deve adicionar um produto ao carrinho com sucesso', () => {
        // Dado que ja esteja logado com conta no site dvatageDEMO
        cy.visit('https://advantageonlineshopping.com/#/');
        //atalho para criar conta (ALTERAR O NOME QUANDO UTILIZAR)
        cy.criarConta('testeluizaqa', 'watew97401@maxturns.com', '*Tgs456*', '*Tgs456*', 'Usuario', '12121212', 'Brazil', 'São Paulo', 'Rua teste', 'SP', '12345678');
        // E seleciono categoria de item
        cy.get('#tabletsImg').click();
        
        // E valido o preço do produto
        cy.get(':nth-child(1) > :nth-child(5) > .productPrice').contains('$1,009.00 ');
        
        // E seleciono o produto
        cy.get(':nth-child(1) > :nth-child(4) > .productName').click();

        // E adiciono a quantidade do produto (2)
        cy.get('.plus').click();

        //clico em adicionar ao carrinho
        cy.get('.fixedBtn > .roboto-medium').click();
        
        // Então clico no carrinho para validar a compra
        cy.get('#shoppingCartLink').click();
        
        // E valido se os itens foram foram adicionados corretamente
        cy.get('#shoppingCartLink > .cart').contains('2');
        
    });
});