/// <reference types="Cypress"/>

import 'cypress-xpath';

const { should } = require("chai");
const chai = require('chai');
import 'cypress-file-upload';


describe('realizar buscar de um produto', () => {
  it('deve buscar um produto com sucesso com SUCESSO', () => {
    cy.visit('https://advantageonlineshopping.com/#/version');

  });
})