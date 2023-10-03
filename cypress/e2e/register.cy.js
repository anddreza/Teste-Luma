import data from '../fixtures/register.json'
import RegisterPage from '../support/pages/RegisterPage'


describe('cadastrar novo usuário', () => {
	it.skip('deve poder cadastrar novo usuário', () => {
		const user = data.create.new_costumer
		RegisterPage.doLogin(user)

	})

	//deve clicar no botão sem preencher nenhum campo
	it('deve clicar no botão de Create and Account sem nenhum campo preenchido', () => {
		RegisterPage.go()
		RegisterPage.submit()
		cy.wait(3000)

		//DE FORMA AUTOMATIZADA APARECE OUTRA MENSAGEM DE TEXTO
		cy.get('div[class="page messages"]')
			.should('be.visible')
			.should('have.text', 'The password needs at least 8 characters. Create a new password and try again.')

	//MANUALMENTE ELE ESTÁ VALIDANDO DESSA FORMA: 

		/* cy.get('input[name="firstname"]')
			.should('be.visible')
			.should('have.text', 'This is a required field.')
		
		cy.get('input[id="lastname"]')
			.should('be.visible')
			.should('have.text', 'This is a required field.')

		cy.get('input[id="email_address"]')
			.should('be.visible')
			.should('have.text', 'This is a required field.')

		cy.get('input[id="password"]')
			.should('be.visible')
			.should('have.text', 'This is a required field.')
		
		cy.get('input[name="password_confirmation"]')
			.should('be.visible')
			.should('have.text', 'This is a required field.') */

	})

	//deve tentar cadastrar um usuário com uma senha abaixo de 8 digitos
	it('não deve cadastrar com senha abaixo de 8 digitos', () => {})
		RegisterPage.go()
		RegisterPage.fill(user)

	/*
	//deve tentar cadastrar um usuario com numero de 1 a 8 
	it('não deve cadastrar com senha 'weak' digitando de 1 a 8', () => {})
	
	//cadastrar com ABCDEFGHI
	it('não deve cadastrar com somente letras maiusculas', () => {})
	
	//cadastrar com abcdefghi
	it('não deve cadastrar com somente letras min', () => {})
	
	//cadastrar com !@#$%&*(
	it('não deve cadastrar inserindo somente simbolos', () => {}) */



	
}) 