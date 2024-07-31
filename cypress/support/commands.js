Cypress.Commands.add('criarconta', () => {

	cy.visit('https://advantageonlineshopping.com/#/register');
	cy.get('#form > .sec-view > .sec-view > .inputContainer > #username').type('usuario_teste');
	cy.get('#form > .sec-view > .sec-view > .inputContainer > #email').type('email_teste@example.com');
	cy.get('#form > .sec-view > .sec-view > .inputContainer > #password').type('senha_teste');
	cy.get('#form > .sec-view > .sec-view > .inputContainer > #confirm_password').type('senha_teste');
	cy.get('#form > .sec-view > .sec-view > .inputContainer > #register_btnundefined').click();
});