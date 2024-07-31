/// <reference types="Cypress"/>

import 'cypress-xpath';

const { should } = require("chai");
const chai = require('chai');
import 'cypress-file-upload';


describe('realizar buscar de um produto com sucesso', () => {

  it('deve buscar um produto com sucesso com SUCESSO', () => {
    //Dado que ja esteja logado com conta no site dvatageDEMO
    cy.visit('https://advantageonlineshopping.com/#/');
    // E pesquisei  em "Search"por um produto específico que exista no site
    cy.get('#mobileSearch > .roboto-medium').type('BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES')
    ///Quando selecionar  na lupa superior esquerda
    cy.get('#mobileSearch > #menuSearch').click();
    //Então o produto é encontrado com SUCESSO
    cy.contains('BEATS STUDIO 2 OVER-EAR MATTE BLACK HEADPHONES').should('be.visible');


  });
})

describe('realizar busca de um produto sem sucesso', () => {

  it('deve falhar ao buscar um produto inexistente', () => {
    // Dado que loguei com conta no site dvatageDEMO
    cy.visit('https://advantageonlineshopping.com/#/');
    // E pesquisei  em "Search"por um produto específico NÃO  exista no site
    cy.get('#mobileSearch > .roboto-medium').type('Mouse-pad')
    ///Quando selecionar  na lupa superior esquerda
    cy.get('#mobileSearch > #menuSearch').click();
    ///Então irá apresentar a mensagem "No results for "Mouse-pad""
    cy.get('.noProducts > .ng-binding').should('be.visible').contains('No results for "Mouse-pad"')

  });
})
