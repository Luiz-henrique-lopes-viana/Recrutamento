/// <reference types="Cypress"/>

Cypress.Commands.add('criarConta', (nome, email, senha) => {
    cy.visit('https://advantageonlineshopping.com/#/');
    cy.get('#hrefUserIcon').click();
    cy.get('.create-new-account').click();
    cy.wait(2000)
    cy.get(':nth-child(2) > [a-hint="Username"] > .inputContainer > label').type(nome);
    cy.wait(3000)
    cy.get('[sec-name="userEmail"] > .inputContainer > label').type(email);
    cy.get(':nth-child(3) > [a-hint="Password"] > .inputContainer > label').type(senha);
    cy.get('[a-hint="Confirm password"] > .inputContainer > label').type(senha);
    cy.get('[sec-name="userFirstName"] > .inputContainer > label').type('Teste123456');
    cy.get('[sec-name="userLastName"] > .inputContainer > label').type('Teste123456');
    cy.get(':nth-child(2) > :nth-child(3) > .ng-isolate-scope > .inputContainer > label').type('12121212');
    cy.get('[sec-name="userCountry"] > .inputContainer > .ng-pristine').select('Brazil');
    cy.get('[sec-name="userCity"] > .inputContainer > label').type('São Paulo');
    cy.get('[sec-name="userAdress"] > .inputContainer > label').type('Rua teste');
    cy.get('[sec-name="userState"] > .inputContainer > label').type('SP');
    cy.get('#formCover > :nth-child(3) > :nth-child(4) > .ng-isolate-scope > .inputContainer > label').type('12345678');
    cy.get('[sec-name="registrationAgreement"] > .inputContainer > .ng-valid').click();
    cy.get('#register_btn').click();
});