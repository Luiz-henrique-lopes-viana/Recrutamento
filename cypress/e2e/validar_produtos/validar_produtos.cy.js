/// <reference types="Cypress"/>

describe('Incluir Produto no carrinho', () => {
    it('deve adicionar um produto ao carrinho com sucesso', () => {
        // Dado que ja esteja logado com conta no site dvatageDEMO
        cy.visit('https://advantageonlineshopping.com/#/');

        //atalho para criar conta (ALTERAR O NOME QUANDO UTILIZAR)
       
        cy.criarConta('twaaas', 'email_teste@example.com', '*Tgs456*', '*Tgs456*', 'Usuario', '12121212', 'Brazil', 'São Paulo', 'Rua teste', 'SP', '12345678');
        // E seleciono categoria de item
        cy.get('#tabletsImg').click();
        
        // E valido o preço do produto
        cy.get(':nth-child(1) > :nth-child(5) > .productPrice').contains('$1,009.00 ');
        //valido o nome do produto
        cy.contains('HP ElitePad 1000 G2 Tablet').should('be.visible');
        
        // E seleciono o produto
        cy.get(':nth-child(1) > :nth-child(4) > .productName').click();

        //E encluo o tablet no carrinho
        cy.get('.fixedBtn > .roboto-medium').click();

        //E desejo selecionar item diferente
        cy.get('.pages > .ng-scope').click();
        cy.get('#miceImg').click();

                //E valido preço 
                cy.contains('9.99').should('be.visible');
    

        //E seleciono outro produto (mouse)
        cy.get(':nth-child(1) > :nth-child(4) > .productName').click();
    

        cy.wait(5000)
        //e adiciono ao carrinho 

        //valido o nome do produto
        cy.contains('HP USB 3 BUTTON OPTICAL MOUSE ').should('be.visible');

        cy.get('.fixedBtn > .roboto-medium').click();

        //Clico no carrinho
        cy.get('#shoppingCartLink').click();


        //valido se os dois itens foram inseridos com os preços corretos 
        cy.get(':nth-child(1) > :nth-child(6) > .price').contains('$9.99');
        cy.get(':nth-child(2) > :nth-child(6) > .price').contains('$1,009.00');
        cy.contains('$1,018.99').should('be.visible');

    });
});